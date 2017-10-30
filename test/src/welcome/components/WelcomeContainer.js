import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import { WelcomeContainer } from 'welcome/components/WelcomeContainer'
import WelcomeLayoutBox from 'welcome/components/WelcomeLayoutBox'
import IFrame from 'ambassador-common/utilities/iframe'

describe('Components::WelcomeContainer', () => {
  let actions, iframeAddMessageListenerCallbacks, iframeAddMessageListenerStub

  beforeEach(() => {
    actions = {
      setCouponCode: sinon.spy(),
      updateAffiliate: sinon.spy()
    }

    iframeAddMessageListenerCallbacks = {}
    iframeAddMessageListenerStub = sinon.stub(IFrame, 'addMessageListener', (action, callback) => {
      iframeAddMessageListenerCallbacks[action] = callback
    })
  })

  afterEach(() => {
    IFrame.addMessageListener.restore()
  })

  const container = Immutable.fromJS({
      'background-color': '#eee',
      'border-width': '2px',
      'border-color': '#eee',
      'border-radius': '3px',
      'padding': '0px 15px'
  })

  it('should shallow render itself', () => {
    const wrapper = shallow(<WelcomeContainer container={container} actions={actions} />)
    const style = wrapper.instance().getStyles()

    expect(wrapper.find(WelcomeLayoutBox)).to.be.length(1)
    expect(style.backgroundColor).to.equal('#eee')
    expect(style.display).to.equal('flex')
  })

  it('should add a message listener for the close action', () => {
    const wrapper = shallow(<WelcomeContainer container={container} actions={actions} />)
    expect(iframeAddMessageListenerStub.callCount).to.equal(2)
    expect(iframeAddMessageListenerStub.firstCall.args[0]).to.equal('affiliate')
    expect(iframeAddMessageListenerStub.secondCall.args[0]).to.equal('code')
  })

  it('should call actions.updateAffiliate when affiliate message is received', () => {
    const wrapper = shallow(<WelcomeContainer container={container} actions={actions} />)
    iframeAddMessageListenerCallbacks['affiliate']({ affiliate: { test: true }})
    expect(actions.updateAffiliate.calledOnce).to.be.true
    expect(actions.updateAffiliate.calledWith({ test: true })).to.be.true
  })

  it('should call actions.setCouponCode when code message is received', () => {
    const wrapper = shallow(<WelcomeContainer container={container} actions={actions} />)
    iframeAddMessageListenerCallbacks['code']({ code: 'test'})
    expect(actions.setCouponCode.calledOnce).to.be.true
    expect(actions.setCouponCode.calledWith('test')).to.be.true
  })

  it('should update when container prop changes', () => {
    const wrapper = shallow(<WelcomeContainer container={container} actions={actions} />)

    let  nextProps = {
      container: container
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.false

    nextProps = {
      container: {
        'background-color': 'yellow',
        'border-width': '2px',
        'border-color': '#eee',
        'border-radius': '3px',
        'padding': '0px 15px'
      }
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true
  })
})
