import {makeStyles, fade} from "@material-ui/core/styles";


export const useStyle = makeStyles((theme) => ({
    card: {
        width: '280px',
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        background: '#5AAC44',
        color: '#fff',
        '&:hover': {
            background: fade('#5AAC44', 0.75),
        },
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
}));