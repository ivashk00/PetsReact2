import React from "react";

import Header from "../header";
import Footer from "../footer";

import cat from '../img/кошка.jpg';
import goat from '../img/коза.jpeg';

const Watch = () => {
    return (
        <div>
            <Header />
            <main>
                <h2 className="text-center text-white bg-success m-2">Добавленные объявления</h2>
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
                        style="min-width: 300px; width: 45%;">
                        <img src={cat} className="w-75" alt="рисунок животного"/>
                            <p className="w-50 text-success" style="min-width: 250px;">id:</p>
                            <p className="w-50" style="min-width: 250px;">14</p>

                            <p className="w-50 text-success" style="min-width: 250px;">Вид животного:</p>
                            <p className="w-50" style="min-width: 250px;"> Кошка</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Описание:</p>
                            <p className="w-50" style="min-width: 300px;">Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Номер чипа:</p>
                            <p className="w-50" style="min-width: 300px;">ca-001-spb</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Район:</p>
                            <p className="w-50" style="min-width: 300px;">Василиостровский</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Дата:</p>
                            <p className="w-50" style="min-width: 300px;">24-03-2020</p>
                            <div className="position-absolute text-danger" style="top:15px; right: 15px; cursor: pointer;">&#10060;
                            </div>
                            <button type="submit" className="btn btn-success">Редактировать объявление</button>
                    </div>
                    <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
                        style="min-width: 300px; width: 45%;">
                        <img src={goat} className="w-75" alt="рисунок животного"/>
                            <p className="w-50 text-success" style="min-width: 250px;">id:</p>
                            <p className="w-50" style="min-width: 250px;">18</p>

                            <p className="w-50 text-success" style="min-width: 250px;">Вид животного:</p>
                            <p className="w-50" style="min-width: 250px;"> Коза</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Описание:</p>
                            <p className="w-50" style="min-width: 300px;">Потерялась коза, последний раз видели в здании Московского
                                вокзала
                                г. Санкт-Петербург. Коза белая, пуховая.</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Номер чипа:</p>
                            <p className="w-50" style="min-width: 300px;">go-011-spb</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Район:</p>
                            <p className="w-50" style="min-width: 300px;">Центральный</p>

                            <p className="w-50 text-success" style="min-width: 300px;">Дата:</p>
                            <p className="w-50" style="min-width: 300px;">14-03-2022</p>
                            <div className="position-absolute text-danger" style="top:15px; right: 15px; cursor: pointer;">&#10060;
                            </div>
                            <button type="submit" className="btn btn-success">Редактировать объявление</button>
                    </div>
                </div>

                <nav aria-label="Page navigation example" className="m-3">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>
            <Footer />
        </div>
    );
};

export default Watch;