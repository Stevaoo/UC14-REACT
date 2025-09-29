import React from "react";
import CardJogador from "./components/CardJogador";
import Fallen from "../src/assets/fallen.jpg"
import Titulo from "./components/Titulo";
import selva from "../src/assets/selva.webp";
// Função proincipal do App 
export default function App(){
    // Array de objetos respresentando os jogadores
    // Cada objeto tem id e as props nome, posicao, time, avaliacao e imagem
    const jogadores = [
        {
            id: 1,
            nome: "Fallen",
            posicao: "IGL",
            time: "Fúria",
            avaliacao: 10,
            imagem: Fallen
        },
        {
            id: 2,
            nome: "Guerra Na Selva",
            posicao: "MATA PQD",
            time: "19° BIMTZ",
            avaliacao: 8,
            imagem: selva
        }
    ]
    return(
        <main
        style={{
            display: "flex",
            gap: "20px", // espaço entre os cards
            justifyContent: "center", // centraliza os cards na horizontal
            marginTop: "50px", // espaço superior
            flexWrap: "wrap" // permite a quebra de linha se a tela for pequena

        }}
        >
            {/** Componente de Titulo             
             */}
             <div style={{width: "100%"}}>
                <Titulo texto= "Lista de Jogadores" />
             </div>
             {/** Percorre o array de jogadores com .map */}
             {/** Para cada jogador cria um CardJogador  */}
             {
                jogadores.map((j) => (
                    // key é necessário para o React identificar cada item da lista
                    // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
                    <CardJogador key={j.id}{...j} />
                ))
             }
            

        </main>
    )
}
