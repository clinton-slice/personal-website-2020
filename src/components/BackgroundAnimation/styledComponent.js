import styled, { keyframes } from "styled-components";

const cloudAnimate = keyframes`
0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-760px);
  }
`;

const itemsAnimate = keyframes`
0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-640px);
  }
`;

const stickAnimate = keyframes`
0%, 100% {
    transform: translateX(0px);
  }
  30% {
    transform: translateX(-60px);
  }
  70% {
    transform: translateX(20px);
  }
`;

export const Sketch = styled.div`
  width: 100%;
  border: 5px solid red;
`;
