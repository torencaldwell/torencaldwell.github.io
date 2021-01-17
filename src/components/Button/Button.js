import React, { useState } from 'react';
import _ from 'lodash';
import Style from './Button.style';

export const Button = props => {
    const { style } = props;
    const buttonClick = _.get(style, 'onClick', Style.defaultButtonClick);
    const buttonHover = _.get(style, 'onHover', Style.defaultButtonHover);

    const [buttonStyle, setButtonStyle] = useState(buttonClick);

    return (
        <div
            style={ { ...Style.button, ...buttonStyle } }
            onMouseOver={ () => { setButtonStyle(buttonHover) } }
            onMouseOut={ () => { setButtonStyle(buttonClick) } }
            onMouseUp={ () => { setButtonStyle(buttonHover) } }
            onMouseDown={ () => {
                setButtonStyle(buttonClick);
                window.open(props.href, '_blank');
            } }
        >
            { props.icon &&
                <img
                    src={ props.icon }
                    style={ Style.icon }
                />
            }
            <div>
                { props.children }
            </div>
        </div>
    );
};
