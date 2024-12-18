export default function Language({info}) {
    return (
        <p className={"language-box" + (info.safe? "": " eliminate-language")} style={{backgroundColor: info.bgColor, color:info.color}}>{info.name}</p>
    )
}