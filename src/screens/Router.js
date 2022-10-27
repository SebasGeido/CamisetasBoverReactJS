import App from "./Home/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";
import Camiseta from "./camiseta.js";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/camiseta/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </BrowserRouter>)
};

export default Router;  