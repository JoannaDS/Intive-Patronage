function attachMenuListeners () {
    var addHeroButton = document.getElementById('addHero-button'),
        loadMockHeroesButton = document.getElementById('loadMockHeroes-button'),
        clearHeroesListButton = document.getElementById('clearHeroesList-button');
        

    addHeroButton.addEventListener('click', showHeroCreateView);
    loadMockHeroesButton.addEventListener('click', loadMockHeroes);
    clearHeroesListButton.addEventListener('click', clearHeroesList);
  
}