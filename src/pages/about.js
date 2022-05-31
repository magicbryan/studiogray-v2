import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PrismicRichText } from '@prismicio/react'
import Layout from "../components/layout"
import styled from "styled-components"

const AboutContain = styled.div`
display: grid;
grid-template-columns: 14fr 2fr 14fr;
grid-template-areas: "image spacer copy";
margin-top: 60px;
.about-image {
  grid-area: "image";
}
.spacer {
  grid-area: "spacer";
}
.about-copy {
  grid-area: "copy";
}
@media all and (max-width: 767px) {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0;
  .about-image {
    margin-bottom: 30px;
  }
}

`

const AboutPage = () => {
const data = useStaticQuery(graphql`
  query AllAboutQuery {
    allPrismicAboutPage {
      edges {
        node {
          data {
            about_image {
              alt
              gatsbyImageData
            }
            content {
              richText
            }
            title {
              text
            }
          }
        }
      }
    }
  }  
`)

  const aboutData = data.allPrismicAboutPage.edges[0].node.data
  const aboutImg = getImage(aboutData.about_image)
  return (
    <Layout>
    <SEO title="About Sara Gray and Jasmine Vaughan" />
      <div className="contain">

        <AboutContain>
          <div className="about-image">
            <GatsbyImage
              image={aboutImg}
              alt={aboutData.about_image.alt ? aboutData.about_image.alt : ''}
            />
          </div>
          <div className="spacer"></div>
          <div className="about-copy">
          <PrismicRichText field={aboutData.content.richText} />
              <p><Link to="/contact">Get in touch here!</Link></p>
          </div>
        
        </AboutContain>
      </div>
    </Layout>
  )
}


export default AboutPage
