import React, { useState, useEffect } from 'react';
import Style from './ParallaxHeader.style';


const HeaderLink = ({ href, children }) => {
    const [linkStyle, setLinkStyle] = useState(Style.link);

    return (
        <p
            style={ linkStyle }
            onMouseEnter={ () => setLinkStyle(Style.linkHover) }
            onMouseLeave={ () => setLinkStyle(Style.link) }
        >
            {children}
        </p>
    );
};

var headerImageSize = {
    height: 0,
    width: 0,
};

export const ParallaxHeader = () => {
    const [headerBlur, setHeaderBlur] = useState(0);
    const [headerSize, setHeaderSize] = useState(['auto', 'auto']); //height, width

    const onHeaderImgLoad = ({target: image}) => {
        headerImageSize = {
            height: image.offsetHeight,
            width: image.offsetWidth,
        };
        onWindowResize();
    };

    const onWindowResize = () => {
        const imgAspect = headerImageSize.height / headerImageSize.width;
        const winAspect = window.innerHeight / window.innerWidth;

        if (imgAspect <= winAspect) {
            setHeaderSize(['100%', 'auto']);
        } else {
            setHeaderSize(['auto', '100%']);
        }
    }

    useEffect(() => {
        const onScroll = () => {
            setHeaderBlur((window.scrollY / 200));
            console.log(window.scrollY/10);
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onWindowResize);

        return function cleanup() {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onWindowResize);
        };
    });

    return (
        <div style={{ ...Style.headerBackground, height: window.innerHeight }}>
            <img
                src={ require('../../assets/headerBackground.jpg') }
                onLoad={ onHeaderImgLoad }
                style={{
                    height: headerSize[0],
                    filter: `blur(${headerBlur}px)`,
                    position: 'fixed',
                    transform: 'translateY(200)',
                    width: headerSize[1],
                    zIndex: 1
                }}
            />
            <div
                style={{
                    ...Style.headerContent,
                    transform: `translateY(-${window.scrollY / 3}px)`
                }}
            >
                <h1 style={ Style.name }>Toren Caldwell</h1>
                <div style={ Style.verticalRule } />
                <div style={ Style.headerLinksContainer }>
                    <HeaderLink>Projects</HeaderLink>
                    <HeaderLink>Resume</HeaderLink>
                    <HeaderLink>Contact Me</HeaderLink>
                </div>
            </div>
        </div>
    );
}