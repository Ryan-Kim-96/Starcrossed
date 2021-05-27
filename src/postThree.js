import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './postThree.css';
import image from './julietprofile.png'
import Modal from './JulietModal.js';
import Article from './CommentModal.js';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import Juliet from './JulietCommentShare.js'

function Post({ username, caption, imageUrl, alphabet }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowTwo, setModalShowTwo] = React.useState(false);
    const [modalShowShare, setModalShowShare] = React.useState(false);
    return (
        <div className="post">

            <div className="post_header">

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

            <Article
                show={modalShowTwo}
                onHide={() => setModalShowTwo(false)}
            />
            {/* images */}

            <div className="post_label_one">
                <text>Uhhhh. What happened this morning??
                I heard my dad attacked people with his cane.
                    So embarrassing... 😓 <b className="post_hashtag">#sorry</b></text>
            </div>
            <div className="post_linkThree">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
                <div className="post_spacing"></div>
                <text onClick={() => setModalShowTwo(true)} style={{ color: 'grey', cursor: 'pointer', marginTop: '7px', marginRight: '5px' }}><CommentIcon color="primary"></CommentIcon><strong className="hoverr">Comments</strong></text>
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

            {/* comment / share link */}
        </div>
    )
}

export default Post