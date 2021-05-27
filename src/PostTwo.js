import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostTwo.css'
import newslogo from './CapCorp.png' 
import image from './tybalt.png'
import articleImage from './CapuletImage.png'
import Modal from './CapuletModal.js'
import Article from './ArticleModal.js'
import Share from './TybaltShare.js'
import Comment from './TybaltComment.js'
import Image from 'react-bootstrap/Image'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Checkbox from '@material-ui/core/Checkbox'
import CommentIcon from '@material-ui/icons/Comment'

function Post({ username, caption, imageUrl, alphabet }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowTwo, setModalShowTwo] = React.useState(false);
    const [modalShowThree, setModalShowThree] = React.useState(false);
    const [modalShowShare, setModalShowShare] = React.useState(false);
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
                <text className="post_headname_text">I totally had a number on those Mont-ugly losers!! 👊😂</text>
            </div>
            <div className="polaroid">
            <div className="newslabel" onClick={() => setModalShowTwo(true)}>
                    <div>
                        <Image src={newslogo} style={{width: '60px', margin:'8px'}} roundedCircle></Image>
                    </div>
                    <div className="newslabel_text">
                        <text style={{fontWeight:'600'}}>Breaking News: Verona Square</text>
                    </div>

                </div>
            <Image className="post_imageTwo" onClick={() => setModalShowTwo(true)} src={articleImage} alt="dsfs"></Image>

            <Article
                show={modalShowTwo}
                onHide={() => setModalShowTwo(false)}
            />
            {/* images */}
            <div className="post_label">
                <text><strong>Breaking News:</strong> At 9:00am our reporters were at the scene
                    after a news article post from a third party of Capulet News
                    outlet, called Capulet Prime News had surfaced at 8:30am stating
                    there was a brawl in Verona Square.</text>
            </div>
            </div>
            
            <div className="post_linkTwo">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
                <div className="post_spacing"></div>
                <text onClick={() => setModalShowThree(true)}style={{color:'grey', cursor:'pointer',marginTop:'7px', marginRight:'5px'}}><CommentIcon color="primary"></CommentIcon><strong className="hoverr">Comments</strong></text>
                <Comment
                show={modalShowThree}
                onHide={() => setModalShowThree(false)}
            />
                <div className="post_spacing"></div>
                <>
                    {['right'].map((placement) => (
                        <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover style={{ zIndex: '1' }} id={`popover-positioned-${placement}`}>
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

            {/* comment / share link */}
        </div>
    )
}

export default Post