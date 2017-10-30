import React from 'react'
import { shallow } from 'enzyme'
import { ModalContainer } from 'common/components/ModalContainer'
import ModalContentContainer from 'common/components/ModalContentContainer'
import IFrame from 'ambassador-common/utilities/iframe'

describe('Components::ModalContainer', () => {
  let wrapper, actions, iframeAddMessageListenerCallbacks, iframeAddMessageListenerStub, iframeSendMessageStub
  const isOpen = true

  beforeEach(() => {
    actions = {
      toggleActiveState: sinon.spy()
    }
    iframeAddMessageListenerCallbacks = {}
    iframeAddMessageListenerStub = sinon.stub(IFrame, 'addMessageListener', (action, callback) => {
      iframeAddMessageListenerCallbacks[action] = callback
    })

    iframeSendMessageStub = sinon.stub(IFrame, 'sendMessage')
  })

  afterEach(() => {
    IFrame.addMessageListener.restore()
    IFrame.sendMessage.restore()
  })

  it('should shallow render itself', () => {
    wrapper = shallow(<ModalContainer isOpen={isOpen}>Child</ModalContainer>)
    expect(wrapper.find(ModalContentContainer)).to.be.length(1)
  })

  it('should add a message listener for the close action', () => {
    wrapper = shallow(<ModalContainer actions={actions} />)
    expect(iframeAddMessageListenerStub.callCount).to.equal(1)
    expect(iframeAddMessageListenerStub.firstCall.args[0]).to.equal('close')
  })

  it('should call actions.toggleActiveState when close message is received', () => {
    wrapper = shallow(<ModalContainer actions={actions} />)
    iframeAddMessageListenerCallbacks['close']()
    expect(actions.toggleActiveState.calledOnce).to.be.true
    expect(actions.toggleActiveState.calledWith(false)).to.be.true
  })

  it('should send a close message back to the iframe when close message is received', (done) => {
    wrapper = shallow(<ModalContainer actions={actions} />)

    // Timeout is needed because there is a setTimeout in the component
    setTimeout(() => {
      expect(iframeSendMessageStub.callCount).to.equal(1)
      expect(iframeSendMessageStub.firstCall.args[0]).to.equal('close')
      done()
    }, 300)
  })

  it('should return a style object with opacity: 1 if isOpen is true', () => {
    wrapper = shallow(<ModalContainer isOpen={isOpen}>Child</ModalContainer>)

    const style = wrapper.instance().getStyles()
    expect(style.opacity).to.equal(1)
  })

  it('should return a style object with opacity: \'0\' if isOpen is false', () => {
    wrapper = shallow(<ModalContainer isOpen={false}>Child</ModalContainer>)

    const style = wrapper.instance().getStyles()
    expect(style.opacity).to.equal(0)
  })

  it('should show "Powered by" text when showBranding is true', () => {
    wrapper = shallow(<ModalContainer isOpen={isOpen} showBranding={true}>Child</ModalContainer>)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find('span').props().className).to.equal('brand-stamp')
  })

  it('should not show "Powered by" text when showBranding is false', () => {
    wrapper = shallow(<ModalContainer isOpen={isOpen} showBranding={false}>Child</ModalContainer>)
    expect(wrapper.find('span')).to.have.length(0)
  })
})
