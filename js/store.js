var heroesList = [];

function prepareCreateHeroData (heroForm) {
    return {
        name: heroForm.name.value,
        price: heroForm.price.value,
        img: heroForm.photo.value,
        desc: 'desc'
    };
}

function addHero (hero) {
    heroesList.push(hero);
    
    saveToLocalStorage();
}

function removeHero(heroName) {
    var newHeroesList = [];

    heroesList.forEach(function (hero) {
        if (heroName !== hero.name) {
            newHeroesList.push(hero);
        }
    });

    heroesList = newHeroesList;

    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}

function loadMockHeroes () {
    var mockHeroesList = [
        {
            name: "Harley",
            price: 150,
            img: 'harley.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Wonder Woman",
            price: 800,
            img: 'wonderwoman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Batman",
            price: 450,
            img: 'batman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Ledman",
            price: 4000,
            img: 'ledman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Neptun",
            price: 9000,
            img: 'neptun.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Spiderman",
            price: 6000,
            img: 'spiderman.jpg',
            desc: 'lorem ipsum.....'
        }
    ];

    heroesList = heroesList.concat(mockHeroesList);
    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}

function clearHeroesList () {
    heroesList = [];
    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}
// local storage functions
function saveToLocalStorage () {
    var listToObject = { data: heroesList },
        heroesString = JSON.stringify(listToObject);

    localStorage.setItem('heroesList', heroesString)
}

function loadFromLocalStorage () {
    var localStorageData = localStorage.getItem('heroesList'),
        parsedLocalStorageData;

    if (!localStorageData) {
        parsedLocalStorageData = {data: []}
    } else {
        parsedLocalStorageData = JSON.parse(localStorageData);
    }

    heroesList = parsedLocalStorageData.data;
}