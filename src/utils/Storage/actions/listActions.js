import axios from "axios"
import { GET_ALL_LIST, ERROR_LIST_MODULE, CREATE_LIST } from "../types"

const PATH = "/api/v1/list"

export const getAllList = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_KEY + PATH}`)
    dispatch({
      type: GET_ALL_LIST,
      payload: res.data,
    })
    console.log(res.data)
    return res.data
  } catch (e) {
    dispatch({
      type: ERROR_LIST_MODULE,
      payload: console.log(e),
    })
    return []
  }
}

export const createList = (name, status) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_KEY + PATH}`, {
      name,
      status,
    })
    dispatch({
      type: CREATE_LIST,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: ERROR_LIST_MODULE,
      payload: console.log(e),
    })
  }
}
