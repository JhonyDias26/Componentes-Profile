import "./secao.css"

export default function Secao({ Texto }) {
    return (
        <div>
            <div className="container-secao">
                <p className="secao-texto">{Texto}</p>
            </div>
        </div>
    )
}