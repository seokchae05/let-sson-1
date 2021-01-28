import React from "react";

class SubmitS extends React.Component{
    render(){
        return(
            <body>
                <container>
                    <div>
                        이름
                        <input name ="name"></input>
                    </div>
                    <div>
                        과목
                        <input name ="school"></input>
                    </div>
                    <div>
                        지역
                        <input name ="major"></input>
                    </div>
                    <div>
                        후기
                        <input name ="subject"></input>
                    </div>
                </container>
                <box>
                    <div>
                        소개글
                        <input name ="appeal"></input>
                    </div>
                    <div>
                        목표
                        <input name ="plan"></input>
                    </div>
                </box>
            </body>
        ) 
    }      
}

export default SubmitS;
