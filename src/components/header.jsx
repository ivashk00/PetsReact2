import React from "react";
import logo from '../components/img/logo3.svg';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-">
                    <div className="container-fluid">
                        <Link to = {'/'} className="navbar-brand" href="index.html"><img src={logo} className Name="rounded-3" alt="logo" style={{ 'maxWidth': '150px' }}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to = {'/'} className="nav-link " aria-current="page">Главная</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = {'/profile'} className="nav-link">Личный кабинет</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = {'/registration'} className="nav-link">Регистрация</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = {'/login'} className="nav-link">Войти</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link to = {'/more'} className="nav-link">Карточка</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to = {'/'} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Объявления
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link to = {'/addPet'} className="dropdown-item">Добавить объявление</Link></li>
                                        <li><Link to = {'/'} className="dropdown-divider" /></li>
                                        <li><Link to = {'/search'} className="dropdown-item">Поиск по объявлениям</Link></li>
                                        <li><Link to = {'/more'} className="dropdown-item">Карточка</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" list="pets" placeholder="Поиск" aria-label="Search" />
                                <button className="btn btn-success" onclick="">Поиск</button>
                                <datalist id="pets">
                                    <option value="Кошка" />
                                    <option value="Собака" />
                                    <option value="Корова" />
                                    <option value="Крокодил" />
                                    <option value="Сова" />
                                </datalist>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
};
export default Header;