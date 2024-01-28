import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: left;
  padding: 10px 15px;
  align-items: center;
  gap: 40px;

  background-color: #333333;
  position: sticky;
  top: 0;

  border-radius: 7px;
`;
const Logo = styled.div`
  cursor: pointer;
  width: 50px;
  img {
    width: 100%;
    border: 3px solid transparent;
    border-radius: 25%;

    &:hover {
      box-shadow: 0 0 3px white;
      border: 3px solid white;
    }

    &:active {
      border: 3px solid white;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  .link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-family: cursive;
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid transparent;
  }
  .active {
    color: rgba(255, 255, 255, 1);
    padding: 5px 0;
    border-bottom: 2px solid white;
  }
`;

const Select = styled.div`
  background-color: transparent;
  position: relative;

  user-select: none;
  font-family: cursive;
  min-width: 100px;
  .fa-solid{
    padding-left: 10px;
  }
  cursor: pointer;
  .options{
    position: absolute;
    top: 50px;
    right: 0px;
    min-width: 100px;
    background-color: #333333;
    padding: 2px 0;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 1px;
    justify-content: center;
    align-items: center;

    box-shadow: 0 0 3px gray;

    .option{
      font-family: 'Courier New', Courier, monospace;
      padding: 5px 10px;
      border: none;
      border-radius: 10px;
      min-width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 14px;
      text-decoration: none;
    }

    .option:hover{
      background-color: #444444;
    }
  }
`

export { NavContainer, Logo, Links, Select };
