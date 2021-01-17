import { colors } from '../../theme/colors';

const Style = {
    button: {
        borderRadius: '10px',
        display: 'flex',
        margin: '0 5px 0 5px',
        padding: '0px 15px 0px 15px',
    },

    defaultButtonClick: {
        backgroundColor: colors.primary,
        border: `3px solid ${ colors.primaryLight }`,
    },
    defaultButtonHover: {
        backgroundColor: colors.primaryLight,
        border: `3px solid ${ colors.primary }`,
    },
    icon: {
        alignSelf: 'center',
        height: '30px',
        padding: '5px',
    },
};

export default Style;
