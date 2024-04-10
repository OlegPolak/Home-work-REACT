import { Component } from 'react';
import ButtonDelete from './ButtonDelete';
class MyClass extends Component {
    state = {
        todos: [],
        input: '',
        timer: 0,
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({ timer: prevState.timer + 1 }));
        }, [1000]);

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
    
    componentWillUnmount() {
        clearInterval(this.intervalId); 
    }

    //   this.clearLocalStorage = localStorage.clear('todos', JSON.stringify(this.state.todos));
   
    render() {
        return (
            <>
                <h3>{this.state.timer}</h3>
                <input value={this.state.input} onChange={this.onChangeHandler}/>
                <button onClick={this.addTask}>ADD ToDo</button>
                {this.state.todos.map((todo, index) => <p key={index}>{todo}</p>)}
                <ButtonDelete text={"DELETE LS"} type={'button'} />
            </>
        );
    }
}

export default MyClass;