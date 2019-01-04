const heroesListRegion = document.getElementById("heroesList-region");

function renderHeroListView() {
  heroesListRegion.innerHTML = "";

  const htmlToRender = Object.keys(window.appStore.heroesList)
    .map(id => {
      const hero = window.appStore.heroesList[id];
      const template = `
      <div class="hero" data-id="${id}">
        <div>
          <img src="images/heroes/${hero.img}" alt="${hero.name}">
        </div>
        <div>
          <span>${hero.name}</span>
          <span>${hero.price} zł/h</span>
        </div>
      </div>`;

      return template;
    })
    .join("");

  heroesListRegion.innerHTML = htmlToRender;
  attachHeroListeners();
}

function attachHeroListeners() {
  const heroes = heroesListRegion.querySelectorAll(".hero");
  const heroModal = document.getElementById("heroModal");

  Array.from(heroes).map(hero => {
    hero.addEventListener("click", () => {
      showHeroModal(heroModal, hero.dataset.id);
    });
  });
}

function clearHeroesList() {
  window.appStore.heroesList = {};
  heroesListRegion.innerHTML = "";
}
