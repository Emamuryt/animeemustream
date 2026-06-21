const BASE_URL = "https://www.anikotoapi.site";

async function getRecentAnime(page = 1) {
  const res = await fetch(`${BASE_URL}/recent-anime?page=${page}&per_page=20`);
  return await res.json();
}

async function getAnimeSeries(id) {
  const res = await fetch(`${BASE_URL}/series/${id}`);
  return await res.json();
}