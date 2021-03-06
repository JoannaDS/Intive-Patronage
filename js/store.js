const defaultHeroesList = {
  "hero-1": {
    name: "Harley",
    price: 150,
    img: "harley.jpg",
    desc: "lorem ipsum.....",
    isAvailable: true
  },
  "hero-2": {
    name: "Wonder Woman",
    price: 800,
    img: "wonderwoman.jpg",
    desc: "lorem ipsum.....",
    isAvailable: true
  },
  "hero-3": {
    name: "Batman",
    price: 450,
    img: "batman.jpg",
    desc: "lorem ipsum.....",
    isAvailable: true
  },
  "hero-4": {
    name: "Ledman",
    price: 4000,
    img: "ledman.jpg",
    desc: "lorem ipsum.....",
    isAvailable: false
  },
  "hero-5": {
    name: "Neptun",
    price: 9000,
    img: "neptun.jpg",
    desc: "lorem ipsum.....",
    isAvailable: true
  },
  "hero-6": {
    name: "Spiderman",
    price: 6000,
    img: "spiderman.jpg",
    desc: "lorem ipsum.....",
    isAvailable: false
  }
};

window.appStore = {
  heroesList: defaultHeroesList,
  basketItems: {},
  basketPrice: 0
};

const prepareCreateHeroData = heroForm => ({
  name: heroForm.name.value,
  price: heroForm.price.value,
  img: heroForm.photo.value,
  desc: "desc",
  isAvailable: heroForm.isavailable.checked
});

const addHero = hero => {
  const heroIndex = Object.keys(window.appStore.heroesList).length + 1;
  window.appStore.heroesList[`hero-${heroIndex}`] = hero;
};

const loadMockHeroes = event => {
  event.preventDefault();
  window.appStore.heroesList = defaultHeroesList;
  renderHeroListView();
};

const clearStore = () => {
  clearHeroesList();
  clearBasket();
};