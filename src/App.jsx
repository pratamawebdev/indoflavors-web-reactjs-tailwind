import DetailFoodPage from "./pages/detailfood";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import OrderPage from "./pages/order";
import { useRoutes } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateFoodPage from "./pages/createfood";
import UpdateFoodPage from "./pages/updatefood";

const routes = [
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />{" "}
      </ProtectedRoute>
    ),
  },
  { path: "/detaifood/:userId", element: <DetailFoodPage /> },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <OrderPage />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/createfood",
    element: <CreateFoodPage />,
  },
  {
    path: "/updatefood/:userId", 
    element: 
    
      
        <UpdateFoodPage />
      
  }
];
function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
