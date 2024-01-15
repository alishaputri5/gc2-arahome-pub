
import Rootlayout from "./layout/RootLayout";
import Detail from "./views/Detail";
import Products from "./views/Products";
import HomePage from "./views/homePage";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
    
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/:id",
        element: <Detail />,
      }
    ]
  }
  
])



