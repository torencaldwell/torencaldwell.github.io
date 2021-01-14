import React from 'react';
import Style from './SectionContainer.style';

export const SectionContainer = props => (
    <div id={ props.id } style={ Style.containerMargin }>
        <div style={ Style.container }>
            { props.children }
        </div>
    </div>
);
