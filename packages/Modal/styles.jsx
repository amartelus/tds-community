import styled from 'styled-components'
import { media } from '@tds/core-responsive'
import { colorWhite, colorShark, colorAccessibleGreen, colorPrimary } from '@tds/core-colours'

export const FullScreenOverlay = styled.div(props => {
  if (props && props.modalOpen) {
    return {
      backgroundColor: colorWhite,
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '1400',
      ...media.from('md').css({
        backgroundColor: 'rgb(247,247,248, 0.94)',
      }),
    }
  }
  return null
})

export const StyledModal = styled.div({
  height: '100%',
  width: '100%',
  position: 'relative',
  top: '0%',
  left: '0%',
  '> button:first-child': {
    display: 'flex',
    alignSelf: 'flex-end',
    background: 'none',
    border: 'none',
    margin: '1rem 0.5rem',
  },
  ...media.from('md').css({
    margin: '0 auto',
    maxWidth: '570px',
    maxHeight: '330px',
    minHeight: '330px',
    borderRadius: '0.25rem',
    boxShadow: '0 0 16px 0 rgba(0,0,0,0.1)',
    zIndex: '2000',
    backgroundColor: colorWhite,
    top: '29%',
  }),
})

export const Header = styled.span({
  fontSize: '1rem',
  fontWeight: 'bold',
  color: colorShark,
})

export const CTAWrapper = styled.div(props => {
  if (props && !props.cancelCTAExists) {
    return {
      ...media.from('md').css({
        display: 'flex',
        flexFlow: 'row',
        '> button:first-child': {
          marginRight: '1rem',
        },
      }),
    }
  }
  return {
    display: 'flex',
    flexFlow: 'column',
    '> button:first-child': {
      marginBottom: '1rem',
    },
    ...media.from('md').css({
      flexFlow: 'row',
      '> button:first-child': {
        marginRight: '1rem',
        marginBottom: '0rem',
      },
    }),
  }
})

export const InvertedPrimaryButton = styled.button({
  height: '3.25rem',
  width: '100%',
  border: '1px solid #248700',
  borderRadius: '0.25rem',
  backgroundColor: colorWhite,
  color: colorAccessibleGreen,
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background 0.2s',
  ...media.from('md').css({
    width: '180px',
  }),
  '&:hover': {
    color: colorWhite,
    backgroundColor: colorPrimary,
    boxShadow: '0 0 0 1px',
  },
})

export const CloseButtonWrapper = styled.div({
  float: 'right',
  padding: '1rem 1rem 0 0',
  position: 'absolute',
  right: '0%',
  top: '0%',
})

export const ModalWrapper = styled.div({
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-between',
  padding: '3rem 4rem 3rem 3rem',
})
