import React, { useState, useEffect }  from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

const Detail = ({id}) => {
  const [currentAnimal, setAnimal] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pet.animal(id)
      .then(({animal}) => {
        setAnimal({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          // location: animal.contact.address.city + ', ' + animal.contact.address.state,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
        });
        setLoading(false);
      });
  }, [id])

  if (loading) return <p>Loading..</p>;

  const {animal, breed, location, name, media, description} = currentAnimal;
  // const media = currentAnimal.media;
  // const breed = currentAnimal.breed;

  return (
    <>
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Detail;