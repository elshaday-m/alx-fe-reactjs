// src/services/githubService.js
import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  // headers: { Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` },
});

/**
 * Fetch users based on advanced search criteria
 * @param {Object} params - { username, location, minRepos }
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let queryParts = [];
  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  if (queryParts.length === 0) return [];

  const query = queryParts.join(" ");

  const response = await githubApi.get(
    `/search/users?q=${encodeURIComponent(query)}&per_page=20`
  );

  const users = response.data.items;

  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const res = await githubApi.get(`/users/${user.login}`);
      return res.data;
    })
  );

  return detailedUsers;
};
