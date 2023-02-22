import React, {useState} from 'react';



const Prof = (props) => {
    const [users, setUser] = useState({phone:", email:"})

    return (
        <div>
            <main style={{ 'minHeight': '70vh' }}>
                <h2 className="text-center text-white bg-primary m-2">Личный кабинет</h2>
                <div className="p-3">
                    <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50" style={{ 'minWidth': '300px' }}>

                        <p className="w-50 text-primary" style={{ 'min-width': '250px' }}>id:</p>
                        <p className="w-50" style={{ 'min-width': '250px' }}> {props.user.id}</p>

                        <p className="w-50 text-primary" style={{ 'min-width': '250px' }}>Телефон:</p>
                        <p className="w-50" style={{ 'min-width': '250px' }}> {props.user.phone}</p>

                        <p className="w-50 text-primary" style={{ 'minWidth': '300px' }}>email:</p>
                        <p className="w-50" style={{ 'minWidth': '300px' }}>{props.user.email}</p>

                        <p className="w-50 text-primary" style={{ 'minWidth': '300px' }}>Имя:</p>
                        <p className="w-50" style={{ 'minWidth': '300px' }}>{props.user.firstname}</p>

                        <p className="w-50 text-primary" style={{ 'minWidth': '300px' }}>Дата регистрации:</p>
                        <p className="w-50" style={{ 'minWidth': '300px' }}>{props.user.dateOfRegist}</p>

                        <p className="w-50 text-primary" style={{ 'minWidth': '300px' }}>Количество найденных животных:</p>
                        <p className="w-50" style={{ 'minWidth': '300px' }}>{props.user.countF}</p>

                        <p className="w-50 text-primary" style={{ 'minWidth': '300px' }}>Количество объявлений:</p>
                        <p className="w-50" style={{ 'minWidth': '300px' }}>{props.user.countOb}</p>

                        <form className="d-flex">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Сменить номер телефона
                            </button>
                        </form>

                        <form className="d-flex">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal2">
                                Сменить эл. адрес
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Смена номера телефона</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label style={{ 'marginBottom': '5px' }} for="exampleInputEmail1">Пожалуйста, выберите причину смены номера телефона</label>
                                    <select style={{ 'font-size': 'medium' }} className="form-select form-select-lg mb-3" aria-label=".form-select-lg пример">
                                        <option selected>Выбрать причину</option>
                                        <option value="1">Поменял(а) эл.почту</option>
                                        <option value="2">Потерял(а) доступ</option>
                                        <option value="3">Другое</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Укажите ваш старый номер телефона</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Это делается для вашей безопасности
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Укажите ваш новый номер телефона</label>
                                    <input type="email" className="form-control" onChange={(e) => setUser({ ...users, phone: e.target.value })} />
                                    <div id="emailHelp" className="form-text">На номер придет SMS с подтверждением
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Укажите пароль</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Сменить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Смена номера телефона</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label style={{ 'marginBottom': '5px' }} for="exampleInputEmail1">Пожалуйста, выберите причину смены электронного адреса</label>
                                    <select style={{ 'font-size': 'medium' }} className="form-select form-select-lg mb-3" aria-label=".form-select-lg пример">
                                        <option selected>Выбрать причину</option>
                                        <option value="1">Поменял(а) эл.почту</option>
                                        <option value="2">Потерял(а) доступ</option>
                                        <option value="3">Другое</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Укажите ваш старый адрес электронной почты</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Это делается для вашей безопасности
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Укажите ваш новый адрес электронной почты</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" required onChange={(e) => setUser({ ...users, email: e.target.value })} />
                                    <div id="emailHelp" className="form-text">На почту придет письмо с подтверждением
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Укажите пароль</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Сменить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prof;