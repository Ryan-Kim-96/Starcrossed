import React from 'react';
import './MontegueModal.css';
import logo from './Benvolio.jpg';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import imageone from './Benvolio/Benvolio1.jpg'
import imagetwo from './Benvolio/Benvolio2.jpg'
import imagethree from './Benvolio/Benvolio3.jpg'
import imagefour from './Benvolio/Benvolio4.jpg'
import imagefive from './Benvolio/Benvolio5.jpg'
import imagesix from './Benvolio/Benvolio6.jpg'
function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal_title" id="contained-modal-title-vcenter">
          <div className="modal_img">
            <Image src={logo} roundedCircle />
          </div>
          <div className="modal_name">
            <p>pce_out</p>
            <div className="profile_stats">
              <ul>
                <li>
                  158 posts
                 </li>
                <li>
                  200k followers
                 </li>
                <li>
                  1 following
                 </li>
              </ul>
            </div>
          </div>
<div className="profile_hobby">
  <ul>
    <li>
    <strong>Benny-volio</strong>
    </li>
    <li>
    <text className="profile_quote">Just here to chill. Also, I play music sometimes</text>
    </li>
    <li >
      <text className="profile_tag">Followed by @Romeo</text>
    </li>
  </ul>
</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Gallery</h4>
        </div>
        <div className="profile_gallery">
          <ul>
            <li >
              <Image className="picture_outline"
                     src={imageone}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
                     src={imagetwo}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
                     src={imagethree}
                     thumbnail />
            </li>
            </ul>
            <ul>
            <li>
            <Image className="picture_outline"
            style={{height:"200px"}}
                     src={imagefour}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
            style={{height:"200px"}}
                     src={imagefive}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
                     src={imagesix}
                     thumbnail />
            </li>
            </ul>
        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal