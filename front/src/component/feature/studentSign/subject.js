import React from "react"

class Stusignsubject extends React.Component{
    render(){
        return (
            <div>
                <label className="teaName">어떤 과목을 배우시겠습니까?
                    <br/>
                    <input type="button" value="국어"></input>
                    <input type="button" value="영어"></input>
                    <input type="button" value="수학"></input>
                    <input type="button" value="사회"></input>
                    <br/>
                    <input type="button" value="과학"></input>
                    <input type="button" value="자격증"></input>
                    <input type="button" value="레슨"></input>
                    <input type="button" value="프로그래밍"></input>
                    <br/>
                    <input type="button" value="자소서"></input>
                    <input type="button" value="논술"></input>
                    <input type="button" value="회화"></input>
                    <input type="button" value="면접"></input>
                </label>
            </div>
        );
    }
}

export default Stusignsubject;