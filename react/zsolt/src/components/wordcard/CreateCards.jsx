import WordCard from "./WordCard";
import './CreateCards.css'

function CreateCards() {

    return (
        <form>
            <div className="flex">
            <div>
                <label htmlFor="f-obverse">Obverse</label> <br />
                <input type="text" name="f-obverse" id="f-obverse"></input>
            </div>
            <div>
                <label htmlFor="f-reverse">Reverse</label> <br />
                <input type="text" name="f-reverse" id="f-reverse" />
            </div>
            </div>
        </form>
    )
}

export default CreateCards;