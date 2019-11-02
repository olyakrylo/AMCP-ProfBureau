import  React from "react"
import './PersonalAcc.css'
import HeaderPB from "./HeaderPB"
import ComissionsTable from "./ComissionsTable/ComissionsTable"
import ActionsTable from "./ActionsTable/ActionsTable"
import CurrentComissionEvents from "./CurrentComissionEvents/CurrentComissionsEvents";
import AboutComPred from "./AboutComPred/AboutComPred";
import CssTransition from "react-transition-group/CSSTransition"

import ItemList from "./ItemList/ItemList"

import CurrentComissionTask from "./CurrentComissionTask/CurrentComissionTask"
import EndedTask from "./EndedTask/EndedTask"
import CurrentTask from "./CurrentTask/CurrentTask"

export default class PersonalAccount extends React.Component{

    state = {
        isAPred: false,
        selectComission:"none",
        aboutCom: <ActionsTable/>,
        leftTaskPart: <ItemList type={<CurrentTask/>} titleName = "Актуальный швапс"/>,
        rightTaskPart:<ItemList type={<EndedTask/>} titleName = "Выпитый швапс"/>,
        isComShow: false
    }

    comTableListener = (pushedCom)=>{
        if (pushedCom ==="none") {
            this.setState({
                isAPred: false,
                selectComission:"none",
                aboutCom: <ActionsTable/>,
                leftTaskPart: <ItemList type={<CurrentTask/>} titleName = "Мой швапс"/>,
                rightTaskPart:<ItemList type={<EndedTask/>} titleName = "Выпитый швапс"/>,
                isComShow: false
            })
        }
        else{
            this.setState({
                isAPred:false,
                selectComission: pushedCom,
                aboutCom: <AboutComPred/>,
                leftTaskPart: <ItemList type={<CurrentComissionTask/>} titleName="Актуальный швапс"/>,
                rightTaskPart:<CurrentComissionEvents titleName="Швапс комиссии"/>,
                isComShow: true
            })
        }
    }
    render(){
    return(
    <div>
    <HeaderPB />
    <section className="comissions-and-actions">
        <ComissionsTable onClickCom={this.comTableListener}/>
        {this.state.aboutCom}
    </section>
        <CssTransition 
        timeout={800}
          in={this.state.isComShow} 
          classNames="fade"
          unmountOnExit
          >
        <section className="task-status-section">
            {this.state.leftTaskPart}        
            {this.state.rightTaskPart}        
        </section>
        </CssTransition>
        <CssTransition 
        timeout={800}
          in={!this.state.isComShow} 
          classNames="fade"
          unmountOnExit
          >
        <section className="task-status-section">
            {this.state.leftTaskPart}        
            {this.state.rightTaskPart}        
        </section>
        </CssTransition>
    </div>)
    }
}