import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const PopularDestination = () => {
    const [destinations, setDestinations] = useState ();
    console.log(destinations);

    useEffect(() => {
        axios.get('https://freetestapi.com/api/v1/destinations')
        .then((response) => setDestinations(response.data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

    
    
  return (
    <div>
        <div>
            <h3>Popular Destinations</h3>
            <div>
                {Array.isArray(destinations) ? destinations.map((element) => (
                    <div key={element.id}>
                        <img src={element.image} alt=''></img>
                        <div>
                            <h4>{element.name}</h4>
                            <h4>{element.description}</h4>
                        </div> 

                    </div>
                )): []}
            </div>
        </div>
    </div>
  )
}
