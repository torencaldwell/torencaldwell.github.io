import { colors } from '../../theme/colors';

const Style = {
    container: {
        border: `5px solid ${ colors.white }`,
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        margin: '30px',
        padding: '20px',
    },
    childrenContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
    },
    demoContainer: {
        flex: 2,
    },
    demo: {
        borderRadius: '10px',
        height: '300px',
        padding: '5px',
    },
};

export default Style;
