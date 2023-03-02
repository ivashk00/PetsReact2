import React from "react";

import Header from "../header";
import Footer from "../footer";
import { Link } from "react-router-dom";

const Search = () => {
    return (
        <div>
            <Header />
            <main style={{'minHeight': '70vh'}}>
                <h2 className="text-center text-white bg-success m-2">Поиск по объявлениям</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border p-3" style={{'minWidth': '300px'}}>
                        <div className="mb-3">
                            <label for="district" className="form-label">Выберите район:</label>
                            <select id="district" className="form-select">
                                <option>Приморский</option>
                                <option>Петроградский</option>
                                <option>Василиостровский</option>
                                <option>Центральный</option>
                                <option>Красногвардейский</option>
                                <option>Выборгский</option>
                                <option>Калининский</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label for="password" className="form-label">Введите вид животного:</label>
                            <input type="text" className="form-control" id="password"/>
                        </div>

                        <Link to = {'/'} className="btn btn-success">Найти</Link>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Search;