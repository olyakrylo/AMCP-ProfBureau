import  React from "react"
import './PersonalAcc.css'
import HeaderPB from "./HeaderPB"
import ComissionsTable from "./ComissionsTable"
import CurrentTaskList from "./CurrentTaskList"
import EndedTaskList from "./EndedTaskList"
import ActionsTable from "./ActionsTable"

export default class PersonalAccount extends React.Component{
    constructor(props) {
        super(props)
    }

    state = {
        exampleState: true,
        secondExampleState: 0
    }
    render(){
    return(
    <div>
    <HeaderPB />
    <section className="comissions-and-actions">
        <ComissionsTable/>
        <ActionsTable/>
    </section>
    <section className="task-status-section">
        <CurrentTaskList/>
        <EndedTaskList/>
    </section>
    </div>)
    }
}