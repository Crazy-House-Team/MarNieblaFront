import axios from "axios";

async function getAll(entity) {
  const options = {
    method: "GET",
    url: `http://localhost:3000/${entity}`,
  };
  const result = await apiRequest(options);

  return result;
}

async function getById(entity, id) {
  const options = {
    method: "GET",
    url: `http://localhost:3000/${entity}/${id}`,
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

export { getAll, getById };
