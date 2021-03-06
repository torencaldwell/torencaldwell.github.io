import { colors } from '../../theme/colors';

const Style = {
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
        fontSize: 50,
    },
    nameContainer: {
        alignItems: 'center',
        display: 'flex',
        padding: '40px 5px 5px 5px',
    },
    parallaxHeader: {
        width: '100%',
    },
    verticalRule: {
        borderLeft: `2px solid ${ colors.white }`,
        marginLeft: '40px',
        marginRight: '40px',
        height: '100%',
    }
};

export default Style;