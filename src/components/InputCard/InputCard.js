import React, { useState, useContext } from "react"
import { Paper, InputBase, Button, IconButton } from "@material-ui/core"

import { useStyle } from "./Styled"
import storeApi from "../../utils/storeApi"
export default function InputCard({ setOpen, list_id, type }) {
  const classes = useStyle()
  const { addMoreCard, addMoreList } = useContext(storeApi)
  const [title, setTitle] = useState("")

  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }
  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, list_id)
      setTitle("")
      setOpen(false)
    } else {
      addMoreList(title)
      setTitle("")
      setOpen(false)
    }
  }

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={title}
            placeholder={
              type === "card"
                ? "Ingrese un titulo para esta card"
                : "ingrese un titulo para esta Lista"
            }
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "Agregar Card" : "Agregar List"}
        </Button>
        <IconButton onClick={() => setOpen(false)}></IconButton>
      </div>
    </div>
  )
}
