import React, { useEffect, useState } from 'react';

const AllGroups = () => {

    // const [localData, setLocalData] = useState([]);
    // const [dbData, setDbData] = useState([]);


    // fetching local data

    useEffect(()=>{
        fetch('/dummyData.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    // fetching data from the database

    useEffect(()=>{},[])




    return (
        <div>
            hello from AllGroups
        </div>
    );
};

export default AllGroups;