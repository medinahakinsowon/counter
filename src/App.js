
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FetchData from './FetchData';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <FetchData/>
    </div>,
  },
]);
const App = ()=>{
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}


export default App;