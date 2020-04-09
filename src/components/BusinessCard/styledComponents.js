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
    width: 135px;
    height: auto;
    background-color: white;
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
  font-size: 35px;
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
