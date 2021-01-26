import React from "react";
import HeadButton from "../component/layout/header"

class Findpassword extends React.Component{
    render(){
        return(
            <div>
                <HeadButton />
                <div>
                    <label className="tofindName">
                        이름 혹은 별명<input type="text"></input>
                    </label>
                </div>

                <div>
                    <label className="tofindtel">
                        전화번호<input type="text" placeholder="숫자로만 입력해주세요"></input>
                    </label>
                </div>

                <button>찾기</button>
            </div>
        );
    }
}

export default Findpassword;