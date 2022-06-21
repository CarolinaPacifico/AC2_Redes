const d = Date.now()

function crypt(msg, hash){
    const arroba = '@'
    const cifrao = '$'
    const porcentagem = '%'

    let phrase = msg.split("");

    for (let i = 0; i < phrase.length; i++){

        phrase[i] = (phrase[i].charCodeAt(0) * d);

        //teste para: se phrase for par adiciona $ se nao for adiciona @/
        if(phrase[i]%2 == 0){
            phrase[i] + cifrao 
        }
        else{
            phrase[i] + arroba
        }
        phrase[i] += hash;
    }

    phrase.push(d); 

    let output = "";
    
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i]; // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;
}

function decrypt(cypher, hash) {
    const arroba = '@'

    let h = String(hash)
    
    const msg = cypher.split(h);
    let phrase = cypher.split("");

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
    let output = "";

    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    return output;
}

const phrase = "Prof, seja piedoso com a nossa nota, por favor!!!!!"
let pass = crypt(phrase, "012345678901234567890123456789");
console.log(pass);

let solve = decrypt(pass, "012345678901234567890123456789")
console.log(solve);