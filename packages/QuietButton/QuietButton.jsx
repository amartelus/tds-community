import React from 'react'
import styled from 'styled-components'
import { small } from '@tds/shared-typography'
import { borders } from '@tds/shared-styles'
import PropTypes from 'prop-types'

const baseButton = {
  boxSizing: 'border-box',
  margin: '3px',
  padding: '0 2rem',
  cursor: 'pointer',
  background: '#FFFFFF',
  transition: 'all 0.2s ease-in-out',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  minWidth: '44px',
  border: '1px solid #71757B',
  position: 'relative',
  borderRadius: '3px',
  color: '#2A2C2E',

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
}

const StyledQuietButton = styled.button(baseButton, small, borders.rounded, {
  '&:hover': {
    border: '3px solid #71757B',
    midWidth: '72px',
  },
  '&:active': {
    border: '3px solid #54595F',
    background: '#D8D8D8',
  },
  '&:focus': {
    background: '#FFFFFF',
    border: '2px solid red',
    outline: '3px solid blue',
    '&:before': {
      position: 'absolute',
      content: '',
      zIndex: -1,
      border: '3px solid green',
    },
  },
})

/**
 * The quiet button is used for optional actions, and only comes in one variant and size
 * @version ./package.json
 */

const QuietButton = props => {
  // const noDisabled = preventDisabling()
  return <StyledQuietButton>{props.children}</StyledQuietButton>
}
// check with Jesse - 'we will not be programmatically enforcing child types'
// so do we need this propTypes object?
// how to include interactive icons on this list?
//
QuietButton.propTypes = {
  /**
   * Button text.
   */
  // this is allowing children of any type essentially
  children: PropTypes.node.isRequired,
}
export default QuietButton

// Focus: solid white fill #FFFFFF

// first border: 2px white #FFFFFF (inside)

// second border: 3px  Raven grey #71757B (outside)

// third border: 3px Shuttle grey #54595F(inside)

// children: or([
//   PropTypes.string,
//   componentWithName('A11yContent'),
//   componentWithName('InteractiveIcon'),
// ]).isRequired
