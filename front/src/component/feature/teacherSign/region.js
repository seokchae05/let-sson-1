import React from "react"
import styled from "styled-components";
const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 20%;
    margin-right : 20%;
    border-top : solid 1px black;
    background : white;
    margin-top : 30px;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;

class Teasignregion extends React.Component{
/*
categoryChange (e){
        var seoul = ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'];
        var busan = ['강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군'];
        var daegu = ['남구','달서구','동구','북구','서구','수성구','중구','달성군'];
        var gwangju = ['광산구','남구','동구','북구','서구'];
        var incheon = ['계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군'];
        var daejeon = ['대덕구','동구','서구','유성구','중구'];
        var ulsan = ['남구','동구','북구','중구','울주군'];
        var gyeonggi = ['고양시 덕양구','고양시 일산구','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시 소사구','부천시 오정구','부천시 원미구','성남시 분당구','성남시 수정구','성남시 중원구','수원시 권선구','수원시 장안구','수원시 팔달구','시흥시','안산시 단원구','안산시 상록구','안성시','안양시 동안구','안양시 만안구','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','하남시','화성시','가평군','양주군','양평군','여주군','연천군','포천군'];
        var gangwon = ['강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군'];
        var chungnam = ['공주시','논산시','보령시','서산시','아산시','천안시','금산군','당진군','부여군','서천군','연기군','예산군','청양군','태안군','홍성군'];
        var chungbuk = ['제천시','청주시 상당구','청주시 흥덕구','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군','청원군'];
        var jeonnam = ['광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군'];
        var jeonbuk = ['군산시','김제시','남원시','익산시','전주시 덕진구','전주시 완산구','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군'];
        var gyeongnam = ['거제시','김해시','마산시','밀양시','사천시','양산시','진주시','진해시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군'];
        var gyeongbuk = ['경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시 남구','포항시 북구','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군'];
        var jeju = ['서귀포시','제주시','남제주군','북제주군'];
        var target = document.getElementById("city");

        if(e.value == "Sseoul") var d = seoul;
	    else if(e.value == "busan") var d = busan;
        else if(e.value == "daegu") var d = daegu;
        else if(e.value == "gwangju") var d = gwangju;
        else if(e.value == "incheon") var d = incheon;
        else if(e.value == "daejeon") var d = daejeon;
        else if(e.value == "ulsan") var d = ulsan;
        else if(e.value == "gyeonggi") var d = gyeonggi;
        else if(e.value == "gangwon") var d = gangwon;
        else if(e.value == "chungnam") var d = chungnam;
        else if(e.value == "chungbuk") var d = chungbuk;
        else if(e.value == "jeonnam ") var d = jeonnam;
        else if(e.value == "jeonbuk") var d = jeonbuk;
        else if(e.value == "gyeongnam") var d = gyeongnam;
        else if(e.value == "gyeongbuk") var d = gyeongbuk;
        else if(e.value == "jeju") var d = jeju;

        target.options.length = 0;

	    for (x in d) {
	    	var opt = document.createElement("option");
	    	opt.value = d[x];
	    	opt.innerHTML = d[x];
	    	target.appendChild(opt);
	    }	
    }
     */
    

    render(){
        return (
            <Box>
                <Text>과외 가능한 지역을 선택해주세요</Text>
                <select>
                    <option value="Sseoul"></option>
                    <option value="Sbusan"></option>
                    <option value="Sdaegu"></option>
                    <option value="Sgwangju"></option>
                    <option value="Sincheon"></option>
                    <option value="Sdaejeon"></option>
                    <option value="Sulsan"></option>
                    <option value="Sgyeonggi"></option>
                    <option value="Sgangwon"></option>
                    <option value="Schungnam"></option>
                    <option value="Schungbuk"></option>
                    <option value="Sjeonnam"></option>
                    <option value="Sjeonbuk"></option>
                    <option value="Sgyeongnam"></option>
                    <option value="Sgyeongbuk"></option>
                    <option value="Sjeju"></option>
                </select>

                <select id = "city"></select>
            </Box>
        );
    }
}

export default  Teasignregion;