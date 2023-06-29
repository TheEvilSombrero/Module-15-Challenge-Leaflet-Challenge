let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

// let geojson; 

// Perform GET request to query URL 
d3.json(geoData).then(function (data) {
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
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature:onEachFeature
    });

    // Send layer to createMap function 
    createMap(earthquakes);
};

function createMap(earthquakes) {
    // Creating background layers 
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // baseMaps object
    let baseMaps = {
        "Street Map": street, 
        "Topographic Map": topo
    };

    // Overlay object to hold overlay 
    let overlayMaps = {
        Earthquakes: earthquakes
    };

    // Make the map with layers on display 
    let myMap = L.map("map", {
        center: [37.0902, -95.7129], 
        zoom: 4, 
        layers: [street, earthquakes]
    });

    // Layer control pannel 
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
};