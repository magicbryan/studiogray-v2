import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import sgIcon from "../images/sg_icon.avif"

const TopNavWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 100px 1fr 1fr;
    margin-bottom: 2rem;
    .icon {
        display: flex;
        justify-content: center;
        
        img {
            max-width: 60px;
            margin: 0;
        }
    }
    a.primary-nav-item {
        text-decoration: none;
        padding-top: 1.667rem;
    }
    #pn-work {
        text-align: left;
    }
    #pn-about {
        text-align: left; 
    }
    #pn-press {
        text-align: right;
    }
    #pn-contact {
        text-align: right;
    }
`
const TopNav = () => {
  return (
    <TopNavWrapper>
        <Link id="pn-work" className="primary-nav-item" to="/work"  >WORK</Link>
        <Link id="pn-about" className="primary-nav-item" to="/about"  >ABOUT</Link>
        <div className="icon">
            <Link to="/"><img src={sgIcon} /></Link>
        </div>
        <Link id="pn-press" className="primary-nav-item" to="#"  >PRESS</Link>
        <Link id="pn-contact" className="primary-nav-item" to="/contact" >CONTACT</Link>    
    </TopNavWrapper>
  )
}

export default TopNav