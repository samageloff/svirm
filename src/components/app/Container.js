import React from 'react'
import Clicker from 'src/components/app/Clicker'
import Ticker from 'src/components/app/Ticker'
import TimePanel from 'src/components/app/TimePanel'
import Triangles from 'src/components/app/Triangles'
import style from 'src/styles/base.scss'

const Container = () => (
  <div className={style['wrapper']}>
    <div className={style['viewport']}>
      <Ticker />
      <Clicker />
      <TimePanel />
    </div>
    <Triangles />
  </div>
)

export default Container
