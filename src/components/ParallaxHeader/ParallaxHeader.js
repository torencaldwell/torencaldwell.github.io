import React, { useState, useEffect } from 'react';
import Style from './ParallaxHeader.style';
import { strings } from '../../localization';
import { links } from '../../links';
import { SplashText } from 'splash-text';
import { colors } from '../../theme/colors';
import { headerBackground } from '../../images';

var headerImageSize = {
    height: 0,
    width: 0,
};

const MAX_BLUR = 4;

const HeaderLink = ({ id, children }) => {
    const [linkStyle, setLinkStyle] = useState(Style.link);
    const element = document.getElementById(id);

    return (
        <p
            style={ linkStyle }
            onMouseEnter={ () => setLinkStyle(Style.linkHover) }
            onMouseLeave={ () => setLinkStyle(Style.link) }
            onClick={ () => element.scrollIntoView({ behavior: 'smooth' }) }
        >
            {children}
        </p>
    );
};

export const ParallaxHeader = () => {
    const [headerBlur, setHeaderBlur] = useState(0);
    const [headerSize, setHeaderSize] = useState(['auto', 'auto']);
    const [windowScrollY, setWindowScrollY] = useState(window.scrollY);

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
            setWindowScrollY(window.scrollY);
            const scrollValue = window.scrollY / 200;

            if (scrollValue <= MAX_BLUR)
                setHeaderBlur(scrollValue);
            else
                setHeaderBlur(MAX_BLUR);
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
                src={ headerBackground }
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
                    transform: `translateY(-${windowScrollY/2}px)`
                }}
            >   
                <div style={ Style.nameContainer } >
                    <a href={ links('linkedIn') } >
                        <SplashText
                            baseColor={ colors.white }
                            text={ strings('header.name') }
                            enterColors={[
                                colors.primary,
                                colors.tertiary,
                                colors.white,
                            ]}
                            interval={ 200 }
                            duration={ 2 }
                            textStyle={ Style.name }
                        />
                    </a>
                </div>
                <div style={ Style.verticalRule } />
                <div style={ Style.headerLinksContainer }>
                    <HeaderLink id='about'>{ strings('header.about') }</HeaderLink>
                    <HeaderLink id='projects'>{ strings('header.projects') }</HeaderLink>
                    <HeaderLink id='resume'>{ strings('header.resume') }</HeaderLink>
                    <HeaderLink id='contact'>{ strings('header.contact') }</HeaderLink>
                </div>
            </div>
        </div>
    );
}