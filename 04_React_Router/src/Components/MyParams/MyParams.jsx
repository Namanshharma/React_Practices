import React from 'react'
import { useParams } from 'react-router-dom'

function MyParams() {
    const { id } = useParams();
    return (
        <h1 className='bg-gray-600 text-white text-3xl p-4 text-center'>
            My Params : {id}
        </h1>
    )
}

export default MyParams
