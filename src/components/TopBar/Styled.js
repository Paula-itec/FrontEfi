import {makeStyles} from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
        root: {
            display: 'flex',
            alignItems: 'center',
            margin: theme.spacing(2),
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            flexGrow: 1,
        },
        btn: {
            color: '#fff',
            background: 'hsla(0,0%,100%,.24)',
        },
    }));
