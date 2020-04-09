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
  margin: -40px 0 20px 0;
  small {
    display: block;
  }
`;

export const DownloadButton = styled.a`
   {
    display: flex;
    overflow: hidden;

    margin: 0 52px;
    padding: 12px 12px;
    background: #161616;

    cursor: pointer;
    user-select: none;
    transition: all 150ms linear;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;

    color: #fff;
    border: 0 none;
    border-radius: 36px;

    font-size: 13px;
    font-weight: 500;
    line-height: 1.3;

    justify-content: center;
    align-items: center;
    flex: 0 0 160px;

    &:hover {
      transition: all 150ms linear;

      opacity: 0.85;
    }

    &:active {
      transition: all 150ms linear;
      opacity: 0.75;
    }

    &:focus {
      outline: 1px dotted #959595;
      outline-offset: -4px;
    }
  }
  &:focus {
    outline: 1px dotted white;
    outline-offset: -4px;
  }
`;

export const Summay = styled.p`
  margin: 8px 0;
  text-align: center;
  font-size: 0.9rem;
`;
