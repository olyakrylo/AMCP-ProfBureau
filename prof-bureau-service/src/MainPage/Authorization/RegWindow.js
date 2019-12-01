import React from 'react'
import './Reg.css'

export default class RegWindow extends React.Component{

    buttonClicked = () => {
        alert('name: ' + document.getElementById('firstName').value + '\n' +
        'surname: ' + document.getElementById('lastName').value + '\n' + 
        'course: ' + document.getElementById('course').value + '\n' +
        'e-mail: ' + document.getElementById('e-mail').value + '\n')
    }

    render() {
        return(
            <div className='reg-background'>
                <div className='reg-window'>
                    <p className='reg-text'>Регистрация</p>
                    <div className='reg-field'>
                        <p>Имя</p>
                        <input id='firstName' type='text'></input>
                    </div>
                    <div className='reg-field'>
                        <p>Фамилия</p>
                        <input id='lastName'></input>
                    </div>
                    <div className='reg-field'>
                        <p>Курс</p>
                        <select id='course'>
                            <option selected='selected' disabled>Выберите</option>
                            <option value='1'>1 бакалавриат</option>
                            <option value='2'>2 бакалавриат</option>
                            <option value='3'>3 бакалавриат</option>
                            <option value='4'>4 бакалавриат</option>
                            <option value='5'>1 магистратура</option>
                            <option value='6'>2 магистратура</option>
                        </select>
                    </div>
                    <div className='reg-field'>
                        <p>Корпоративная почта</p>
                        <input id='e-mail'></input>
                    </div><div className='reg-field'>
                        <p>Пароль (не менее 8 символов)</p>
                        <input id='password'></input>
                    </div>
                    <div className='reg-button' onClick={() => this.buttonClicked()}>
                        <p>Зарегистрироваться</p>
                    </div>
                </div>
            </div>
        )
    }
}