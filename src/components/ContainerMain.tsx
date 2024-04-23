import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ContainerDesk } from "./ContainerDesk";
import { ContainerMobile } from "./ContainerMobile";
import { SearchBar } from "./SearchBar";

export const ContainerMain: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className={screenWidth > 1500 ? "bg-danger" : "bg-warning"}>
      {screenWidth > 50 ? (
        <ContainerDesk></ContainerDesk>
      ) : (
        <ContainerMobile></ContainerMobile>
      )}

      <h1>HOLA</h1>
    </Container>
  );
};
