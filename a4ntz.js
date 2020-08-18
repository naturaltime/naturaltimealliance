(function () {

    function handleLanguageChange (event) {
        // Get the new language from GUI.
        let newLanguage = event.target.value;

        // Split the browser location path into an array.
        let pathArray = location.pathname.split('/');

        // Change the penultimate array item to the new language.
        pathArray[pathArray.length - 2] = newLanguage;

        // Re-join the array into a new path.
        let newPath = pathArray.join('/');

        // Assign the browser location to the new path.
        console.log('Navigating to new path:', newPath);
        location.assign(newPath);
    }

    function initGui () {
        // Get a DOM reference to the GUI.
        let languageGui = document.getElementById('language-gui');

        // Add an event listener.
        languageGui.addEventListener('change', handleLanguageChange);
    }

    // When DOM is loaded, init the GUI.
    if (document.readyState != 'loading') {
        initGui();
    } else {
        document.addEventListener('DOMContentLoaded', initGui);
    }

})();
