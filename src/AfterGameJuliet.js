import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostTwo.css'
import newslogo from './CapCorp.png' 
import image from './julietprofile.png'
import articleImage from './Masquerade.png'
import Modal from './JulietModal.js'
import Image from 'react-bootstrap/Image'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Checkbox from '@material-ui/core/Checkbox'
import CommentIcon from '@material-ui/icons/Comment'
import Button from 'react-bootstrap/Button'
import Profile from './profile.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Imposter from './Reportpage.js'

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
                <text className="post_headname_text">Come join us for our annual Masquerade Party at 6pm! </text>
            </div>
            <div className="polaroid">
            <div className="newslabel" style={{cursor:"default"}}>
                    <div>
                        <Image src={newslogo} style={{width: '60px', cursor:"default", margin:'8px'}} roundedCircle></Image>
                    </div>
                    <div className="newslabel_text">
                        <text style={{fontWeight:'600'}}>Hosting Masquerade Party</text>
                    </div>

                </div>
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
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Escalus</strong> <text className="comment_timestamp">3 mins ago</text></text>
                <>
                  {['right'].map((placement) => (
                    <OverlayTrigger
                      trigger="click"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover style={{ zIndex: '2000' }} id={`popover-positioned-${placement}`}>
                          <Popover.Title as="h3">{`Are you sure you want to report this comment?`}</Popover.Title>
                          <Popover.Content>
                            <div className="buttonbox">
                              <Button variant="danger" onClick={() => setModalShowOne(true)} style={{ margin: '10px' }}>Yes</Button>
                              <Imposter
                            show={modalShowOne}
                            onHide={() => setModalShowOne(false)} />
                            </div>
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <Button variant="link" style={{ width: '80px', color: 'grey', marginBottom:'5px', marginLeft:'-6px' }}>Report</Button>
                    </OverlayTrigger>
                  ))}
                </>
              </div>
            </div>

            <div className="comment_write">
              <text>Are YOU ready to make BIG $$$$$ by working from HOME?!!?!?! Click on my BIO to LEARN MORE </text>
            </div>
          </div>

          <div className="subcomment">
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Faith</strong> <text className="comment_timestamp">2 mins ago</text></text>
              </div>
            </div>

            <div className="comment_write">
              <text>wow! this seems legit </text>
            </div>
          </div>

          <div>
            <div className="comment_commentsection">
              <div>
                <Image className="comment_commentsection_profile" src={Profile} roundedCircle />
              </div>
              <div className="comment_commentsection_name">
                <text><strong>Richard</strong> <text className="comment_timestamp">2 mins ago</text></text>
              </div>
            </div>

            <div>
              <div className="comment_write" style={{paddingBottom: "20px"}}>
                <text>Be there or be squared</text>

              </div>

            </div>
          </div>



        </div>
        </div>
    )
}

export default Post