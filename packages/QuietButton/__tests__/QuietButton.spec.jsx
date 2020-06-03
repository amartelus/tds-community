import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'
// import { Print } from '@tds/core-interactive-icon'
import QuietButton from '../QuietButton'

describe('QuietButton', () => {
  const doShallow = (props = {}) => shallow(<QuietButton {...props}>Words</QuietButton>)
  const doMount = (props = {}) => mount(<QuietButton {...props}>Words</QuietButton>)

  it('renders', () => {
    const quietButton = doShallow()

    expect(quietButton).toMatchSnapshot()
  })

  // from Modal testing file, why mount vs shallow not completely sure
  it('renders', () => {
    const quietButton = doMount()

    expect(quietButton).toMatchSnapshot()
  })

  it('does other things', () => {
    const quietButton = doMount()

    expect(quietButton).toExist()
  })

  it('does not allow custom CSS', () => {
    const quietButton = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(quietButton).not.toHaveProp('className', 'my-custom-class')
    expect(quietButton).not.toHaveProp('style')
  })
  // can we have more than one snapshot?
  // it('renders interactive icons', () => {
  //   const quietButton = mount(
  //     <QuietButton>
  //       <Print />
  //       Print
  //     </QuietButton>
  //   )

  // expect(quietButton).toHaveProp('className', 'my-custom-class')
  // expect(quietButton).toHaveProp('style')
})
// })

// mounting: Full DOM rendering including child components
// shallow: Renders only the single component, not including its children. This is useful to isolate the component for pure unit testing.
// render: no React life cycle, Less costly than mount but provides less functionality

// Always begin with shallow
// If componentDidMount or componentDidUpdate should be tested, use mount
// If you want to test component lifecycle and children behavior, use mount
// If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render
