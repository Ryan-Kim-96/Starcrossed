import React from 'react'
import './List.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Avatar from "@material-ui/core/Avatar"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import badgeone from './Badges/Algorithms.png'
import badgetwo from './Badges/Confirmation Bias.png'
import badgethree from './Badges/Emotion-Control.png'
import badgefour from './Badges/Vine Badge.png'
function List() {

    return (
        <div>
            <div className="spacing">

            </div>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" style={{ cursor: 'pointer' }}>
                        Messages <ArrowDropDownOutlinedIcon></ArrowDropDownOutlinedIcon>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="background">
                                <h3>Veronabook</h3>
                                <h5 style={{ paddingLeft: '5px' }}>8:00 am</h5>
                                <text>Looks like something exciting happened this morning! This would be a great opportunity to gain more followers.</text>
                                <br></br>
                                <br></br>
                                <text><strong>TO DO: </strong> Explore your dashboard and pick a post to share on your profile</text>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" style={{ cursor: 'pointer' }}>
                        Badges <ArrowDropDownOutlinedIcon></ArrowDropDownOutlinedIcon>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body style={{backgroundColor:"black"}}>
                            <h3 style={{color:"lightgrey"}}>Collect em' all!!</h3>
                            
                            <div style={{marginTop:'20px'}}>
                                <div>
                                    <Image src={badgeone} style={{width:"255px"}}></Image>
                                </div>
                                <div>
                                    <Image src={badgetwo} style={{width:"295px", marginLeft:"-40px", marginTop:"-100px"}}></Image>
                                </div>
                                <div>
                                    <Image src={badgethree} style={{width:"295px", marginLeft:"-30px", marginTop:"-100px"}}></Image>
                                </div>
                                <div>
                                    <Image src={badgefour} style={{width:"190px", marginLeft:"35px", marginTop:"-70px"}}></Image>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default List;