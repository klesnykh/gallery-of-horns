import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render (){
    return (
      <main>
          {/* <article>
            <h3>Kirk</h3>
            <p>random text</p>
          </article> */}
          <HornedBeast title="What a Beast" imgUrl="./bison.jpg" description="def a beast"/>
          <HornedBeast title="Such a Beast" imgUrl="./goat.jpg" description="huge beast"/>
        </main>
    )
  }
};

export default Main;