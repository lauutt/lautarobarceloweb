import React, { useEffect, useState } from 'react';

export default function Home() {
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        const imgDirectory = '/home/img';
        const imgExtension = '.png';

        // Generar nombres de archivos de 1 a 64
        const imgFileNames = Array.from({ length: 64 }, (_, index) => `imagen${index + 1}`);

        // Seleccionar una imagen al azar
        const randomFileName = imgFileNames[Math.floor(Math.random() * imgFileNames.length)];

        // Utilizar importación dinámica para cargar la imagen
        import(`.${imgDirectory}/${randomFileName}${imgExtension}`)
          .then(imageModule => {
            // Imagen cargada con éxito
            setRandomImage(imageModule.default);
          })
          .catch(error => {
            // Error al cargar la imagen
            console.error('Error al cargar la imagen:', error);
          });
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {randomImage && <img  key={randomImage} src={randomImage} alt="Imagen al azar"></img>}
        </div>
    );
}
