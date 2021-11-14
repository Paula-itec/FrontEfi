import {makeStyles,fade} from "@material-ui/core/styles"

export const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        marginTop: theme.spacing(1),
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        background: '#EBECF0',
        '&:hover': {
            backgroundColor: fade('#000', 0.25),
        },
    },
}));