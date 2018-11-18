import React, { Component } from 'react';
import './index.scss';


function consoleText(words, animatedText,consoleText, colors) {
  console.log(animatedText)
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = consoleText;
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = animatedText;
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
export default class Home extends Component{
  componentDidMount(){
    // consoleText(
    //   [
    //     'I"m Anish',
    //     'I like web development',
    //     'react',
    //     'react-native',
    //     'redux',
    //     'jest',
    //     'JavaScript',
    //     'SCSS',
    //     'PHP'
    //   ],
    //   this.animatedText,
    //   this.consoleText,
    //   ['tomato', 'rebeccapurple', 'lightblue']
    // );
  }
  render(){
    return(
      <div className="home">
        content
        {/* <span 
          ref={(ref) => this.animatedText = ref}
          className="text"
        />
        <div
          ref={(ref) => this.consoleText = ref} 
          className='console-underscore' 
          id='console'>&#95;
        </div> */}


        {/* <div className="content">
          <div className="static">
              <p>I am a</p>
              <ul>
                  <li>Designer</li>
                  <li>Developer</li>
                  <li>Magician</li>
              </ul>
          </div>
        </div> */}
      </div>
    )
  }
}



                	// <p>Codepen</span> </p>
                  //   <p>I'm Zayn</p>
                  //   <p><span class="#">Let's Code</span></p>
                  //   <p>I like web development</p>
                  //   <p>I love coding</p>
									//   <p>PHP</p>
									//   <p>PYTHON</p>
                  //   <p>JAVASCRIPT</p>
									//   <p>CSS</p>
									//   <p>Simple Landing Page</p>
									//   <p>Ruby</p>
									// 	<p>Most Powerful Typer</p>
									// 	<p>Codepen</p>
		 							// 	<p>Apple</p>
									// 	<p>Facebook</p>
									// 	<p>You can still add more</p>