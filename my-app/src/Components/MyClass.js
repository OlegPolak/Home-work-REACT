import { Component } from 'react';
class MyClass extends Component {
    state = {
        todos: [],
        input: '',
    };

    componentDidMount() {
        const lsTodos = localStorage.getItem('todos');
        if (lsTodos) {
            this.setState({ todos: JSON.parse(lsTodos) });
        }
        console.log('componentDidMount');
    };

    componentDidUpdate(prevProps, prevState) {
       if (prevState.todos !== this.state.todos) {
           console.log('componentDidUpdate');
           localStorage.setItem('todos', JSON.stringify(this.state.todos));
       }
    }

    addTask = (e) => { 
        this.setState({ todos: [...this.state.todos, this.state.input] })
        this.setState({input: ''})
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({input: value})
    }
    
   
    render() {
        return (
            <>
                <input value={this.state.input} onChange={this.onChangeHandler}/>
                <button onClick={this.addTask}>ADD ToDo</button>
                {this.state.todos.map((todo, index) => <p key={index}>{todo}</p>) }
            </>
        );
    }
}

export default MyClass;