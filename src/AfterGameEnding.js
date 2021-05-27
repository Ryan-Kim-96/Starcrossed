import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostTwo.css'
import image from './HejidoLogo.png'
import Modal from './JulietModal.js'
import Image from 'react-bootstrap/Image'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Checkbox from '@material-ui/core/Checkbox'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
function Post({ username}) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        
        <div className="post">

            <div className="post_headerTwo">

                <Image
                    className="post_avatar"
                    src={image}
                    onClick={() => setModalShow(true)}
                     />

                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />



                <p className="post_username">{username}</p>

            </div>
            {/* header */}
            <div className="post_headname" style={{paddingLeft:"25px", paddingRight:"25px"}}>
                <text>Hi there! Thanks so much for playing through the demo of our game. We hope you’ve had a fun experience. 

<br></br>
<br></br>
    Feel free to explore our website for more ways you can combat misinformation as well as read more about the overall development process + intended next steps.
<br></br>
<br></br>
    <strong>Click below to play the game Again!</strong></text>
            </div>
            <div className="polaroid" style={{display:"flex", border: "0px", alignItems:"center", justifyContent:"center"}}>
            <Link to='/Capstone'><Button>Play Again</Button></Link>
            <Button style={{marginLeft:"20px",width: "150px"}} onClick={()=> window.open("https://starcrossedinfluencer.webflow.io/", "_blank")}>Visit our Website</Button>
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