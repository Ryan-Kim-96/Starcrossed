import React from 'react';
import './JulietCommentShare.css';
import logo from './tybalt.png';
import juliet from './julietprofile.png'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import Text from './TextField.js'
import {Link} from 'react-router-dom'
import Profile from './profile.png'

function MyVerticallyCenteredModal(props) {
  
  return (
    <Modal
      {...props}
      style={{ zIndex: '3000' }}
      size="xl"
      backdrop="static"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      className="my-modal"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">

          <div className="titleofDashboard">
            <text className="titlename">Share to Dashboard</text>
          </div>


        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="share_player">
          <div>
            <Image className="share_user" src={Profile} roundedCircle />
          </div>
          <div className="user_name">
            <Text></Text>
          </div>
        </div>

        <div className="sharebox1">
          <div className="profile">
            <div className="image_box">
              <Image className="share_user" src={juliet} roundedCircle />
            </div>


            <div className="share_post_label1">
              <text>paper.jewel</text>
            </div>
          </div>

          <div>
            <h4>Uhhhh. What happened this morning??
            I heard my dad attacked people with his cane.
                    So embarrassing... 😓 <b className="post_hashtag">#sorry</b></h4>
          </div>
        </div>
        <div className="share_buttonbox">
          <Button onClick={props.onHide}>Close</Button>
          <div className="spacing"></div>
          <Link to='/bestend'><Button style={{paddingTop:"10px", paddingBottom: "10px"}}>Post</Button></Link>
        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal