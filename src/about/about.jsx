import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  /*let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt='stock background' />;
  }*/

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'><img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/australia/Quokka_Sam-West.jpg?crop=0%2C886%2C2365%2C1773&wid=820&hei=615&scl=2.8841463414634148" ></img></div>
          

        <p>Quokka wants you to play Connect4.</p>

        <p>
          Connect4 is a competitive logic game in which two players are pitted against each other, each trying to place four of their
          playing chips in a row. The first player to connect four chips wins.
        </p>

        <p>
          The name Connect4 is a registered trademark of Milton-Bradley. Our use of the name and the game is for non-profit
          educational use only. No part of this code or program should be used outside of that definition.
        </p>

        <p>
          The alternative rock band Nirvana rose to popularity in the 1990's as one of the pioneers of grunge music. As you play Connect4,
          you will be quizzed on Nirvana facts and will have the opportunity to learn much about the band and its members.
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className="quote">Just because you're paranoid doesn't mean they aren't after you.</p>
          <p className="author">Kurt Cobain and Joseph Heller</p>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}
