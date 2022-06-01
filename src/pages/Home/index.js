import React from "react";

import {
  Container,
  BgImage,
  LogoImg,
  BannerWrapper,
  BannerLine,
  MenuWrapper,
  NavWrapper,
  MenuItem,
  BannerInfoWrapper,
  BannerMain,
  HeadInfo,
  BannerLocation,
  BannerNotes,
  Explore,
} from "./styles";
import Bg from "../../assets/home/bgdesk.jpg";
import Logo from "../../assets/shared/logo.svg";

import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <BannerWrapper>
        <LogoImg src={Logo} alt="Logo" />
        <MenuWrapper>
          <BannerLine />
          <NavWrapper>
            <MenuItem>00 Home</MenuItem>
            <MenuItem>01 Destination</MenuItem>
            <MenuItem>02 Crew</MenuItem>
            <MenuItem>03 Technology</MenuItem>
          </NavWrapper>
        </MenuWrapper>
      </BannerWrapper>
      <BannerMain>
        <BannerInfoWrapper>
          <HeadInfo>So you want to travel to</HeadInfo>
          <BannerLocation>Space</BannerLocation>
          <BannerNotes>
            Consectetur cupidatat excepteur culpa qui culpa ipsum ullamco ipsum
            pariatur sit labore qui eiusmod consectetur. Incididunt incididunt
            aliquip ut aliqua esse anim tempor consequat in. Duis labore minim
            est aliquip fugiat labore anim non. Ex non exercitation cupidatat
            cupidatat laboris esse ex incididunt quis minim dolor labore
            laboris.
          </BannerNotes>
        </BannerInfoWrapper>
        <NavLink to="/destination">
          <Explore to="/destination">Explore</Explore>
        </NavLink>
      </BannerMain>
    </Container>
  );
}
