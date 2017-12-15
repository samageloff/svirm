import React from 'react'
import style from 'common/styles/base.scss'
import Clicker from 'timer/components/Clicker'
import Ticker from 'timer/components/Ticker'
import TimePanel from 'timer/components/TimePanel'
import Triangles from 'timer/components/Triangles'

const Timer = () => (
  <div className={style['wrapper']}>
    <div className={style['viewport']}>
      <Ticker />
      <Clicker />
      <TimePanel />
    </div>
    <Triangles />
  </div>
)

export default Timer
