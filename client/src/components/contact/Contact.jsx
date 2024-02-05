import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className=" flexCenter paddings innerWidth c-container">
            {/* LEFT SIDE  */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providijng the best services for you.
                    <br/>
                     We beleive a good blace to live can make your life better
                     </span>


                     <div className="flexColStart contactModes">
                        {/* FIRST ROW */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    call now
                                </div>
                            </div>

                            {/* SECOND MODE  */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat now
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video Call now
                                </div>
                            </div>

                            {/* SECOND MODE  */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>012 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message now
                                </div>
                            </div>
                        </div>
                     </div>
            </div>

            {/* RIGHT SIDE */}
             <div className="c-right">
                <div className="image-container">
                    <img src="contact.jpg" alt="" />
                </div>
             </div>

        </div>
    </section>
  )
}

export default Contact
