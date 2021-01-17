import React from 'react';
import { ProjectCard } from '../../components/ProjectCard';
import { SectionContainer } from '../../components/SectionContainer';
import { strings } from '../../localization';
import { Button } from '../../components/Button';
import Style from './Projects.style';
import {
    hahIndoor,
    hahMap,
    hahSplash,
    githubLogoWhite,
    npmLogo,
} from '../../images';
import { links } from '../../links';
import { colors } from '../../theme/colors';

export const Projects = () => {
    return (
        <SectionContainer id='projects'>
            <h1>Demo Projects</h1>
            <HelpAHog />
            <SplashTextCard />
        </SectionContainer>
    );
}

const HelpAHog = () => (
    <ProjectCard
        demo={ props => (
            <>
                <img
                    src={ hahSplash }
                    style={ props.style }
                />
                <img
                    src={ hahMap }
                    style={ props.style }
                />
                <img
                    src={ hahIndoor }
                    style={ props.style }
                />
            </>
        ) }
    >
        <h1 style={ Style.titleText }>{ strings('projects.helpahog.title') }</h1>
        <p>{ strings('projects.helpahog.description') }</p>
        <Button
            icon={ githubLogoWhite }
            style={ Style.gitHubButton }
            href={ links('github.helpAHog') }
        >
            <p>View on Github</p>
        </Button>
    </ProjectCard>
);

const SplashTextCard = () => (
    <ProjectCard>
        <h1 style={ Style.titleText }>{ strings('projects.splashText.title') }</h1>
        <p>{ strings('projects.splashText.description') }</p>
        <div style={ Style.buttonRow }>
            <Button
                icon={ githubLogoWhite }
                style={ Style.gitHubButton }
                href={ links('github.splashText') }
            >
                <p>View on Github</p>
            </Button>
            <Button
                icon={ npmLogo }
                style={ Style.npmButton }
                href={ links('npmjs.splashText') }
            >
                <p>View on NPM</p>
            </Button>
        </div>
    </ProjectCard>
);
