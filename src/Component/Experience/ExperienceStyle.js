import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled, { css } from "styled-components";
import * as IoIcons from "react-icons/io5";

export const SplideContainer = styled(Splide)`
  position: static;
  height: 100%;
`;

export const SplideItem = styled(SplideSlide)`
  .splide-item-container {
    position: relative;
    width: auto;
    max-width: 992px;
    height: 100%;
    margin: auto auto 5vh;
    display: flex;
    flex-direction: column;
    text-align: start;

    .card-detail ul {
      padding-left: 0rem;
    }

    @media only screen and (min-width: 768px) {
      .card-detail ul {
        padding-left: 2rem;
      }
    }
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    top: 0;
    left: auto;
    bottom: auto;
    right: 10px;
    transform: translateX(0);
  }
`;

export const Arrows = css`
  display: block;
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  position: static;
  top: 0;
  transform: translateY(0);
`;

export const PrevArrow = styled(IoIcons.IoArrowBack)`
  ${Arrows}
`;
export const NextArrow = styled(IoIcons.IoArrowForward)`
  ${Arrows}
`;
