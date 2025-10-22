import React from "react";
import { useState } from "react";
import './WordCard.css';

export default function WordCard({deleteWord, obverse, reverse}) {
    const [visible, setVisibility] = useState(false);

    const content = visible ? <><div className="c-obverse">English: {obverse}</div><hr /><div>German: {reverse}</div></> : <><div className="c-obverse">English: {obverse}</div><hr /><div className="c-reverse">German: {reverse}</div></>;

    const deleteCard = () => {
        deleteWord(obverse);
    }

    const makeVisible = () => setVisibility(true);
    const makeHidden = () => setVisibility(false);

    return (<div className="wordcard" onMouseEnter={makeVisible} onMouseLeave={makeHidden}>{content}<span className="del" onClick={deleteCard}>delete</span></div>)
}