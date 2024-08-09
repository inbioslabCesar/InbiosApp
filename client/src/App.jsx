import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/router/PrivateRoute";
import { AuthContextProvider } from "./context/authContext";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Ofertas from "./pages/Ofertas";
import ProductForm from "./pages/ProductForm";
import ProductsPage from "./pages/ProductsPage";
import { DASHBOARD, LOGIN, LOGOUT, NEWFORM, OFERTAS, PRODUCT } from "./routes/paths";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path={LOGIN} element={<Home />}>
            <Route index element={<Home/>} />
          </Route>
          <Route path={DASHBOARD} element={<Dashboard />}>
            <Route index element={<Dashboard />} />
            <Route path={PRODUCT} element={<ProductsPage />} />
            <Route path={OFERTAS} element={<Ofertas/>}/>
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
