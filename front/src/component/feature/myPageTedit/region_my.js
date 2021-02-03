import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  border-top: solid 1px black;
  background: white;
  margin-top: 30px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 95%;
  padding-bottom: 3%;
  margin-bottom: 10px;
`;

class TeasignregionMy extends React.Component {
  state = { city: "", isSelect: false };

  Change = (e) => {
    if (e.target.value === "seoul") {
      this.setState({ city: "seoul" });
    } else if (e.target.value === "busan") {
      this.setState({ city: "busan" });
    } else if (e.target.value === "daegu") {
      this.setState({ city: "daegu" });
    } else if (e.target.value === "gwangju") {
      this.setState({ city: "gwangju" });
    } else if (e.target.value === "incheon") {
      this.setState({ city: "incheon" });
    } else if (e.target.value === "daejeon") {
      this.setState({ city: "daejeon" });
    } else if (e.target.value === "ulsan") {
      this.setState({ city: "ulsan" });
    } else if (e.target.value === "gyeonggi") {
      this.setState({ city: "gyeonggi" });
    } else if (e.target.value === "gangwon") {
      this.setState({ city: "gangwon" });
    } else if (e.target.value === "chungnam") {
      this.setState({ city: "chungnam" });
    } else if (e.target.value === "chungbuk") {
      this.setState({ city: "chungbuk" });
    } else if (e.target.value === "jeonnam") {
      this.setState({ city: "jeonnam" });
    } else if (e.target.value === "jeonbuk") {
      this.setState({ city: "jeonbuk" });
    } else if (e.target.value === "gyeongnam") {
      this.setState({ city: "gyeongnam" });
    } else if (e.target.value === "gyeongbuk") {
      this.setState({ city: "gyeongbuk" });
    } else if (e.target.value === "jeju") {
      this.setState({ city: "jeju" });
    }
  };

  render() {
    return (
      <Box>
        <Text>과외 받고싶은 지역을 선택해주세요</Text>
        <Select onChange={this.Change}>
          <option>광역시/도</option>
          <option value="seoul">서울</option>
          <option value="busan">부산</option>
          <option value="daegu">대구</option>
          <option value="gwangju">광주</option>
          <option value="incheon">인천</option>
          <option value="daejeon">대전</option>
          <option value="ulsan">울산</option>
          <option value="gyeonggi">경기</option>
          <option value="gangwon">강원</option>
          <option value="chungnam">충남</option>
          <option value="chungbuk">충북</option>
          <option value="jeonnam">전남</option>
          <option value="jeonbuk">전북</option>
          <option value="gyeongnam">경남</option>
          <option value="gyeongbuk">경북</option>
          <option value="jeju">제주</option>
        </Select>

        {this.state.city === "" && (
          <div>
            <Select>
              <option>시/군/구</option>
            </Select>
          </div>
        )}

        {this.state.city === "seoul" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>강남구</option>
              <option>강동구</option>
              <option>강북구</option>
              <option>강서구</option>
              <option>관악구</option>
              <option>광진구</option>
              <option>구로구</option>
              <option>금천구</option>
              <option>노원구</option>
              <option>도봉구</option>
              <option>동대문구</option>
              <option>동작구</option>
              <option>마포구</option>
              <option>서대문구</option>
              <option>서초구</option>
              <option>성동구</option>
              <option>성북구</option>
              <option>송파구</option>
              <option>양천구</option>
              <option>영등포구</option>
              <option>용산구</option>
              <option>은평구</option>
              <option>종로구</option>
              <option>중구</option>
              <option>중랑구</option>
            </Select>
          </div>
        )}

        {this.state.city === "busan" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>강서구</option>
              <option>금정구</option>
              <option>남구</option>
              <option>동구</option>
              <option>동래구</option>
              <option>부산진구</option>
              <option>북구</option>
              <option>사상구</option>
              <option>사하구</option>
              <option>서구</option>
              <option>수영구</option>
              <option>연제구</option>
              <option>영도구</option>
              <option>중구</option>
              <option>해운대구</option>
              <option>기장군</option>
            </Select>
          </div>
        )}

        {this.state.city === "daegu" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>남구</option>
              <option>달서구</option>
              <option>동구</option>
              <option>북구</option>
              <option>서구</option>
              <option>수성구</option>
              <option>중구</option>
              <option>달성군</option>
            </Select>
          </div>
        )}

        {this.state.city === "gwangju" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>광산구</option>
              <option>남구</option>
              <option>동구</option>
              <option>북구</option>
              <option>서구</option>
            </Select>
          </div>
        )}

        {this.state.city === "incheon" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>계양구</option>
              <option>남구</option>
              <option>남동구</option>
              <option>동구</option>
              <option>부평구</option>
              <option>서구</option>
              <option>연수구</option>
              <option>중구</option>
              <option>강화군</option>
              <option>옹진군</option>
            </Select>
          </div>
        )}

        {this.state.city === "daejeon" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>대덕구</option>
              <option>동구</option>
              <option>서구</option>
              <option>유성구</option>
              <option>중구</option>
            </Select>
          </div>
        )}

        {this.state.city === "ulsan" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>남구</option>
              <option>동구</option>
              <option>북구</option>
              <option>중구</option>
              <option>울주군</option>
            </Select>
          </div>
        )}

        {this.state.city === "gyeonggi" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>고양시 덕양구</option>
              <option>고양시 일산구</option>
              <option>과천시</option>
              <option>광명시</option>
              <option>광주시</option>
              <option>구리시</option>
              <option>군포시</option>
              <option>김포시</option>
              <option>남양주시</option>
              <option>동두천시</option>
              <option>부천시 소사구</option>
              <option>부천시 오정구</option>
              <option>부천시 원미구</option>
              <option>성남시 분당구</option>
              <option>성남시 수정구</option>
              <option>성남시 중원구</option>
              <option>수원시 권선구</option>
              <option>수원시 장안구</option>
              <option>수원시 팔달구</option>
              <option>시흥시</option>
              <option>안산시 단원구</option>
              <option>안산시 상록구</option>
              <option>안성시</option>
              <option>안양시 동안구</option>
              <option>안양시 만안구</option>
              <option>오산시</option>
              <option>용인시</option>
              <option>의왕시</option>
              <option>의정부시</option>
              <option>이천시</option>
              <option>파주시</option>
              <option>평택시</option>
              <option>하남시</option>
              <option>화성시</option>
              <option>가평군</option>
              <option>양주군</option>
              <option>양평군</option>
              <option>여주군</option>
              <option>연천군</option>
              <option>포천군</option>
            </Select>
          </div>
        )}

        {this.state.city === "gangwon" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>강릉시</option>
              <option>동해시</option>
              <option>삼척시</option>
              <option>속초시</option>
              <option>원주시</option>
              <option>춘천시</option>
              <option>태백시</option>
              <option>고성군</option>
              <option>양구군</option>
              <option>양양군</option>
              <option>영월군</option>
              <option>인제군</option>
              <option>정선군</option>
              <option>철원군</option>
              <option>평창군</option>
              <option>홍천군</option>
              <option>화천군</option>
              <option>횡성군</option>
            </Select>
          </div>
        )}

        {this.state.city === "chungnam" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>공주시</option>
              <option>논산시</option>
              <option>보령시</option>
              <option>서산시</option>
              <option>아산시</option>
              <option>천안시</option>
              <option>금산군</option>
              <option>당진군</option>
              <option>부여군</option>
              <option>서천군</option>
              <option>연기군</option>
              <option>예산군</option>
              <option>청양군</option>
              <option>태안군</option>
              <option>홍성군</option>
            </Select>
          </div>
        )}

        {this.state.city === "chungbuk" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>제천시</option>,<option>청주시 상당구</option>
              <option>청주시 흥덕구</option>
              <option>충주시</option>
              <option>괴산군</option>
              <option>단양군</option>
              <option>보은군</option>
              <option>영동군</option>
              <option>옥천군</option>
              <option>음성군</option>
              <option>진천군</option>
              <option>청원군</option>
            </Select>
          </div>
        )}

        {this.state.city === "jeonnam" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>광양시</option>
              <option>나주시</option>
              <option>목포시</option>
              <option>순천시</option>
              <option>여수시</option>
              <option>강진군</option>
              <option>고흥군</option>
              <option>곡성군</option>
              <option>구례군</option>
              <option>담양군</option>
              <option>무안군</option>
              <option>보성군</option>
              <option>신안군</option>
              <option>영광군</option>
              <option>영암군</option>
              <option>완도군</option>
              <option>장성군</option>
              <option>장흥군</option>
              <option>진도군</option>
              <option>함평군</option>
              <option>해남군</option>
              <option>화순군</option>
            </Select>
          </div>
        )}

        {this.state.city === "jeonbuk" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>군산시</option>
              <option>김제시</option>
              <option>남원시</option>
              <option>익산시</option>
              <option>전주시 덕진구</option>
              <option>전주시 완산구</option>
              <option>정읍시</option>
              <option>고창군</option>
              <option>무주군</option>
              <option>부안군</option>
              <option>순창군</option>
              <option>완주군</option>
              <option>임실군</option>
              <option>장수군</option>
              <option>진안군</option>
            </Select>
          </div>
        )}

        {this.state.city === "gyeongnam" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>거제시</option>
              <option>김해시</option>
              <option>마산시</option>
              <option>밀양시</option>
              <option>사천시</option>
              <option>양산시</option>
              <option>진주시</option>
              <option>진해시</option>
              <option>창원시</option>
              <option>통영시</option>
              <option>거창군</option>
              <option>고성군</option>
              <option>남해군</option>
              <option>산청군</option>
              <option>의령군</option>
              <option>창녕군</option>
              <option>하동군</option>
              <option>함안군</option>
              <option>함양군</option>
              <option>합천군</option>
            </Select>
          </div>
        )}

        {this.state.city === "gyeongbuk" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>경산시</option>
              <option>경주시</option>
              <option>구미시</option>
              <option>김천시</option>
              <option>문경시</option>
              <option>상주시</option>
              <option>안동시</option>
              <option>영주시</option>
              <option>영천시</option>
              <option>포항시 남구</option>
              <option>포항시 북구</option>
              <option>고령군</option>
              <option>군위군</option>
              <option>봉화군</option>
              <option>성주군</option>
              <option>영덕군</option>
              <option>영양군</option>
              <option>예천군</option>
              <option>울릉군</option>
              <option>울진군</option>
              <option>의성군</option>
              <option>청도군</option>
              <option>청송군</option>
              <option>칠곡군</option>
            </Select>
          </div>
        )}

        {this.state.city === "jeju" && (
          <div>
            <Select>
              <option>시/군/구</option>
              <option>서귀포시</option>
              <option>제주시</option>
              <option>남제주군</option>
              <option>북제주군</option>
            </Select>
          </div>
        )}
      </Box>
    );
  }
}

export default TeasignregionMy;
