import App from "./Home/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route> 
                <Route path="/club/:club" element={<App/>}></Route> 
                <Route path="/camiseta/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </BrowserRouter>)
};

export default Router;  