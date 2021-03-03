import React from 'react';


function FooterIcon(props: any) {
    const { icon: {iconRef, text, condition} } = props;
    return (
        <div className="f-c-c-c icon-box">
            <img src={iconRef} alt="icon"/>
            <div className="icon-text">{text}</div>
            {condition ? <div className="icon-text-sub">{condition}</div> : null}
        </div>
    );
}

export default FooterIcon;