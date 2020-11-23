(function () {

    function addMap () {
        try {

            // Create map. Center on given latitude, longitude. Zoom to 2.
            const map = L.map('map').setView([30, 0], 2);

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
                memberName: 'ACHED',
                domain: 'ached.fr',
            }));
            const arhoe = L.marker([40.4168, -3.7038], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'arhoe.png',
                memberName: 'ARHOE',
                domain: 'horariosenespana.com',
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
                scheme: 'http',
            }));
            const g = L.marker([52.0907, 5.1214], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'g.png',
                memberName: 'Gezondtijd!',
                domain: 'gezondtijd.eu',
            }));
            const glg = L.marker([51.4416, 5.4697], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'glg.png',
                memberName: 'Good Light Group',
                domain: 'goodlightgroup.org',
            }));
            const inl = L.marker([54.3233, 10.1228], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'inl.png',
                memberName: 'In Normalzeit Leben',
                domain: 'normalzeit-leben.de',
            }));
            const lm = L.marker([44.9334, 4.8924], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'lm.png',
                memberName: 'La Méridienne',
                domain: 'lameridienne.over-blog.org',
            }));
            const na = L.marker([59.3293, 18.0686], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'na.png',
                memberName: 'Normaltid Alltid',
                domain: 'normaltidalltid.nu',
            }));
            const nds = L.marker([-27.4698, 153.0251], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'nds.png',
                memberName: 'No Daylight Saving',
                domain: 'facebook.com/No-Daylight-Saving<wbr>-591275684328063',
            }));
            const nt365 = L.marker([44.9383, -93.7177], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'nt365.png',
                memberName: 'Naturaltime365.us',
                domain: 'naturaltime365.us',
                scheme: 'http',
            }));
            const ntk = L.marker([51.1605, 71.4704], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'ntk.png',
                memberName: 'Казахстану природное время!',
                domain: 'facebook.com/groups/949363842090236',
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
                scheme: 'http',
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
            const vrtm = L.marker([48.7080, 44.5133], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'vrtm.png',
                memberName: 'Поволжье: Время - московское! UTC+3',
                domain: 'vk.com/povolgeutc3',
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
        // Build string from data properties. Assume HTTPS unless specified otherwise.
        return `<img alt="logo" class="map-logo" src="../images/${data.imgName}"><div><h6>${data.memberName}</h6><a class="map-anchor" href="${data.scheme || 'https'}://${data.domain}/" target="_blank" title="Visit">${data.domain}</a></div>`;
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
