import styled from "styled-components";

const ContainerDet = styled.div`
    padding: 50px 20px;
`;

const Main = styled.div`
`

const Title = styled.div`
  border-left: 2px solid white;
  padding: 10px;
`

const Body = styled.div`
  display: flex;

  height: 200px;
  border: 1px solid red;
`

const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ type }) => type[0]},auto);
  align-items: center;
  input{
    border: none;
    background-color: #333333;
    outline: none;
    padding: 10px;
    margin: 5px;
    height: 40px;
    max-width: 90px;
}
`

const Res = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;
  justify-content: center;

  padding: 0 15px;

  .det2{
    display: grid;
    grid-template-columns: repeat(2,auto);
    border: 2px solid white;
    border-top: none;
    border-bottom: none;
    gap: 40px;
    padding: 10px 30px;
    span{
    }
  }
`

// const Select = styled.div`
//   display: flex;
//   gap: 10px;
//   select {
//     color: black;
//   }
//   option {
//     color: black;
//   }
// `;

// const CalcingDeterminantDesgin = styled.div`
//   display: flex;
//   flex-direction: column;
//   overflow: auto;
//   gap: 20px;
//   border-left: 2px solid rgba(255, 255, 255, 0.5);
//   padding: 10px;
//   .determinant {
//     display: flex;
//     align-items: center;
//     .input {
//       display: grid;
//       grid-template-columns: repeat(
//         ${({ value }) => (value ? value : 1)},
//         60px
//       );

//       padding: 5px 10px;
//       width: fit-content;
//       gap: 10px;
//       input {
//         border: none;
//         outline: none;

//         background-color: rgb(66, 63, 63);
//         border: 1px solid rgba(255, 255, 255, 0.5);

//         min-width: 40px;

//         color: white;

//         padding: 5px 2px;
//       }
//     }
//     .output {
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       padding: 0 10px;

//       .javob {
//         width: fit-content;
//         display: flex;
//         align-items: center;

//         gap: 5px;
//       }
//     }
//   }
//   .option {
//     display: flex;
//     gap: 10px;
//     button {
//       color: black;
//       padding: 0 5px;
//     }
//   }
// `;

// const InputDeterminant = styled.div``;

export { ContainerDet, Main, Title, Body, Inputs, Res };
