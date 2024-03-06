import React from 'react'
import s from './section_title.module.css'

const Section_title = ({section_title}) => {
  return (
    <span className={s.section_title}>{section_title}</span>
  )
}

export default Section_title
