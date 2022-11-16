import React from 'react'
import { useState } from 'react'
import Lottie from 'react-lottie';
import * as empty from '../assets/empty.json'

const Profile = () => {
    const [selected,setSelected] = useState("d")

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: empty,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="container mt-5">
            <p className="display-5 text-center mb-4" style={{ fontFamily: "Poppins", fontWeight: "700" }}>
                Your Profile
            </p>
            <div className="card bg-dark shadow-sm rounded-4 text-white col-4">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <img className='shadow-lg' src="https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png" style={{borderRadius:"50%",width:"70px",height:"70px"}} alt="" />
                        <div className="ms-4">
                            <p className="fs-4 mb-0" style={{fontFamily:"Poppins",fontWeight:"500"}}>Amrit Utsav</p>
                            <p className="fs-5 mb-0" style={{fontFamily:"Poppins",fontWeight:"300"}}>lbrock513@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm rounded-4 border-0 mt-4" style={{backgroundColor:"#eee",minHeight:"45vh"}}>
                <div className="card-body">
                    {
                        <>
                            <Lottie options={defaultOptions}
                                height={300}
                                width={300}
                            />
                            <p className='text-center mt-2 fs-3 fw-bold' style={{fontFamily:"Poppins"}}>NO COURSES FOUND!!</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile