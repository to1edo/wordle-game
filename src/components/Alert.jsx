import React, { useEffect } from 'react'
import useMain from '../hooks/useMain'

const Alert = () => {

  const {setAlert,alert} = useMain()
  const {message, type, temporal} = alert;
  useEffect(() => {

    if(temporal){
      setTimeout(() => {
        setAlert({})
      }, 3000);
    }
    
  }, [])
  
  return (
    <p className={`mb-4 text-center px-2 py-1 ${(type==='error')? 'bg-red-300 text-red-700' : 'bg-green-300 text-green-700'} w-1/2 mx-auto rounded-lg mb-1`}>{message}</p>
  )
}

export default Alert