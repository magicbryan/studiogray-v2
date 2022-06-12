import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const WorkGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

const WorkItem = styled.div`
    width: calc(50% - 1rem);
    text-align: center;
    h2 {
      text-transform: uppercase;
    }
    @media all and (max-width: 640px) {
      width: 100%;
    }
`

const Work = () => {
    const data = useStaticQuery(graphql`
    query AllWorkQuery {
      allPrismicWork(sort: {fields: first_publication_date, order: DESC}) {
        edges {
          node {
            uid
            data {
              hero_image {
                alt
                gatsbyImageData
              }
              title {
                text
              }
            }
          }
          next {
            uid
            data {
              title {
                text
              }
            }
          }
          previous {
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
    
    `)

  const workData = data.allPrismicWork.edges
  return (
    <Layout>
        {console.log(data)}
        <WorkGrid>
            {workData.map((workItem, index) => {
                const workImg = getImage(workItem.node.data.hero_image)
                return (
                   
                    <WorkItem key={index}>
                        <Link to={`/work/${workItem.node.uid}`}>
                            <GatsbyImage
                                image = {workImg}
                                alt = {workItem.node.data.hero_image.alt ? workItem.node.data.hero_image.alt : ''}
                            />
                            <h2>{workItem.node.data.title.text}</h2>
                        </Link>
                    </WorkItem>
                )
            })}
        </WorkGrid>
    </Layout>
  )
}

export default Work