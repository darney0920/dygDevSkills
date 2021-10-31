import React from 'react';
import img_profile from '../assets/images/img_profile.jpg';

class Profile  extends React.Component{

    render() {
        return (
            <div className="profile flex-row j-center al-center">
                
                <div className="info_profile flex-col j-center al-center ">

                    <div className="profile_box_img" >                    
                        <img src={img_profile}></img>
                    </div>
                
                    <br></br>
                    <br></br>
                    <p className="hello_world">Hola Mundo...!</p>
                     <br></br>
                    <p className="i_am">Soy Darney Yamith Gaviria Gaviria</p>
                    <br></br>
                    <b className="profession">Desarrollador Web</b>
                </div>
                

           </div>
        );
    }
}

export default Profile ;