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

function saveUserId(id) {
  localStorage.setItem("userId", id);
}

function removeUserId(id) {
  localStorage.removeItem("userId", id);
}
function getUserId() {
  return localStorage.getItem("userId");
}
export {
  checkIfUserIsAdmin,
  checkIfUserIsLoggedIn,
  saveAuthRole,
  saveAuthToken,
  removeAuthRole,
  removeAuthToken,
  getUserId,
  removeUserId,
  saveUserId,
};
