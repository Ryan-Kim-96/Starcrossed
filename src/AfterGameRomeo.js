import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostTwo.css'
import image from './Romeo.jpg'
import articleImage from './RomeoPark.jpg'
import Modal from './RomeoProfile.js'
import Image from 'react-bootstrap/Image'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Checkbox from '@material-ui/core/Checkbox'
import CommentIcon from '@material-ui/icons/Comment'
import Benvolio from './Benvolio.jpg'
import BenvolioModal from './MontegueModal.js'

function Post({ username}) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowOne, setModalShowOne] = React.useState(false);
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
                <text className="post_headname_text">on a stroll </text>
            </div>
            <div className="polaroid">
            <Image className="post_imageTwo"style={{cursor:"default"}} src={articleImage} alt="dsfs"></Image>
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

          <div style={{paddingTop: "20px"}}>
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" style={{cursor:"pointer"}} onClick={() => setModalShowOne(true)} src={Benvolio} roundedCircle />
                <BenvolioModal
                    show={modalShowOne}
                    onHide={() => setModalShowOne(false)}
                />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Benvolio</strong> <text className="comment_timestamp">20 mins ago</text></text>
              </div>
            </div>

            <div>
              <div className="comment_write" style={{paddingBottom: "40px"}}>
                <text>Is that sycamore park? Luv walkin my dog there </text>

              </div>

            </div>
          </div>



        </div>
        </div>
    )
}

export default Post