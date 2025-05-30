import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Ти можеш вказати тут базовий URL для своїх API роутів
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});
