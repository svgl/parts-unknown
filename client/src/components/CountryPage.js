import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Map from "./Map";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CountryPage() {
  const { id } = useParams();

  const { data: destinations, isLoading: destinationsLoading } = useQuery(
    ["destination"],
    () => {
      return Axios.get(`/api/destinations/${id}`).then(
        (res) => res.data
      );
    }
  );

  const { isLoading: coordinatesLoading } = useQuery(
    ["coordinate"],
    () => {
      return Axios.get(`/api/destinations`).then(
        (res) => res.data
      );
    }
  );

  const { data: countries, isLoading: countriesLoading } = useQuery(
    ["country"],
    () => {
      return Axios.get(`/api/countries/${id}`).then(
        (res) => res.data
      );
    }
  );

  if (destinationsLoading || countriesLoading || coordinatesLoading) {
    return <h1>Loading...</h1>;
  }

  //   function setMarkers() {
  //     {
  //       coordinates.map((coordinate) => {
  //         return coordinate.lat;
  //       });
  //     }
  //   }

  const lat = countries.lat;
  const lng = countries.lng;
  const zoom = countries.zoom;

  const markerImage = destinations[0]?.image;
  const markerName = destinations[0]?.name;

  const markerTwoImage = destinations[1]?.image;
  const markerTwoName = destinations[1]?.name;

  const markerThreeImage = destinations[2]?.image;
  const markerThreeName = destinations[2]?.name;

  const markerFourImage = destinations[3]?.image;
  const markerFourName = destinations[3]?.name;

  const markerFiveImage = destinations[4]?.image;
  const markerFiveName = destinations[4]?.name;

  const markerSixImage = destinations[5]?.image;
  const markerSixName = destinations[5]?.name;

  const markerSevenImage = destinations[6]?.image;
  const markerSevenName = destinations[6]?.name;

  const markerEightImage = destinations[7]?.image;
  const markerEightName = destinations[7]?.name;

  const markerNineImage = destinations[8]?.image;
  const markerNineName = destinations[8]?.name;

  const markerTenImage = destinations[9]?.image;
  const markerTenName = destinations[9]?.name;

  const markerLat = destinations[0]?.lat;
  const markerLng = destinations[0]?.lng;

  const markerTwoLat = destinations[1]?.lat;
  const markerTwoLng = destinations[1]?.lng;

  const markerThreeLat = destinations[2]?.lat;
  const markerThreeLng = destinations[2]?.lng;

  const markerFourLat = destinations[3]?.lat;
  const markerFourLng = destinations[3]?.lng;

  const markerFiveLat = destinations[4]?.lat;
  const markerFiveLng = destinations[4]?.lng;

  const markerSixLat = destinations[5]?.lat;
  const markerSixLng = destinations[5]?.lng;

  const markerSevenLat = destinations[6]?.lat;
  const markerSevenLng = destinations[6]?.lng;

  const markerEightLat = destinations[7]?.lat;
  const markerEightLng = destinations[7]?.lng;

  const markerNineLat = destinations[8]?.lat;
  const markerNineLng = destinations[8]?.lng;

  const markerTenLat = destinations[9]?.lat;
  const markerTenLng = destinations[9]?.lng;

  return (
    <div style={{ display: "flex", gap: "1rem", padding: "1vw" }}>
      <div
        class="overflow-scroll"
        style={{
          background: "#2c2c2e",
          width: "40vw",
          height: "88vh",
          padding: "1vh",
          borderRadius: "25px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{ fontSize: "32px", fontWeight: "bold", color: "#dadada" }}
          >
            {countries.name}
          </h1>
        </div>
        {destinations.map((destination) => {
          return (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "10px",
                background: "#dadada",
                borderRadius: "25px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "8vw",
                  height: "8vw",
                  borderRadius: "25px",
                  padding: "10px",
                }}
                image={destination.image}
                alt=""
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    style={{
                      color: "#006699",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {destination.name}
                  </Typography>
                  <Typography
                    // class="overflow-scroll"
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    // style={{ maxHeight: "12vh", fontSize: "16px" }}
                  >
                    {destination.description}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          );
        })}
      </div>
      <Map
        lat={lat}
        lng={lng}
        zoom={zoom}
        markerName={markerName}
        markerImage={markerImage}
        markerTwoImage={markerTwoImage}
        markerTwoName={markerTwoName}
        markerThreeImage={markerThreeImage}
        markerThreeName={markerThreeName}
        markerFourImage={markerFourImage}
        markerFourName={markerFourName}
        markerFiveImage={markerFiveImage}
        markerFiveName={markerFiveName}
        markerSixImage={markerSixImage}
        markerSixName={markerSixName}
        markerSevenImage={markerSevenImage}
        markerSevenName={markerSevenName}
        markerEightImage={markerEightImage}
        markerEightName={markerEightName}
        markerNineImage={markerNineImage}
        markerNineName={markerNineName}
        markerTenImage={markerTenImage}
        markerTenName={markerTenName}
        markerLat={markerLat}
        markerLng={markerLng}
        markerTwoLat={markerTwoLat}
        markerTwoLng={markerTwoLng}
        markerThreeLat={markerThreeLat}
        markerThreeLng={markerThreeLng}
        markerFourLat={markerFourLat}
        markerFourLng={markerFourLng}
        markerFiveLat={markerFiveLat}
        markerFiveLng={markerFiveLng}
        markerSixLat={markerSixLat}
        markerSixLng={markerSixLng}
        markerSevenLat={markerSevenLat}
        markerSevenLng={markerSevenLng}
        markerEightLat={markerEightLat}
        markerEightLng={markerEightLng}
        markerNineLat={markerNineLat}
        markerNineLng={markerNineLng}
        markerTenLat={markerTenLat}
        markerTenLng={markerTenLng}
      />
    </div>
  );
}
