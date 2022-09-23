// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5,-122.5], 10);

// Add GeoJSON data.
// x longitude and y latitude
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  //pointToLayer: function(feature, latlng) {
    //console.log(feature);
    //console.log(latlng)
    //return L.marker(latlng)
    //.bindPopup("<h2>" + feature.properties.city + " International Airtport" +"</h2> <hr> <h3> </h3>" + feature.properties.city + "," + feature.properties.country);
  //}
//.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//}).addTo(map);


//Grabbing our GeoJSON data.
L.geoJson(sanFranAirport,{
  onEachFeature: function(feature,layer){
    console.log(layer);
    layer.bindPopup("<h2>" + feature.properties.city + " International Airtport" +"</h2> <hr> <h3> </h3>" + feature.properties.city + ", " + feature.properties.country);
  }
}).addTo(map);


//Addd a marker to the map for Los Angeles, California
//let maker = L.marker([34.0522, -118.2437]).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);