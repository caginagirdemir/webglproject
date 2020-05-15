const map = new harp.MapView({
    canvas: document.getElementById("map"),
    theme:
        "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_night_reduced.json"
});
const controls = new harp.MapControls(map);
const omvDataSource = new harp.OmvDataSource({
    baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
    apiFormat: harp.APIFormat.XYZOMV,
    styleSetName: "tilezen",
    authenticationCode: "APFoVhTuQQecn3TG5mYaEgA",
    authenticationMethod: {
        method: harp.AuthenticationMethod.QueryString,
        name: "apikey"
    }
});
map.addDataSource(omvDataSource);
