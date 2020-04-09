// Initialize leaflet.js
var L = require('leaflet');
var MiniMap = require('leaflet-minimap');

// Initialize the map
var map = L.map('map', {
	scrollWheelZoom: true,

});

// Set the position and zoom level of the map
map.setView([46.83, -71.25], 12);

// Initialize the base layer
var osm_mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add other controls
var zoomOffset = -5;

var options = {
	toggleDisplay: true,
	width: 150,
	height: 100,
	minimized: false,
	aimingRectOptions: {
		color: '#FF0000'
	},
	zoomLevelOffset: zoomOffset
};

var mm = new MiniMap(osm_mapnik, options).addTo(map);

