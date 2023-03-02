import React from "react";

import Header from "../header";
import Footer from "../footer";

const Registration = () => {
    return (
        <div>
            <Header />
            <main style={{'minHeight': '70vh'}}>
                <h2 className="text-center text-white bg-success m-2">Регистрация</h2>
                <div className="p-3">
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label for="validationDefault01" className="form-label">Имя</label>
                            <input type="text" className="form-control" id="validationDefault01" required/>
                        </div>
                        <div className="col-md-4">
                            <label for="validationDefault02" className="form-label">Фамилия</label>
                            <input type="text" className="form-control" id="validationDefault02" required/>
                        </div>
                        <div className="col-md-4">
                            <label for="validationDefaultUsername" className="form-label">Имя пользователя</label>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" className="form-control" id="validationDefaultUsername"
                                    aria-describedby="inputGroupPrepend2" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="validationDefault03" className="form-label">Город</label>
                            <input type="text" className="form-control" id="validationDefault03" value="Санкт-Петербург" required/>
                        </div>
                        <div className="col-md-3">
                            <label for="validationDefault04" className="form-label">Область</label>
                            <select className="form-select" id="validationDefault04" required>
                                <option selected disabled value="">Выберите...</option>
                                <option>Приморский</option>
                                <option>Петроградский</option>
                                <option>Красногвардейский</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label for="validationDefault05" className="form-label">Индекс</label>
                            <input type="text" className="form-control" id="validationDefault05" required/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                    <label className="form-check-label" for="invalidCheck2">
                                        Принять условия и соглашения
                                    </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success" type="submit">Отправить форму</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Registration;