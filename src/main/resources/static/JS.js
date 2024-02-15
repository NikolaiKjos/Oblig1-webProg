let billetter = [];
function visBilletter(){
    let ut =
        "<table><tr>"+
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
        "</tr>";
    for(let b of billetter){
        ut += "<tr>";
        ut += "<td>"+b.film +"</td><td>"+b.antall +"</td><td>"+b.fornavn +"</td><td>"+b.etternavn +"</td><td>"+b.telefon +"</td><td>"+b.epost +"</td>";
        ut += "</tr>";
    }
    document.getElementById("billetter").innerHTML=ut;
}
function personalia() {

    const enBillett = {
        film : document.getElementById("film").value,
        antall : document.getElementById("antall").value,
        fornavn : document.getElementById("fornavn").value,
        etternavn : document.getElementById("etternavn").value,
        telefon : document.getElementById("telefon").value,
        epost : document.getElementById("epost").value
    };
    billetter.push(enBillett);
    slettinput();
    visBilletter();

    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const epost = document.getElementById("epost").value;

    let feilFilm;
    document.getElementById("feilFilm").innerHTML = feilFilm;
    let feilantall
    document.getElementById("feilAntall").value = feilantall;
    const feilFornavn = document.getElementById("feilFornavn").value;
    const feilEtternavn = document.getElementById("feilEtternavn").value;
    const feilTelefon = document.getElementById("feilTelefon").value;
    const feilEpost = document.getElementById("feilEpost").value;
    const sjekkEpost = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-z]{2,}$/;

    if (film === ""){
        feilFilm.textContent = "Velg en film";
        slettinput();
        return;
    }else feilFilm.textContent = "";

    if(isNaN(antall) || !Number.isInteger(Number(antall)) || Number(antall) === 0){
        feilantall.textContent = "Velg et antall";
        slettinput();
        return;
    }else feilantall.textContent = "";

    if(typeof fornavn != "string" || fornavn.trim().length === 0 || /\d/.test(fornavn)){
        feilFornavn.textContent = "Skriv inn et gyldig navn";
        slettinput();
        return;
    }else  feilFornavn.textContent = "";

    if(typeof etternavn != "string" || etternavn.trim().length === 0 || /\d/.test(etternavn)){
        feilEtternavn.textContent = "Skriv inn et gyldig etternavn";
        slettinput();
        return;
    }else  feilEtternavn.textContent = "";

    if(isNaN(telefon) || !Number.isInteger(Number(telefon)) || Number(antall) === 8){
        feilTelefon.textContent = "Skriv et gyldig telefonnummer";
        slettinput();
        return;
    }else feilTelefon.textContent = "";

    if(sjekkEpost.test(epost)){
        feilEpost.textContent = "Skriv inn en gyldig E-post";
        slettinput();
    }else  feilEpost.textContent = "";



}
function slettinput(){
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("epost").value = "";
}

function slett(){
    billetter = [];
    visBilletter();
}
