import React from 'react';
import './TybaltShare.css';
import logo from './tybalt.png';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import Text from './TextField.js'
import {Link} from 'react-router-dom'
import Profile from './profile.png'
import reportImage from './reportpicture.jpg'
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
      <Modal.Body >

        <div className="share_player">
          <div>
            <Image className="share_user" src={Profile} roundedCircle />
          </div>
          <div className="user_name">
          <Text></Text>
          </div>
        </div>

        <div className="sharebox">
         



          <div className="image_box">
            <img style={{width: "400px", paddingRight:"20px"}} src={reportImage} alt=""></img>
          </div>


          <div className="share_post_label">
            <h4><strong>Brawl Between Capulet and Montague families Sunday Morning</strong></h4>
            <text><strong>Prince Report:</strong> Capulet employees Samson and Gregory were out on a stroll Sunday morning when they were approached by Montague employees Abraham and another unidentified person. </text>
          </div>
        </div>
        <div className="share_buttonbox">
        <Button onClick={props.onHide}>Close</Button>
          <div className="spacing"></div>
          <Link to="/bestend"><Button style={{paddingTop:"10px", paddingBottom: "10px"}}>Post</Button></Link>
        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal