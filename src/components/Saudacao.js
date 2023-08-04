function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
                                /* só vai renderizar se(if) existir algum 'nome' no state */
}

export default Saudacao;