import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import { CloseButton } from 'common/components/CloseButton'
import Icon from 'react-ions/lib/Icon'
import IFrame from 'ambassador-common/utilities/iframe'

describe('Components::CloseButton', () => {

  let iframeStub

  const actions = {
    toggleActiveState: sinon.spy()
  }

  const styles = Immutable.fromJS({
    alignItems: 'center'
  })

  const nextStyles = Immutable.fromJS({
    alignItems: 'top'
  })

  beforeEach(() => {
    iframeStub = sinon.stub(IFrame, 'sendMessage')
  })

  afterEach(() => {
    iframeStub.restore()
  })

  it('should shallow render itself', () => {
    const wrapper = shallow(<CloseButton actions={actions} styles={styles} />)
    const contStyle = wrapper.instance().getStyles()

    expect(wrapper.find(Icon)).to.have.length(1)
  })

  it('should update if styles do change', () => {
    let wrapper = shallow(<CloseButton actions={actions} styles={styles} />)
    expect(wrapper.instance().shouldComponentUpdate(nextStyles)).to.be.true
  })

  it('should call action to update active state', (done) => {
    const e = {
      preventDefault: sinon.spy()
    }
    const wrapper = shallow(<CloseButton actions={actions} styles={styles} />)

    wrapper.instance().close(e)
    expect(actions.toggleActiveState.calledWith(false)).to.be.true

    setTimeout(() => {
      expect(iframeStub.calledOnce).to.be.true
      expect(iframeStub.calledWith('close')).to.be.true
      done()
    }, 300)
  })
})
