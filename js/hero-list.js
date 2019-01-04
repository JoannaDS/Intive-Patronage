const heroesListRegion = document.getElementById("heroesList-region");

function renderHeroListView() {
  heroesListRegion.innerHTML = "";

  const htmlToRender = Object.keys(window.appStore.heroesList)
    .map(id => {
      const hero = window.appStore.heroesList[id];
      const template = `
      <div class="hero" data-id="${id}" data-available="${hero.isAvailable}">
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

  Array.from(heroes)
    .map(hero => {
      hero.addEventListener("click", () => {
        if (hero.dataset.available === 'true') {
          showHeroModal(heroModal, hero.dataset.id);
        } else {
          alert('Heros jest wypożyczony!')
        }
      });
    });
}

function clearHeroesList() {
  window.appStore.heroesList = {};
  heroesListRegion.innerHTML = "";
}