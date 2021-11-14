import React, {useState} from 'react';
import {Paper,Typography,Collapse} from '@material-ui/core';
import InputCard from '../InputCard/InputCard';
import { useStyle } from './Styled';


export default function InputContainer({listId,type}){
    const classes = useStyle();
    const [open,setOpen]=useState(false);
    return(
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId} type={type}/> 
            </Collapse>
            <Collapse in={!open}>
                <Paper
                    className={classes.addCard}
                    elevation={0}
                    onClick={()=>setOpen(!open)}                
                >

                    <Typography>
                        {type === 'card' ? '+Agregar Card': '+Agregar otra lista'}
                    </Typography>
                </Paper>
            </Collapse>

        </div>
    );
}