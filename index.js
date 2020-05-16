import { MapView } from "@here/harp-mapview";

const mapCanvas = document.getElementById("mapCanvas");
const mapView = new MapView({
    canvas: mapCanvas,
    theme: "node_modules/@here/harp-map-theme/resources/berlin_tilezen_base.json",
    // note, this URL may vary depending on configuration of webpack
    // for this example, it is assumed that app is server from project root
    decoderUrl: "harp-gl-decoders.bundle.js"
    // note, this URL may vary depending on configuration of webpack
    // for this example, it is assumed that webpack emits bundles to project root
});

// index.js
import { MapView } from "@here/harp-mapview";

const mapCanvas = document.getElementById("mapCanvas");
const mapView = new MapView({
    canvas: mapCanvas,
    theme: "node_modules/@here/harp-map-theme/resources/berlin_tilezen_base.json",
    // note, this URL may vary depending on configuration of webpack
    // for this example, it is assumed that app is server from project root
    decoderUrl: "harp-gl-decoders.bundle.js"
    // note, this URL may vary depending on configuration of webpack
    // for this example, it is assumed that webpack emits bundles to project root
});
// index.js
import { GeoCoordinates } from "@here/harp-geoutils";

// ...
mapView.camera.position.set(0, 0, 800);
mapView.geoCenter = new GeoCoordinates(40.70398928, -74.01319808, 0);
mapView.resize(mapCanvas.clientWidth, mapCanvas.clientHeight);

import { APIFormat, AuthenticationTypeMapboxV4, OmvDataSource } from "@here/harp-omv-datasource";

const dataSource = new OmvDataSource({
   baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
   apiFormat: harp.APIFormat.XYZOMV,
   styleSetName: "tilezen",
   authenticationCode: "AJtaJhfyQeud_4lkN-3MRAA",
   authenticationMethod: {
         method: harp.AuthenticationMethod.QueryString,
         name: "apikey"
   }
});
mapView.addDataSource(dataSource);
