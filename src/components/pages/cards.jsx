import React from "react";

import { Link } from "react-router-dom";

const Cards = (props) => {
    return (
        <div>
            <div className="d-flex flex-row flex-wrap">
                <div className="d-flex flex-row flex-wrap border  border-success m-auto  p-3 position-relative w-50" style={{ 'minWidth': '300px', 'width': '45%'}}>
                    <img src={props.animal.photos} className="w-75" alt="рисунок животного" />
                    <p className="w-50 text-success" style={{ 'minWidth': '250px' }}>id:</p>
                    <p className="w-50" style={{ 'minWidth': '250px' }}>{props.animal.id}</p>

                    <p className="w-50 text-success" style={{ 'minWidth': '250px' }}>Вид животного:</p>
                    <p className="w-50" style={{ 'minWidth': '250px' }}>{props.animal.type}</p>

                    <p className="w-50 text-success" style={{ 'minWidth': '300px' }}>Описание:</p>
                    <p className="w-50" style={{ 'minWidth': '300px' }}>{props.animal.about}</p>

                    <p className="w-50 text-success" style={{ 'min-width': '300px;' }}>Номер чипа:</p>
                    <p className="w-50" style={{ 'minWidth': '300px' }}>{props.animal.numChip}</p>

                    <p className="w-50 text-success" style={{ 'minWidth': '300px' }}>Район:</p>
                    <p className="w-50" style={{ 'minWidth': '300px' }}>{props.animal.raion}</p>

                    <p className="w-50 text-success" style={{ 'minWidth': '300px' }}>Дата:</p>
                    <p className="w-50" style={{ 'minWidth': '300px' }}>{props.animal.date}</p>
                    <Link to={'/more'} style= {{'margin':'20px'}}>Подробнее</Link>
                    <Link to={'/edit'} style= {{'margin':'20px'}}>Редактировать объявление</Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;