import React from 'react';
import './MontegueNewsModal.css';
import logo from './Benvolio.jpg';
import articleImage from './BenvolioOption.png'
import newslogo from './MontagNews_profile pic.png'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import glass from './glass.png';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import Share from './BenvolioShare.js'
import Imposter from './Reportpage.js'
import Profile from './profile.png'

function MyVerticallyCenteredModal(props) {
  const [modalShowOne, setModalShowOne] = React.useState(false);
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

          <div className="benvolio_title">
            <div>
              <Image className="benvolio_profile" src={logo} roundedCircle />
            </div>
            <div className="benvolio_name_box">
              <text className="benvolio_name">pce_out</text>
              <div className="benvolio_hint1" data-title="Social media trap: Suspicious of  source you   don't already trust, even when it comes from sources you do already trust, you have to be a little suspicious of it. Hint: 
1. Google search “Peace_out, benvoliomontague”
2. Look at the evidence of this information. Even if he had provided a source, that wouldn't guarantee this is trustworthy; claims should be backed up by evidence, and not all evidence is created equal
3. Finally, you want to look into what other sources have to say about this claim. As we've established, some sources are more credible than others, but all sources have their limits. So, it's important to steel multiple trustworthy sources when fact-checking.">  <img src={glass} alt="" className="glass"></img></div>
            </div>
          </div>

          <div className="benvolio_label">
            <text className="post_headnameOne_text">SMH. I was there when it happened and tried to stop the violence. The Capulets instigated the fight!
              <b className="post_headnameOne_bold"> #keepthepeace #preachtruth</b>  ✌️</text>
          </div>

          <div className="benvolio_imagebox">
            <div className="benvolio_articleheaderbox">
              <Image src={newslogo} style={{width:"50px"}} roundedCircle></Image>
              <text className="benvolio_articleheader">Breaking News: Verona Square 9:30am</text>
              <div className="benvolio_hint1" data-title="Social media trap: sensational headline: Headlines are the must-read part of a news story because they are often printed in large and bold fonts.  Headlines can be misleading, conveying excitement when the story is not exciting, expressing approval or disapproval. Hint: Beaware of uses sensational headlines to  spread of unverified or false information.
Check yourself:
1. You have a strong emotional reaction
2. A story seems totally ridiculous — or perfectly confirms your beliefs
3. You immediately want to amplify the story
">
                <img src={glass} alt="" className="glasstwo"></img>
              </div>
            </div>
            <img className="benvolio_image" src={articleImage} alt="dsfs"></img>
            <div className="benvolio_hint1" data-title="Social media trap: Bias by photos, captions, and camera angles: Pictures can make a person look good, bad, silly, etc.  Which photos a news producer chooses to run can heavily influence the public's perception of a person or event.  On TV, images, captions, and narration of a TV anchor or reporter can be sources of bias. Hint:
You do a Reverse image searches: Go to images.google.com, click the camera icon, and either paste in the URL for an image you've seen online, upload an image from your hard drive, or drag an image from another window.">
              <img src={glass} alt="" className="glassthree"></img>
            </div>
          </div>

          <div className="benvolio_captionbox">
            <text className="benvolio_caption">
              <strong>Breaking news: </strong> This morning, Capulet employees instigated a brawl with several Montague employees on the street. The Montagues claim they didn't want to start a conflict and were afraid of harming innocent people, but Capulets ignored their pleas and caused chaos in the streets for the sake of unwarranted vengeance.
              </text>
            <div className="benvolio_hintfour" data-title="Social media trap: Bias by choice of words: People can be influenced by the use of positive or negative words with a certain connotation. People can also be influenced by the tone that a newscaster uses when saying certain words.
Hint: using lateral reading to check the source, look for authority and perspective, and then check the claim and its evidence. Like, sometimes, it makes sense to find out who's behind the account you're seeing. Sometimes, you should investigate the source of what they're sharing. Other times, it's best to evaluate the claim being made. As you practice, you'll develop a better idea of how to spend your time online.
">
              <img src={glass} alt="" className="glassfour"></img>
            </div>
          </div>

          <div className="benvolio_link">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
            <div className="benvolio_spacing"></div>
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
          <h4 className="benvolio_header">Comments</h4>
        </div>



        <div className="whole">

          <div>
            <div className="benvolio_benvoliosection">
              <div>
                <Image className="benvolio_benvoliosection_profile" src={Profile} roundedCircle />
              </div>
              <div className="benvolio_benvoliosection_name">
                <text><strong>Maxwell</strong> <text className="benvolio_timestamp">20 mins ago</text></text>
              </div>
            </div>

            <div className="benvolio_write">
              <text>Capulet-cronies are so deplorable...</text>
            </div>
          </div>



          <div>
            <div className="benvolio_benvoliosection">
              <div>
                <Image className="benvolio_benvoliosection_profile" src={Profile} roundedCircle />
              </div>
              <div className="benvolio_benvoliosection_name">
                <text><strong>Samantha</strong> <text className="benvolio_timestamp">4 mins ago</text></text>
              </div>
            </div>

            <div className="benvolio_write">
              <text>Down with the Capulets, down with the Montagues! To hell with these news corps 😡</text>
            </div>
          </div>

          <div className="subbenvolio">
            <div className="benvolio_benvoliosection">
              <div>
                <Image className="benvolio_benvoliosection_profile" src={Profile} roundedCircle />
              </div>
              <div className="benvolio_benvoliosection_name">
                <text><strong>Jared</strong> <text className="benvolio_timestamp">4 mins ago</text></text>
              </div>
            </div>

            <div className="benvolio_write">
              <text>It is clear that Capulets caused the trouble and Montague is innocent. How can you blame the Montagues too?! </text>
            </div>
          </div>

          <div className="subofsubbenvolio">
            <div className="benvolio_benvoliosection">
              <div>
                <Image className="benvolio_benvoliosection_profile" src={Profile} roundedCircle />
              </div>
              <div className="benvolio_benvoliosection_name">
                <text><strong>Samantha</strong> <text className="benvolio_timestamp">4 mins ago</text></text>
              </div>
            </div>

            <div className="benvolio_write">
              <text>Down with Mont-uglies. They're making up rumors and framing the Capulets. Don't trust them, I was there this morning!  </text>
            </div>
          </div>


          <div>
            <div className="benvolio_benvoliosection">
              <div>
                <Image className="benvolio_benvoliosection_profile" src={Profile} roundedCircle />
              </div>
              <div className="benvolio_benvoliosection_name">
                <text><strong>Chalice</strong> <text className="benvolio_timestamp">14 mins ago</text></text>
              </div>
            </div>

            <div className="benvolio_write">
              <text>CEO Capped-ulet needs to retire and all their employees to jail! They’ve been hiding too many scandals!</text>
            </div>
          </div>

          <div className="subbenvolio">
            <div className="benvolio_benvoliosection">
              <div>
                <Image className="benvolio_benvoliosection_profile" src={Profile} roundedCircle />
              </div>
              <div className="benvolio_benvoliosection_name">
                <text><strong>Bob</strong> <text className="benvolio_timestamp">4 mins ago</text></text>
              </div>
            </div>

            <div className="benvolio_write">
              <text>Both of them can’t be trusted, they broke our peace. Drive them out of here. Smaller businesses were booming until the families moved here!” </text>
            </div>
          </div>


          <div>
            <div className="benvolio_benvoliosection">
              <div>
                <Image className="benvolio_benvoliosection_profile" src={Profile} roundedCircle />
              </div>
              <div className="benvolio_benvoliosection_name">
                <text><strong>Escalus</strong> <text className="benvolio_timestamp">20 secs ago</text></text>
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

            <div className="benvolio_write">
              <text>I am Prince Escalus, follow my account to see more information about the truth!</text>

              <div className="benvolio_hintfive1" data-title="Hint:  
1. Check the profile: does the Blue-check verify? But, blue check-marks and verified profiles do not denote truth. They just mean an account itself is who they claim to be
2. Check the original news source: Use a search engine to look up the name of that site. 
3. search for their claim. 
4. As a good citizen of the internet, you should correct this misinformation, report the fake account and leave the comment to ask people not to share it, and then post the trustworthy article yourself with the headline, be aware of fake accounts">
                <img src={glass} alt="" className="glassfive"></img>
              </div>
            </div>
          </div>

          <div className="footer">

          </div>


        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal