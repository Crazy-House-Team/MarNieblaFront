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
    body: data,
  };
  const result = await apiRequest(options);

  return result;
}

async function deleteAction(url) {
  const options = {
    method: "DELETE",
    url: baseUrl + url,
  };
  const result = await apiRequest(options);

  return result;
}

async function putAction(url) {
  const options = {
    method: "PUT",
    url: baseUrl + url,
  };
  const result = await apiRequest(options);

  return result;
}

async function patchAction(url) {
  const options = {
    method: "PATCH",
    url: baseUrl + url,
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

export { getAction, putAction, patchAction, postAction, deleteAction };
