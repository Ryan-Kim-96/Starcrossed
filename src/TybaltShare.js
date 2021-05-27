import React from 'react';
import './TybaltShare.css';
import logo from './tybalt.png';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import Text from './TextField.js'
import articleImage from './CapuletImage.png'
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
            <img className="sharepost_image" src={articleImage} alt="dsfs"></img>
          </div>


          <div className="share_post_label">
            <h4><strong>Lives of Capulets and Montagues were in the hands of their Mothers</strong></h4>
            <text><strong>Breaking news:</strong> This morning, Capulet employees
                    instigated a brawl with several Montague employees
                    on the street. The Montagues claim they didn't want
                    to start a conflict and were afraid of harming innocent
                    people, but Capulets ignored their pleas and caused chaos
                    in the streets for the sake of unwarranted vengeance.  </text>
          </div>
        </div>
        <div className="share_buttonbox">
          
        <Button onClick={props.onHide}>Close</Button>
          <div className="spacing"></div>
          <Link to="/neutralend"><Button style={{paddingTop:"10px", paddingBottom: "10px"}}>Post</Button></Link>
        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal