import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LatLngExpression } from "leaflet";

export default function MyMap(props: any) {
  const { zoom } = props;
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch coordinates for the address
    const address = "Kuhnkestraße 6, 24118 Kiel, Germany";
    const geocode = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            address
          )}&format=json`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          setPosition([lat, lon] as LatLngExpression); // Type assertion
        }
      } catch (error) {
        console.error("Error fetching geocode:", error);
      } finally {
        setLoading(false); // Set loading to false after the async operation
      }
    };

    geocode();
  }, []);

  // If still loading, show a loading message or spinner
  if (loading) {
    return <p>Loading map...</p>;
  }

  return (
    <MapContainer center={position as LatLngExpression} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position as LatLngExpression}>
        <Popup>
          Kuhnkestraße 6, 24118 Kiel, Germany
          <br />
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
