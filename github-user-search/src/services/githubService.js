// src/services/githubService.js
import axios from "axios";

// GitHub API base URL
const BASE_URL = "https://api.github.com/users";

// Create a configured axios instance
const github = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

// Function to fetch user data
export async function fetchUserData(username) {
  const response = await github.get(`/${username}`);
  return response.data;
}
