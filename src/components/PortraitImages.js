import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const PortImageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    margin-bottom: 2rem;
    .port-img {
      aspect-ratio: 100 / 135;
      .gatsby-image-wrapper-constrained {
        height: 100%;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

const PortraitImages = (data) => {
  console.log(data)
  const imgPort1 = getImage(data.data.primary.portrait_image_1)
  const imgPort2 = getImage(data.data.primary.portrait_image_2)

  return (
    <PortImageWrapper>
        <div className="port-img port-img-1">
            <GatsbyImage image={imgPort1} alt={data.data.primary.portrait_image_1.alt ? data.data.primary.portrait_image_1.alt : ''} />
        </div>
        <div className="port-img port-img-2">
            <GatsbyImage image={imgPort2} alt={data.data.primary.portrait_image_2.alt ? data.data.primary.portrait_image_2.alt : ''} />
        </div>
    </PortImageWrapper>
  )
}

export default PortraitImages