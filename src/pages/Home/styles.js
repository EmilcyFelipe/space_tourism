import styled from "styled-components";
import Bg from "../../assets/home/bgdesk.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center center;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  padding-left: 20px;
`;

export const BannerLine = styled.div`
  height: 1px;
  width: 60%;
  background-color: #808080;
  position: absolute;
  left: -58%;
`;
export const MenuWrapper = styled.div`
  backdrop-filter: blur(3px);
  background-color: rgb(255, 255, 255, 0.1);
  padding: 25px 60px;
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavWrapper = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled.N`
  & {
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const BannerMain = styled.div`
  bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  box-sizing: border-box;
`;
export const BannerInfoWrapper = styled.div`
  width: 40%;
`;

export const HeadInfo = styled.h3`
  color: #fff;
  font-family: "Barlow Condensed";
  font-size: 28px;
`;

export const BannerLocation = styled.h2`
  color: #fff;
  font-family: "Bellefair";
  font-size: 56px;
`;

export const BannerNotes = styled.p`
  color: #fff;
  text-align: justify;
  font-family: "Bellefair";
`;

export const Explore = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 125px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: "Bellefair";
`;
