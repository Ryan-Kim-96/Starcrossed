import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostTwo.css'
import image from './julietprofile.png'
import articleImage from './PeterPicture.png'
import Modal from './JulietModal.js'
import Image from 'react-bootstrap/Image'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Checkbox from '@material-ui/core/Checkbox'


function Post({ username}) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        
        <div className="post">

            <div className="post_headerTwo">

                <Image
                    className="post_avatar"
                    src={image}
                    onClick={() => setModalShow(true)}
                    roundedCircle />

                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />



                <p className="post_username">{username}</p>

            </div>
            {/* header */}
            <div className="post_headname">
                <text className="post_headname_text" style={{color:"grey"}}>Shared peteryeeters post</text>
            </div>
            <div className="polaroid" style={{borderRadius: "15px"}}>
            <Image className="post_imageTwo"style={{cursor:"default"}} src={articleImage} alt="dsfs"></Image>
            {/* images */}
            </div>
            
            <div className="post_linkTwo">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
                <div className="post_spacing"></div>
                
                <div className="post_spacing"></div>
                

            </div>

            {/* comment / share link */}
           
        </div>
    )
}

export default Post