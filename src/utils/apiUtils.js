import axios from "axios";

const BASE_URL = "http://localhost:9001";
// const BASE_URL = "https://next-imdb-back-end.vercel.app";

const handleResponse = (response) => {
  if (response.status === 401 && response.data.redirect) {
    window.location.href = response.data.redirect;
  } else {
    return response.data;
  }
};

const handleErrorResponse = (error) => {
  if (error.response && error.response.status === 401 && error.response.data.redirect) {
    window.location.href = error.response.data.redirect;
  } else {
    throw error;
  }
};

const apiUtils = {
  get: async (endpoint, params = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, { 
        params,
        withCredentials: true
      });
      console.log("response from utils", response.data);
      return handleResponse(response);
    } catch (error) {
      console.error("GET request error:", error);
      handleErrorResponse(error);
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
        withCredentials: true
      });
      return handleResponse(response);
    } catch (error) {
      console.error("POST request error:", error);
      handleErrorResponse(error);
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${endpoint}`, data, {
        withCredentials: true
      });
      return handleResponse(response);
    } catch (error) {
      console.error("PUT request error:", error);
      handleErrorResponse(error);
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${endpoint}`, {
        withCredentials: true
      });
      return handleResponse(response);
    } catch (error) {
      console.error("DELETE request error:", error);
      handleErrorResponse(error);
    }
  },
};

export default apiUtils;