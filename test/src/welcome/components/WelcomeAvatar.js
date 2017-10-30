import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import { WelcomeAvatar } from 'welcome/components/WelcomeAvatar'

describe('Components::WelcomeAvatar', () => {

  const styles = Immutable.fromJS({
    'border-width': '2px',
    'border-color': '#eee',
    'border-radius': '50%'
  })

  const avatar = 'https://getambassador.com/avatar.jpg'

  it('should shallow render itself', () => {
    const wrapper = shallow(<WelcomeAvatar avatar={avatar} styles={styles} />)
    const style = wrapper.instance().getStyles()

    expect(wrapper.find('img')).to.have.length(1)
    expect(style.borderRadius).to.equal('50%')
    expect(style.borderStyle).to.equal('solid')
  })

  it('should update when props change', () => {
    const wrapper = shallow(<WelcomeAvatar avatar={avatar} styles={styles} />)

    let nextProps = {
      avatar: avatar,
      styles: styles
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.false

    nextProps = {
      avatar: avatar,
      styles: {
        'border-width': '2px',
        'border-color': '#eee',
        'border-radius': '20%'
      },
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true

    nextProps = {
      avatar: 'https://getambassador.com/new-avatar.jpg',
      styles: styles
    }

    expect(wrapper.instance().shouldComponentUpdate(nextProps, null)).to.be.true
  })
})
