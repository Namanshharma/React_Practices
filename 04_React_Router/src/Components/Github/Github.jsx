import React, { useEffect, useState } from 'react'

function Github() {
    const [apiData, setapiData] = useState([]);
    useEffect(() => {
        fetch(`https://api.github.com/users/namanshharma`)
            .then(resp => resp.json())
            .then(data => { console.log(data); setapiData(data) })
            .catch(err => alert(err));
    }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h1>Hey, currrently you are on Github page</h1>
            <h1>Github followers : {apiData.followers}</h1>
            <img src={apiData.avatar_url} alt='Github image' width={200}></img>
        </div>
    )
}

export default Github
