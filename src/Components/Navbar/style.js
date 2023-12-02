import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
  width: 50px;
  img {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 50%;

    &:hover {
      box-shadow: 0 0 2px white;
    }

    &:active {
      border: 1px solid white;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  .link {
    color: rgba(255, 255, 255, 0.9);
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
