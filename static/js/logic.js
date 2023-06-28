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
d3.json(geoData).then(function(data) {
    // Get response, send data.features object to the createFeatures function 
    createFeatures(data.features)
});

// Function for each feature in the features array 
function createFeatures(earthquakeData) {

    // Give each feature a popup with info 
    function onEachFeature(feature, layer) {
        layer.bindPopup('<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>')
    };

    // GeoJSON layer containing features array on earthquakeData object. 
    // Run onEachFeature function once for each data point in the array. 
    
};