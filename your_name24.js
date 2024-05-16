// Initialize Leaflet map
var map = L.map('nymap').setView([40.62081° N, 74.02676° W], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.62081° N, 74.02676° W]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Luigi's Pizza</b><br>This is a Leaflet map.").openPopup();
