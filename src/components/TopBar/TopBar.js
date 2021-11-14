import React from 'react';
import {useStyle} from './Styled'
import { Typography,Button } from '@material-ui/core';

export default function TopBar({ setOpen }) {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Organizador</Typography>
            <Button className={classes.btn} onClick={() => setOpen(true)}>
                Elige el fondo
            </Button>
        </div>
    );
}
