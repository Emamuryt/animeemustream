async function loadAnime() {
  const container = document.getElementById("animeList");

  const data = await getRecentAnime();

  data.forEach(anime => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${anime.image}" />
      <h3>${anime.title}</h3>
      <button onclick="openAnime('${anime.id}')">Watch</button>
    `;

    container.appendChild(card);
  });
}

function openAnime(id) {
  localStorage.setItem("animeId", id);
  window.location.href = "anime.html";
}

loadAnime();