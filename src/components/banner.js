import React from 'react';

function Banner() {
    console.log('Componente Banner montado con éxito');

    return(

   <div className='row'>
        <div className='col-md-12'>
          <img style={{width:'100%'}} src='pc.jpg'></img>
        </div>
    </div>
    );

}

export default Banner;