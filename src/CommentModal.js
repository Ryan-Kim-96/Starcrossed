import React from 'react';
import './CommentModal.css';
import logo from './julietprofile.png';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import Juliet from './JulietCommentShare.js';
import Prince from './PrinceDocument.js';
import Profile from './profile.png'

function MyVerticallyCenteredModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

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

          <div className="comment_title">
            <div>
              <Image className="comment_profile" src={logo} roundedCircle />
            </div>
            <div className="comment_name_box">
              <text className="comment_name">paper.jewel</text>
            </div>
          </div>

          <div className="comment_label">
            <text className="comment_quote">Uhhhh. What happened this morning??
            I heard my dad attacked people with his cane. So embarrassing... 😓 <b className="post_hashtag">#sorry</b></text>
          </div>

          <div className="comment_link">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
            <div className="comment_spacing"></div>
            <>
              {['right'].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Title as="h3">{`Are you sure you want to share this post?`}</Popover.Title>
                      <Popover.Content>
                        <div className="buttonbox">
                          <Button variant="primary" onClick={() => setModalShowShare(true)} style={{ margin: '10px' }}>Yes</Button>
                          <Juliet
                            show={modalShowShare}
                            onHide={() => setModalShowShare(false)}
                          />
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
          <h4 className="comment_header">Comment</h4>
        </div>



        <div className="whole">


          <div className="commentsection">
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Nadia</strong> <text className="comment_timestamp">8 mins ago</text></text>
              </div>
            </div>

            <div className="comment_write">
              <text>HAHAHA that’s hilarious 🤣</text>
            </div>
          </div>

          <div>
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Faith</strong> <text className="comment_timestamp">5 mins ago</text></text>
              </div>
            </div>

            <div className="comment_write">
              <text>Don’t worry about the haters, luv! Yur real fans know that this had nothing to do with you 💋</text>
            </div>
          </div>

          <div>
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Richard</strong> <text className="comment_timestamp">3 mins ago</text></text>
              </div>
            </div>

            <div className="comment_write">
              <text>selfi plzzzzzzz </text>
            </div>
          </div>

          <div className="subcomment">
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Gaby</strong> <text className="comment_timestamp">2 mins ago</text></text>
              </div>
            </div>

            <div className="comment_write">
              <text>r u srs? 🙄 </text>
            </div>
          </div>

          <div>
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Bridgette</strong> <text className="comment_timestamp">2 mins ago</text></text>
              </div>
            </div>

            <div>
              <div className="comment_write">
                <text>Prince Report just released their official document over what happened!!</text>

              </div>
              <div className="comment_linkarticle">
                <Button variant="link" style={{ width: '300px' }} onClick={() => setModalShow(true)}>www.princereport.org/morning-brawl</Button>
                <Prince
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>

            </div>
          </div>

          <div>
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Gabe</strong> <text className="comment_timestamp">1 mins ago</text></text>
              </div>
            </div>

            <div className="comment_write">
              <text>when’s your next collab video going to be?</text>
            </div>
          </div>

        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal