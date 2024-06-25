import React from 'react'
import Card from './Card';
const Tours = (props) => {
    const removeTour = props.removeTour; 
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            <div className='cards'>
                {
                    props.tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeTour} />;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;