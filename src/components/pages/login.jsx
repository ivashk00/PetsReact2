import React, {useState} from 'react';

import Header from "../header";
import Footer from "../footer";


const Login = () => {

    const [user, setUser] = useState({password:", email:"})

    return (
        <div>
            <Header />
            <main style={{'minHeight': '70vh'}}>
                <h2 className="text-center text-white bg-primary m-2">Аутентификация</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border p-3" style={{'minWidth': '300px'}}>

                        <div className="mb-3">
                            <label for="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email"  onChange={(e) => setUser({...user, email: e.target.value})}/>
                                <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label for="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="password"  onChange={(e) => setUser({...user, password: e.target.value})}/>
                                <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
                        </div>

                        <input type="submit" className="btn btn-primary" value="Войти"/>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Login;