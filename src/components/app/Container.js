import React, { Component } from 'react'
import Clicker from 'src/components/app/Clicker'
import Ticker from 'src/components/app/Ticker'
import TimePanel from 'src/components/app/TimePanel'
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
          <TimePanel />
        </div>
      </div>
    )
}

export default Container
