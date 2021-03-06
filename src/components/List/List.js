import React from "react"
import { Paper, Typography, CssBaseline } from "@material-ui/core"
import { useStyle } from "./Styled"
import Title from "../Title/Title"
import Card from "../Card/Card"
import InputContainer from "../InputContainer/InputContainer"
import { Droppable, Draggable } from "react-beautiful-dnd"

export default function List({ list, index }) {
  const classes = useStyle()
  console.log(list)
  return (
    <Draggable draggableId={list.list_id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <Title title={list.title} list_id={list.list_id} />
            <Droppable droppableId={list.list_id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={classes.cardContainer}
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <InputContainer list_id={list.list_id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  )
}
