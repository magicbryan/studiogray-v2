import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const LandImgWrapper = styled.div`
    margin-bottom: 2rem;
`

const LandscapeImage = (data) => {
  const imgLand = getImage(data.data.primary.landscape_image)
  return (
    <LandImgWrapper>
        <GatsbyImage image={imgLand} alt={data.data.primary.landscape_image.alt ? data.data.primary.landscape_image.alt : ''} />
    </LandImgWrapper>
  )
}

export default LandscapeImage