import React from "react"

class Teasignregion extends React.Component{
    render(){
        return (
            <div>
                과외 가능한 지역을 선택해주세요
                <input type="text" list="dtl"></input>
                <datalist id="dtl">
                    <option value="서울특별시"></option>
                    <option value="부산광역시"></option>
                    <option value="대구광역시"></option>
                    <option value="인천광역시"></option>
                    <option value="광주광역시"></option>
                    <option value="대전광역시"></option>
                    <option value="울산광역시"></option>
                    <option value="경기도"></option>
                    <option value="강원도"></option>
                    <option value="충청북도"></option>
                    <option value="충청남도"></option>
                    <option value="전라북도"></option>
                    <option value="전라남도"></option>
                    <option value="경상북도"></option>
                    <option value="경상남도"></option>
                    <option value="제주도"></option>
                </datalist>
            </div>
        );
    }
}

export default Teasignregion;