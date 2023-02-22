import React from "react";
import { Link } from "react-router-dom";

//ИЗОБРАЖЕНИЯ
import logo from '../components/img/logo.jpg';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" href="index.html"><img src={logo} className="w-25 rounded-3" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link" aria-current="page">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'} className="nav-link" aria-current="page">Войти</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/profile'} className="nav-link">Личный кабинет</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/registration'} className="nav-link">Регистрация</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/addPet'} className="nav-link">Добавить объявление</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/search'} className="nav-link">Поиск питомцев</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Подписаться</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>



    );
};

export default Header;