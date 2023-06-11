let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

let geojson; 

let myMap = L.map("map", {
    center: [40.7128, -74.0050], 
    zoom: 12
});

// Creating background layer - basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

