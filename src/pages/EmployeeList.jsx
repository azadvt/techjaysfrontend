import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import PropTypes from "prop-types";
import { getEmployees } from "../api";
import Fuse from 'fuse.js';

function EmployeeList(props) {
  const { handleLogout, isLoggedIn } = props;
  const [employeeData, setEmployeeData] = useState([]);
const [filteredItems,setFilteredItems] = useState([])
  useEffect(() => {
    getEmployees().then((response) => {
      setEmployeeData(response?.data);
    });
  }, []);

  const options = {
    keys: ['name', 'email','phone','website'],
    threshold: 0.3,
  };
  
  const fuse = new Fuse(employeeData, options);
  
  const search = (query) => {
    const results = fuse.search(query);
    setFilteredItems(results.map((result) => result.item));
  };
  

  return (
    <Layout handleLogout={handleLogout} isLoggedIn={isLoggedIn}>
      <div className="flex">
        <div className="m-auto w-full">
          <div className="text-center">
            {" "}
            <input
              type="text"
              placeholder="search"
              className="p-3 border-slate-900" onChange={(e) => search(e.target.value)}
            />
          </div>{" "}
          { filteredItems.length > 0 ?
          filteredItems?.map((elem, index) => {
            return (
              <ul key={index} className="bg-gray-400 p-10 m-1">
                <li>Name: {elem.name}</li>
                <li>Email: {elem.email}</li>
                <li>Phone: {elem.phone}</li>
                <li>Website:{elem.website}</li>

              </ul>
            );
          })
          :employeeData?.map((elem, index) => {
            return (
              <ul key={index} className="bg-gray-400 p-10 m-1">
                <li>Name: {elem.name}</li>
                <li>Email: {elem.email}</li>
                <li>Phone: {elem.phone}</li>
                <li>Website:{elem.website}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default EmployeeList;

EmployeeList.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
