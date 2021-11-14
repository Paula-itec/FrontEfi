import { makeStyles } from "@material-ui/core"

export const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1),
    },
    cardContainer: {
        marginTop: theme.spacing(4),
    },
}));