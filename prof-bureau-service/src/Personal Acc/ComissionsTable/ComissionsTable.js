import  React from "react"
import "./ComissionsTable.css"

export default class ComissionsTable extends React.Component{

    render(){
    return(
        <div className="comissions-coloumn">
        <h2 className="com-title">Мои комиссии</h2>
        <div className="comissions-grid">
            <div className={"pm-design com-item" + (this.props.comInfo["PM-Design"].isAMember? "":  " com-not-active")} onClick={()=>this.props.onClickCom(
                {
                    comName:"PM-Design",
                    predName:"Ольга крылова"
                }
            )}>
                <div className="com-picture"></div>
                <div className='com-title'>PM-Design</div>
            </div>

            <div className={"hr com-item" + (this.props.comInfo["HR"].isAMember? "":  " com-not-active")} onClick={()=>this.props.onClickCom(
                {
                    comName:"HR",
                    predName:"Мария Васильева"
                }
            )}>
                <div className="com-picture"></div>
                <div className='com-title'>HR</div>
            </div>

            <div className={"pm-photo com-item" + (this.props.comInfo["PM-Photo"].isAMember? "":  " com-not-active")} onClick={()=>this.props.onClickCom({
                comName:"PM-Photo",
                predName:"Пахомова Арина"
            })}>
                <div className="com-picture"></div>
                <div className='com-title'>PM-photo</div>
            </div>

            <div className={"funcom com-item" + (this.props.comInfo["FunCom"].isAMember? "":  " com-not-active")} onClick={()=>this.props.onClickCom({
                comName:"FunCom",
                predName:"Енин Никита"
            })}>
                <div className="com-picture"></div>
                <div className='com-title'>FunCom</div>
            </div>

            <div className={"sportcom com-item" + (this.props.comInfo["СпортКом"].isAMember? "":  " com-not-active")} onClick={()=>this.props.onClickCom({
                comName:"СпортКом",
                predName:"Рыбаков Сергей"
            })}>
                <div className="com-picture"></div>
                <div className='com-title'>СпортКом</div>
            </div>

            <div className={"mounting com-item" + (this.props.comInfo["Оформители"].isAMember ? "":  " com-not-active")} onClick={()=>this.props.onClickCom({
                comName:"Оформители",
                predName:"Чернышова Александра"
            })}>
                <div className="com-picture"></div>
                <div className='com-title'>Оформители</div>
            </div>

            <div className={"cultmass com-item" + (this.props.comInfo["КультМасс"].isAMember ? "":  " com-not-active")} onClick={()=>this.props.onClickCom(
                {
                    comName: "КультМасс",
                    predName: 'Кудряшова Дарья'
                }
            )}>
                <div className="com-picture"></div>
                <div className='com-title'>КультМасс</div>
            </div>

            <div className='account com-item' onClick={()=>this.props.onClickCom(
                {
                    comName:"none"
                }
            )}>
                <div className='com-picture'></div>
                <div className='com-title acc'>В кабинет</div>
            </div>
        </div>
        </div>
    )
    }
}