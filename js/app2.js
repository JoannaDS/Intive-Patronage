loadFromLocalStorage();

attachMenuListeners();
showHeroListView();


// helper functions

function clearRegions () {
    var regions = [
        'heroesList-region',
        'addHeroForm-region',
        'heroesRemove-region'
    ];

    regions.forEach(function (region) {
        var DOMelement = document.getElementById(region);
        DOMelement.innerHTML = '';
    })
}
