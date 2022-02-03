import React, { useState } from "react";
import Container from "./Container";
import Place from "./Place";
import Temperature from "./Temperature";
import Top from "./Top";
import Search from "./Search";
import Input from "./Input";

import { Api } from "../services/api";
import Bottom from "./Bottom";
import Feels from "./Feels";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Description from "./Description";
import Placeholder from "./Placeholder";

function Index() {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("busque uma cidade");
  const [bg, setBg] = useState<string>("clouds");

  const searchLocation = (event: any): any => {
    if (event.key === "Enter" && location !== "") {
      Api(location)
        .then((response) => {
          setData(response.data);

          setBg(response.data.weather[0].main.toLowerCase());
        })
        .catch((err) => {
          setData({});
          setFeedback(
            `Cidade "${location}" não encontrada. ${err.response.data.cod} :(`
          );
        });
      setLocation("");
    }
  };

  return (
    <Container bg={bg}>
      <Search>
        <Input
          OC={(e: any) => setLocation(e.target.value)}
          OKP={searchLocation}
          value={location || ""}
        />
      </Search>
      {Object.keys(data).length > 0 ? (
        <>
          <Top>
            <Place name={data.name} />
            <Temperature main={data.main} />
            <Description weather={data.weather ? data.weather[0] : []} />
          </Top>
          <Bottom>
            <Feels main={data.main} />
            <Humidity main={data.main} />
            <Wind wind={data.wind} />
          </Bottom>
        </>
      ) : (
        <Placeholder feedback={feedback} />
      )}
    </Container>
  );
}

export default Index;
