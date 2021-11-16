import React, { useContext, Fragment } from "react"
import SignInSide from "./components/Auth/Login"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import PrivateRoute from "./components/Routes/PrivateRoute"
import Layout from "./components/Layout"
import { AuthContext } from "./components/Context/AuthContext"
import DashBoard from "./components/DashBoard/Dashboard"
function App() {
  const [state, setState] = useContext(AuthContext)

  return (
    <BrowserRouter>
    <Fragment>
      <Layout>
        <Routes>
        <Route exact path="/login" element={<SignInSide/>} />
        <Route exact path="/" element={<DashBoard/>} />
        {/* <Route exact path='/' element={<PrivateRoute isAuthenticated={state.isAuthenticated} />} >
            <Route exact path='/' element={<DashBoard />}/>
        </Route> */}
        {/* <PrivateRoute
          values={state}
          exact
          path="/"
          component={DashBoard}
          to="/login"
        /> */}
        </Routes>
      </Layout>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
