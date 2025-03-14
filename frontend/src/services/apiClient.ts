import axios from "axios";

/**
 * Retrieves the value of a specified cookie by name.
 */
function getCookie(name:string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].split("=");
          if (cookie[0] === name) {
              cookieValue = decodeURIComponent(cookie[1]);
              break;
          }
      }
  }
  return cookieValue;
}

/** Create an Axios instance with default configuration */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
    withCredentials: true // Allow cookies
});

/** 
 * **Request Interceptor**  
 * - Automatically adds CSRF token to every request if available.  
 */
apiClient.interceptors.request.use(
  (config) => {
    const csrfToken = getCookie("csrftoken");
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);