import React from 'react';
import './PrinceDocument.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Share from './ReportShare.js'
import Doc from './Report.js'
import reportImage from './reportpicture.jpg'
function PrinceArticle(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowShare, setModalShowShare] = React.useState(false);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="example-custom-modal-styling-title"
            dialogClassName="modal-90w"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body scrollable={true}>
                <div className="textbox">
                    <div className="princetextbox">

                        <div className="article_titleblock">
                            <div className="article_title">
                                <h2><strong>Brawl Between Capulet and Montague families Sunday Morning</strong></h2>
                            </div>

                        </div>
                        <div className="article_authorblock">



                            <text className="article_author">
                                By: Prince Escalus
                            <br />Updated 10:00 AM ET, Sunday
                            </text>

                            <div className="article_share">
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
                                                                onHide={() => setModalShowShare(false)} /></div>
                                                    </Popover.Content>
                                                </Popover>
                                            }
                                        >
                                            <Button variant="info" style={{ width: '70px' }}>Share</Button>
                                        </OverlayTrigger>
                                    ))}
                                </>
                            </div>

                        </div>

                        <div className="articleOne">
                            <div className="article_image">
                                <Image src={reportImage} fluid />
                            </div>
                        </div>
                        <div className="reportText">
                            <div className="textboxOne">
                                <text><strong>(PrinceReport)</strong> Capulet employees Samson and Gregory were out on a stroll Sunday morning when they were approached by Montague employees Abraham and another unidentified person. Samson provoked the fight by flipping off the two Montagues while they walked by. Taking offense to the gesture, the four people begin brawling in Verona Square.
                                </text>
                            </div>
                            <div className="textboxTwo">
                                <text>Montague’s Benvolio arrived soon after attempting to stop the fight but was provoked to defend himself when Capulet’s higher-up employee Tybalt came. Four Verona citizens witnessed the brawl and reported seeing CEO Capulet attempting to join the fight as well as CEO Montague soon afterwards. Both wives of the company owners’ attempted to hold their husbands back.
                                </text>
                            </div>
                            <div className="textboxThree">
                                <text>Prince Escalus and other law enforcement arrived to disband the fight for disrupting the peace. CEO Capulet was taken in for questioning first and then CEO Montague later.
                                </text>
                            </div>
                        </div>
                    </div>

                    <div className="recordbox">
                        <text>Records:</text>
                    </div>
                </div>

                <div className="link-button">
                    <Button variant="secondary" style={{ width: '200px' }} onClick={() => setModalShow(true)}>Official Report Link</Button>
                    <Doc
                        show={modalShow}
                        onHide={() => setModalShow(false)}></Doc>
                </div>

            </Modal.Body>

        </Modal>
    );
}
export default PrinceArticle