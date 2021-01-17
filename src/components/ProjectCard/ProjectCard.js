import React from 'react';
import Style from './ProjectCard.style';

export const ProjectCard = props => {
    return (
        <div style={ Style.container }>
            { props.demo &&
                <div style={ Style.demoContainer }>
                    <props.demo style={ Style.demo } />
                </div>
            }
            <div style={ Style.childrenContainer }>
                { props.children }        
            </div>
        </div>
    );
};
