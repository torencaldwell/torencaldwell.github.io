import { colors } from '../../theme/colors';

const Style = {
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    gitHubButton: {
        onClick: {
            backgroundColor: colors.gitOrange,
            border: `3px solid ${ colors.gitOrangeLight }`,
        },
        onHover: {
            backgroundColor: colors.gitOrangeLight,
            border: `3px solid ${ colors.gitOrange }`,
        },
    },
    npmButton: {
        onClick: {
            backgroundColor: colors.npmRed,
            border: `3px solid ${ colors.npmRedLight }`,
        },
        onHover: {
            backgroundColor: colors.npmRedLight,
            border: `3px solid ${ colors.npmRed }`,
        },
    },
    titleText: {
        paddingTop: '0',
    },
};

export default Style;