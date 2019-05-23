const divReg = document.querySelector("#divReg");
const inpReg = document.querySelector("#inpReg");
const btnReg = document.querySelector("#btnReg");
const ulReg = document.querySelector("#ulReg");
const pReg = document.querySelector("#pReg");

const divRunde1 = document.querySelector("#divRunde1");
const tbRunde1 = document.querySelector("#tbRunde1");
const btnStart1 = document.querySelector("#btnStart1");
const btnLagre1 = document.querySelector("#btnLagre1");

const divRunde2 = document.querySelector("#divRunde2");
const tbRunde2 = document.querySelector("#tbRunde2");
const btnStart2 = document.querySelector("#btnStart2");
const btnLagre2 = document.querySelector("#btnLagre2");
const btnRes = document.querySelector("#btnRes");

const divRes = document.querySelector("#divRes");
const olRes = document.querySelector("#olRes");

let deltakere = [];
let antallMeldte = 0;

class Kaster{
    constructor(navn){
        this.navn = navn;
        this.kast = [];
        this.lengste = 0;
    }

    lagreKast(){
       let inputs = document.querySelectorAll(`.inp${this.navn}`);
       for(let input of inputs){
           this.kast.push(Number(input.value));
       }
    }

    oppdaterLengste(){
        this.kast.sort(hoyTilLav);
        this.lengste = this.kast[0];
    }

    genererHTMLrunde1(){
        tbRunde1.innerHTML += `
            <tr>
                <td>${this.navn}</td>
                <td><input class="inp${this.navn}" type="number"></td>
                <td><input class="inp${this.navn}" type="number"></td>
                <td><input class="inp${this.navn}" type="number"></td>
            </tr>
        `
    }
    genererHTMLrunde2(){
        tbRunde2.innerHTML += `
            <tr>
                <td>${this.navn}</td>
                <td><input class="inp${this.navn}" type="number"></td>
                <td><input class="inp${this.navn}" type="number"></td>
                <td><input class="inp${this.navn}" type="number"></td>
            </tr>
        `
    }
}

btnReg.onclick = function(){
    if(inpReg.value !== ""){
        deltakere.push(new Kaster(inpReg.value));
        ulReg.innerHTML = ``;
        for(let kaster of deltakere){
            console.log(kaster);
            ulReg.innerHTML += `<li>${kaster.navn}</li>`;
        }
        antallMeldte++; // Samme som antallMeldte += 1;
        pReg.innerHTML = `Antall påmeldte: ${antallMeldte}/8`
    }
    if(antallMeldte>=8){
        btnReg.disabled = true;
    }
    inpReg.value = "";
};

btnStart1.onclick = function(){
    divReg.style.display = "none";
    divRunde1.style.display = "block";
    for(let kaster of deltakere){
        kaster.genererHTMLrunde1();
    }
};

btnLagre1.onclick = function(){
    for(let kaster of deltakere){
        kaster.lagreKast();
        kaster.oppdaterLengste();
    }
};

btnStart2.onclick = function(){
    divRunde1.style.display = "none";
    divRunde2.style.display = "block";
    deltakere.sort(lengsteHoyTilLav);

    for(let i = 0; i<4; i++){
        deltakere[i].genererHTMLrunde2();
    }
};

btnRes.onclick = function(){
    divRunde2.style.display = "none";
    divRes.style.display = "block";
    for(let kaster of deltakere){
        kaster.lagreKast();
        kaster.oppdaterLengste();
    }
    deltakere.sort(lengsteHoyTilLav);
    olRes.innerHTML += `<li>${deltakere[0].navn}, lengde: ${deltakere[0].lengste}m`;
    olRes.innerHTML += `<li>${deltakere[1].navn}, lengde: ${deltakere[1].lengste}m`;
    olRes.innerHTML += `<li>${deltakere[2].navn}, lengde: ${deltakere[2].lengste}m`;
};

// Funksjonsdefinisjoner
function hoyTilLav(a,b){ // Funksjon brukt for å sortere arrays, sammenligner a og b.
   return b-a; // Hvis positivt bytt plass fordi jeg vil ha høy til lav.
    //return a-b // gir lav til høy
};

function lengsteHoyTilLav(objektA,objektB) { // Funksjon brukt for å sortere arrays, sammenligner a og b.
    return objektB.lengste - objektA.lengste;
}
