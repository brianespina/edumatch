import React from 'react'

const IconBox = ({ icon, title, blurb }) => {
     return(
        <div className="icon-left-box">
            <div className="icon">
                <img src={icon} />
            </div>
            <div className="icon-box-content">
                <div className="icon-box-title">{title}</div>
                <div className="icon-box-blurb">
                   {blurb}
                </div>
            </div>
        </div>
     )
}

export default IconBox