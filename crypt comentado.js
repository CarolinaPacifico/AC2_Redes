// Pega a data em formato de números
const d = Date.now()

function crypt(msg, hash){

    
    const arroba = '@'
    const cifrao = '$'
    const porcentagem = '%'


    // Transformando a string em um array de letras
    let phrase = msg.split("");


    // Loop para passar em cada um dos itens do array
    for (let i = 0; i < phrase.length; i++){
        // Transformando cada letra em um decimal de ASCII e multiplicando pela data

        phrase[i] = (phrase[i].charCodeAt(0) * d);

        //teste para: se phrase for par adiciona $ se nao for adiciona @/
        if(phrase[i]%2 == 0){
            phrase[i] + cifrao 
        }

        else{
            phrase[i] + arroba
        }

        // Adicionando a hash separadora a cada um dos itens do array (letras)
        phrase[i] += hash;
    }

    // Adicionando a data de criptografia ao ultimo elemento do array
    phrase.push(d); /*da pra trocar por "phrase.unshift(d);" para ficar diferente do prof*/

    // Variável de resposta
    let output = "";
    
    // Loop adicionando os elementos do array como string
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i]; // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;
}

function decrypt(cypher, hash) {
    const arroba = '@'

    // Forço a hash a virar uma string
    let h = String(hash)
    
    // Uso a hash para dividir a string em um array
    const msg = cypher.split(h);
    let phrase = cypher.split("");


    //Removeu o ultimo item do array e guardou em "d"
    //const d = msg.pop(); /* se mudou para unshift la muda para shift aqui*/

    // Passando por cada um dos elementos e:
    // - dividindo pela data
    // - transformando de ASCII para caracteres
    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / d);
    
    /* se adicionou $ e @ agr tem q tirar*/
    if(phrase[i]%2 == 0){
         phrase[i].replace("$","");
    }

    else{
        phrase[i].replace("@","")
    }
}
    
    // Defininindo um uma saída no formato de string
    let output = "";

    // Loop concatenando a minha mensagem
    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    // Retornando a mensagem descriptografada
    return output;
}

const phrase = "Prof, seja piedoso com a nossa nota, por favor!!!!!"
let pass = crypt(phrase, "012345678901234567890123456789");

console.log(pass);

let solve = decrypt(pass, "012345678901234567890123456789")

console.log(solve);