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

  const searchLocation = (event: any): any => {
    if (event.key === "Enter" && location !== "") {
      Api(location).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <Container>
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
        <Placeholder />
      )}
    </Container>
  );
}

export default Index;
