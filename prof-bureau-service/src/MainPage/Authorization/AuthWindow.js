import React from 'react'
import './Auth.css'

export default class AuthWindow extends React.Component {

    login = () => {
        // url = this.props.url
        
        fetch(this.props.url + 'login/',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "login": document.getElementById('login').value,
                "password": document.getElementById('password').value
            }),
        
        })
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            if (responseJson.success) {
                let userInfo = {
                    "course": responseJson.course,
                    "name": responseJson.name,
                    "stNum": responseJson.stNum,
                }
                this.props.login(userInfo)
            } else {
                console.log(responseJson.error)
            }
        })
    }

    // vkLogin = () => {
    //     console.log('got it')
    //     fetch(this.props.url + 'vk_login/', {
    //         method: "GET",
    //     })
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((responseJson) => {
    //         if (responseJson.success) {
    //             if (responseJson.isReged) {
    //                 let userInfo = {
    //                     "course": responseJson.course,
    //                     "name": responseJson.name,
    //                     "stNum": responseJson.stNum,
    //                 }
    //                 this.props.login(userInfo)
    //             } else {
    //                 this.props.openReg(true)
    //             }
    //         } else {
    //             console.log(responseJson.error)
    //         }
    //     })
    // }

    render() {
        return (
            <div className='auth-background'>
                <div className='auth-window'>
                    <p className='auth-text'>Авторизация</p>
                    <div className='auth-field'>
                        <p>Логин (st + 6 цифр)</p>
                        <input id='login' type='text'></input>
                    </div>
                    <div className='auth-field'>
                        <p>Пароль</p>
                        <input id='password' type='password'></input>
                    </div>
                    <div className='auth-bottom-buttons'>
                        <div className='auth-button auth-login' onClick={() => this.login()}>
                            <p>Войти</p>
                        </div>
                        <a href='/login/vk-oauth2' className='vk-reg' onClick={() => localStorage.setItem('logged', true)}></a>
                        <div className='auth-button auth-reg' onClick={() => this.props.openReg(true)}>
                            <p>Регистрация</p>
                        </div>
                    </div>
                </div>
                <div className='close-circle' onClick={() => this.props.openAuth(false)}>
                </div>
            </div>
        )
    }
}