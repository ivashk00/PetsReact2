import React from "react";

const EditIn = (props) => {
    return (
        <div>
            <main style={{'minHeight': '70vh'}}>
                <h2 className="text-center text-white bg-primary m-2">Редактирование объявления</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border border-primary p-3" style={{'minWidth': '300px'}}>

                        <div className="mb-3">
                            <label for="kind" className="form-label">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind" />
                            <div className="form-text">Обязательное поле</div>
                        </div>



                        <div className="mb-3 p-3 border">
                            <label for="image1" className="form-label">Выберите файлы изображений:</label>
                            <input type="file" className="form-control" id="image1" value="Загрузить изображение" />
                            <div className="form-text">Обязательное поле</div>
                            <input type="file" className="form-control mb-3" id="image2" value="Загрузить изображение" />
                            <input type="file" className="form-control mb-3" id="image3" value="Загрузить изображение" />
                        </div>

                        <div className="mb-3">
                            <label for="chip" className="form-label">Электронный чип:</label>
                            <input type="text" className="form-control" id="chip" />
                            <div className="form-text">Обязательное поле.</div>
                            s</div>

                        <div className="mb-3">
                            <label for="description" className="form-label">Описание:</label>
                            <textarea className="form-control" id="description"></textarea>
                            <div className="form-text">Обязательное поле.</div>
                        </div>


                        <input type="submit" className="btn btn-primary form-control" value="Отправить" />
                    </form>
                </div>
            </main>

        </div>
    );
};

export default EditIn;