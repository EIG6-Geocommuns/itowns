export default CoordStars;
declare namespace CoordStars {
    function getSunPosition(): (date: any, lat: any, lon: any) => {
        EclipticLongitude: any;
        declinaison: number;
        ascension: number;
        H: number;
        SiderealTime: number;
        altitude: number;
        azimuth: number;
    };
    function getSunPosition(): (date: any, lat: any, lon: any) => {
        EclipticLongitude: any;
        declinaison: number;
        ascension: number;
        H: number;
        SiderealTime: number;
        altitude: number;
        azimuth: number;
    };
    function getSunPositionInScene(date: any, lat: any, lon: any): import("three").Vector3;
    function getSunPositionInScene(date: any, lat: any, lon: any): import("three").Vector3;
}
//# sourceMappingURL=CoordStars.d.ts.map