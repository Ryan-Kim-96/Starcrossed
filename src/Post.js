import React from 'react';
import './Post.css'
import image from './Benvolio.jpg'
import articleImage from './BenvolioOption.png'
import newslogo from './MontagNews_profile pic.png'
import Modal from './MontegueModal.js'
import Article from './MontegueNewsModal.js'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import Share from './BenvolioShare.js'
import CommentIcon from '@material-ui/icons/Comment';

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

            <div className="post_headnameOne">
                <text className="post_headnameOne_text">SMH. I was there when it happened and tried to stop the violence. The Capulets instigated the fight!
              <b className="post_headnameOne_bold"> #keepthepeace #preachtruth</b>  ✌️</text>
            </div>
            <div className="polaroid">
                <div className="newslabel" onClick={() => setModalShowTwo(true)}>
                    <div>
                        <Image src={newslogo} style={{width: '60px', margin:'8px'}} roundedCircle></Image>
                    </div>
                    <div className="newslabel_text">
                        <text style={{fontWeight:'600'}}>Breaking News: Verona Square 9:30am</text>
                    </div>

                </div>

                <Image className="post_imageOne" onClick={() => setModalShowTwo(true)} src={articleImage} rounded></Image>

                <Article
                    show={modalShowTwo}
                    onHide={() => setModalShowTwo(false)}
                />
                {/* images */}
                <div className="post_label">
                    <text><strong>Breaking news:</strong> This morning, Capulet employees
                    instigated a brawl with several Montague employees
                    on the street. The Montagues claim they didn't want
                    to start a conflict and were afraid of harming innocent
                    people, but Capulets ignored their pleas and caused chaos
                    in the streets for the sake of unwarranted vengeance.  </text>
                </div>
            </div>
            <div className="post_buttons">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
                <div className="post_spacing"></div>
                <text onClick={() => setModalShowTwo(true)} style={{ color: 'grey', cursor: 'pointer', paddingTop: '7px', paddingRight: '5px' }}><CommentIcon color="primary"></CommentIcon><strong className="hoverr">Comments</strong></text>
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