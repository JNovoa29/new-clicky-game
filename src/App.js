import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import MatchCard from './components/MatchCard';
import cards from "./cards.json";
import Column from "./Column.js";

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

class App extends Component {
    state = {
        cards, 
        score: 0,
        correct: "",
        clicked: []
    };


handleClick = id => {
    if (this.state.clicked.indexOf(id) === false) {
        this.handleClick();
        this.setState({ clicked: 
            this.state.clicked.concat(id)
        });
    } else {
        this.handleResetArr()
    };
};

handleIncrement = event => {
    const newScore = this.state.score + 1 
    this.setState({
        score: newScore,
        correct: ""
    });
    if (newScore >= 10) {
        this.setState({ correct: "Victory!" })
    }
    this.handleShuffle()
}

handleResetArr = () => {
    this.setState({
        score: 0,
        correct: "Defeat!",
        clicked: []
    })
    this.handleShuffle()
}

handleShuffle = () => {
    let shuffled = shuffle(cards)
    this.setState({ cards: shuffled })
}

    render() {
        return (
            <Wrapper>
                <Navbar
                    />
                <Column size="md-3 sm-6">
                    <MatchCard
                    />
                </Column>
                {cards.map(cards =>
                    <MatchCard 
                    key={cards.id} 
                    image={cards.image}
                    />
                )}
            </Wrapper >
        );
    }
}

export default App;


