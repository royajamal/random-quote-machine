import React from 'react';
import ReactDOM from 'react-dom';
import './QuoteMachine.css'; 

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentquote : '',
      currentAuthor: ''
    }
   // this.getRandomquote = this.getRandomquote.bind(this)
    //this.getQuote = this.getQuote.bind(this)
  }
  componentDidMount(){
    this.getRandomQuote()
  
  }
  getRandomQuote = ()=>{
    const {currentquote, currentAuthor} = this.state
    fetch(url)
    .then(response=>response.json())
    .then(response=>{
      //console.log(response.quotes)
      const quoteLength = response.quotes.length 
      //console.log(Math.floor(Math.random()*quoteLength))
      let randomIndex = Math.floor(Math.random()*quoteLength)
      //console.log(response.quotes[randomIndex])
      let quote = response.quotes[randomIndex]
      //return response.quotes[randomIndex] 
      
      this.setState({
        currentquote : quote.quote,
        currentAuthor: quote.author
      })
      //console.log(quote)
      //console.log(quote.quote)
      //console.log(quote.author)

    })
  }
  
  render(){
     const {currentquote, currentAuthor} = this.state;
    const tweetUrl = `https://twitter.com/intent/tweet?text=?${currentquote}-${currentAuthor}`;
    const codepenlink = 'https://codepen.io/your-work'
    return(
    <div  className="wrapper">
        <div id="quote-box">
          <div id="quote-text">
            <i class="fa fa-quote-left"></i>
               <p id="text">{currentquote}</p>
          </div>
          <div id="quote-author">
             <h1 id="author">- {currentAuthor}</h1>
          </div>
           <div className="buttons">
             <a id="tweet-quote" className='btn' target="_blank" href={tweetUrl}><i className="fab fa-twitter"></i></a>
             <a id="facebook-quote" className="btn"><i className="fab fa-facebook"></i></a>
             <button onClick={this.getRandomQuote} id="new-quote" className="btn">New Quote</button>
        </div>
          <div className="footer">by<a target="_blank" href={codepenlink}> Roya </a></div>
        </div> 
     
    </div>
    )
  }
}
  
export default App;

