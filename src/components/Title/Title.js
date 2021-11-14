import React, {useState,useContext} from 'react';
import{Typography,InputBase} from '@material-ui/core';
import {useStyle} from './Styled';
// import MoreHorizIcon from '@material-ui/core/icons/MoreHoriz';
import storeApi from '../../utils/storeApi';

export default function Title({ title, listId }) {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const { updateListTitle } = useContext(storeApi);
    const classes = useStyle();
    const handleOnChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleOnBlur = () => {
        updateListTitle(newTitle, listId);
        setOpen(false);
    };
    return (
        <div>
            {open ? (
                <div>
                    <InputBase
                        onChange={handleOnChange}
                        autoFocus
                        value={newTitle}
                        inputProps={{
                            className: classes.input,
                        }}
                        fullWidth
                        onBlur={handleOnBlur}
                    />
                </div>
            ) : (
                <div className={classes.editableTitleContainer}>
                    <Typography
                        onClick={() => setOpen(!open)}
                        className={classes.editableTitle}
                    >
                        {title}
                    </Typography>
                    {/* <MoreHorizIcon /> */}
                </div>
            )}
        </div>
    );
}