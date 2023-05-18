import React from 'react'

const page = ({ params }) => {
    const { blog } = params;
    return (
        <>
            {blog}
        </>
    )
}

export default page
