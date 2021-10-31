import React from 'react';
class contact_me  extends React.Component{

    render() {
        return (
            <div className="contact_me flex-col j-center al-center">
              
                <h3>Contacto & Social media</h3>
                <br></br>
                <br></br>
                <strong><i class="fas fa-map-marker-alt"></i> Cali - Colombia</strong>
                <br></br>
                <br></br>
                <div className="contact_me_links flex-row sp-bet al-center width-100 flex-wrap">
                <a href="tel: +573216415171"><i className="fas fa-phone"></i> +57 321 641 5171 </a>
                <a href="mailto:darney0920@gmail.com"><i className="fas fa-envelope"></i> darney0920@gmail.com</a>
                <a href="https://wa.me/573216415171/?text=Hola%20Darney"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                <a href=""><i className="fab fa-linkedin"></i> Linkedin</a>
                <a href=""><i className="fab fa-github"></i > Github</a>
                </div>
                <br></br>
                <br></br>
               
            </div>
        );
        
    }
}

export default contact_me ;