const canvas = document.getElementById('map');
const map = new harp.MapView({
   canvas: canvas,
   theme: "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_base.json",
   //For tile cache optimization:
   maxVisibleDataSourceTiles: 40, 
   tileCacheSize: 100
});

map.setCameraGeolocationAndZoom(
   new harp.GeoCoordinates(39.750359, 37.015598), //latitude, longitude
   6 //zoom level 
);

 const mapControls = new harp.MapControls(map);
 const ui = new harp.MapControlsUI(mapControls);
 canvas.parentElement.appendChild(ui.domElement);

 mapControls.maxPitchAngle = 40;
// mapControls.setRotation(6.3, 50);


map.resize(window.innerWidth, window.innerHeight);
window.onresize = () => map.resize(window.innerWidth, window.innerHeight);

const omvDataSource = new harp.OmvDataSource({
   baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
   apiFormat: harp.APIFormat.XYZOMV,
   styleSetName: "tilezen",
   authenticationCode: 'AH_RLsqfS4eBaD5C8yNhDgA',
});
map.addDataSource(omvDataSource);

// const options = { tilt: 60, distance: 3000 };
// const coordinates = new harp.GeoCoordinates(39.933365, 32.859741);
// let azimuth = 300;
// map.addEventListener(harp.MapViewEventNames.Render, () => {
//    map.lookAt(coordinates, options.distance, options.tilt, (azimuth += 0.1))
// });
// map.beginAnimation();

fetch('water_pollution.geojson')
.then(data => data.json())
.then(data => {
   console.log(data);
   const geoJsonDataProvider = new harp.GeoJsonDataProvider("water_pollution", data);
   const geoJsonDataSource = new harp.OmvDataSource({
      dataProvider: geoJsonDataProvider,
      name: "water_pollution",
      //styleSetName: "wireless-hotspots" NOTE: Not necessary here. For use if you want to add your style rules in the external stylesheet.
   });

   map.addDataSource(geoJsonDataSource).then(() => {
      const styles = [{
         when: "$geometryType == 'point'",
         technique: "circles",
         renderOrder: 10000,
         attr: {
            color: "#7ED321",
            size: 15
         }
      }]
      geoJsonDataSource.setStyleSet(styles);
      map.update();
   });

   /*
      Code from next section goes here
   */
})


fetch('plastic_wastes.geojson')
.then(data => data.json())
.then(data => {
   console.log(data);
   const geoJsonDataProvider = new harp.GeoJsonDataProvider("plastic_wastes", data);
   const geoJsonDataSource = new harp.OmvDataSource({
      dataProvider: geoJsonDataProvider,
      name: "plastic_wastes",
      //styleSetName: "wireless-hotspots" NOTE: Not necessary here. For use if you want to add your style rules in the external stylesheet.
   });

   map.addDataSource(geoJsonDataSource).then(() => {
      const styles = [{
         when: "$geometryType == 'point'",
         technique: "circles",
         renderOrder: 10000,
         attr: {
            color: "#FF0000",
            size: 15
         }
      }]
      geoJsonDataSource.setStyleSet(styles);
      map.update();
   });

   /*
      Code from next section goes here
   */
})

fetch('air_pollution.geojson')
.then(data => data.json())
.then(data => {
   console.log(data);
   const geoJsonDataProvider = new harp.GeoJsonDataProvider("air_pollution", data);
   const geoJsonDataSource = new harp.OmvDataSource({
      dataProvider: geoJsonDataProvider,
      name: "air_pollution",
      //styleSetName: "wireless-hotspots" NOTE: Not necessary here. For use if you want to add your style rules in the external stylesheet.
   });

   map.addDataSource(geoJsonDataSource).then(() => {
      const styles = [{
         when: "$geometryType == 'point'",
         technique: "circles",
         renderOrder: 10000,
         attr: {
            color: "#3232ff",
            size: 15
         }
      }]
      geoJsonDataSource.setStyleSet(styles);
      map.update();
   });

   /*
      Code from next section goes here
   */
})


fetch('noise_pollution.geojson')
.then(data => data.json())
.then(data => {
   console.log(data);
   const geoJsonDataProvider = new harp.GeoJsonDataProvider("noise_pollution", data);
   const geoJsonDataSource = new harp.OmvDataSource({
      dataProvider: geoJsonDataProvider,
      name: "noise_pollution",
      //styleSetName: "wireless-hotspots" NOTE: Not necessary here. For use if you want to add your style rules in the external stylesheet.
   });

   map.addDataSource(geoJsonDataSource).then(() => {
      const styles = [{
         when: "$geometryType == 'point'",
         technique: "circles",
         renderOrder: 10000,
         attr: {
            color: "#FF00FF",
            size: 15
         }
      }]
      geoJsonDataSource.setStyleSet(styles);
      map.update();
   });

   /*
      Code from next section goes here
   */
})


fetch('erosion.geojson')
.then(data => data.json())
.then(data => {
   console.log(data);
   const geoJsonDataProvider = new harp.GeoJsonDataProvider("erosion", data);
   const geoJsonDataSource = new harp.OmvDataSource({
      dataProvider: geoJsonDataProvider,
      name: "erosion",
      //styleSetName: "wireless-hotspots" NOTE: Not necessary here. For use if you want to add your style rules in the external stylesheet.
   });

   map.addDataSource(geoJsonDataSource).then(() => {
      const styles = [{
         when: "$geometryType == 'point'",
         technique: "circles",
         renderOrder: 10000,
         attr: {
            color: "#463214",
            size: 15
         }
      }]
      geoJsonDataSource.setStyleSet(styles);
      map.update();
   });

   /*
      Code from next section goes here
   */
})

