const showModal = modal => {
  modal.style.display = "block";
};

const hideModal = modal => {
  modal.style.display = "none";
};

showHeroModal = (modal, dataId) => {
  const modalContent = modal.querySelector(".modal-content");
  const heroData = window.appStore.heroesList[dataId];

  var formattedHtml = `
        <img  src="images/heroes/${heroData.img}">
        <p>Name: ${heroData.name}</p>
        <p>Price: ${heroData.price}</p>
        <p>Description: ${heroData.desc}</p>
        <button class="basket-button" type="button">Dodaj do koszyka</button>
        `;

  modalContent.innerHTML = formattedHtml;

  attachBasketButtonListener(modal, dataId);
  showModal(modal);
};

const attachBasketButtonListener = (modal, dataId) => {
  const button = modal.querySelector(".basket-button");

  button.addEventListener("click", () => {
    addToBasket(modal, dataId);
  });
};

const attachModalListeners = () => {
  const modals = document.querySelectorAll(".modal");

  Array.from(modals).map(modal => {
    const modalContainer = modal.querySelector(".modal-container");
    const modalCloseButton = modal.querySelector(".close");

    modalCloseButton.addEventListener("click", () => {
      hideModal(modal);
    });

    modal.addEventListener("click", event => {
      if (event.target !== modalContainer && !modalContainer.contains(event.target)) {
        hideModal(modal);
      }
    });
  });
};

const onModalFormSubmit = modal => {
  const heroFormElements = document.forms["heroCreate-form"];
  const heroFormObjValues = prepareCreateHeroData(heroFormElements);

  addHero(heroFormObjValues);
  renderHeroListView();
  hideModal(modal);
};

const attachHeroFormListeners = () => {
  const formModal = document.getElementById("formModal");
  const formSubmitButton = formModal.querySelector("#submitHero-button");

  formSubmitButton.addEventListener("click", event => {
    event.preventDefault();
    onModalFormSubmit(formModal);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  attachModalListeners();
  attachHeroFormListeners();
});
