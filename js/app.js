function attachMenuListeners() {
  const addHeroButton = document.getElementById("addHero-button");
  const loadHeroesButton = document.getElementById("loadHeroes-button");
  const clearHeroesListButton = document.getElementById("clearHeroesList-button");
  const mainNav = document.getElementById("js-menu");
  const navBarToggle = document.getElementById("hamburger-toggle");

  addHeroButton.addEventListener("click", event => {
    event.preventDefault();

    const formModal = document.getElementById("formModal");
    showModal(formModal);
  });

  loadHeroesButton.addEventListener("click", loadMockHeroes);

  clearHeroesListButton.addEventListener("click", event => {
    event.preventDefault();
    clearStore();
  });

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  attachMenuListeners();
  renderHeroListView();
});