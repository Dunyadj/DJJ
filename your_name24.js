// Initialize Leaflet map
var map = L.map('nymap').setView([40.62112, -74.02650], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var luigismarker = L.marker([40.62112, -74.02650]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
    <b>Pizza wagon Pizza</b><br>Best pizza on 86st<br>
    <img src="https://Dunyadj.github.io/aurashktest/images/luigis.png" style="width: 100px; height: auto;">
`).openPopup();


// Load the GeoJSON line file
fetch('https://Dj3.github.io/Dj3/dunyadj_daytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'green', // Change color as needed
            weight: 10, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });


 // Load the GeoJSON line file
fetch('https://aurashktest.github.io/aurashktest/akeveningroute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'blue', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };

    // Add the GeoJSON line to the map
    L.geoJSON(geojson, {
        style: lineStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

