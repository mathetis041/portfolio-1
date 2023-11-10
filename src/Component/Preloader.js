import styled from "styled-components";
import logo from "../asset/logo.png";

function Preloader() {
  const SvgFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90px;
    height: 90px;

    .frame {
      width: 90px;
      height: 90px;

      border: 2px solid #333333;
      border-top: 3px solid #fe4d00;
      border-radius: 100%;

      animation: spin 1s infinite;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    img {
      position: absolute;
    }
  `;

  return (
    <div className="preloader-container">
      <SvgFrame>
        <div className="frame" />
        <img src={logo} alt="Michael .A" width="35px" height="35px" />
      </SvgFrame>
    </div>
  );
}

export default Preloader;
