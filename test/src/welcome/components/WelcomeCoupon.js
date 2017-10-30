import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import { WelcomeCoupon } from 'welcome/components/WelcomeCoupon'

describe('Components::WelcomeCoupon', () => {

  // A subset of the actual styles
  const settings = Immutable.fromJS({
    container: {
      'border-radius': '10px',
      'border-style': 'solid',
      'display': 'table',
      'height': '40px',
    },
    code: {
      'display': 'table-cell',
      'height': '100%',
      'minWidth': '100px',
    },
    button: {
      'cursor': 'pointer',
      'display': 'table-cell',
      'height': '100%',
    },
    code_enabled: true
  })

  const nextSettings = Immutable.fromJS({
    container: {
      'height': '30px'
    },
    code: {
      'minWidth': '40px'
    },
    button: {
      'height': '59%'
    }
  })

  const couponCode = Immutable.fromJS({
    value: 'IVAN3AMBURGER'
  })

  const nextCouponCode = Immutable.fromJS({
    value: 'COREY6AMBURGER'
  })

  it('should shallow render itself', () => {
    const wrapper = shallow(<WelcomeCoupon couponCode={couponCode} settings={settings} />)
    const style = wrapper.instance().getStyles('container')

    expect(style.borderRadius).to.equal('10px')
    expect(style.borderStyle).to.equal('solid')
  })

  it('should not render when code enabled false', () => {
    const nonDisplaySettings = Immutable.fromJS({
      container: {
        'border-radius': '10px',
        'border-style': 'solid',
        'display': 'table',
        'height': '40px',
      },
      code: {
        'display': 'table-cell',
        'height': '100%',
        'minWidth': '100px',
      },
      button: {
        'cursor': 'pointer',
        'display': 'table-cell',
        'height': '100%',
      },
      code_enabled: false
    })

    const wrapper = shallow(<WelcomeCoupon couponCode={couponCode} settings={nonDisplaySettings} />)

    expect(wrapper.children()).to.have.length(0)
  })

  it('should update when props change', () => {
    const wrapper = shallow(<WelcomeCoupon couponCode={couponCode} settings={settings} />)

    let nextProps = {
      couponCode: couponCode,
      settings: settings
    }
    const nextState = {
      copied: false
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, nextState)).to.be.false
    nextProps = {
      couponCode: nextCouponCode,
      settings: nextSettings
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, nextState)).to.be.true
  })

  it('should return massaged styles', () => {
    const wrapper = shallow(<WelcomeCoupon couponCode={couponCode} settings={settings} />)

    expect(wrapper.instance().massageStyles().code.borderTopLeftRadius).to.equal('10px')
    expect(wrapper.instance().massageStyles().code.borderTopLeftRadius).to.equal('10px')
  })

  it('should set state when user copies something', () => {
    const wrapper = shallow(<WelcomeCoupon couponCode={couponCode} settings={settings} />)
    expect(wrapper.state().copied).to.equal.false
    wrapper.instance().handleCopy()
    expect(wrapper.state().copied).to.equal.true
  })
})
