import React from "react";

import Header from "../header";
import Footer from "../footer";

const AddPet = () => {
    return (
        <div>
            <Header />
            <main style={{'minHeight': '70vh'}}>
                <h2 className="text-center text-white bg-primary m-2">Добавление нового объявления</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border border-primary p-3" style={{'minWidth': '300px'}}>

                        <div className="mb-3">
                            <label for="name" className="form-label">Введите ваше имя</label>
                            <input type="text" className="form-control" id="name" />
                            <div className="form-text">Используйте кириллические буквы.</div>
                        </div>

                        <div className="mb-3">
                            <label for="phone" className="form-label">Введите свой телефон:</label>
                            <input type="email" className="form-control" id="phone" />
                            <div className="form-text">Используйте цифры, +, -.</div>
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email" />
                            <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label for="kind" className="form-label">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind" />
                            <div className="form-text">Обязательное поле</div>
                        </div>

                        <div className="mb-3 form-check border p-3">
                            <input type="checkbox" className="form-check-input m-3" id="exampleCheck1" />
                            <label className="form-check-label m-3" for="exampleCheck1">Пройти автоматическую регистрацию</label>
                            <label for="password" className="form-label hidden">Введите пароль:</label>
                            <input type="password" className="form-control hidden" id="password" />
                            <div className="form-text hidden">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
                            <label for="confirm_password" className="form-label hidden">Повторите пароль пароль:</label>
                            <input type="password" className="form-control hidden" id="confirm_password" />



                        </div>


                        <div className="mb-3">
                            <label for="chip" className="form-label">Электронный чип:</label>
                            <input type="text" className="form-control" id="chip" />
                            <div className="form-text">Обязательное поле.</div>
                        </div>

                        <div className="mb-3">
                            <label for="description" className="form-label">Описание:</label>
                            <textarea className="form-control" id="description"></textarea>
                            <div className="form-text">Обязательное поле.</div>
                        </div>

                        <div className="mb-3 form-check p-3">
                            <input type="checkbox" className="form-check-input" id="check1" />
                            <label className="form-check-label" for="check1">Подтвердить согласие на обработку персональных данных</label>
                        </div>

                        <input type="submit" className="btn btn-primary form-control" value="Зарегистрировать" />
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AddPet;