import React, { useState } from "react"
import { Paper, Typography, Collapse } from "@material-ui/core"
import InputCard from "../InputCard/"
import { useStyle } from "./Styled"

const InputContainer = ({ list_id, type }) => {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} list_id={list_id} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+Agregar Card" : "+Agregar otra lista"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

export default InputContainer
