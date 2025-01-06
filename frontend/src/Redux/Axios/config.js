import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:30001/" });

export const apiRequestGET = async (api) => {
  return axiosInstance.get(api);
};

export const apiRequestPOST = async (api , formData) =>{
  return axiosInstance.post(api , formData)
}

export const apiRequestPUT = async (api ,formData) =>{
  return axiosInstance.put(api , formData)
}

export const apiRequestDELETE = async (api) =>{
  return axiosInstance.delete(api)
}
