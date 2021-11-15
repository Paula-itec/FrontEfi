import React from 'react';
import { paper } from "@material-ui/core";
import { useStyle } from './Styled';
import { Draggable } from "react-beautiful-dnd";

const Card= ({card,index}) => {
    const classes = useStyle();


    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided)=>(
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <paper className={classes.card}>{card.title}</paper>
                </div>
                    
            )}
        </Draggable>
    );
}

export default Card;