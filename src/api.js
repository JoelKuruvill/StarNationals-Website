/*
SN API Interface
Created: 2025-Mar-20
*/
import axios from "axios";
import bcrypt from "bcryptjs";

const baseURL = "http://localhost:3001";

/* DATE Toolset */
export const CurrentYearAD = () => {
  const date = new Date();
  return date.getFullYear();
}

/* JOB POSTINGS */
export const loadJobPostings = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/jobs`, id);
    return res.data;
  }
  catch (error) {
    return error;
  }
}

/* REGISTRATION */
export const createUser = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.userPassword, 10);

    const requestData = {
      ...data,
      userPassword: hashedPassword
    };

    const res = await axios.post(`${baseURL}/addUser`, requestData);
    return res.data;
  } 
  catch (error) {
    return error;
  }
};

/* LOGIN */
export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/login`, data);
    return res.data;
  } 
  catch (error) {
    return error;
  }
}
