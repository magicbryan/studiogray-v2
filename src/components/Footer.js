import React from 'react'
import styled from "styled-components"
import { InstagramLogo, PinterestLogo } from "phosphor-react";

const FooterWrapper = styled.div`
    margin-top: 8rem;
    text-align: center;
    .footer-social-item {
       display: inline-block;
       margin: 0 .5rem;
    }
`

const Footer = () => {
  return (
    <FooterWrapper>
    <span className="footer-social-item">
        <a href="https://www.instagram.com/_studiogray_/"  target="_blank"><span className="sr-only">Instagram _studiogray_</span><InstagramLogo size={28}/></a>
    </span>
    <span className="footer-social-item">
        <a href="https://www.pinterest.com/studiograypdx/"  target="_blank"><span className="sr-only">Pinterest studiograypdx</span><PinterestLogo size={28}/></a>
    </span>
    </FooterWrapper>
  )
}

export default Footer