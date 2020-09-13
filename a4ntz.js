(function () {

    function addMap () {
        try {

            // Create map. Center on 45 N, 0 E/W. Zoom to 2.
            const map = L.map('map').setView([45, 0], 2);

            // Initialize map per Leaflet documentation: https://leafletjs.com/
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {

                // Attribution required per Leaflet user terms of service.
                attribution: 'Map Data &copy; <a href="//www.openstreetmap.org/" target="_blank">OpenStreetMap</a> Contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/" target="_blank">Mapbox</a>',

                // Style (color) of map. https://docs.mapbox.com/api/maps/#mapbox-styles
                id: 'mapbox/streets-v11',

                maxZoom: 10,
                minZoom: 1,
                tileSize: 512,
                zoomOffset: -1,
            }).addTo(map);

            // Prevent dragging map too far in any direction.
            map.setMaxBounds([
                [90, -210],
                [-90, 210]
            ]);

            // Create pin icon.
            const pin = L.icon({
                iconAnchor: [12, 36],
                iconSize: [24, 36],
                iconUrl: '../images/pin.png',
                popupAnchor: [0, -36],
            });

            // Create and markers to map.
            const ached = L.marker([48.8684, 2.0977], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'ached.png',
                memberName: 'Association Contre l’Heure d’Été Double',
                domain: 'heure-ete.net',
            }));
            const armh = L.marker([44.9334, 4.8924], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'armh.png',
                memberName: 'Association pour le Retour a l’Heure Méridienne',
                domain: 'lameridienne.over-blog.org',
            }));
            const bs = L.marker([55.6761, 12.5683], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'bs.png',
                memberName: 'B-Society',
                domain: 'b-society.org',
            }));
            const bt1 = L.marker([51.0504, 13.7373], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'bt.png',
                memberName: 'BetterTimes',
                domain: 'gobettertimes.org',
            }));
            const bt2 = L.marker([40.2033, -8.4103], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'bt.png',
                memberName: 'BetterTimes',
                domain: 'gobettertimes.org',
            }));
            const btui = L.marker([41.3851, 2.1734], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'btui.png',
                memberName: 'Barcelona Time Use Initiative',
                domain: 'timeuse.barcelona',
            }));
            const dgz = L.marker([52.5200, 13.4050], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'dgz.png',
                memberName: 'Deutsche Gesellschaft für Zeitpolitik',
                domain: 'zeitpolitik.de',
            }));
            const g = L.marker([52.2995, 5.2434], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'g.png',
                memberName: 'Gezondtijd!',
                domain: 'gezondtijd.eu',
            }));
            // const inl = L.marker([0, 0], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
            //     imgName: 'inl.png',
            //     memberName: 'In Normalzeit Leben',
            //     domain: 'normalzeit-leben.de',
            // }));
            const is = L.marker([52.3906, 13.0645], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'is.png',
                memberName: 'Initiative Sonnenzeit',
                domain: 'initiative-sonnenzeit.de',
            }));
            const pbt = L.marker([52.1764, 5.2992], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'pbt.png',
                memberName: 'Platform Betere Tijden',
                domain: 'beteretijden.org',
            }));
            const s = L.marker([51.6461, 4.6075], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 's.png',
                memberName: 'Standaardtijd',
                domain: 'standaardtijd.nl',
            }));
            const sht = L.marker([51.5462, 46.0154], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'sht.png',
                memberName: 'Саратов за Здоровое Время!',
                domain: 'facebook.com/groups/zazdorovoevremya',
            }));
            const sst = L.marker([37.7749, -122.4194], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'sst.png',
                memberName: 'Save Standard Time',
                domain: 'savestandardtime.com',
            }));
            const vtz = L.marker([51.3582, 4.8635], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'vtz.png',
                memberName: 'Vereniging Tegen het Zomeruur',
                domain: 'zomeruur.com',
            }));
            const z = L.marker([49.4401, 7.7491], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'z.png',
                memberName: 'Zeitenwende',
                domain: 'mathe-physik-technik.de/links/zeitenwende',
            }));
            const za = L.marker([54.2328, 10.2783], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'za.png',
                memberName: 'Zeitumstellung Abschaffen',
                domain: 'zeitumstellung-abschaffen.de',
            }));

        } catch (error) {
            // If 3rd-party map fails to load, report error and remove map element from view.
            console.error('Map removed due to error:', error);
            document.getElementById('map-wrap').remove();
        }
    }

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

    function makeMapPopupString (data) {
        return `<img alt="logo" class="map-logo" src="../images/${data.imgName}"><div><h6>${data.memberName}</h6><a class="map-anchor" href="//${data.domain}/" target="_blank" title="Visit">${data.domain}</a></div>`;
    }

    function initGui () {
        // Get a DOM reference to language GUI.
        let languageGui = document.getElementById('language-gui');

        // Add event listener to language GUI.
        languageGui.addEventListener('change', handleLanguageChange);

        // Add map of member orgs.
        addMap();
    }

    // When DOM is loaded, init the GUI.
    if (document.readyState != 'loading') {
        initGui();
    } else {
        document.addEventListener('DOMContentLoaded', initGui);
    }

})();
