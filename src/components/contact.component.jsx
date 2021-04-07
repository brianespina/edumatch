import React from 'react'

const Contact = () =>{
   return(
        <section className="contact">
            <div className="contact-info">
                <h2>We will be glad to hear from you!</h2>
                <div className="contact-info-item">
                <div className="contact-info-label">
                    Phone
                </div>
                <div className="contact-info-content">
                    +12315125123
                </div>
                </div>
                <div className="contact-info-item">
                    <div className="contact-info-label">
                        Email
                    </div>
                    <div className="contact-info-content">
                        espinabrian@gmail.com
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="contact-info-label">
                        Address
                    </div>
                    <div className="contact-info-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </div>
                </div>
            </div>
            
        </section>
   )
}

export default Contact