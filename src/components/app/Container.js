import React, { Component } from 'react'
import Clicker from './Clicker'
import Ticker from './Ticker'
import style from 'src/styles/base.scss'

export class Container extends Component {
  constructor(props) {
    super(props)
  }

  render = () => (
      <div className={style['wrapper']}>
        <div className={style['viewport']}>
          <Ticker />
          <Clicker />
        </div>
      </div>
    )
}

export default Container
