import { Get, Post } from "./api";

export const postLogin = (userData) => {
  return Post(userData, "/AuthResource");
};

export const postRegistration = (userData) => {
  return Post(userData, "/registration");
};