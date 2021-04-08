import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
// 선생이 보낸 내역 목록

const Container = styled.div`
  width: 100%;
  /* 1rem = 16px */
  padding: 0.6rem;
  background-color: #f6f4f3;
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(1fr 3fr 2fr 4fr);
  gap: 30px;
  margin-left: 10%;
  margin-right: 10%;
`;

const Card = styled.li`
  border-top: solid 3px #010440;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
`;

const Cardelement = styled.div`
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  width: 33%;
  text-align: center;
`;

const Cardbutton = styled.button`
  border: none;
`;

const PostboxListST = () => {
  const [data, setData] = useState([
    {
      id: 1129300128,
      name: "000선생님",
      period: "기간:2021.1~",
    },
    {
      id: 1120128,
      name: "000학생",
      period: "기간:2021.2~",
    },
    {
      id: 29300128,
      name: "윤상석",
      period: "기간:2021.3~",
    },
    {
      id: 29300127,
      name: "윤상석",
      period: "기간:2021.3~",
    },
    {
      id: 29300138,
      name: "윤상석",
      period: "기간:2021.3~",
    },
    {
      id: 2300128,
      name: "윤상석",
      period: "기간:2021.3~",
    },
    {
      id: 20128,
      name: "윤상석",
      period: "기간:2021.3~",
    },
    {
      id: 2,
      name: "윤상석",
      period: "기간:2021.3~",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <Container>
      <CardList>
        {data.map((element, index) => (
          <Card key={element.id}>
            <Cardelement>{index + 1}</Cardelement>
            <Cardelement>
              <Link
                to={{
                  pathname: "/postboxdetail",
                  state: {
                    id: element.id,
                    name: element.name,
                    period: element.period,
                  },
                }}
              >
                <Cardbutton>{element.name}님의 신청입니다.</Cardbutton>
              </Link>
            </Cardelement>
            <Cardelement>{element.period}</Cardelement>
            <Cardelement>
              <Cardbutton>진행</Cardbutton>
              <Cardbutton>완료</Cardbutton>
              <Cardbutton>삭제</Cardbutton>
            </Cardelement>
          </Card>
        ))}
      </CardList>
    </Container>
  );
};

export default PostboxListST;
