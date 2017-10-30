import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import { WelcomeHeader } from 'welcome/components/WelcomeHeader'

describe('Components::WelcomeHeader', () => {

  const styles = Immutable.fromJS({
    'padding': '10px'
  })

  const header = '<h1>Header</h1>'
  const headerMergeTags = '<h1>Header</h1><h2>I am {first_name || "your friend"} {last_name} at {company}. Here is your coupon code: {coupon_code}</h2>'
  const couponCode = 'c0d3'
  const company = 'Test Company'

  it('should shallow render itself', () => {
    const wrapper = shallow(<WelcomeHeader header={header} styles={styles} />)
    const style = wrapper.instance().getStyles()

    expect(style.padding).to.equal('10px')
  })

  it('should return markup for injection', () => {
    const wrapper = shallow(<WelcomeHeader header={header} styles={styles} />)
    expect(wrapper.instance().createMarkup()).to.deep.equal({__html: '<h1>Header</h1>'})
  })

  it('should update when props change', () => {
    const wrapper = shallow(<WelcomeHeader header={header} styles={styles} />)

    let nextProps = {
      header: header,
      styles: styles
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.false

    nextProps = {
      header: header,
      styles: {
        'padding': '12px'
      }
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true

    nextProps = {
      header: '<h2>New Header</h2>',
      styles: {
        'padding': '12px'
      }
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true
  })

  it('should not replace merge tags', () => {
    const wrapper = shallow(<WelcomeHeader header={headerMergeTags} styles={styles} editorDemo={true} />)
    expect(wrapper.instance().getHeader()).to.equal(headerMergeTags)
  })

  it('should replace merge tags', () => {
    const wrapper = shallow(<WelcomeHeader header={headerMergeTags} styles={styles} couponCode={couponCode} firstName={'Johnny'} lastName={'Appleseed'} company={company}/>)
    expect(wrapper.instance().getHeader()).to.equal('<h1>Header</h1><h2>I am Johnny Appleseed at Test Company. Here is your coupon code: c0d3</h2>')
  })

  it('should replace merge tags with default values', () => {
    const wrapper = shallow(<WelcomeHeader header={headerMergeTags} styles={styles} couponCode={couponCode}/>)
    expect(wrapper.instance().getHeader()).to.equal('<h1>Header</h1><h2>I am your friend  at . Here is your coupon code: c0d3</h2>')
  })
})
