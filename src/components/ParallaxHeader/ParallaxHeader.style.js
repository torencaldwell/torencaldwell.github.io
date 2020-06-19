import { colors } from '../../theme/colors';

const Style = {
    parallaxHeader: {
        width: '100%',
    },
    headerBackground: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        height: '200px',
        position: 'fixed',
        zIndex: 2,
    },
    headerLinksContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
    },
    link: {
        textAlign: 'left',
        color: colors.white,
    },
    linkHover: {
        textAlign: 'left',
        cursor: 'pointer',
        color: colors.secondaryUltralight,
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        color: colors.white,
        padding: '5px',
    },
    verticalRule: {
        borderLeft: `2px solid ${ colors.white }`,
        marginLeft: '40px',
        marginRight: '40px',
        height: '100%',
    }
};

export default Style;