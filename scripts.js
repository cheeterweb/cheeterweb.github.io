function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'de,fr,es,pl,cs,sv',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');

    // Warten und auf Englisch setzen
    setTimeout(function () {
        translateToLanguage('en');
    }, 500);
}

// JavaScript to toggle the navigation menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});
