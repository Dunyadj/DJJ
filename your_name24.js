// Initialize Leaflet map
var map = L.map('nymap').setView([40.62112, -74.02650], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


// Add a marker to the map for New York City
var omoniacafemarker = L.marker([40.630400501079464, -74.02831268679124]).addTo(map);


// Add a popup to the marker
prattinstmarker.bindPopup(`
    <b>Pratt Institute</b><br>Sculpture Garden and green space <br>
    <img src="https://aurashktest.github.io/aurashktest/images/pratt.jpg" style="width: 100px; height: auto;">
`).openPopup();




// Add a marker to the map for New York City
var pierparkmarker = L.marker([40.639205771864646, -74.03727450611335]).addTo(map);


// Add a popup to the marker
ftgreeneparkmarker.bindPopup(`
    <b>Ft Greene Park</b><br>Prison Ship Martrys Monument has good views of the city.<br>
    <img src="https://aurashktest.github.io/aurashktest/images/psm.jpg"  style="width: 100px; height: auto;">
`).openPopup();






// Add a marker to the map for New York City
var luigismarker = L.marker([40.62112, -74.02650]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
    <b>Pizza wagon Pizza</b><br>Best pizza on 86st<br>
    <img src="https://Dunyadj.github.io/aurashktest/images/luigis.png" style="width: 100px; height: auto;">
`).openPopup();


// Load the GeoJSON line file
fetch('https://Dunyadj.github.io/Dunyadj/dunyadj_daytimeroute.geojson')
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
fetch('https://Dunyadj.github.io/Dunyadj/nighttimewalk.geojson')
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

