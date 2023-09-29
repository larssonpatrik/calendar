import React from "react";
import styled from "styled-components";

interface SeasonHeadingProps {
  children: String;
  year: String;
}

export default function SeasonHeading({
  children,
  year,
}: React.PropsWithChildren<SeasonHeadingProps>) {
  return (
    <ScHeading>
      {children}
      <span style={{ fontWeight: "100" }}>'{year}</span>
    </ScHeading>
  );
}

const ScHeading = styled.h1`
  font-size: 72px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 16px;
`;
