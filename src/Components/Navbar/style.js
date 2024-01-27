import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: left;
  padding: 10px 15px;
  align-items: center;
  gap: 40px;

  background-color: #282828;
  position: sticky;
  top: 0;
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

export { NavContainer, Logo, Links };
