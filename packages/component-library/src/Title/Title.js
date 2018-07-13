import React from 'react';
// import './title-default.sass';

const Title = ({ text } = {}) => {
  const spans = text.split('').map((letter, index) => (
    <span className="title__letter" key={'letter-' + index}>
      {letter}
    </span>
  ));
  return (
    <section className="title">
      <h1 className="title__text">{spans}</h1>
    </section>
  );
};

export default Title;
