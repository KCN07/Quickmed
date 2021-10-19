import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const {serviceId} = useParams();
     const matched = details.find(d => d.id == serviceId );
    console.log(matched);
    return (
        <div className="m-5 " >
            <h1 className="text-primary mb-5">{matched?.title}</h1>
            <img style={{height: '400px', width: '400px'}} src={matched?.logo} alt="" />
            <div style={{fontSize:'20px'}} className="mt-5">
            <p>{matched?.Description}</p>
            <p className="text-primary" style={{fontWeight:'bold'}}>Contact : {matched?.contact}</p>
            </div>
        </div>
    );
};

export default Detail;