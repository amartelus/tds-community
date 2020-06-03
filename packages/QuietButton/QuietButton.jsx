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
  '& > *': {
    color: 'blue',
  },
  '&:last-child': {
    color: 'red',
  },
}

const StyledQuietButton = styled.button(baseButton, small, borders.rounded)

const ButtonWrapper = styled.div(wrapper)

const SpaceDiv = styled.div`
  min-width: 10px;
`
/**
 * The quiet button is used for optional actions, and only comes in one variant and size
 * @version ./package.json
 */

const QuietButton = ({ children }) => {
  const insertSpacesIntoArray = (arr, value) => {
    return arr.reduce((result, element, index, array) => {
      result.push(element)

      if (index < array.length - 1) {
        result.push(value)
      }

      return result
    }, [])
  }

  return (
    <StyledQuietButton>
      <ButtonWrapper>
        {Array.isArray(children) ? insertSpacesIntoArray(children, <SpaceDiv />) : children}
      </ButtonWrapper>
    </StyledQuietButton>
  )
}

QuietButton.propTypes = {
  /**
   * Button children.
   */
  // this is allowing children of any type essentially
  // children: PropTypes.node.isRequired, // look up way to specifiy min length of 1. we don't check type, just length
  // children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
  //   .isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default QuietButton
