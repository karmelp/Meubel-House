import React from 'react'
import './bigBtn.scss'

type Props = {
    title: string
}

const BigBtn: React.FC<Props> = ({ title }) => {
  return (
    <button className='bigBtn'>{title}</button>
  )
}

export default BigBtn