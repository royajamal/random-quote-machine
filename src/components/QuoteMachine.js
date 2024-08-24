import React from 'react';
import './QuoteMachine.css';

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentquote: '',
      currentAuthor: '',
    };
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const quoteLength = response.quotes.length;
        const randomIndex = Math.floor(Math.random() * quoteLength);
        const quote = response.quotes[randomIndex];

        this.setState({
          currentquote: quote.quote,
          currentAuthor: quote.author,
        });
      });
  };

  render() {
    const { currentquote, currentAuthor } = this.state;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${currentquote} - ${currentAuthor}`;
    const codepenlink = 'https://codepen.io/your-work';

    return (
      <div className="wrapper">
        <div id="quote-box">
          <div id="quote-text">
            <i className="fa fa-quote-left" />
            <p id="text">{currentquote}</p>
          </div>
          <div id="quote-author">
            <h1 id="author">{currentAuthor}</h1>
          </div>
          <div className="buttons">
            <a
              id="tweet-quote"
              className="btn"
              target="_blank"
              rel="noreferrer"
              href={tweetUrl}
            >
              <i className="fab fa-twitter" />
            </a>
            <button type="button" id="facebook-quote" className="btn" aria-label="Share on Facebook" title="Share on Facebook">
              <i className="fab fa-facebook" />
            </button>
            <button type="button" onClick={this.getRandomQuote} id="new-quote" className="btn" aria-label="Get a new quote">
              New Quote
            </button>
          </div>
          <div className="footer">
            by
            {' '}
            <a target="_blank" rel="noreferrer" href={codepenlink}>
              Roya
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;