function Copiar_Texto() {
    let numero = 63984749978
    navigator.clipboard.writeText(numero.toString()) // Converte para string antes de copiar
        .then(() => alert("Número de Whatsap copiado!"))
        .catch(err => console.error("Erro ao copiar", err));
}