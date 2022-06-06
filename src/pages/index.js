import React, {useRef} from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'
import StudioImg from "../images/SG-logo-studio.png"
import GrayImg from "../images/SG-logo-gray.png"

const SliderWrapper = styled.div `
  max-width: 66.667vw;
  margin: 0 auto;
  padding: 0 !important;
`
const LogoWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 33.333vh;
  width: 100%;
  z-index: 9;
  .split-logo-right{
    text-align: right;
    img {
      max-width: 40%;
    }
   
  }
  .split-logo-left {
    text-align: left;
    max-width: 40%;
  }
  @media all and (max-width: 1024px) {
    .split-logo-right img, .split-logo-left {
      max-width: 40%;
    }
  }
  @media all and (max-width: 768px) {
    .split-logo-right img, .split-logo-left {
      max-width: 50%;
    }
    .split-logo-left {
      margin-top: 10px;
    }
  }


`


const Index = () => {
  const data = useStaticQuery(graphql`
  query AllHomeQuery {
    allPrismicHomePage {
      edges {
        node {
          data {
            hero_slider {
              link_url
              slide_image {
                alt
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }

  `)
      // slider settings
      const settings = {
      autoplay: true,
      centerMode: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '10px',
  };
  const slides = data.allPrismicHomePage.edges[0].node.data.hero_slider
  const slider1 = useRef(null)
  return (
    <Layout>
      <LogoWrapper>
        <div className="split-logo-right">
          <img className="split-logo-right" src={StudioImg} alt="Studio" />
        </div>
        <div className="split-logo-left">
          <img src={GrayImg} alt="Gray" />
        </div>
      </LogoWrapper>
      <SliderWrapper>
        <Slider ref={slider1} {...settings}>
          {slides.map((slide, index) => {
            let slideImg = getImage(slide.slide_image)
            return (
            <div key={index}>

              <GatsbyImage image={slideImg} alt="" />
            </div>
            )
          }) }
        </Slider> 
      </SliderWrapper>
    </Layout>
  )
}

export default Index
