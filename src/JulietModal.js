import React from 'react';
import './JulietModal.css';
import logo from './julietprofile.png';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import imageone from './Juliet/Juliet1.jpg'
import imagetwo from './Juliet/Juliet2.jpg'
import imagethree from './Juliet/Juliet3.jpg'
import imagefour from './Juliet/Juliet4.jpg'
import imagefive from './Juliet/Juliet5.jpg'
import imagesix from './Juliet/Juliet6.jpg'
import imageseven from './Juliet/Juliet7.jpg'
import imageeight from './Juliet/Juliet8.jpg'
import imagenine from './Juliet/Juliet9.jpg'
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
            <p>paper.jewel</p>
            <div className="profile_stats">
              <ul>
                <li>
                  35 posts
                 </li>
                <li>
                  441k followers
                 </li>
                <li>
                  117 following
                 </li>
              </ul>
            </div>
          </div>
<div className="profile_hobby">
  <ul>
    <li>
    <strong>Juliet Capulet</strong>
    </li>
    <li >
    <text className="profile_quote">“Beauty begins the moment you decide being yourself”</text>
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
                     src={imagefour}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
                     src={imagefive}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
                     src={imagesix}
                     thumbnail />
            </li>
            </ul>
            <ul>
            <li>
            <Image className="picture_outline"
                     src={imageseven}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
                     src={imageeight}
                     thumbnail />
            </li>
            <li>
            <Image className="picture_outline"
                     src={imagenine}
                     thumbnail />
            </li>
            </ul>
        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal