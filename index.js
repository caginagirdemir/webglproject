export namespace HelloWorldExample {
    // Create a new MapView for the HTMLCanvasElement of the given id.
    function initializeMapView(id: string): MapView {
        // snippet:harp_gl_hello_world_example_0.ts
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        // end:harp_gl_hello_world_example_0.ts

        // snippet:harp_gl_hello_world_example_1.ts
        // Look at New York.
        const NY = new GeoCoordinates(40.707, -74.01);
        const map = new MapView({
            canvas,
            theme: "resources/berlin_tilezen_base.json",
            target: NY,
            tilt: 50,
            heading: -20,
            zoomLevel: 16.1
        });
        // end:harp_gl_hello_world_example_1.ts

        CopyrightElementHandler.install("copyrightNotice", map);

        // snippet:harp_gl_hello_world_example_map_controls.ts
        // Instantiate the default map controls, allowing the user to pan around freely.
        const mapControls = new MapControls(map);
        mapControls.maxTiltAngle = 50;
        // end:harp_gl_hello_world_example_map_controls.ts

        // Add an UI.
        const ui = new MapControlsUI(mapControls, { zoomLevel: "input" });
        canvas.parentElement!.appendChild(ui.domElement);

        // snippet:harp_gl_hello_world_example_3.ts
        // Resize the mapView to maximum.
        map.resize(window.innerWidth, window.innerHeight);

        // React on resize events.
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        // end:harp_gl_hello_world_example_3.ts

        addOmvDataSource(map);

        return map;
    }

    function addOmvDataSource(map: MapView) {
        // snippet:harp_gl_hello_world_example_4.ts
        const omvDataSource = new OmvDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            apiFormat: APIFormat.XYZOMV,
            styleSetName: "tilezen",
            authenticationCode: "APFoVhTuQQecn3TG5mYaEgA",
            authenticationMethod: {
                method: AuthenticationMethod.QueryString,
                name: "apikey"
            },
            copyrightInfo
        });
        // end:harp_gl_hello_world_example_4.ts

        // snippet:harp_gl_hello_world_example_5.ts
        map.addDataSource(omvDataSource);
        // end:harp_gl_hello_world_example_5.ts

        return map;
    }

    export const mapView = initializeMapView("mapCanvas");
}
