import Frase from './Frase'

function HelloWorld() {
    return (
        <div>
            <Frase />
            <h1>Meu primeiro componente</h1>
            <Frase />           {/* Reutilizando o componente */}
        </div>
    )
}

export default HelloWorld;