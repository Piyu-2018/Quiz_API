import React, {useContext} from 'react'
import useStateContext, {stateContext} from '../hooks/useStateContext'


export default function Quiz() {

    const {context, setContext} =useStateContext()
    console.log(context);

  return (
   <div>Quiz</div>
  )
}
