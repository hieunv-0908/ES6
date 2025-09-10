import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomeBai1 from "../components/HomeBai1";
import Product from "../components/Product";
import Detail from "../components/Detail";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomeBai1 />} />
                <Route path="/product" element={<Product />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </>
    );
}
