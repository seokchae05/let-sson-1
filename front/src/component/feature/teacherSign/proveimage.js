import React from "react"

class Teasignprove extends React.Component{
    render(){
        return (
            <div>
                <label className="teaProve">학력을 증명할 사진을 첨부해주세요 ex)재학증명서
                    <input type="file" accept="image/png, image/jpeg"></input>
                </label>
            </div>
        );
    }
}

export default Teasignprove;