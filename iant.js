(function () {

    function addMap () {
        try {

            // Create map. Center on given latitude, longitude. Zoom to 2.
            const map = L.map('map').setView([30, 0], 2);

            // Initialize map per Leaflet documentation: https://leafletjs.com/
            // Attribution is required per Leaflet user terms of service.
            // Max and min zoom are our per our preference.
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 8,
                minZoom: 1,
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

            // Create and add markers to map.
            const bc = L.marker([52.53732, 13.40800], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-bc.png',
                memberName: 'BodyClock',
                domain: 'bodyclock.health',
            }));
            const bcc = L.marker([52.1636, 4.4802], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-bcc.png',
                memberName: 'BioClock Consortium',
                domain: 'bioclockconsortium.org',
            }));
            const arhoe = L.marker([40.4168, -3.7038], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-arhoe.png',
                memberName: 'ARHOE',
                domain: 'horariosenespana.com',
            }));
            const bt1 = L.marker([51.0504, 13.7373], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-bt.png',
                memberName: 'BetterTimes',
                domain: 'gobettertimes.org',
            }));
            const bt2 = L.marker([40.2033, -8.4103], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-bt.png',
                memberName: 'BetterTimes',
                domain: 'gobettertimes.org',
            }));
            const btui = L.marker([41.3851, 2.1734], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-btui.png',
                memberName: 'Time Use Initiative',
                domain: 'timeuse.barcelona',
            }));
            const csrc = L.marker([45.4201, -75.7003], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-csrc.png',
                memberName: 'Canadian Sleep Research Consortium',
                domain: 'researchsleep.ca',
            }));
            const dgz = L.marker([52.52196, 13.34626], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-dgz.png',
                memberName: 'Deutsche Gesellschaft für Zeitpolitik',
                domain: 'zeitpolitik.de',
                scheme: 'http',
            }));
            const eua = L.marker([50.0693, 9.2597], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-eua.png',
                memberName: 'Europa-Union Aschaffenburg',
                domain: 'eu-aschaffenburg.de',
            }));
            const glg = L.marker([51.4416, 5.4697], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-glg.png',
                memberName: 'Good Light Group',
                domain: 'goodlightgroup.org',
            }));
            const inl = L.marker([54.3233, 10.1228], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-inl.png',
                memberName: 'In Normalzeit Leben',
                domain: 'normalzeit-leben.de',
            }));
            const lm = L.marker([44.9334, 4.8924], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-lm.png',
                memberName: 'La Méridienne',
                domain: 'lameridienne.over-blog.org',
                scheme: 'http',
            }));
            const lms = L.marker([55.6761, 12.5683], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-lms.png',
                memberName: 'Landsforeningen Mod Sommertid',
                domain: 'ikkesommertid.dk',
                subdomain: 'www',
            }));
            const mas = L.marker([47.4979, 19.0402], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-mas.png',
                memberName: 'Magyar Alvás Szövetség',
                domain: 'napialvas.hu',
            }));
            const na = L.marker([59.3293, 18.0686], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-na.png',
                memberName: 'NormalTid AllTid',
                domain: 'normaltidalltid.se',
                subdomain: 'www',
            }));
            const nds = L.marker([-27.4698, 153.0251], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-nds.png',
                memberName: 'No Daylight Saving Australia & New&nbsp;Zealand',
                domain: 'facebook.com<wbr>/<wbr>profile.php<wbr>?id=100064450731610',
                subdomain: 'www',
            }));
            const nnht = L.marker([59.6864, 10.7930], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-nnht.png',
                memberName: 'Normaltid i Norge Hele Tiden',
                domain: 'facebook.com<wbr>/<wbr>groups<wbr>/<wbr>1657099824847086',
                subdomain: 'www',
            }));
            const ntk = L.marker([51.1605, 71.4704], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-ntk.png',
                memberName: 'Казахстану природное время!',
                domain: 'facebook.com<wbr>/<wbr>groups<wbr>/<wbr>949363842090236',
                subdomain: 'www',
            }));
            const pbt = L.marker([52.1764, 5.2992], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-pbt.png',
                memberName: 'Platform Betere Tijden',
                domain: 'beteretijden.org',
            }));
            const s = L.marker([51.6461, 4.6075], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-s.png',
                memberName: 'Standaardtijd',
                domain: 'standaardtijd.nl',
                scheme: 'http',
            }));
            const sc = L.marker([38.9897, -76.9378], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-sc.png',
                memberName: 'Solar Clock',
                domain: 'play.google.com/store/apps/details<wbr>?id=<wbr>com.jamescr05.solar_clock',
            }));
            const sht = L.marker([51.5462, 46.0154], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-sht.png',
                memberName: 'Саратов за Здоровое Время!',
                domain: 'facebook.com<wbr>/<wbr>groups<wbr>/<wbr>zazdorovoevremya',
                subdomain: 'www',
            }));
            const sst = L.marker([33.6042, -111.7257], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-sst.png',
                memberName: 'Save Standard Time',
                domain: 'savestandardtime.com',
            }));
            const st = L.marker([51.5581, -1.7798], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-st.png',
                memberName: 'Solar Time',
                domain: 'facebook.com<wbr>/<wbr>solartimeofficial',
                subdomain: 'www',
            }));
            const vrtm = L.marker([48.7080, 44.5133], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-vrtm.png',
                memberName: 'Поволжье: Время - московское! UTC+3',
                domain: 'vk.com/povolgeutc3',
            }));
            const vtz = L.marker([51.3582, 4.8635], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-vtz.png',
                memberName: 'Vereniging Tegen het Zomeruur / Association Belge pour Une Heure Naturelle Stable',
                domain: 'zomeruur.com',
            }));
            const vv = L.marker([51.1653, 4.1387], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-vv.png',
                memberName: 'Vogelbescherming Vlaanderen',
                domain: 'vogelbescherming.be',
            }));
            const z = L.marker([49.4401, 7.7491], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-z.png',
                memberName: 'Zeitenwende',
                domain: 'mathe-physik-technik.de<wbr>/<wbr>links<wbr>/<wbr>zeitenwende',
            }));
            const zg = L.marker([53.6312, 13.0651], { icon: pin }).addTo(map).bindPopup(makeMapPopupString({
                imgName: 'group-zg.png',
                memberName: 'Zeitgestaltung',
                domain: 'zeit-gestaltung.de',
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
        // Build string from data properties. Assume HTTPS scheme unless specified otherwise.
        return `
            <img alt="logo" class="map-logo" src="../images/${data.imgName}">
            <div>
                <h6>${data.memberName}</h6>
                <a class="map-anchor" href="${data.scheme || 'https'}://${data.subdomain ? data.subdomain.concat('.') : ''}${data.domain.replaceAll('<wbr>', '')}" target="_blank" title="Visit">${data.domain}</a>
            </div>
        `;
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
