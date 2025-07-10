import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  gap: 20px;
  border: none;
  border-bottom: 3px solid #0a4b96ff;
  background-color: #004b8006;
`;

export const Nav = styled.nav`
  display: flex;
  margin-top: 25px;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
  color: #00080dff;
  &.active {
    border-bottom: 2px solid #0a4b9613;
  }

  &:hover {
    color: #0a4b96;
    font-weight: 700;
  }
`;

export const Logo = styled.img`
  padding-top: 5px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export const LogoText = styled.div`
  font-size: 30px;
  font-family: Dancing Script;
`;

export const Tiker = styled.div`
  white-space: nowrap;
  display: inline-block;
  padding-left: 100%;
  animation: scroll 30s linear infinite;
  color: white;
  font-family: Dancing Script;
  font-style: italic;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
