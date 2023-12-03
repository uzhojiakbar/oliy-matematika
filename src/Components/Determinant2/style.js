import styled from "styled-components";

const ContainerDet = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    overflow: auto;

    gap: 20px;

    border-left: 2px solid rgba(255, 255, 255, 0.5);
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    /* border-radius: 15px; */
    padding: 10px;
    .determinant {
      display: flex;
      align-items: center;
      .input {
        display: grid;
        grid-template-columns: repeat(2, 60px);

        padding: 5px 10px;
        width: fit-content;
        gap: 10px;
        input {
          border: none;
          outline: none;

          background-color: rgb(66, 63, 63);
          border: 1px solid rgba(255, 255, 255, 0.5);

          min-width: 40px;

          color: white;

          padding: 5px 2px;
        }
      }
      .output {
        display: flex;
        align-items: center;
        padding: 0 10px;

        .javob {
          display: flex;
          align-items: center;

          gap: 5px;
        }
      }
    }
    .option {
      display: flex;
      gap: 10px;
      button {
        color: black;
        padding: 0 5px;
      }
    }
  }
`;

const InputDeterminant = styled.div``;

export { ContainerDet, InputDeterminant };
