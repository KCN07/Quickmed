import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import d1 from '../../Images/d-1.jpg';
import d2 from '../../Images/d-2.jpg';
import d3 from '../../Images/d-3.jpg';
import d4 from '../../Images/d-4.jpg';
import d5 from '../../Images/d-5.jpg';
import d6 from '../../Images/d-6.jpg';
import d7 from '../../Images/d-7.jpg';
import d8 from '../../Images/d-8.jpg';
import d9 from '../../Images/d-9.jpg';
import Doctor from '../Doctor/Doctor';




const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("./doctors.json")
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, [])
    return (
        <div className="container mb-5">
            <h1 className=" text-primary mt-5" style={{fontWeight: 'bold'}}>Our Expert Doctors</h1>
            <div className="row">
                {
                    doctors?.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;