import React from 'react'
import { useContext } from 'react'
import MyContext from './MyContext'

export default function Total() {

    const { val, setVal } = useContext(MyContext);

  return (
    <div>
      <h3>{val}</h3>
    </div>
  )
}
