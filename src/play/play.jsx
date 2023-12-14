import React from 'react';
import Game from './game.js'; // or game.js {} or not
import { Players } from './players';
//import 'play.css';

export function Play(props) {
  return (
    <main>
        <Players userName={props.userName} />
        <Game userName={props.userName} />
         
  
        <img alt="Nirvana" src="https://1000logos.net/wp-content/uploads/2017/03/Nirvana-Logo-500x386.png" width="100"/>
        <div className="Nirvana">
          <h6>Q</h6>
          <div id="question">--</div>
          <h6>A</h6>
          <div id="answer">--</div>
        </div>

        
        <h2 id="winner"></h2>

        <div id="board"></div>
        
        
        <p>Connect4 Theme Music - "Connection" by Elastica</p>
        <iframe width="280" height="158" src="https://www.youtube.com/embed/ilKcXIFi-Rc?si=xqasA8y68iFWuG42"></iframe>

        <br />
        <br />
        <br />
        
        
    </main>
  );
  return (
    game
  )
}

