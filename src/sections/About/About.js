import React from 'react';
import { strings } from '../../localization';
import { SectionContainer } from '../../components/SectionContainer';

export const About = () => {
    return (
        <SectionContainer id='about'>
            <h1>{ strings('header.about') }</h1>
            <p>This is where the projects will go</p>
        </SectionContainer>
    );
}
