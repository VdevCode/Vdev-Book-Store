import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../home/Home"
import Shop from "../shop/Shop"
import About from "../components/about"
import Blog from "../components/Blog"
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook"
import SignUp from "../components/SignUp"
import Login from "../components/Login"
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PersonalBook from "../dashboard/PersonalBook";


const router = createBrowserRouter([
    //user
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/" ,
          element: <Home /> 
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    //admin
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/personal",
          element: <PersonalBook/>
        },
        {
          path: "/admin/dashboard/edit-book/:id",
          element: <EditBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    }
    ,
    //login va signup
    {
      path:"/signup",
      element: <SignUp/>
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);

export default router;