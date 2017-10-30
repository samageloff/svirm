import React from 'react'
import { shallow } from 'enzyme'
import IFrame from 'ambassador-common/utilities/iframe'
import { ModalContentContainer } from 'common/components/ModalContentContainer'

describe('Components::ModalContentContainer', () => {
  let wrapper, iframeSendMessageStub
  const actions = {
    toggleActiveState: sinon.spy()
  }
  const isOpen = true

  beforeEach(() => {
    iframeSendMessageStub = sinon.stub(IFrame, 'sendMessage')
  })

  afterEach(() => {
    IFrame.sendMessage.restore()
  })

  it('should return a style object with translateY(0) scale(1) if isOpen is true', () => {
    wrapper = shallow(<ModalContentContainer actions={actions} isOpen={isOpen}>Child</ModalContentContainer>)

    const style = wrapper.instance().getStyles()
    expect(style.transform).to.equal('translateY(0) scale(1)')
  })

  it('should update if isOpen changes', () => {
    wrapper = shallow(<ModalContentContainer actions={actions} isOpen={isOpen}>Child</ModalContentContainer>)
    expect(wrapper.instance().shouldComponentUpdate({isOpen: false})).to.be.true
  })

  it('should not update if isOpen doesn\'t change', () => {
    wrapper = shallow(<ModalContentContainer actions={actions} isOpen={isOpen}>Child</ModalContentContainer>)
    expect(wrapper.instance().shouldComponentUpdate({isOpen: true})).to.be.false
  })

  it('should call action to update active state', () => {
    wrapper = shallow(<ModalContentContainer  actions={actions} isOpen={isOpen}>Child</ModalContentContainer>)

    wrapper.instance().handleClickOutside()
    expect(actions.toggleActiveState.calledWith(false)).to.be.true
  })

  it('should send a close message back to the iframe when handleClickOutside is called', (done) => {
    wrapper = shallow(<ModalContentContainer actions={actions} isOpen={isOpen}>Child</ModalContentContainer>)
    wrapper.instance().handleClickOutside()

    // Timeout is needed because there is a setTimeout in the component
    setTimeout(() => {
      expect(iframeSendMessageStub.callCount).to.equal(2)
      expect(iframeSendMessageStub.firstCall.args[0]).to.equal('close')
      done()
    }, 300)
  })
})
