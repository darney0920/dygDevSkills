import React from 'react';
import img_profile from '../assets/images/img_profile.jpg';

class About  extends React.Component{

    render() {
        return (
            <div className="about flex-col al-center j-center" id="about_me">
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <b>Acerca de mi</b>
                <br></br>
                <br></br>
                <strong><i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i></strong>
                <p>Estudiante de desarrollo y programacion web, innovador, proactivo y con capacidad para desarrollar páginas web elegantes y pioneras para clientes exigentes, aprender y aplicar mis conocimientos al ámbito profesional y un gran interés en formar parte de su equipo en busca de una oportunidad laboral en la que desarrollar mis habilidades y adquirir experiencia.</p>
                <br></br>
                <hr></hr>
                <br></br>
            </div>

        );
    }
}

export default About ;