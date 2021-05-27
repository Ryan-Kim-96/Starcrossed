import React from 'react';
import './JulietModal.css';
import logo from './Romeoface.jpg';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import imageone from './Romeo/Romeo1.jpg'
import imagetwo from './Romeo/Romeo2.jpg'
import imagethree from './Romeo/Romeo3.jpg'
import imagefour from './Romeo/Romeo4.jpg'
import imagefive from './Romeo/Romeo5.jpg'
import imagesix from './Romeo/Romeo6.jpg'

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
            <Image src={logo} style={{width:"170px",height:"160px"}} roundedCircle />
          </div>
          <div className="modal_name">
            <p>r.montegue</p>
            <div className="profile_stats">
              <ul>
                <li>
                  98 posts
                 </li>
                <li>
                  230k followers
                 </li>
                <li>
                  110 following
                 </li>
              </ul>
            </div>
          </div>
<div className="profile_hobby">
  <ul>
    <li>
    <strong>Romeo Montague</strong>
    </li>
    <li >
    <text className="profile_quote">we never move on, we just get passed the pain 🥀</text>
    </li>
    <li >
      <text className="profile_tag">Followed by @Juliet</text>
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
                    style={{height:"200px"}}
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
                style={{height:"200px"}}
                     src={imagethree}
                     thumbnail />
            </li>
            </ul>
            <ul>
            <li>
            <Image className="picture_outline"
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