import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import QuietButton from '../QuietButton'

describe('QuietButton', () => {
  const doShallow = (props = {}) => shallow(<QuietButton {...props} />)
  const doMount = (props = {}) => mount(<QuietButton {...props} />)

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
})

// mounting: Full DOM rendering including child components
// shallow: Renders only the single component, not including its children. This is useful to isolate the component for pure unit testing.
// render: no React life cycle, Less costly than mount but provides less functionality

// Always begin with shallow
// If componentDidMount or componentDidUpdate should be tested, use mount
// If you want to test component lifecycle and children behavior, use mount
// If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render
