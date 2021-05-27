import React from 'react';
import './CapuletModal.css';
import logo from './tybalt.png';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import imageone from './Tybalt/TybaltPicture1.jpg'
import imagetwo from './Tybalt/TybaltPicture2.jpg'
import imagethree from './Tybalt/TybaltPicture3.jpg'
import imagefour from './Tybalt/TybaltPicture4.jpg'
import imagefive from './Tybalt/TybaltPicture5.jpg'
import imagesix from './Tybalt/TybaltPicture6.jpg'
import imageseven from './Tybalt/TybaltPicture7.jpg'
import imageeight from './Tybalt/TybaltPicture8.jpg'
import imagenine from './Tybalt/TybaltPicture9.jpg'
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
          <p>iam.tybalt</p>
          <div className="profile_stats">
            <ul>
              <li>
                245 posts
               </li>
              <li>
                300k followers
               </li>
              <li>
                101 following
               </li>
            </ul>
          </div>
        </div>
<div className="profile_hobby">
<ul>
  <li>
  <strong>Tybalt Capulet</strong>
  </li>
  <li>
   <text className="profile_quote">Stay loyal. Stay strong</text>
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
                   src={imageone} 
                   thumbnail />
          </li>
          <li>
          <Image className="picture_outline"
          style={{height:"200px"}}
                   src={imagefour} 
                   thumbnail />
          </li>
          <li>
          <Image className="picture_outline"
                   src={imagefive}
                   thumbnail />
          </li>
          </ul>
          <ul>
          <li>
          <Image className="picture_outline"
                   src={imagesix}
                   thumbnail />
          </li>
          <li>
          <Image className="picture_outline"
          style={{height:"200px"}}
                   src={imageseven}
                   thumbnail />
          </li>
          <li>
          <Image className="picture_outline"
                   src={imageeight}
                   thumbnail />
          </li>
          </ul>
          <ul>
          <li >
            <Image className="picture_outline"
                   src={imagetwo} 
                   thumbnail />
          </li>
          <li>
          <Image className="picture_outline"
                   src={imagethree} 
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