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
    width: 50%;
`

const Work = () => {
    const data = useStaticQuery(graphql`
    query AllWorkQuery {
        allPrismicWork {
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
            }
        }    
    }
  
    `)

  const workData = data.allPrismicWork.edges
  return (
    <Layout>
        {console.log(workData)}
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