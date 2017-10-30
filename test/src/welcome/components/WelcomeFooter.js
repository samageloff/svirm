import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import { WelcomeFooter } from 'welcome/components/WelcomeFooter'

describe('Components::WelcomeFooter', () => {

  const styles = Immutable.fromJS({
    'padding': '10px'
  })

  const footer = '<h1>Footer</h1>'
  const footerMergeTags = '<h1>Footer</h1><h2>I am {first_name || "your friend"} {last_name} at {company}. Here is your coupon code: {coupon_code}</h2>'
  const couponCode = 'c0d3'
  const company = 'Test Company'

  it('should shallow render itself', () => {
    const wrapper = shallow(<WelcomeFooter footer={footer} styles={styles} />)
    const style = wrapper.instance().getStyles()

    expect(style.padding).to.equal('10px')
  })

  it('should return markup for injection', () => {
    const wrapper = shallow(<WelcomeFooter footer={footer} styles={styles} />)
    expect(wrapper.instance().createMarkup()).to.deep.equal({__html: '<h1>Footer</h1>'})
  })

  it('should update when props change', () => {
    const wrapper = shallow(<WelcomeFooter footer={footer} styles={styles} />)

    let nextProps = {
      footer: footer,
      styles: styles
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.false

    nextProps = {
      footer: footer,
      styles: {
        'padding': '12px'
      }
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true

    nextProps = {
      footer: '<h2>New Footer</h2>',
      styles: {
        'padding': '12px'
      }
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true
  })

  it('should not replace merge tags', () => {
    const wrapper = shallow(<WelcomeFooter footer={footerMergeTags} styles={styles} editorDemo={true} />)
    expect(wrapper.instance().getFooter()).to.equal(footerMergeTags)
  })

  it('should replace merge tags', () => {
    const wrapper = shallow(<WelcomeFooter footer={footerMergeTags} styles={styles} couponCode={couponCode} firstName={'Johnny'} lastName={'Appleseed'} company={company}/>)
    expect(wrapper.instance().getFooter()).to.equal('<h1>Footer</h1><h2>I am Johnny Appleseed at Test Company. Here is your coupon code: c0d3</h2>')
  })

  it('should replace merge tags with default values', () => {
    const wrapper = shallow(<WelcomeFooter footer={footerMergeTags} styles={styles} couponCode={couponCode}/>)
    expect(wrapper.instance().getFooter()).to.equal('<h1>Footer</h1><h2>I am your friend  at . Here is your coupon code: c0d3</h2>')
  })
})
