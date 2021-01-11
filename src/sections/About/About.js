import React from 'react';
import { strings } from '../../localization';

export const About = () => {
    return (
        <div id='about'>
            <h1>{ strings('header.about') }</h1>
            <p>This is where the projects will go</p>
        </div>
    );
}
