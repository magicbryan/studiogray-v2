import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import styled from "styled-components"

const PressContain = styled.div`
    padding-bottom: 6rem;
    .press-grid {
        column-gap: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }
    .press-item {
        display: block;
        text-align: center;
        margin-bottom: 2rem;
        text-decoration: none;
        line-height: 1.2;
        span {
            display: block;
        }

        img {
            opacity: 1;
            transition: opacity .2s ease-in-out;
            margin-bottom: .3333rem;
        }
        &:hover {
            text-decoration: underline;
            img {
                opacity: .333;
            }
        }
        
    }
    @media all and (max-width: 767px) {
        .press-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

const Press = () => {
    const data = useStaticQuery(graphql`
    query allPressQuery {
        allPrismicPressPage {
          edges {
            node {
              data {
                page_title {
                  text
                }
                body {
                  ... on PrismicPressPageDataBodyPressItem {
                    id
                    primary {
                      date
                      link_to_pdf {
                        link_type
                      }
                      logo {
                        alt
                        gatsbyImageData
                      }
                      publication {
                        text
                      }
                      url_link {
                        url
                      }
                    }
                    slice_type
                  }
                }
              }
            }
          }
        }
      }
    `)
    const pressData = data.allPrismicPressPage.edges[0].node.data
    const pressItems = pressData.body
    return (
        <Layout>
        <SEO title="Press Coverage Studio Gray Sara Gray and Jasmine Vaughan" />
      <div className="contain">
       
        <h1>{pressData.page_title.text}</h1>
        {console.log(pressData)}
        <PressContain>
            <div className="press-grid">
                {
                    pressItems.map((pressItem, i) => {
                        const pressImg = getImage(pressItem.primary.logo)
                        return (
                            <a href={pressItem.primary.url_link.url}  rel="noopener noreferrer nofollow" target="_blank"  className="press-item" key={i}>           
                            <GatsbyImage image={pressImg} alt={pressItem.primary.logo.alt} />
                                <span className="publication">{pressItem.primary.publication.text}</span>
                                <span className="date">{pressItem.primary.date}</span>
                            </a>
                        )
                    })
                }
            </div>
        </PressContain>
      </div>
    </Layout>
    )
}

export default Press
