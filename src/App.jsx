import './App.css'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import store from './utils/store'
import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Body/>,
    children:[
      {path:'/',element:<MainComponent/>},{path:'watch',element:<WatchPage/>}
    ]
  }
])

function App() {

  return (
    <Provider store ={store} >

    <div className=' min-h-screen'>
     <Header/>
     <RouterProvider router={appRouter}>
      <Body/>
     </RouterProvider>
     </div>

    </Provider>
  )
}

export default App
