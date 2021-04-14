var nr1 = Number(prompt("Introduceti primul numar:"));
var nr2 = Number(prompt("Introduceti al doilea numar:"));
var operatie = String(prompt("Introduceti tipul de operatie dintre nr1 si nr2:"));
var rezultat;

switch(operatie){
    case (operatie === "Adunare"):{
        rezultat= nr1+nr2;
        break;
    }
    case (operatie === "Scadere"):{
        rezultat = nr1-nr2;
        break;
    }
    case (operatie === "Inmultire"):{
        rezultat = nr1*nr2;
        break;
    }
    case (operatie === "Impartire"):{
        rezultat = nr1/nr2;
        break;
    }
}

console.log(rezultat);