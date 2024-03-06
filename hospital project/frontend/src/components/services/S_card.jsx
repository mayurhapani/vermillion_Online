import React from 'react'
import s from './services.module.css'
import Buttonn from '../button/Button'

const S_card = ({ img, title, disc }) => {
    return (
        <>
            <div className="col-4">
                <div className={`${s.serv_card} bg-light rounded-4 p-5`}>
                    <img src={img} alt="" />
                    <h2>{title}</h2>
                    <p>{disc}</p>
                    <Buttonn isCardBtn={true} isTrans={true} btn_title={"Learn More"} />
                </div>
            </div>
        </>
    )
}

export default S_card
