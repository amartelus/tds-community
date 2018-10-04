import React from 'react'
import PropTypes from 'prop-types'

import Box from '@tds/core-box'
import Card from '@tds/core-card'
import Image from '@tds/core-image'
import Paragraph from '@tds/core-paragraph'
import safeRest from '@tds/shared-safe-rest'

import styles from './Testimonial.scss'

/**
 * Testimonial component for displaying testimonial in a standalone, pre-styled component.
 * @version ./package.json
 */
const Testimonial = ({ testimonial, imgSrc, imgAlt, title, additionalInfo, ...rest }) => {
  return (
    <Card {...safeRest(rest)}>
      <Box between={3}>
        <Paragraph>{testimonial}</Paragraph>
        <div className={styles.imageAndQuote}>
          {imgSrc && (
            <div className={styles.image}>
              <Image src={imgSrc} alt={imgAlt} width={60} height={60} />
            </div>
          )}
          <div>
            <Paragraph bold>{title}</Paragraph>
            <Paragraph>{additionalInfo}</Paragraph>
          </div>
        </div>
      </Box>
    </Card>
  )
}

Testimonial.propTypes = {
  /** Testimonial main text */
  testimonial: PropTypes.string.isRequired,
  /** Image URL - suggested size is 60x60px */
  imgSrc: PropTypes.string,
  /** Image alt text - needed for accessibility */
  imgAlt: PropTypes.string,
  /** Testimonial author credentials - in bold */
  title: PropTypes.string.isRequired,
  /** Testimonial author credentials - more info - normal weight */
  additionalInfo: PropTypes.string.isRequired,
}

Testimonial.defaultProps = {
  imgSrc: undefined,
  imgAlt: undefined,
}

export default Testimonial
