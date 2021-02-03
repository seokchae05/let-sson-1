import React from "react";

class Checkage extends React.Component {
  render() {
    return (
      <div>
        연령대
        <div>
          <input type="radio" name="chk_info" value="40세 이상"></input>
          40세 이상
        </div>
        <div>
          <input type="radio" name="chk_info" value="30세 이상"></input>
          30세 이상
        </div>
        <div>
          <input type="radio" name="chk_info" value="20세 이상"></input>
          20세 이상
        </div>
        <div>
          <input type="radio" name="chk_info" value="그 외"></input>
          그 외
        </div>
      </div>
    );
  }
}

export default Checkage;
