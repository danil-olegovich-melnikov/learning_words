import './App.css';
import * as React from 'react'
import {words} from "./words";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
            words: words().sort(() => .5 - Math.random()),
            user_value: "",
            is_disabled: "disabled",
        }
    }

    onChange = (event) => {
        let value = event.target.value
        this.setState({user_value: value})

        if (value === this.state.words[0][0]) {
            this.setState({is_disabled: ''})
        }
    }

    onSubmit = () => {
        if (this.state.is_disabled.length) {
            return ""
        }

        let words = [...this.state.words]
        words.shift()
        this.setState({words, is_disabled: 'disabled', user_value: ''})

    }

    render_content = () => {
        if (this.state.words.length) {
            let pair = this.state.words[0]
            return (
                <div>
                    <p className="left">Осталось: {this.state.words.length} слов</p>
                    <h1>Перевод слова:</h1>
                    <h2>{pair[1]}</h2>
                    <input type="text" placeholder="пишите тут" value={this.state.user_value}
                           onChange={this.onChange}/>
                    <div className={`btn ${this.state.is_disabled}`} onClick={this.onSubmit}>
                        следующие слово
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1>Отлично, слова закончились</h1>
                <h2>Попробуй еще раз</h2>
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    {this.render_content()}
                </div>
            </div>
        );
    }
}

export default App;
