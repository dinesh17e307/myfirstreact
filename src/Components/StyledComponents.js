import React from "react";
import styled from "styled-components";
function StyledComponents() {
  const StyleDiv = styled.div`
    background-color: violet;
    color: black;
    font-size: xx-large;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
  `;
  return (
    <StyleDiv>
      hi this is dinesh ,and i'm currently learning about styled components ,a
      third party modules for dependency
    </StyleDiv>
  );
}

export default StyledComponents;
