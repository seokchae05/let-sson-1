import React from "react"

class Stusignpay extends React.Component{
    render(){
        return (
            <label className="stuJen">
                과외비의 예산이 어떻게 되시나요? (1달 수업 기준)
                <input type="radio" name="teapay" value="10만원 대"></input>10만원 대
                <input type="radio" name="teapay" value="20만원 대"></input>20만원 대
                <input type="radio" name="teapay" value="30만원 대"></input>30만원 대
                <input type="radio" name="teapay" value="40만원 대"></input>40만원 대
                <input type="radio" name="teapay" value="40만원 이상"></input>그 이상
            </label>
        );
    }
}

export default Stusignpay;