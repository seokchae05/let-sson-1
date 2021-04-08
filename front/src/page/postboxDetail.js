import React, { useState } from "react";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Xbutton = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 0;
  margin-left: 75%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #f6f4f3;
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 720px;
  box-sizing: border-box;
  background-color: #f6f4f3;
`;

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25%;
  margin-right: 25%;
  border-top: solid 3px #010440;
  background: white;
  margin-top: 30px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;
const BoxShort = styled.div`
  border: 0.05em solid #010440;
  margin-right: 0;
  width: 55%;
  padding-right: 40%;
  padding-bottom: 30px;
`;

const PostboxDetail = props => {
  const [data, setData] = useState({
    id: props.location.state.id,
    name: props.location.state.name,
    period: props.location.state.period,
  });

  const history = useHistory();
  const goBack = e => {
    history.goBack();
  };

  return (
    <div>
      <HeadButtons />
      <Wrapper>
        <Xbutton onClick={goBack}>X</Xbutton>
        <Box>
          <Text> 식별아이디</Text>
          <BoxShort className="id">{data.id}</BoxShort>
        </Box>
        <Box>
          <Text> 이름</Text>
          <BoxShort>{data.name}</BoxShort>
        </Box>
        <Box>
          <Text> 기간</Text>
          <BoxShort>{data.period}</BoxShort>
        </Box>
      </Wrapper>
    </div>
  );
};

export default PostboxDetail;
