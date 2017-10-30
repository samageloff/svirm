import React from 'react'
import { shallow } from 'enzyme'
import IntegrationApp from 'common/components/IntegrationApp'
import IntegrationContainer from 'common/components/IntegrationContainer'
import IFrame from 'ambassador-common/utilities/iframe'

describe('Components::IntegrationApp', () => {
  it('should shallow render itself and call IFrame.connect()', () => {
    let connectSpy = sinon.spy(IFrame, 'connect')

    const wrapper = shallow(<IntegrationApp>Child</IntegrationApp>)

    expect(wrapper.find(IntegrationContainer)).to.be.length(1)
    expect(connectSpy.calledOnce).to.be.true
  })

  it('should never update under any circumstances', () => {
    const wrapper = shallow(<IntegrationApp>Child</IntegrationApp>)

    expect(wrapper.instance().shouldComponentUpdate()).to.be.false
  })
})
