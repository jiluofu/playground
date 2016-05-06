import React from 'react';

export default class Hello extends React.Component {

    constructor() {
        super();
        this.state = {

            test: true
        };

        

    }

    componentDidMount() {

        console.log('componentDidMount');
    }

    handleClick() {

        console.log(this)

        this.setState({test: !this.state.test});
    }

    render() {
    

        let msg = (this.state.test === true) ? '测试开始啦' : '测试未开始';

        return (<div onClick={this.handleClick.bind(this)}>Hello World {this.props.name}_{msg}</div>);
    }
}