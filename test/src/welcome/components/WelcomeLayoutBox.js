import React from 'react'
import { shallow } from 'enzyme'
import WelcomeLayoutBox from 'welcome/components/WelcomeLayoutBox'
import CloseButton from 'common/components/CloseButton'
import WelcomeHeader from 'welcome/components/WelcomeHeader'
import WelcomeAvatar from 'welcome/components/WelcomeAvatar'
import WelcomeCoupon from 'welcome/components/WelcomeCoupon'
import WelcomeFooter from 'welcome/components/WelcomeFooter'

describe('Components::WelcomeLayoutBox', () => {
  it('should shallow render itself', () => {
    const wrapper = shallow(<WelcomeLayoutBox />)

    expect(wrapper.find(CloseButton)).to.be.length(1)
    expect(wrapper.find(WelcomeHeader)).to.be.length(1)
    expect(wrapper.find(WelcomeAvatar)).to.be.length(1)
    expect(wrapper.find(WelcomeCoupon)).to.be.length(1)
    expect(wrapper.find(WelcomeFooter)).to.be.length(1)
  })

  it('should never update under any circumstances', () => {
    const wrapper = shallow(<WelcomeLayoutBox />)

    expect(wrapper.instance().shouldComponentUpdate()).to.be.false
  })
})
