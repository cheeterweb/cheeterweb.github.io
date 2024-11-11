function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'de,fr,es,pl,cs,sv',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
    
    // Warten und auf Englisch setzen
    setTimeout(function() {
        translateToLanguage('en');
    }, 500);
}

