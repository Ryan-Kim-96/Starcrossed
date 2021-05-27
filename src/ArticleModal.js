import React from 'react';
import './ArticleModal.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import glass from './glass.png';
import capuletLogo from './CapCorp_Website.png'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Share from './TybaltShare.js'
import articleImage from './CapuletImage.png'

function Article(props) {
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
                <div className="article_capulet">
                <Image className="article_capuletlogo1" src={capuletLogo} />
                    <div className="article_hint" data-title=" 2.) Reading an article on a website you are not familiar can bring up some warning signs. 
- Are there a lot of ads. Does it look like a well-known website. If you are unfamiliar with the website, then it is best to check.

 Hint: Google the sites name, check their other articles, is the information reliable and credible? Check the URL of the webiste   is is trying to mimic a well known credible, accurable, trustworthy website, and or company?">
                        <img src={glass} alt="" className="article_glass"></img>
                    </div>
                </div>

                <div className="article_titleblock">
                    <div className="article_title">
                        Lives of Capulets and Montagues were in the hands of their Mothers
                            </div>
                    <div className="article_hint" data-title=" 3.)  Be aware of headlines. Do not only read the headline and the introduction paragraph. You can be missing vital information.
- Some “Fake news publishers like to write things straightforward and then add false information throughout the news article.” 

 Hint: Click the article and read through the article does the headline match with the content of the article.">
                        <img src={glass} alt="" className="article_glass"></img>
                    </div>
                </div>
                <div className="article_authorblock">

                    <div className="article_hint"
                        data-title=" 1.) Check who wrote the article, is there no name? If so be weary of the information HINT: If there is an author name search and look for previous articles written by the author. 
                            In doing this you can verify if the author is a “legitimate journalist” or a Liar!">
                        <img src={glass} alt="" className="article_glass"></img>
                    </div>

                    <text className="article_author">
                        By: Jenn Taylor
                            <br></br>Updated 1:30 AM ET, Wed January 20, 2021
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
                    <div className="article_hint"
                        data-title=" 4.) Hint: Before you share an article think twice! You may be sharing a fake news, and you may be unintentionally spreading misinformtion and fake news.">
                        <img src={glass} alt="" className="article_glass"></img>
                    </div>
                </div>

                <div className="article">
                    <div className="article_image">
                        <Image src={articleImage} fluid />

                        <div className="article_blockOne">
                            <div>
                                <text><strong>(CPnews)</strong> -- “Hi, I am Jenn from Early Morning News from Capulet Corp News at the main headquarters in Fair Verona.
                                <br></br>
                                    <br></br>
                                </text>
                            </div>
                            <div className="article_hint" data-title="5.)  Hint: To know if an article is fake, check for the date, and time. To know if the content discussed in the article is based upon an real event search and see when the event occurred. when the events had occured">
                                <img src={glass} alt="" className="article_glasstwo"></img>
                            </div>
                        </div>

                        <div className="article_blockOne">
                            <div>
                                <text>“We have learned that this was a fight that could have ended in the deaths of multiple Capulet employees.
                                People at the scene said that it was something they would have never imagined witnessing on such a wonderful Sunday morning.
                            <br></br>
                                    <br></br>
                                    <strong>Bystander A: </strong>
                            “I cannot believe that I almost saw people die in the fight, it was so brutal! I saw someone on the floor being kicked by like, three people.”
                            </text>
                            </div>
                            <div className="article_hinttwo" data-title="6.) Fake news articles are are designed for one purpose to trigger your emotions and to feed into your biases.

Hint: To prevent oneself from being deceived into believing the article is to support our biases. Instead, news articles are supposed to tell you the factual truth and not one preconception belief or thought.">
                                <img src={glass} alt="" className="article_glassthree"></img>
                            </div>
                        </div>

                        <div className="article_blockOne">
                            <div>
                                <text>“We have learned that this was a fight that could have ended in the deaths of multiple Capulet employees.
                                People at the scene said that it was something they would have never imagined witnessing on such a wonderful Sunday morning.
                            <br></br>
                                    <br></br>
                                    <strong>Bystander A: </strong>
                            “I cannot believe that I almost saw people die in the fight, it was so brutal! I saw someone on the floor being kicked by like, three people.”

                            <br></br>
                                    <br></br>
                                    <strong>Bystander B:</strong>
                            “I saw people come in to stop the fight but it just got worse! I wanted to help, but there were too many [people].”
                            <br></br>
                                    <br></br>

                            (Third party reporter news outlet at the scene asked some bystanders)
                            We asked Person A and Person B if they knew who provoked and began the brawl. We kept their identities secret to protect their identities, as per requested. This is what the bystanders said:
                            </text>
                            </div>
                            <div className="article_hinttwo" data-title="Object Their Objectivity: Brush up on your literary skills by paying attention to what kinds of words or tones are being used in a source. Is the writer impartial with their statements or are they tending to favor one side over the other?

It’s always best to consider both sides before resigning yourself to an opinion.">
                                <img src={glass} alt="" className="article_glassfour"></img>
                            </div>
                        </div>

                        <div className="article_blockOne">
                            <div>
                                <text>Person A:
                                “I’m not sure, but it looked like that Montagues began the fight”
                                <br></br>
                                    <br></br>
	                            Follow up question: How did you know it was the Montagues?
	                            <br></br>
                                    <br></br>
                                    <strong>Person A: </strong> “ From what I saw, the trouble started right after the Montagues arrived.”
                               <br></br>
                                    <br></br>
                                    <strong>Person B: </strong>
                                “I was not able to see clearly on who began the fight, but I saw a couple of the Capulets on the ground. Clearly they were caught off guard!”
                                <br></br>
                                    <br></br>
                                    <strong>Follow up question:</strong> How did you know they were Capulets on the ground?
                                <br></br>
                                    <br></br>
                                    <strong>Person B: </strong>  “Everyone knows Montagues are the rowdier bunch! I’m not surprised if they victimized the Caps from the get-go.”
                                <br></br>
                                    <br></br>
                                (Jenn from Capulet News states:)
                                Unexpectedly after the fighting started getting out of hand, the two rivaling CEO’s Mr. Capulet and Mr. Montague were seen going at each other's throats before their wives attempted to stop the brawl from continuing.
                                <br></br>
                                    <br></br>
                                Thankfully no one got hurt, but you can tell there was frustration on the faces of the CEOs and their wives. Public opinion on both sides have been falling each day a new scandal like this comes out.
                                <br></br>
                                    <br></br>
                                Here’s a statement from both the wives of the companies:
                                <br></br>
                                    <br></br>
                                Lady Capulet: “We need to be better role models for our children to resolve issues without getting into unnecessary fights.”
                                <br></br>
                                    <br></br>
                                Lady Montague: “It is sad to see that our employees get provoked so easily. There needs to be better education on how to de-escalate through communication.”
                                <br></br>
                                    <br></br>
                                (These statements were heard from bystanders and not actually given by the wives)
                                 </text>
                            </div>
                            <div className="article_hinttwo" data-title="- An article that has quotes and pictures does not mean it is accurate and or credible information.
- These are some of the tools that are used to deceive the reader
 - “Fake news reporters” like to associate quotes with famous individual to create trust with the reader
 - Images have become deceitful, as pictures can be edited and show a story the benefits the writer
 Hint: To verify if the quotes are true and factual, search them on Google, were they used by another news outlet or source. A way to confirm if a image is real or not by using reverse image search or use Tineye a platform where you can find the image address and location of the image.
">
                                <img src={glass} alt="" className="article_glassfive"></img>
                            </div>
                        </div>
                    </div>
                    <div className="article_advert">
                        <p>Advertisement</p>
                    </div>
                </div>


            </Modal.Body>

        </Modal>
    );
}
export default Article