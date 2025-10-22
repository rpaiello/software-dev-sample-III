import WordCard from "./WordCard";
import './CreateCards.css'
import { useState } from "react";
import CardContainer from "./CardContainer";

function CreateCards({addWord}) {
    const [cards, setCards] = useState([]);
    const [input_obverse, setInput_obverse] = useState("");
    const [input_reverse, setInput_reverse] = useState("");

    const updForm = (event) => {
        const inp = event.target;
        if (!inp) return;
        if (inp.id == 'f-obverse') {
            setInput_obverse(inp.value);
        }
        if (inp.id == 'f-reverse') {
            setInput_reverse(inp.value);
        }
    }

    const addCard = (event) => {
        event.preventDefault();
        if (input_obverse.trim() == "" || input_reverse.trim() == "") {
            alert("Bad input!");
            return;
        }
        setCards([...cards, {obverse: input_obverse, reverse: input_reverse}]);
        console.log(cards);
        setInput_obverse("");
        setInput_reverse("");
        addWord(input_obverse, input_reverse);
    }

    return (
        <>
        <form onSubmit={addCard}>
            <div className="flex">
            <div className="formbox">
                <label htmlFor="f-obverse">Obverse (english)</label> <br />
                <input type="text" name="f-obverse" id="f-obverse" value={input_obverse} onChange={updForm}></input>
            </div>
            <div className="formbox">
                <label htmlFor="f-reverse">Reverse (german)</label> <br />
                <input type="text" name="f-reverse" id="f-reverse" value={input_reverse} onChange={updForm} />
            </div>
            <input className="formbox" type="submit" />
            </div>
            <br />
        </form>
        <hr />
        <br />
        </>
    )
}

export default CreateCards;