import axios from "axios";
let baseUrl = "http://localhost:3000/"; //window.location.host;

function printUrl() {
  console.log(baseUrl);
}

async function getAction(url) {
  const options = {
    method: "GET",
    url: baseUrl + url,
  };
  const result = await apiRequest(options);

  return result;
}

async function postAction(url) {
  const options = {
    method: "POST",
    url: baseUrl + url,
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

export {
  getAction,
  putAction,
  patchAction,
  postAction,
  deleteAction,
  printUrl,
};
