function saveAuthRole(role) {
  localStorage.setItem("authRole", role);
}

function saveAuthToken(token) {
  localStorage.setItem("authToken", token);
}

function removeAuthRole() {
  localStorage.removeItem("authRole");
}

function removeAuthToken() {
  localStorage.removeItem("authToken");
}

function checkIfUserIsAdmin() {
  return localStorage.getItem("authRole") == 1;
}

function checkIfUserIsLoggedIn() {
  return localStorage.getItem("authToken") !== null;
}

export {
  checkIfUserIsAdmin,
  checkIfUserIsLoggedIn,
  saveAuthRole,
  saveAuthToken,
  removeAuthRole,
  removeAuthToken,
};
