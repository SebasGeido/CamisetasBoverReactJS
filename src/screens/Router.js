import App from "./Home/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";
import Carrito from "../Components/Carrito";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route> 
                <Route path="/club/:club" element={<App/>}></Route>
                <Route path="/carrito/" element={<Carrito/>}></Route>
                <Route path="/camiseta/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </BrowserRouter>)
};

export default Router;  