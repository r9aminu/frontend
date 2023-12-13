import axios from "axios";

const api = axios.create({ 
  baseURL: "http://localhost:3000/api", 
  timeout: 30000 
});

export const fetchServices = async () => {
  return api.get("/services");
};

export const fetchCategories = async (serviceId) => {
  return api.get("/service-categories/" + serviceId);
};

export const fetchFilteredResources = async (serviceId, categories) => {
  const searchParams = new URLSearchParams();
  categories.forEach((categoryId) => searchParams.append("category", categoryId));
  const queryParam = categories && categories.length > 0 ? `?${searchParams.toString()}` : "";

  return api.get("/resources/" + serviceId + queryParam);
};
