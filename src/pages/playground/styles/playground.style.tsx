import styled from "styled-components";

const PlaygroundWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100%;
width:100%;
.box{
    width:80%;
    // height:50px;
    border:1px solid #FFF;
    color:#FFF;
    border-radius:10px;
}
.score-board{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem 1.5rem;
    position:relative;
    p{
        font-size:1.25rem;
        font-weight:500;
        color:#FFF;
    }
    .turn{
        position:absolute;
        top:1rem;
        left:46%;
        font-size:1.25rem;
        font-weight:500;
        color:#FB5521;
    }
}
.game-board{
    margin:1rem 0 2rem;
}

`;

export default PlaygroundWrapper;