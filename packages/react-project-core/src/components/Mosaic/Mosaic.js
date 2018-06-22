import React from 'react';
import './mosaic-default.sass';

function importAll(r) {
    return r.keys().map((item) => r(item));
}

const pics = importAll(require.context('./pics', false, /\.(png|jpe?g|JPE?G|svg)$/));
const shuffled = shuffleArray(pics);

function Mosaic(props) {
    const gutter = props.content.width * 0.075;
    const length = Math.ceil(props.content.height / gutter) * 2;

    const containerStyle = {
        top: `${props.header.height}px`,
    };

    const divStyle = {
        height: `${gutter}px`,
        width: `${gutter}px`,
    };

    return (
        <article className="mosaic-container" style={containerStyle}>
            {formatPictureArray(shuffled, length).map((each, index, arr) => {
                if (index % 2 === 0) {
                    return (
                        <div key={index} className="mosaic-row">
                            <div style={divStyle}>
                                <img src={arr[index]} alt="" />
                            </div>
                            <div style={divStyle}>
                                <img src={arr[index + 1]} alt="" />
                            </div>
                        </div>
                    );
                } else return null;
            })}
        </article>
    );
}

export default Mosaic;

function formatPictureArray(array, length) {
    const iterations = Math.ceil(length / array.length);

    const newArray = [];

    for (let i = 0; i < iterations; i++) {
        newArray.push(...shuffled);
    }

    const sliced = newArray.slice(0, length);

    return sliced;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}
