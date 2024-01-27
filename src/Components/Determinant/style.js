import styled from "styled-components";

const ContainerDet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .section {
  }
`;

const Select = styled.div`
  display: flex;
  gap: 10px;
  select {
    color: black;
  }
  option {
    color: black;
  }
`;

const CalcingDeterminantDesgin = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  padding: 10px;
  .determinant {
    display: flex;
    align-items: center;
    .input {
      display: grid;
      grid-template-columns: repeat(
        ${({ value }) => (value ? value : 1)},
        60px
      );

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
      gap: 10px;
      padding: 0 10px;

      .javob {
        width: fit-content;
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
`;

const InputDeterminant = styled.div``;

export { CalcingDeterminantDesgin, ContainerDet, InputDeterminant, Select };
