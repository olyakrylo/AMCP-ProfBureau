import React from 'react';  
import './styles/MainPage.css';
import Header from './Header'
import NavigationBlock from './NavigationBlock'
import InformationBlock from './InformationBlock';
import ContactBlock from './ContactBlock';
import ProjectsBlock from './ProjectsBlock';
import PersonalAccount from '../Personal Acc/PersonalAcc'
import Authorization from './Authorization/Authorization'
import { type } from 'os';

export default class MainPage extends React.Component {

    state = {
        comission: 'Профбюро',
        isAuthorized: false,
        login: '',
        course: 0,
        page: 'main',
        stNum: 0,
        responseData: JSON.stringify('')
    }

    componentWillMount() {
        if (localStorage.getItem('login') !== null) {
            this.setState({
                isAuthorized: true,
                login: localStorage.getItem('login'),
                course: localStorage.getItem('course'),
                stNum: +localStorage.getItem('stNum'),
                page: 'main'
            })
        }
    }

    changeComission = name => {
        this.setState({ comission: name })

        if (this.state.page === 'account') {
            this.setState({page: 'main'})
        }
    }

    login = (userInfo) => {
        this.setState({
            isAuthorized:true,
            login: userInfo.name,
            course: userInfo.course,
            stNum: userInfo.stNum,
            page: 'main' 
        })

        localStorage.setItem('login', userInfo.name)
        localStorage.setItem('course', userInfo.course)
        localStorage.setItem('stNum', userInfo.stNum)
    }
    
    logout = () => {
        this.setState({
            isAuthorized: false,
            login: '',
            course: 0,
            stNum: 0,
            page: 'main'
        })

        localStorage.removeItem('login')
        localStorage.removeItem('course')
        localStorage.removeItem('stNum')
    }

    changePage = (page) => {
        if (page === 'main') {
            fetch(this.props.url + 'get_personal_info/',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    "stNum": this.state.stNum
                }),
            
            })
            .then((response) => {
                return response.json()
            })
            .then((responseJson)=>{
                this.setState({
                    responseData: responseJson,
                    page: 'account'
                })
            })
        } else if (page === 'account') {
            this.setState({
                page: 'main'
            })
        }
    }

    setScreen = () => {
        let page = this.state.page
        if (page === 'main') {
            return(
                <div className='mainBlock'>
                    <NavigationBlock changeComission={this.changeComission} />
                    <div className='content'>
                        <InformationBlock comission={this.state.comission}/>
                        <ContactBlock comission={this.state.comission} openAuth={this.openAuth}/>
                        <ProjectsBlock />
                    </div>
                </div>
            )
        } else if (page === 'account') {
            return <PersonalAccount persAccInfo={this.state.responseData} url={this.props.url} user={this.state.stNum}/>
        } else if (page === 'auth') {
            return <Authorization openAuth={this.openAuth} login={this.login} url={this.props.url}/>
        }
    }

    openAuth = (flag) => {
        this.setState({
            page: flag ? 'auth' : 'main'
        })
    }

    // openReg = flag => {
    //     this.setState({
    //         page: flag ? 'reg' : 'main'
    //     })
    // }
    
    render() {
            return(
                <div className="background">
                    <Header changeComission={this.changeComission} 
                            isAuthorized={this.state.isAuthorized}
                            login={this.state.login}
                            course={this.state.course}
                            changePage={this.changePage}
                            openAuth={this.openAuth}
                            page={this.state.page}
                            logout={this.logout}/>
                    {this.setScreen()}
                </div>   
            )
    }
}