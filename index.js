const canvas = document.getElementById('map');
const map = new harp.MapView({
   canvas: canvas,
   theme: "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_base.json",
   projection: harp.sphereProjection,
   //For tile cache optimization:
   maxVisibleDataSourceTiles: 40, 
   tileCacheSize: 100
});

map.setCameraGeolocationAndZoom(
   new harp.GeoCoordinates(39.933365, 32.859741), //latitude, longitude
   4 //zoom level 
);

// const mapControls = new harp.MapControls(map);
// const ui = new harp.MapControlsUI(mapControls);
// canvas.parentElement.appendChild(ui.domElement);

// mapControls.maxPitchAngle = 40;
// //mapControls.setRotation(6.3, 50);

const controls = new GlobeControls(map);
controls.enabled = true;

map.resize(window.innerWidth, window.innerHeight);
window.onresize = () => map.resize(window.innerWidth, window.innerHeight);

const omvDataSource = new harp.OmvDataSource({
   baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
   apiFormat: harp.APIFormat.XYZOMV,
   styleSetName: "tilezen",
   authenticationCode: 'AH_RLsqfS4eBaD5C8yNhDgA',
});
map.addDataSource(omvDataSource);
