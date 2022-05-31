/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

import Nav from "./nav"
import "./layout.scss"


// styled components

const TopBar = styled.div`
  background-color: white;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  z-index: 2;
`

const Container = styled.div`
  box-sizing: border-box;
  width: 80vw;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  @media all and (max-width: 768px) {
    width: auto;
  }
`
const Layout = ({ children }) => {
 
  return (
    <>
   
    <Container>
      <main>{children}</main>   
    </Container>
    <TopBar />
    <Nav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
