import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
    const position = [23, 90];
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = e => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    if(district){
        const coord = [district.latitude, district.longitude];
        mapRef.current.flyTo(coord, 12)
    }
  }
  return (
    <div className="h-[80vh] w-full p-5 space-y-6 mb-20">
      <h2 className="text-5xl"> We are available in 64 district</h2>

      <form onSubmit={handleSearch}>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="location" type="search" required placeholder="Search" />
        </label>
      </form>
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        className="h-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {serviceCenter.map((data, index) => (
          <Marker key={index} position={[data.latitude, data.longitude]}>
            <Popup>
              <strong>{data.district}</strong> <br /> Service Area:{" "}
              {data.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
