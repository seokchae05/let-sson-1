import React from "react";

class SubmitT extends React.Component{
    render(){
        return(
            <body>
                <container>
                    <div>
                        이름
                        <input name ="name"></input>
                    </div>
                    <div>
                        학교
                        <input name ="school"></input>
                    </div>
                    <div>
                        학과
                        <input name ="major"></input>
                    </div>
                    <div>
                        주요 과목
                        <input name ="subject"></input>
                    </div>
                    <div>
                        지역
                        <input name ="location"></input>
                    </div>
                </container>
                <box>
                    <div>
                        경력
                        <input name ="career"></input>
                    </div>
                    <div>
                        소개글
                        <input name ="appeal"></input>
                    </div>
                    <div>
                        계획
                        <input name ="plan"></input>
                    </div>
                </box>
            </body>
        ) 
    }      
}

export default SubmitT;
