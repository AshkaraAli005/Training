import axios from "axios";

export const BaseURL = "http://192.168.26.130:5000";

export default axios.create({
  baseURL: BaseURL,
});

export const PrivateAxios = axios.create({
  baseURL: BaseURL,
});

async function refresh() {
  const refreshToken = JSON.parse(localStorage.getItem("refresh-token"));
  let config = {
    method: "get",
    url: `${BaseURL}/user/refresh`,
    headers: {
      Authorization: "Bearer" + refreshToken,
    },
  };
  let data;
  await axios.request(config).then((res) => {
    data = res.data["new Access"];
  });
  return data;
}

PrivateAxios.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${await refresh()}`;
  return config;
});
