function showHeroCreateView (event) {
    event.preventDefault();

    clearRegions();

    var addHeroRegion = document.getElementById('addHeroForm-region'),
        addHeroFormTemplate = ''
        + '<div class="form-display">'
        + '    <form id="heroCreate-form">'
        + '    <h1>Dodaj Herosa</h1>'
        + '<div class="form-field">'
        + '    <input type="text" name="name" />'
        + '    <label class="label-name" for="name">Nazwa Bohatera</label><i class="bar"></i>'
        + '</div>'
        + '<div class="form-field">'
        + '    <input type="text" name="photo" />'
        + '    <label class="label-name" for="photo">Adres/nazwa zdjęcia</label><i class="bar"></i>'
        + '</div>'
        + '<div class="form-field">'
        + '    <input type="text" name="price" />'
        + '    <label class="label-name" for="price">Cena wynajmu /h</label><i class="bar"></i>'
        + '</div>'
        + '<div class="form-field">'
        + '    <textarea></textarea>'
        + '    <label class="label-name" for="textarea">Opis Bohatera</label><i class="bar"></i>'
        + '</div>'
        + '</form>'
        + '<div class="submission-field">'
        + '    <button class="button" type="button" id="submitHero-button"><span>Submit</span></button>'
        + '</div>'
        + '</div>',
        HTMLelement = document.createElement('div');

    HTMLelement.innerHTML = addHeroFormTemplate;
    addHeroRegion.appendChild(HTMLelement);

    // after show actions

    var submitHeroButton = document.getElementById('submitHero-button');

    submitHeroButton.addEventListener('click', function (event) {
        event.preventDefault();

        var heroForm = document.forms['heroCreate-form'],
            heroData = prepareCreateHeroData(heroForm);

        addHero(heroData);
        clearRegions();
        showHeroListView();
    })
}