import { DragDropContext, Droppable } from "react-beautiful-dnd"
import TopBar from "../TopBar"
import SideMenu from "../SideMenu"
import { v4 as uuid } from "uuid"
import List from "../List"
import store from "../../utils/store"
import StoreApi from "../../utils/storeApi"
import InputContainer from "../InputContainer"
import { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { getAllList } from "../../utils/Storage/actions/listActions"
import { connect } from "react-redux"

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "green",
    width: "100%",
    overflowY: "auto",
  },
  listContainer: {
    display: "flex",
  },
}))

const DashBoard = (props) => {
  const [data, setData] = useState(store)

  useEffect(() => {
    async function e() {
      // let lists = await props.getAllList()
      console.log("data de la lista " + (await props.getAllList() ))
      // console.log("la lista" + lists)
      // setData({ lists: lists })
    }
    e()
  }, [])

  const [open, setOpen] = useState(false)
  //let listas = getAllList()
  //console.log('listas '+ listas)

  const [backgroundUrl, setBackgroundUrl] = useState("")
  const classes = useStyle()

  const AgregarMasCard = (title, list_id) => {
    console.log(title, list_id)
    const newCardId = uuid()
    const newCard = {
      id: newCardId,
      title,
    }

    const list = data.lists[list_id]
    list.cards = [...list.cards, newCard]

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [list_id]: list,
      },
    }
    setData(newState)
  }

  const AgregarOtraLista = (title) => {
    const newListId = uuid()
    const newList = {
      id: newListId,
      title,
      cards: [],
    }
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    }
    setData(newState)
  }

  const updateListTitle = (title, list_id) => {
    const list = data.lists[list_id]
    list.title = title

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [list_id]: list,
      },
    }
    setData(newState)
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result
    console.log("destination", destination, "source", source, draggableId)

    if (!destination) {
      return
    }
    if (type === "list") {
      const newListIds = data.id
      newListIds.splice(source.index, 1)
      newListIds.splice(destination.index, 0, draggableId)
      return
    }

    const sourceList = data.lists[source.droppableId]
    const destinationList = data.lists[destination.droppableId]
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0]

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      }
      setData(newSate)
    } else {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      }
      setData(newState)
    }
  }

  return (
    <StoreApi.Provider
      value={{ AgregarMasCard, AgregarOtraLista, updateListTitle }}
    >
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TopBar setOpen={setOpen} />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="app" type="list" direction="horizontal">
            {(provided) => (
              <div
                className={classes.listContainer}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.lists.map((list, index) => {
                  console.log("esta es la list" + data.lists)
                  return <List list={list} key={index} index={index} />
                })}
                <InputContainer type="list"></InputContainer>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <SideMenu
          setBackgroundUrl={setBackgroundUrl}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </StoreApi.Provider>
  )
}

const mapStateToProps = (state) => ({ lists: state.lists })

export default connect(mapStateToProps, { getAllList })(DashBoard)
