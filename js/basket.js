const basketDisplay = document.getElementById("basket-region");
const basketDisplayContent = basketDisplay.querySelector(".basket-content");

const renderBasketView = () => {
  basketDisplayContent.innerHTML = "";

  const basketElementsCount = Object.keys(window.appStore.basketItems).length;


  if (basketElementsCount === 1) {
    basketDisplay.style.display = "block";
  }
  const htmlToRender = Object.keys(window.appStore.basketItems)
    .map(id => {
      const basketItem = window.appStore.basketItems[id];
      const template = `
      <div class="basket-item" data-id="${id}">
        <div>
          <img src="images/heroes/${basketItem.img}" alt="${basketItem.name}">
        </div>
        <div>
          <strong>${basketItem.name}</strong>
          <div>${basketItem.desc}</div>
        </div>
        <button class="delete-basket-button" data-id="${id}" type="button">Usuń z koszyka</button>
      </div>`;

      return template;
    })
    .join("");

  basketDisplayContent.innerHTML = htmlToRender;
  attachBasketListeners();
};

const attachBasketListeners = () => {
  const deleteButtons = basketDisplay.querySelectorAll(".delete-basket-button");

  Array.from(deleteButtons).map(button => {
    button.addEventListener("click", () => {
      removeFromBasket(button.dataset.id);
    });
  });
};

const addToBasket = (modal, dataId) => {
  const isAlreadyInBasket = Object.keys(window.appStore.basketItems).includes(dataId);

  if (!isAlreadyInBasket) {
    window.appStore.basketItems[dataId] = window.appStore.heroesList[dataId];
    window.appStore.basketPrice = parseInt(window.appStore.basketPrice) + parseInt(window.appStore.heroesList[dataId].price)

    renderBasketView();
    updateBasketPriceView();
  } else {
    alert("Masz już tego herosa w koszyku!");
  }

  hideModal(modal);
};

const removeFromBasket = dataId => {
  window.appStore.basketPrice = parseInt(window.appStore.basketPrice) - parseInt(appStore.heroesList[dataId].price);
  delete window.appStore.basketItems[dataId];

  const basketElementsCount = Object.keys(window.appStore.basketItems).length;


  if (basketElementsCount === 0) {
    basketDisplay.style.display = "none";
  }

  renderBasketView();
  updateBasketPriceView();
};

const clearBasket = () => {
  window.appStore.basketItems = {};
  window.appStore.basketPrice = 0;
  basketDisplay.innerHTML = "";
};

const updateBasketPriceView = () => {
  const basketTotal = basketDisplay.querySelector("#basket-total");
  basketTotal.innerHTML = window.appStore.basketPrice;
};