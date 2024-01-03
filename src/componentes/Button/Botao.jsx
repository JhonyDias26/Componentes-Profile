import "./botao.css"

export default function Button({ Texto }) {
    return (
        <div>
            <div className="container-botao">
                <button className="botao">{Texto}</button>
            </div>
        </div>
    )
}