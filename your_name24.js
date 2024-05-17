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
