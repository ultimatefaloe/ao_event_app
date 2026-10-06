import { useTokenStore } from "../stores/useToken.store";

export const backendFetch = async (endpoint, options = {}) => {
  const token = useTokenStore((s) => s.token);
  const api_url =
    import.meta.env.VITE_API_URL ||
    "https://event-api-service-3jtj.onrender.com/api/v1";

  if (!api_url) {
    throw new Error("Api url is not provided in env");
  }

  const full_endpoint = `${api_url}/${endpoint}`;
  const bear_token = `Bearer ${token}`;

  try {
    const response = await fetch(full_endpoint, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        // Authorizaton: bear_token,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data=  await response.json();
    console.log("data from backend fetch", data);
    return data;
  } catch (error) {
    console.error("Error proceesing request", error);
  }
};