
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  increment, setuserprofile  } from '../../authslice'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import Profilecomp from './Profilecomp'
function Profile(props) {
    const [auth, setauth] = useState(false)
    const [userinfo, setuserinfo] = useState()
    const dispatch = useDispatch()
    
    

    useEffect(() => {
    if(!props.auth)
    {if(window.sessionStorage){
    
        axios.post('http://localhost:5000/auth',{token:window.sessionStorage.jwt})
        .then((res)=>{setauth(res.data.false); dispatch(setuserprofile(res.data.data)); console.log(res.data)})
        .catch(err=>console.log('err'))
       
    }

    }
    
    

  },[]);

    
    if(auth){
        dispatch(increment())
    }

    return(
        <div>
            <div className="loader"></div>
            {props.auth?<Profilecomp />:<Redirect to="/signin" />}
        </div>
        
    )
    
    
}

export default Profile
