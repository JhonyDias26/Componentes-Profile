import "./area.css"
import Secao from "../Secao/Secao"
import Imagem from "../Imagem/Imagem"
import Linha from "../Linha/Linha"
import Button from "../Button/Botao"

export default function Area() {
    return (
        <div className="container">
            <div className="main">
                <div className="secao-geral">
                    <Imagem />
                    <Secao Texto="Jhony Dias" />
                    <Linha />
                    <Secao Texto="Full-Stack Javascript developer" />
                    <Linha />
                    <Secao Texto="+556198633-7087" />
                    <Linha />
                    <Secao Texto="jhony.jh26@gmail.com" />
                    <Linha />
                    <Button Texto="GitHub"/>
                    <Button Texto="Linkedln"/>
                    <Button Texto="Twitter"/>
                </div>
            </div>
        </div>
    )
}