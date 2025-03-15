import { $authHost, $host } from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (email, pwd) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    pwd,
    role: "USER",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, pwd) => {
  const { data } = await $host.post("api/user/login", { email, pwd });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
