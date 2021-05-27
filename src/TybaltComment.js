import React from 'react';
import './TybaltComment.css';
import logo from './tybalt.png';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import Share from './TybaltShare.js'
import articleImage from './CapuletImage.png'
import newslogo from './CapCorp.png' 
import Profile from './profile.png'

function MyVerticallyCenteredModal(props) {
  const [modalShowShare, setModalShowShare] = React.useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal_title" id="contained-modal-title-vcenter">

          <div className="tybalt_title">
            <div>
              <Image className="tybalt_profile" src={logo} roundedCircle />
            </div>
            <div className="tybalt_name_box">
              <text className="tybalt_name">iam.Tybalt</text>
            </div>
          </div>

          <div className="tybalt_label">
            <text className="post_headnameOne_text">I totally had a number on those Mont-ugly losers!! 👊😂</text>
          </div>

          <div className="tybalt_imagebox">
            <div className="tybalt_articleheaderbox">
              <Image src={newslogo} style={{width: '60px', margin:'8px'}} roundedCircle></Image>
              <text className="tybalt_articleheader">Breaking News: Verona Square</text>

            </div>
            <img className="tybalt_image" src={articleImage} alt="dsfs"></img>

          </div>

          <div className="tybalt_captionbox">
            <text className="tybalt_caption">
              <strong>Breaking news: </strong> At 9:00am our reporters were at the scene after a news article post from a third party of Capulet News outlet, called Capulet Prime News had surfaced at 8:30am stating there was a brawl in Verona Square.</text>

          </div>

          <div className="tybalt_link">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
            <div className="tybalt_spacing"></div>
            <>
              {['right'].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover style={{ zIndex: '2000' }} id={`popover-positioned-${placement}`}>
                      <Popover.Title as="h3">{`Are you sure you want to share this post?`}</Popover.Title>
                      <Popover.Content>
                        <div className="buttonbox">
                          <Button variant="primary" onClick={() => setModalShowShare(true)} style={{ margin: '10px' }}>Yes</Button>
                          <Share
                            show={modalShowShare}
                            onHide={() => setModalShowShare(false)} />
                        </div>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Button variant="info" style={{ width: '70px' }}>Share</Button>
                </OverlayTrigger>
              ))}
            </>
          </div>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4 className="tybalt_header">Comments</h4>
        </div>



        <div className="whole">

          <div>
            <div className="tybalt_tybaltsection">
              <div>
                <Image className="tybalt_tybaltsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="tybalt_tybaltsection_name">
                <text><strong>Samson</strong> <text className="tybalt_timestamp">10 mins ago</text></text>
              </div>
            </div>

            <div className="tybalt_write">
              <text>Down with old man Mont-ugly!!</text>
            </div>


          </div>

          <div className="subtybalt">
            <div className="tybalt_tybaltsection">
              <div>
                <Image className="tybalt_tybaltsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="tybalt_tybaltsection_name">
                <text><strong>Gregory</strong> <text className="tybalt_timestamp">4 mins ago</text></text>
              </div>
            </div>

            <div className="tybalt_write">
              <text>settle down sam 😒</text>
            </div>
          </div>

          <div>
            <div className="tybalt_tybaltsection">
              <div>
                <Image className="tybalt_tybaltsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="tybalt_tybaltsection_name">
                <text><strong>Cecillia</strong> <text className="tybalt_timestamp">14 mins ago</text></text>
              </div>
            </div>

            <div className="tybalt_write">
              <text>Go get’em Ty! 💕</text>
            </div>
          </div>

        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal