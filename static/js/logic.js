let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

let geojson; 

let myMap = L.map("map", {
    center: [37.0902, -95.7129], 
    zoom: 4
});

// Creating background layer - basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



// Perform GET request to query URL 
d3.json(geoData, function(data) {
    // Get response, send data.features object to the createFeatures function 
    createFeatures(data.features)
});
