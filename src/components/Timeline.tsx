import React from "react";
import styled from "styled-components";

interface TimelineProps {
  data: {
    season: string;
    year: string;
    locationList: { date: string; location: string }[];
  };
}

export default function Timeline({ data }: TimelineProps) {
  return (
    <>
      {data.locationList.map((l, i) => (
        <ScPostWrap>
          <ScLeftContainer>
            {i % 2 === 0 && <Text date={l.date} location={l.location} />}
          </ScLeftContainer>

          <ScLineItemContainer>
            <ScLine />
            <ScDot />
            <ScLine />
          </ScLineItemContainer>

          <ScRightContainer>
            {i % 2 !== 0 && <Text date={l.date} location={l.location} />}
          </ScRightContainer>
        </ScPostWrap>
      ))}
    </>
  );
}

function Text({ date, location }: { date: string; location: string }) {
  return (
    <div style={{ paddingTop: 48, paddingBottom: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 100 }}>{date}</h2>
      <h3 style={{ fontWeight: 500 }}>{location}</h3>
    </div>
  );
}

const ScPostWrap = styled.div`
  display: flex;
  gap: 16px;
`;

const ScLeftContainer = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
`;

const ScRightContainer = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: flex-start;
`;

const ScLineItemContainer = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
`;

const ScDot = styled.div`
  flex: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: black;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const ScLine = styled.div`
  flex: auto;
  width: 2px;
  background-color: black;
`;
