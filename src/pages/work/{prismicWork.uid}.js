import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Layout from '../../components/layout'
import PortraitImages from '../../components/PortraitImages'
import LandscapeImage from '../../components/LandscapeImage'

const WorkDescWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  p {
    margin-left: auto;
    margin-right: auto;
  }
  h1.work-item-title {
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`

const WorkPage = ({data}) => {
  const workData = data.prismicWork.data
  const heroImg = getImage(workData.hero_image)
  return (
    <Layout>
    {console.log(data)}

      <div className="work-hero-image">
        <GatsbyImage image={heroImg} alt={workData.hero_image.alt ? workData.hero_image.alt : ''} />
      </div>

      

      <WorkDescWrapper>
        <h1 className="work-item-title">{workData.title.raw[0].text}</h1>
        <div dangerouslySetInnerHTML={{__html: workData.description.html}} />
      </WorkDescWrapper>

      <div className="work-gallery">
        {workData.body.map((imageRow, index)=>{
          switch(imageRow.slice_type) {
            case 'work_landscape_image':
              return (
                <LandscapeImage data={imageRow} key={index} />
              )
              break;
            case 'work_portrait_images':
              return (
                <PortraitImages data={imageRow} key={index} />
              )
              break;
            default:
              // code block
          }
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
query getSingleWork($uid: String) {
  prismicWork(uid: {eq: $uid}) {
    data {
      body {
        ... on PrismicWorkDataBodyWorkLandscapeImage {
          id
          slice_type
          primary {
            landscape_image {
              alt
              gatsbyImageData
            }
          }
        }
        ... on PrismicWorkDataBodyWorkPortraitImages {
          id
          slice_type
          primary {
            portrait_image_1 {
              alt
              gatsbyImageData
            }
            portrait_image_2 {
              alt
              gatsbyImageData
            }
          }
        }
      }
      description {
        html
      }
      hero_image {
        alt
        gatsbyImageData
      }
      title {
        raw
      }
    }
    uid
    id
  }
}
`

export default WorkPage