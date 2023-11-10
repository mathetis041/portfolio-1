import styled from "styled-components";
import { SplideSlide, Splide } from "@splidejs/react-splide";

export const ProjectContainer = styled(Splide)`
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: auto;
  padding-top: 70px;
`;

export const ProjectCard = styled(SplideSlide)`
  position: relative;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: start;
  margin-bottom: 200px;
  line-height: 2;

  .card-detail {
    .repo-link,
    .stack span {
      display: flex;
      align-items: center;
      width: fit-content;
    }

    .stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: fit-content;
      margin-bottom: 20px;

      span svg {
        color: #0471a3;
        margin-right: 10px;
      }
    }

    .btn {
      border-radius: 5px;
    }
  }

  .card-image img {
    max-width: 500px;
    max-height: 500px;
    border-radius: 0.3rem;
  }
`;
