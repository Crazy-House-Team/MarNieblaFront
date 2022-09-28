import axios from "axios";
let baseUrl = "http://localhost:8000/api/v1/";

async function getAction(url) {
  const options = {
    method: "GET",
    url: baseUrl + url,
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

async function apiRequest(options) {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getAction, putAction, postAction, deleteAction };
