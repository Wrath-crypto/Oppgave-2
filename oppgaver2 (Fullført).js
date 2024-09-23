/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)

    IKKE endre på kode som er gitt, med mindre oppgaven spesefikt sier at du skal det
*/

/*
    Oppgave: Eksempel
    Skriv koden for å skrive ut alle navnene i listen, et navn per linje
*/
console.log("Oppgave: Eksempel");
const people = ["Tony","Christian","Håkon"]

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}


/*
    Oppgave: A
    Skriv kode som skriver ut settningen "Debuging er som å være en dektektiv i et krim drama hvor du også er morderen" 
    100 ganger. 
    Husk vi bruker console.log() til å skrive ting ut.
*/
console.log("Oppgave: A");
for (let index = 0; index < 100; index++) {
    console.log("debugging er som å være en detektiv i et krim drama hvor du også er morderen");
}


/*
    Oppgave: B
    Følgende kode er feil, kan du fikse feilene?
    Denne er ikke helt enkel, det er syntax feil her og logiske feil.
    Prøv å tenke på hva vi prøver å oppnå.
*/
console.log("Oppgave: B");

const max = 99;
for (let index = max; index > 0; index--) {
  console.log(index + " flasker med brus i kassa");

  console.log("Ta en ut, drikk den opp." + (index - 1) + " flasker med brus i kassa");
  console.log("");

  if(index == 0) {
    console.log("Ingen flere flasker med brus i kassa");
}
}




/*
    Oppgave: C
    Deklarere en variabel for tyngdekraft og en variabel for pi og en variabel for antall personer i et rom. 
*/
console.log("Oppgave: C");

let gravity = 9.8; //tyngdekraft tror jeg? (ifølge google)
let pi = 3.14;
let antallPersoner = 2;

console.log("Tyngdekraft = ", gravity);
console.log("Pi = ", pi);
console.log("antallPersoner = ", antallPersoner);

/*
    Oppgave: D
    Lag en funksjon som legger sammen to tall, funksjonen skal hete add
*/
console.log("Oppgave: D");

// lag funksjonen din her. 

function add(tall1, tall2) {
    return tall1 + tall2;
}

console.log("3 + 6 = " + add(3,6));
console.log("5673 + 234 = " + add(5673,234));

/*
    Oppgave: E
    Bruk variabelen people fra eksempelet og skriv navna ut i reversert rekke følge (bruk en løkke)
    NB du skal ikke endre på people, bare bruke det som den inneholder.
*/
console.log("Oppgave: E");

const people = ["Tony,", "Christian", "Håkon"];

for(let index = people.length - 1; index >= 0; index--) {
    let person = people[index];
    console.log(person);
}



/*
    Oppgave: F
    Deklarere en variabel for en liste med telefon nummer. Listen din skal ha minst 3 nummer. 
*/
console.log("Oppgave: F");

const telefonNummer = ["959 26 120", "123 45 678", "876 54 321"];

console.log(telefonNummer);


/*
    Oppgave: G
    Skriv ut bare det siste telefon numeret i listen din. 
*/

console.log("Oppgave G");

const telefonNummer = ["959 26 120", "123 45 678", "876 54 321"];

console.log(telefonNummer[telefonNummer.length - 1]);

/*
    Oppgave: H
    Skriv ut kunn etternavnene for personene i listen, bruk en løkke.
*/

let personer = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]]

console.log("Oppgave G");

let personer = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]];

for(let index = 0; index < personer.length; index++) {
    let etternavn personer[index][1];
    console.log(etternavn);
}