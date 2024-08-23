


import axios from "axios";

// axios is third party lib which used to communicate with server. It will use GET, POST, DELETE, PUT, UPDATE.
// axios will not require to stringfy the request. It will convert requrest into strigify automatically.
// Generate promises. It wiil give either resolve or reject state.

// To create axios api with headers
const getInitialized = (
  contentType,
  token,
  params,
  responseType
) => {
  let api = axios.create({
    params: params ? params : undefined,
    responseType: responseType ? responseType : undefined,
    headers: {
      "Content-Type": contentType ? contentType : "application/json",
      "Access-Control-Allow-Origin": "*",
      "Bearer-Token": token ? token : "",
    },
  });
  return api;
};

// GET request
export const getRequest = (url, contentType) => {
  return getInitialized(contentType)
    .get(url, contentType)
    .catch((error) => {
      console.error(error);
    });
};

// GET request by ID
export const getRequestById = (url, id, contentType) => {
  const updatedUrl = `${url}/${id}`;
  return getInitialized(contentType)
    .get(updatedUrl, contentType)
    .catch((error) => {
      console.error(error);
    });
};

export const getRequestByParams = (
  url,
  id,
  contentType,
  params
) => {
  const updatedUrl = `${url}/${id}`;
  return getInitialized(contentType, "", params)
    .get(updatedUrl, contentType)
    .catch((error) => {
      console.error(error);
    });
};



// POST request
export const postRequestMethod = (url, contentType, data) => {
  return getInitialized(contentType)
    .post(url, data)
    .catch((error) => {
      console.error(error);
    });
};

// PUT request by ID
export const updateRequest = (
  url,
  id,
  data,
  contentType
) => {
  const updatedUrl = `${url}/${id}`; // Append the ID to the URL
  return getInitialized(contentType)
    .put(updatedUrl, data, contentType) // Use put() for HTTP PUT requests or patch() for HTTP PATCH requests
    .catch((error) => {
      console.error(error);
    });
};

// DELETE request by ID
export const deleteRequest = (url, id, contentType) => {
  const deleteUrl = `${url}/${id}`; // Append the ID to the URL
  return getInitialized(contentType)
    .delete(deleteUrl, contentType)
    .catch((error) => {
      console.error(error);
    });
};
