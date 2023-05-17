import React from 'react'

const notfound = () => {
    return (
        <div className='container2 text-center py-64'>
            <h2 className='text-5xl font-bold mb-12'>Oops... Error 404</h2>
            <p className='mb-2'>The Page your are looking for is currently not available or lost.</p>
            <p>Or, go back to <a href='/'  className='btn'>HomePage</a></p>
        </div>
    )
}

export default notfound
