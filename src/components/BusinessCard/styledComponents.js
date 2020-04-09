import styled, { keyframes } from "styled-components";

const imageAnimate = keyframes`
  50% {
    transform: translate(0, 20px);
 }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .image {
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    border: 5px white solid;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
    animation: ${imageAnimate} 3s ease-in-out infinite;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Name = styled.p`
  font-size: 48px;
  text-align: center;
`;

export const JobTitle = styled.p`
  text-align: center;
  opacity: 0.7;
  margin: -40px 0 48px 0;
  small {
    display: block;
  }
`;

export const AnimatedBall = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);

  animation: ${spin} 1000ms linear infinite,
    ${moveLeftToRight} 5s linear infinite;

  -webkit-transition: all 1s ease;
  transition: all 1s ease;

  position: absolute;
  left: 0;
`;

const spin = keyframes`
from { 
  transform: rotate(0deg); 
}
to { 
  transform: rotate(360deg); 
}
`;

const moveLeftToRight = keyframes`
0%   { 
  left: -100px; 
}
  100% { 
    left: 100%; 
  }
`;
