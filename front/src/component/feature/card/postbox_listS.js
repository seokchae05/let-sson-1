import React from "react";
import styled from "styled-components";

const Table = styled.div`
border: 1px solid #444444;
table{
    width: 100%;
}
th, td {
    border: 1px solid #444444;
}
.headtr{
    border-collapse: collapse;
}
`


class PostboxList extends React.Component{
    render(){
        return(
            <div>
                <Table>
                        <table>
                        <tr>
                            <td>000선생님</td>
                            <td>기간:2021.1~</td>
                            <td><button>자세히 보기</button>섹션3</td>
                        </tr>
                        <tr>
                            <td>섹션4</td>
                            <td>섹션5</td>
                            <td>섹션6</td>
                        </tr>
                        <tr>
                            <td>섹션7</td>
                            <td>섹션8</td>
                            <td>섹션9</td>
                        </tr>
                    </table>
                </Table>
            </div>
        )
    }
}

export default PostboxList;