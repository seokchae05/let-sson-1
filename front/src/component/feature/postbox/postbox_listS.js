import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  /* 1rem = 16px */
  padding: 0.6rem;
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 10px;
  margin-left: 30%;
  margin-right 30%;
`;

const Card = styled.li`
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: row;
  
`;

const Cardelement = styled.div`
  border: 1px solid black;
  width:33%;
  text-align: center;
`;

const Cardbutton = styled.button`
  border: 1px solid black;
`;



class PostboxList extends React.Component {
  state = {
    data: [
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
    ],
  };

  getData = async () => {
    const data = await axios.get("https://google.com");  //데이터 들어올 곳
    this.setState(data);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <CardList>
          {this.state.data.map((element) => (
            <Card key={element.id}>
              <Cardelement>{element.name}</Cardelement>
              <Cardelement>{element.period}</Cardelement>
              <Cardelement>
              <Cardbutton>자세히 보기</Cardbutton>
              </Cardelement>
            </Card>
          ))}
        </CardList>
      </Container>
    );
  }
}

export default PostboxList;
