import React, { Component } from 'react'
import style from 'timer/styles/triangles.scss'

const Triangles = () => {
  return [
    <div key={0} className={style['top-triangle']} />,
    <div key={1} className={style['bottom-triangle']} />
  ]
}

export default Triangles
