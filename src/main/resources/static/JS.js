let billetter = []; //Opretter et array så billeter med verdier kan bli lagt til seienere
function visBilletter(){ //funksjon som jeg danner for å lage stringen som jeg adder inputene i
    let ut =
        "<table><tr>"+
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
        "</tr>";
    for(let b of billetter){
        ut += "<tr>";
        ut += "<td>"+b.film +"</td><td>"+b.antall +"</td><td>"+b.fornavn +"</td><td>"+b.etternavn +"</td><td>"+b.telefon +"</td><td>"+b.epost +"</td>";
        ut += "</tr>";
    }
    ut += "</table>"
    document.getElementById("billetter").innerHTML=ut;
}

function validerFilm(){ //Lager en function for validering av film
    const film = document.getElementById("film").value; //Henter verdiien av HTML-elementet med ID "Film" og lagrer dette i variabelen
    const feilFilm = document.getElementById("feilFilm"); // Henter HTML-elementet med ID "feilFilm" og lagrer dette i variabelen
    if (film === ""){ // Sjekker om verdien av "Film" er tom
        feilFilm.textContent = "Velg en film"; // Vis "Film er tom setter vi inn en error med denne utallesen"
        return false; //Returner false, noe som betyr at validering feilet
    }else feilFilm.textContent = ""; //Hvis "film" ikke er tom, fjerner vi eventuell tekst i "feilFilm"
    return true; //Returnerer true, noe som betyr at valideringen var vellykket
}

function validerAntall() { //Denne er lik som funksjon film, men sjekker om verdien av "antall" er ikke et tall (isNaN) eller mindre enn eller lik 0
    const antall = document.getElementById("antall").value;
    const feilAntall = document.getElementById("feilAntall");
    if(isNaN(antall) || antall <= 0){
        feilAntall.textContent = "Velg et antall";
        return false;
    }else feilAntall.textContent = "";
    return true;
}

function validerFornavn() { //Denne er lik som funksjon film, men Sjekker om "fornavn" er tomt eller inneholder et tall
    const fornavn = document.getElementById("fornavn").value.trim();
    const feilFornavn = document.getElementById("feilFornavn");
    if(fornavn.length === 0 || /\d/.test(fornavn)){
        feilFornavn.textContent = "Skriv inn et gyldig navn";
        return false;
    }else
        feilFornavn.textContent = "";
    return true;
}

function validerEtternavn() { //Denne er lik som funksjon film, men Sjekker om "etternavn" er tomt eller inneholder et tall
    const etternavn = document.getElementById("etternavn").value.trim();
    const feilEtternavn = document.getElementById("feilEtternavn");
    if(etternavn.length === 0 || /\d/.test(etternavn)){
        feilEtternavn.textContent = "Skriv inn et gyldig navn";
        return false;
    }else  feilEtternavn.textContent = "";
    return true;
}
function validerTelefon (){ //Denne er lik som funksjon film, men sjekker om verdien av "telefon" er ikke et tall (isNaN) eller er tomt
    const telefon = document.getElementById("telefon").value;
    const feilTelefon = document.getElementById("feilTelefon");
    if( isNaN(telefon) || telefon.length === 0){
        feilTelefon.textContent = "Skriv et gyldig telefonnummer";
        return false;
    }else feilTelefon.textContent = "";
    return true;
}

function validerEpost () {//Denne er lik som funksjon film, men sjekker om verdien av "epost" ved hjelp av regex
    const epost = document.getElementById("epost").value;
    const feilEpost = document.getElementById("feilEpost");
    const sjekkEpost = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-z]{2,}$/; //Definerer en regular expression for å sjekke om "epost" er en gyldig e-postadresse
    if(!sjekkEpost.test(epost)){
        feilEpost.textContent = "Skriv inn en gyldig E-post";
        return false;
    }else  feilEpost.textContent = "";
    return true;
}

function kjøpBillet(){ //Definerer en funksjon med navnet "kjøpBillet"
    console.log("Kjøp Bilett") //Logger "Kjøp Bilett" til konsollen
    if(validerFilm()&validerAntall()&validerFornavn()&validerEtternavn()&validerTelefon()&validerEpost()){
        //Dersom alle valideringer er OK, oppretter vi et nytt billettobjekt, bruker enkle "&" for at alle felt som ikke er oppfylt kommer error kode på
        const nyBillett = {
            film : document.getElementById("film").value,
            antall : document.getElementById("antall").value,
            fornavn : document.getElementById("fornavn").value,
            etternavn : document.getElementById("etternavn").value,
            telefon : document.getElementById("telefon").value,
            epost : document.getElementById("epost").value
        };
        billetter.push(nyBillett); //Legger til den nye billeten i det billet arrayet
        slettInput();  //Kaller på funksjonen som sletter all input
        visBilletter(); //Kaller på funksjonen som viser alle billetter
    }
}

function slettAlleBilletter(){ //Definerer en funksjon med navnet "slettAlleBilletter"
    billetter = []; //Setter billetter-arrayet til et tomt array, noe som sletter alle billetter
    visBilletter(); //Kaller på funksjonen som viser alle billetter
}

function slettInput(){ //Definerer en funksjon med navnet "slettInput"
    document.getElementById("film").value=""; //Setter verdien av HTML-elementet med ID "film" til tom streng, samme skjer med de under også
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefon").value="";
    document.getElementById("epost").value="";
}
