import React from "react";

class Select extends React.Component{
    constructor(props) {
        super(props);
        const arrOption = props.children.map(el => el.props);
        this.state = {
            arrOption,
            viewSelect: arrOption[3].children,
            isVisibl: true,
        }
    }

    onClickHendle(value) {
        
        const element = this.state.arrOption.find(el => el.value === value);
        this.setState({
            viewSelect: element.children, 
            isVisibl: !this.state.isVisibl
        })
        console.log(`New value is  "${element.children}"`)
    }

    render() {
        const arrElements = this.state.arrOption.map((el, index) => {
            return (
                
            <div
                className={this.state.viewSelect === el.children ? "Option Selected" : "Option"}
                key={index} 
                onClick={() => this.onClickHendle(this.state.arrOption[index].value)}
            >
                {this.state.arrOption[index].children}
            </div>
            )
        });
        return (
            <div>
                <div className= {this.state.isVisibl ? "Option Mets-close" : "Option Mets-open"}
                    onClick={() => this.setState({isVisibl: !this.state.isVisibl})}
                >
                    {this.state.viewSelect}
                </div>

                <div hidden={this.state.isVisibl}>{ arrElements }</div>
            </div>
        )
    }
}

export default Select