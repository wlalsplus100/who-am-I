"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "@emotion/styled";
import { createContext } from "react";

const Context = createContext();

const Title = styled.h1`
  text-align: center;
  color: rgb(255, 0, 0);
`;

const Container = styled.div`
  height: 300vh;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Title>야호</Title>
        <p>시작</p>
        <Image src="/NEXTjs.png" width={300} height={300} alt="" />
      </Container>
    </>
  );
}
