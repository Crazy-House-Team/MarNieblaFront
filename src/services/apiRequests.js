import axios from "axios";
let baseUrl = "http://localhost:8000/api/v1/";
let rootApiUrl = "http://localhost:8000/api/";

async function getAction(url, id = null) {
  let completeUrl = baseUrl + url;
  if (null !== id) {
    completeUrl += id;
  }
  const options = {
    method: "GET",
    url: completeUrl,
  };
  const result = await apiRequest(options);

  return result;
}

async function postAction(url, data) {
  const options = {
    method: "POST",
    url: baseUrl + url,
    data: data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const result = await apiRequest(options);

  return result;
}

async function deleteAction(url, id) {
  const options = {
    method: "DELETE",
    url: baseUrl + url + "/" + id,
  };
  const result = await apiRequest(options);

  return result;
}

async function putAction(url, id, data) {
  const options = {
    method: "PUT",
    url: baseUrl + url + "/" + id,
    data: data,
  };
  const result = await apiRequest(options);

  return result;
}

async function loginAction(data) {
  const options = {
    method: "POST",
    url: rootApiUrl + "login",
    data: data,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json, multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const result = await apiRequest(options);

  return result;
}

async function registerAction(data) {
  const options = {
    method: "POST",
    url: rootApiUrl + "register",
    data: data,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };
  const result = await apiRequest(options);

  return result;
}


async function apiRequest(options) {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getAction, putAction, postAction, deleteAction, loginAction, registerAction };
