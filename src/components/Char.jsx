export default function Char({info, word, handlClick}) {
    const correct = word.find(char => char.char == info.char) != undefined
    return (
        <button className="char-btn"
            onClick={(event) => {!info.pressed && handlClick({...info, pressed: true, correct: correct})}}
            style={info.pressed ? {backgroundColor: info.correct? "#10A95B": "#EC5D49"} :{}}>
            {info.char}
        </button>
    )
}