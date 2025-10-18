import React from "react";

function InformacionPrincipal() {
    console.log('Componente de Información montado con éxito');

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <p>Fundada en 2018 en Temuco, comenzó como un emprendimiento universitario
                        orientado a ofrecer asesoría tecnológica y productos de calidad a precios
                        competitivos. Con el tiempo, la empresa ha crecido y consolidado su presencia
                        en línea, sin embargo, detectó que muchos clientes deseaban cotizar
                        el armado de un PC completo antes de comprar, lo cual implicaba un proceso
                        lento y dependiente del contacto manual con vendedores.
                    </p>     
                
                </div>      
                
                <div className='col-md-6'>
                    <p>Con el objetivo de mejorar la experiencia del cliente y automatizar parte del proceso
                         comercial, PC Andes busca desarrollar una landing page moderna, responsiva
                          y funcional. Esta página permitirá a los visitantes conocer la marca, visualizar
                           una DEMO interactiva que simule la cotización de componentes de computador
                            e incluso descargar un catálogo en formato PDF con las ofertas actuales </p>

                </div> 
            </div>
       
        </div>   
    
    
    );

}

 export default InformacionPrincipal;