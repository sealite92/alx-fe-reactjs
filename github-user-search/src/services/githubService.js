// import axios from "axios";

// const BASE_URL = "https://api.github.com";

// const github = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
//   },
// });

// // ✅ This function uses the /search/users endpoint
// export async function searchUsers({ username, location, minRepos }) {
//   let query = "";

//   if (username) query += `${username} in:login `;
//   if (location) query += `location:${location} `;
//   if (minRepos) query += `repos:>=${minRepos}`;

//   const response = await github.get(
//     `/search/users?q=${encodeURIComponent(query)}`
//   );
//   return response.data;
// }

import axios from "axios";

const BASE_URL = "https://api.github.com";

const github = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

// Advanced search function using the GitHub Search API
export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  // The actual API call using /search/users?q={query}
  const response = await github.get("https://api.github.com/search/users?q");

  return response.data;
}
