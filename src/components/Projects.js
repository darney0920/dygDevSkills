import React from 'react';

class projects extends React.Component{

    render() {
        return (

            
            <div className="projects flex-col sp-bet ">
              
                <h1>Proyectos</h1>
                <br></br>
                
                <br></br>
                <br></br>
                <div className="projects_box flex-row j-center al-center">
                <div className="project_box flex-col j-center al-center">
                        <a href="http://www.mivacante.byethost31.com" target="_blank"> Mi vacante.com</a>
                       
                        <p>Sitio web para publicacion y postulacion de empleos donde las empresas podrian
                            publicar sus ofertaas y los candidatos postularse y cerar su perfil profesional.</p>
                            <br></br>
                        <p>Psdta: Este enlace no posee certificado ssl.</p>
                </div>
                <div  className="project_box flex-col j-center al-center">
                        <a href="" target="_blank">ciberShop</a>
                        <p>Plataforma web donde cualquier pesona puede crear una cuenta para comprar productos ademas de poder crear tu propia tienda on line.</p>
                       
                </div>
                </div>
             
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e8eae3" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,277.3C480,288,600,288,720,261.3C840,235,960,181,1080,165.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>

              
            </div>
        );
    }
}

export default projects;