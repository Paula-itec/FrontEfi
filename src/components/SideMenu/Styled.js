import {makeStyles} from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
    drawerPaper: {
        width: '400px',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    titleContainer: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: theme.spacing(2),
    },
    menuContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    menu: {
        width: '45%',
        height: '90px',
        background: 'blue',
        display: 'flex',
        alignItems: 'flex-end',
        borderRadius: '8px',
        marginTop: theme.spacing(2),
    },
    ref: {
        fontSize: '1rem',
        color: '#fff',
    },
}));