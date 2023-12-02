import styled from "styled-components";

const ContainerDet = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 10px 0;
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
    }
  }
  button {
    color: black;
    padding: 0 5px;
  }
`;

const InputDeterminant = styled.div``;

export { ContainerDet, InputDeterminant };
