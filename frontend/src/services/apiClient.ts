import axios from "axios";


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
  console.log(cookieValue)
  return cookieValue;
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  headers: {
    "X-CSRFToken": getCookie("csrftoken"),
    "Content-Type": "application/json",
  },

});