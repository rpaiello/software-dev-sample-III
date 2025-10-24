import WordCard from "./WordCard";
import './CardContainer.css'
import { useEffect } from "react";

function CardContainer({deleteWord, words}) {

    const cardList = words.map(word => <WordCard obverse={word.obverse} reverse={word.reverse} key={`${word.obverse}-${word.reverse}`} deleteWord={deleteWord} />)

    return (
        <section className="cardcontainer">
            {cardList}
        </section>
    )
}

export default CardContainer;