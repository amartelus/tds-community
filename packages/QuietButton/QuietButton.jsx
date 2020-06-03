import React from 'react'
import styled from 'styled-components'
import { small } from '@tds/shared-typography'
import { borders } from '@tds/shared-styles'
import PropTypes from 'prop-types'

const baseButton = {
  boxSizing: 'border-box',
  margin: '2px 0',
  padding: '0',
  cursor: 'pointer',
  background: '#FFFFFF',
  transition: 'all 0.2s ease-in-out',
  minWidth: '44px',
  height: '28px',
  border: '1px solid #71757B',
  position: 'relative',
  borderRadius: '3px',
  color: '#2A2C2E',
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
    border: '2px solid white',
    boxShadow: '0 0 0 3px #71757B, 0 0 0 1px #54595F inset',
    outline: 'none !important',
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
}

const wrapper = {
  margin: '3px 16px 5px 16px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

const StyledQuietButton = styled.button(baseButton, small, borders.rounded)

const ButtonWrapper = styled.div(wrapper)
/**
 * The quiet button is used for optional actions, and only comes in one variant and size
 * @version ./package.json
 */

const QuietButton = props => {
  // const noDisabled = preventDisabling()
  return (
    <StyledQuietButton>
      <ButtonWrapper>{props.children}</ButtonWrapper>
    </StyledQuietButton>
  )
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
