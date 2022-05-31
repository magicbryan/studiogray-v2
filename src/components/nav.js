import React, {useState} from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { InstagramLogo, PinterestLogo, CaretUp } from "phosphor-react";
//import {GlobalDispatchContext} from "../context/GlobalContextProvider"
import sgIcon from "../images/sg_icon.avif"


const Branding = styled.div`
    position: relative;
    max-width: 60px;
 
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    a {
        text-decoration: none;
        letter-spacing: .5px;
    }
    .logo {
        max-width: 200px;
       
    }
    .icon {
        padding-top: 15px;
        max-width: 50px;
        transform: scale(1);
        transition: all .2s ease-in;
     
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`

const BottomBar = styled.div`
    background: white;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 3;

    .bottom-bar-fill {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        z-index: 2;
    }
`

const PrimaryNav = styled.nav`
    background: white;
    border-top: 1px solid black;
    position: absolute;
    width: 100%;
    margin: 0 auto;
    height: 51px;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 15px;
    z-index: 9;
    transform: translateY(-1px);
    transition: transform .3s ease-in;
    .contain {
        display: flex;
        justify-content: center;
        > a {
        text-decoration: none;
        display: inline-block;
        letter-spacing: .5px;
        pointer-events: none;
        opacity: 0;
        transition: opacity .3s ease-in;
        &:before {
            content: '';
            vertical-align: middle;
            display: inline-block;
            height: 1px;
            width: 12px;
            background: #ccc;
            margin: 0 15px;
        }
        &:first-child:before {
           
            content: none;
            padding: 0;

        }
    }
      
    } 
    
    &.open {
        transform: translateY(-51px);
        .contain {
            > a {
                pointer-events: auto;
                opacity: 1;
            }
        }
    }
    .primary-nav-insta {
        margin-left: 40px;
        a {
            pointer-events: auto;
        }
    }
    .primary-nav-pinterest {
        margin-left: 20px;
        a {
            pointer-events: auto;
        }
    }
   

    
    
    @media all and (max-width: 420px) {
        background: rgba(255,255,255, .8);
        position: fixed;
        height: 100vh;
        top: 100vh;
        align-items: center;
        transition: all .3s ease-in;
        border-top: 0;
        &.open {
            transform: translateY(0);
            top: 0;
        }
        .contain {
            padding-top: 60px;
            flex-direction: column;
            > a {
                display: block;
                text-align:center;
                margin-bottom: 20px;
            }
            > a:before {
                content: none;
                padding: 0;
            }
        }
        a {
            display: block;
            text-align:center;
            margin-bottom: 20px;
        }
        a:before {
            content: none;
            padding: 0;
        }
        .primary-nav-insta, .primary-nav-pinterest {
            margin-left: 0;
        }
        
    }

`
const UpArrow = styled.div`
    position: fixed;
    pointer-events: none;
    cursor: pointer;
    bottom: 70px;
    width: 100%;
    left:0;
    opacity: 1;
    transition: all .3s ease;
    text-align: center;
    &.hide {
        opacity: 0;
    }
    svg {
        pointer-events: auto;
    }
    /* &:hover {
        transform: scale(1.1);
    } */
`

const Nav = () => {
    // const data = useStaticQuery(graphql`
    // query NavElements {
    //     allPrismicSettingsLogoNav {
    //     edges {
    //         node {
    //         data {
    //             logo {
    //             url
    //             alt
    //             }
    //             primary_nav {
    //             label
    //             link
    //             }
    //             icon {
    //             url
    //             alt
    //             }
    //         }
    //         }
    //     }
    //     }
    // }
    // `)

    const [showNav, setShowNav] = useState(false);
    const onClickShowNavHandler = () => setShowNav(value => !value);

    // //reset home page to yPos global state to 0
    // const dispatch = useContext(GlobalDispatchContext)
    // const handleMainNavClick = () => {
    //     dispatch({
    //         type: 'SET_Y',
    //         yPos: 0
    //     })
    // }

   // const navData = data.allPrismicSettingsLogoNav.edges[0].node.data

    return (
        <BottomBar>
            <UpArrow  className={showNav ? 'hide' : null}><CaretUp onClick={onClickShowNavHandler} weight="thin" size={50}/></UpArrow>
            <PrimaryNav className={showNav ? 'open' : null}>
                <div className="contain">
                <Link className="primary-nav-item" to="/work"  >Featured Projects</Link>
                <Link className="primary-nav-item" to="/about"  >About</Link>
                <Link className="primary-nav-item" to="#"  >Careers</Link>
                <Link className="primary-nav-item" to="#"  >Press</Link>
                <Link className="primary-nav-item" to="/contact" >Contact</Link>    
                <span className="primary-nav-insta">
                        <a href="https://www.instagram.com/_studiogray_/"  target="_blank"><span className="sr-only">Instagram _studiogray_</span><InstagramLogo size={28}/></a>
                    </span>
                    <span className="primary-nav-pinterest">
                    <a href="https://www.pinterest.com/studiograypdx/"  target="_blank"><span className="sr-only">Pinterest studiograypdx</span><PinterestLogo size={28}/></a>
                </span>
                </div>
            </PrimaryNav>
            <Branding>
              
                <div className="icon">
                    <img onClick={onClickShowNavHandler} src={sgIcon} />
                </div>
              
              
            </Branding>
            <div className="bottom-bar-fill"></div>
        </BottomBar>
    )
}

export default Nav