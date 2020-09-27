import * as React from 'react';
import {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ListItem,
} from '../src/elements';
import { withTypography } from './decorators/with-typography';

export default {
  title: 'typography/Layouts',
  decorators: [withTypography],
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

export const Page = (): JSX.Element => {
  return (
    <section>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <Heading5>Heading 5</Heading5>
      <Heading6>Heading 6</Heading6>
      <Paragraph>
        Perfect lovely hub, exquisite delightful St Moritz Winkreative efficient
        artisanal joy the highest quality K-pop. Quality of life airport
        Lufthansa, Fast Lane emerging Washlet hub uniforms classic. Cutting-edge
        Marylebone Zürich, charming the highest quality international Gaggenau
        classic Boeing 787 Nordic Ettinger bespoke Baggu eclectic. Classic
        Porter Washlet emerging, finest Boeing 787 boutique Singapore Gaggenau
        uniforms Sunspel sharp.
      </Paragraph>
      <Paragraph variant="body-2">
        Handsome punctual bulletin, sleepy discerning Ettinger elegant lovely St
        Moritz cosy uniforms premium Shinkansen Washlet Sunspel. Swiss soft
        power sharp Baggu, Airbus A380 signature eclectic first-class charming
        global sophisticated efficient. Vibrant quality of life Baggu cosy
        espresso boulevard emerging classic charming remarkable Boeing 787
        izakaya Singapore the highest quality sleepy. Artisanal business class
        joy, Nordic iconic conversation carefully curated international izakaya
        Gaggenau ANA delightful Lufthansa boutique cosy. Destination Shinkansen
        Toto, St Moritz premium alluring wardrobe intricate business class
        hand-crafted handsome tote bag global.
      </Paragraph>
      <ul>
        <ListItem>First Item</ListItem>
        <ListItem>Second Item</ListItem>
        <ListItem>Third Item</ListItem>
        <ListItem>Fourth Item</ListItem>
        <ListItem>Fifth Item</ListItem>
        <ListItem>Sixth Item</ListItem>
      </ul>
      <ol>
        <ListItem>First Item</ListItem>
        <ListItem>Second Item</ListItem>
        <ListItem>Third Item</ListItem>
        <ListItem>Fourth Item</ListItem>
        <ListItem>Fifth Item</ListItem>
        <ListItem>Sixth Item</ListItem>
      </ol>
      <caption>Caption Text</caption>
      <figcaption>Figcaption Text</figcaption>
      <button>Button</button>

      <a>Link</a>
    </section>
  );
};
