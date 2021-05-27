import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostTwo.css'
import image from './julietprofile.png'
import articleImage from './thirdpostjuliet1.png'
import articleImageTwo from './thirdpostjuliet2.png'
import Modal from './JulietModal.js'
import Image from 'react-bootstrap/Image'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Checkbox from '@material-ui/core/Checkbox'
import CommentIcon from '@material-ui/icons/Comment'

import Profile from './nurse.png'

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
                <text className="post_headname_text">Super excited &#60;3</text>
            </div>
            <div className="polaroid" style={{border: "0px"}}>
            <Image className="post_imageTwo"style={{cursor:"default"}} src={articleImage} alt="dsfs"></Image>
            <Image className="post_imageTwo"style={{cursor:"default", paddingTop:"20px"}} src={articleImageTwo} alt="dsfs"></Image>
            {/* images */}
            </div>
            
            <div className="post_linkTwo">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
                <div className="post_spacing"></div>
                <text style={{color:'grey',marginTop:'7px', marginRight:'5px'}}> <CommentIcon color="primary" disabled></CommentIcon><strong className="hoverr">Comments</strong></text>
                <div className="post_spacing"></div>
                

            </div>

            {/* comment / share link */}
            <div className="whole" style={{backgroundColor: '#ECECEC'}}>

          <div>
            <div className="comment_commentsection" style={{paddingTop: "20px"}}>
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Nurse</strong> <text className="comment_timestamp">26 mins ago</text></text>
              </div>
            </div>

            <div>
              <div className="comment_write" style={{paddingBottom: "20px"}}>
                <text>Your costume is going to be so lovely!   </text>

              </div>

            </div>
          </div>



        </div>
        </div>
    )
}

export default Post