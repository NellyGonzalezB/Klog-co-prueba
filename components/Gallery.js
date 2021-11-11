import React from 'react';
import Image from 'next/image';

const Gallery = ({ data }) => {
  if (!data || !data.results) {
    return <p>Enter a word</p>;
  }

  if (data.results.length === 0) {
    return <p>No se encontraron imagenes.</p>;
  }

  return (
    <>
      {data.results.map((photo) => {
        let height;
        let width;
        const maxSize = 200;

        if (photo.height >= photo.width) {
          height = maxSize;
          width = (photo.width * maxSize) / photo.height;
        } else {
          width = maxSize;
          height = (photo.height * maxSize) / photo.width;
        }

        return (
          <Image
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description}
            width={width}
            height={height}
          />
        );
      })}
    </>
  );
};

export default Gallery;