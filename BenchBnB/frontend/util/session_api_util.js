export const signup = (data) => {
  return $.ajax({
  	method: "POST",
    url: '/api/users/',
    data: data
  });
};

export const login = (userInfo) => {
  return $.ajax({
  	method: "POST",
    url: '/api/session/',
    data: userInfo
  });
};

export const logout = () => {
  return $.ajax({
  	method: "DELETE",
    url: '/api/session/'
  });
};
