import { Component } from 'react';
class MyClass extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Hi!!' };
    }
   
    render() {
        return (
            <div>
                <h3>{this.state.text}</h3>
            </div>
        );
    }
}

export default MyClass;