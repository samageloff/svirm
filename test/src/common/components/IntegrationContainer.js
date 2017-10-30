import React from 'react'
import { shallow } from 'enzyme'
import{ IntegrationContainer } from 'common/components/IntegrationContainer'
import ModalContainer from 'common/components/ModalContainer'
import IFrame from 'ambassador-common/utilities/iframe'

describe('Components::IntegrationContainer', () => {
  let wrapper, actions, iframeAddMessageListenerStub, iframeAddMessageListenerCallbacks

  beforeEach(() => {
    actions = {
      updateIntegration: sinon.spy(),
      toggleActiveState: sinon.spy()
    }
    iframeAddMessageListenerCallbacks = {}
    iframeAddMessageListenerStub = sinon.stub(IFrame, 'addMessageListener', (action, callback) => {
      iframeAddMessageListenerCallbacks[action] = callback
    })
  })

  afterEach(() => {
    IFrame.addMessageListener.restore()
  })

  it('should shallow render itself', () => {
    wrapper = shallow(<IntegrationContainer actions={actions} />)
    wrapper.setState({ initialized: true })
    wrapper.update()
    expect(wrapper.find(ModalContainer)).to.be.length(1)
  })

  it('should add message listeners', () => {
    wrapper = shallow(<IntegrationContainer actions={actions} />)
    expect(iframeAddMessageListenerStub.callCount).to.equal(3)
    expect(iframeAddMessageListenerStub.firstCall.args[0]).to.equal('init')
    expect(iframeAddMessageListenerStub.secondCall.args[0]).to.equal('integration')
    expect(iframeAddMessageListenerStub.thirdCall.args[0]).to.equal('show')
  })

  it('should call actions.updateIntegration and update state when init message is received', () => {
    wrapper = shallow(<IntegrationContainer actions={actions} />)
    iframeAddMessageListenerCallbacks['init']({ integration: { test: 123 }})
    expect(actions.updateIntegration.calledOnce).to.be.true
    expect(actions.updateIntegration.calledWith({ test: 123 })).to.be.true
    wrapper.update()
    expect(wrapper.state().initialized).to.be.true
  })

  it('should call actions.updateIntegration when integration message is received', () => {
    wrapper = shallow(<IntegrationContainer actions={actions} />)
    iframeAddMessageListenerCallbacks['integration']({ integration: { test: 123 }})
    expect(actions.updateIntegration.calledOnce).to.be.true
    expect(actions.updateIntegration.calledWith({ test: 123 })).to.be.true
  })

  it('should call actions.toggleActiveState when show message is received', () => {
    wrapper = shallow(<IntegrationContainer actions={actions} />)
    iframeAddMessageListenerCallbacks['show']()
    expect(actions.toggleActiveState.calledOnce).to.be.true
    expect(actions.toggleActiveState.calledWith(true)).to.be.true
  })

  it('should not update if state.initialized has not changed', () => {
    wrapper = shallow(<IntegrationContainer actions={actions} />)
    expect(wrapper.instance().shouldComponentUpdate(null, { initialized: false })).to.be.false
  })

  it('should update if state.initialized has changed', () => {
    wrapper = shallow(<IntegrationContainer actions={actions} />)
    expect(wrapper.instance().shouldComponentUpdate(null, { initialized: true })).to.be.true
  })
})
