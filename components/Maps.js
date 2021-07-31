import GoogleMapReact from "google-map-react";
function Maps() {
  const defaultProps = {
    center: {
      lat: 30.0444,
      lng: 31.2357,
    },
    zoom: 15,
  };

  const AnyReactComponent = ({ children }) => <div>{children}</div>;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
      >
        <AnyReactComponent lat={30.0131} lng={31.2089}>
          <svg
            className="w-10 h-10 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </AnyReactComponent>
      </GoogleMapReact>
    </div>
  );
}

export default Maps;
