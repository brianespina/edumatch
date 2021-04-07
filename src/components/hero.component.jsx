import React from 'react'
import IconBox from './icon-left-box.component'

const Hero = () => {
    return(
        <>
        <section className="hero">
            <div className="container">
                <div className="hero-image">
                    <img src="https://via.placeholder.com/650x800 " />
                </div>
                <div className="hero-features">
                    <small>lorem upsim</small>
                    <h2>
                        Key Features
                    </h2>
                    <IconBox icon="https://via.placeholder.com/30" title="Lorem Ipsum is simply dummy " blurb="dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "/>
                    <IconBox icon="https://via.placeholder.com/30" title="Lorem Ipsum is simply dummy " blurb="dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "/>
                    <IconBox icon="https://via.placeholder.com/30" title="Lorem Ipsum is simply dummy " blurb="dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "/>

                </div>
            </div>
        </section>
        </>
    )
}

export default Hero 