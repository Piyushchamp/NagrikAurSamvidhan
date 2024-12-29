import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? (    <div className="min-h-screen flex items-center justify-center bg-gray-400">
    <div className="flex items-center justify-center space-x-2">
      <div className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <span className="text-white text-xl">Loading...</span>
    </div>
  </div>) : <>{children}</>
}
