import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    },
}));