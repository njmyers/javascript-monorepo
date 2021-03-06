import React, { Component } from 'react';

const createArray = (num, fill = 0) => (arr = []) =>
  !num ? arr : createArray(num - 1)([0, ...arr]);

const hash = () =>
  Math.random()
    .toString(16)
    .slice(-8);

const LoremIpsum = ({ repeat = 1 } = {}) => {
  const arr = createArray(repeat)();
  const ipsum =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, labore qui? Animi, iusto provident. Beatae obcaecati quod voluptate dicta corrupti laborum quis id! Corrupti ab eum ipsam quis accusantium dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, labore qui? Animi, iusto provident. Beatae obcaecati quod voluptate dicta corrupti laborum quis id! Corrupti ab eum ipsam quis accusantium dicta.';

  const paragraphs = arr.map((i) => <p key={hash()}>{ipsum}</p>);
  return <article className="lorem-ipsum">{paragraphs}</article>;
};

export default LoremIpsum;
