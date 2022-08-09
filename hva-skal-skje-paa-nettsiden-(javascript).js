/*---------------------------------KOBLE TIL HTML--------------------------------------------------------------------------------------------
Her lager vi koblinger til noen av HTML-elementene i index.html-fila, slik at vi kan
bruke dem i koden.

Se på id-en som står inni getElementById()-parentesen, og finn den samme id-en i index.html-fila, 
så skjønner du hvilket html-element det er snakk om.
-------------------------------------------------------------------------------------------------------------------------------------------*/

const knapp1 = document.getElementById('putt-paa-penger-knapp-1');
const knapp2 = document.getElementById('putt-paa-penger-knapp-2');
const knapp3 = document.getElementById('putt-paa-penger-knapp-3');
const knapp4 = document.getElementById('putt-paa-penger-knapp-4');

const tekstMedSparesum = document.getElementById('sparesum');
const bildeAvPenger = document.getElementById('penger');
const fullSparebosseVarsel = document.getElementById('full-sparebosse-varsel');
const tomSparebossenKnapp = document.getElementById('tom-sparebossen-knapp');




/*---------------------------------DEFINISJONER--------------------------------------------------------------------------------------------
Her sier vi at sparesummen i utgangspunktet skal være 0 kroner.
Vi bestemmer også hvor mye penger det er plass til i sparebøssen.
-------------------------------------------------------------------------------------------------------------------------------------------*/
let sparesum = 0;
let fullSparebosse = 100;




/*--------------------------------LEGG PÅ PENGER--------------------------------------------------------------------------------------------
Her skriver vi funksjonene som legger penger til sparesummen.
Det eneste som skiller funksjonene er hvor mye penger som skal legges til, ellers gjør 
de akkurat det samme. 
-------------------------------------------------------------------------------------------------------------------------------------------*/

function puttPaa1Kr() {
  sparesum = sparesum + 1; // Vi sier at sparesum skal være den summen som er der fra før, pluss 1.
  tekstMedSparesum.innerHTML = `${sparesum} kroner`; //Så oppdaterer vi teksten i html-elementet som viser sparesum med den nye sparesummen.
}

function puttPaa5Kr() {
  sparesum = sparesum + 5;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
}

function puttPaa10Kr() {
  sparesum = sparesum + 10;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
}

function puttPaa20Kr() {
  sparesum = sparesum + 20;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
}




/*------------------------------KOBLE TIL KNAPPENE (LYTTERE)----------------------------------------------------------------------------------------
Her kobler vi putt-på-penger-funksjonene til knappene, slik at penger blir lagt til når du klikker på knappen.
Det gjør vi ved å legge til en "lytter" som følger med på om noen klikker på knappene.
Det vi egentlig sier er: "Hvis knapp1 blir klikket på skal du sette i gang puttPaa1Kr-funksjonen"
-------------------------------------⬇---------------------------------------------------------------------------------------------------*/

knapp1.addEventListener('click', puttPaa1Kr);
knapp2.addEventListener('click', puttPaa5Kr);
knapp3.addEventListener('click', puttPaa10Kr);
knapp4.addEventListener('click', puttPaa20Kr);




/*-------------------------------------------ER SPAREBOSSEN FULL?-----------------------------------------------------------------------
Her er en funksjon som sjekker om sparebossen er full.

Du har allerede definert NÅR sparegrisen skal være full i "fullSparebosse"-variabelen på linje 27. 

Hvis summen du har spart er større enn fullSparebosse-summen, returnerer funksjonen "true" ➡ sparebossen ER full. 
Hvis ikke returnerer den "false" ➡ sparebossen er ikke full

Du kan bruke denne funksjonen hvis du vil at det skal skje noe annet når sparebossen er full
enn det som skjer når den ikke er full. 

Hint: Du kan bruke funksjonen INNI en annen funksjon. Da kaller du den slik: erSparebossenFull();
---------------------------------------------------------------------------------------------------------------------------------------*/

function erSparebossenFull() {
  //Finn ut hva som er den nåværende sparesummen fra HTML-elementet du har koblet deg til.
  //Når du henter summen på den måten, får du den tilbake som tekst.
  //Du kan ikke bruke slik tekst i et mattestykke - derfor må du gjøre den om til et nummer først. Det er det parseInt() gjør.
  const sparesum = parseInt(tekstMedSparesum.innerHTML);

  //Sjekk om sparesummen er større enn fullSparebosse-summen. (Tegnet i midten er en sånn krokodillegap man lærer om i matte).
  //Hvis sparesummen er større, skal funksjonen returnere "true". Hvis ikke skal den returnere "false"
  if (sparesum >= fullSparebosse) {
    return true;
  } else {
    return false;
  }
}




/*-------------------------------------------------BLIR SPAREBØSSEN FULL?--------------------------------------------------------------
Du kan også sjekke om sparebøssen BLIR full hvis du putter på et visst antall penger. 

Hvis beløpet som skal puttes på + beløpet som ligger der fra før er mer enn fullSparebosse-summen, 
returnerer funksjonen "true" ➡ sparebossen ER full. Hvis ikke returnerer den "false" ➡ sparebossen er ikke full

Du kan bruke denne funksjonen hvis du vil at det skal skje noe annet når sparebossen blir full
enn det som skjer når den ikke blir full. 

Hint: "belopSomSkalPuttesPå" er noe du må skrive inn når du kaller funksjonen. Hvis du for eksempel vil sjekke om sparebossen
blir full hvis du putter på 20 kroner til, kaller du den slik: blirSparebossenFull(20);
--------------------------------------------------------------------------------------------------------------------------------------*/
function blirSparebossenFull(belopSomSkalPuttesPa) {
  //Finn ut hva som er den nåværende sparesummen fra HTML-elementet du har koblet deg til.
  const naavaerendeSparesum = tekstMedSparesum.innerHTML;

  //Finn ut hva summen vil bli etter at du har lagt til det ekstra beløpet.
  const nySparesumNarDuPutterPaaMerPenger =
    parseInt(naavaerendeSparesum) + belopSomSkalPuttesPa;
  //⬆ parseInt() forvandler naavaerendeSparesum til et nummer i stedet for tekst, slik at du kan bruke det i et mattestykke

  //Hvis nySparesumNarDuPutterPaMerPenger er mer enn fullSparebossebeløpet returnerer funksjoen true. Hvis ikke returnerer den false.
  if (nySparesumNarDuPutterPaaMerPenger > fullSparebosse) {
    return true;
  } else {
    return false;
  }
}




/*---------------------------------------------VIS VARSEL OM AT SPAREBØSSEN ER FULL----------------------------------------------------
Her en funksjon som gjør brukeren får beskjed om at sparegrisen er full når maksgrensen er nådd. 
Hint: Denne funksjonen må kalles et annet sted i koden.  
---------------------------------------------------------------------------------------------------------------------------------------*/

function visFullSparebosseVarsel() {
  fullSparebosseVarsel.style.display = 'block';
}




/*--------------------------------------------------TØM SPAREBØSSEN-------------------------------------------------------------------
Her er en funksjon som tømmer sparebøssen.
Du har allerede laget kobling til knappen som skal brukes for å tømme sparebøssen: tomSparebossenKnapp. (linje 17)
--------------------------------------------------------------------------------------------------------------------------------------*/

function tomSparebossen() {
  sparesum = 0; //Nullstill sparesummen

  tekstMedSparesum.innerHTML = `${sparesum} kroner`; //Vis den nye, nullstilte sparesummen i stedet for den gamle

  fullSparebosseVarsel.style.display = 'none'; //Skjul boksen som sier at sparebøssen er full.

  bildeAvPenger.innerHTML = ""; //Fjern pengene som tyter ut av pengesprekken

  visKnappene(); //Vis putt-på-penger-knappene igjen

}

//Lag en lytter som kobler denne funksjonen til riktig knapp her:



/*------------------------------------------------VIS PENGER SOM TYTER UT AV SPAREBØSSEN-------------------------------------------
Her er en funksjon som setter inn et bilde av penger i pengesprekken til sparebøssen.
Du må sette inn riktig bilde: bildeAvPengerSparegris, bildeAvPengerSparelama eller bildeAvPengerSparekatt
Så må du finne et sted å kalle funksjonen.
-----------------------------------------------------------------------------------------------------------------------------------*/

function visPenger() {
  bildeAvPenger.innerHTML = bildeAvPengerSparegris; //sett inn bildekoden du vil ha i HTML-elementet
}

const bildeAvPengerSparegris = `
<g data-name="Group 43">
  <g data-name="Group 42" clip-path="url(#b)">
    <path
      data-name="Rectangle 20"
      transform="translate(247.419 23.794)"
      fill="url(#c)"
      d="M0 0h15.768v26.672H0z"
    />
  </g>
</g>
<g data-name="Group 45">
  <g data-name="Group 44" clip-path="url(#a)">
    <path
      data-name="Path 187"
      d="M186.582 59.228V13.043l33.779 33.245 16.76-41.011 10.3 23.994 9.1 21.195-6.069 9.645c-21.245-1.326-42.56-1.519-63.865-.883"
      fill="#38b349"
    />
    <path
      data-name="Path 188"
      d="m325.983 60.447-15.063 6.808q-17.825-3.181-35.777-5.064l3.252-39.481Z"
      fill="#38b349"
    />
    <path
      data-name="Path 189"
      d="M263.187 39.864V10.65l12.264 9.725Z"
      fill="#38b349"
    />
    <path
      data-name="Path 190"
      d="m263.187 39.864 12.264-19.489 3.609-5.736-.665 8.07-3.252 39.482q-12.327-1.308-24.7-2.081l6.069-9.644Z"
      fill="#f27405"
    />
</g>
`;

const bildeAvPengerSparekatt = `    
<g data-name="Group 83">
  <g data-name="Group 82" clip-path="url(#b)">
    <path data-name="Rectangle 39" transform="translate(131.548 56.353)" fill="url(#c)" d="M0 0h15.768v26.672H0z"/>
  </g>
</g>
<g data-name="Group 85">
  <g data-name="Group 84" clip-path="url(#a)">
    <path data-name="Path 243" d="M70.711 91.788V45.6l33.779 33.247 16.76-41.01 10.3 23.993 9.1 21.195-6.068 9.645c-21.245-1.325-42.56-1.518-63.865-.882" fill="#38b349"/>
    <path data-name="Path 244" d="m210.112 93.006-15.063 6.808q-17.824-3.182-35.777-5.064l3.252-39.481Z" fill="#38b349"/>
    <path data-name="Path 245" d="M147.316 72.423V43.209l12.264 9.724Z" fill="#38b349"/>
    <path data-name="Path 246" d="m147.316 72.423 12.264-19.49 3.609-5.735-.665 8.07-3.252 39.482q-12.327-1.308-24.7-2.081l6.069-9.644Z" fill="#f27405"/>
  </g>
</g>
`;

const bildeAvPengerSparelama = `
<g data-name="Group 109">
  <g data-name="Group 108" clip-path="url(#b)">
    <path data-name="Rectangle 53" transform="translate(267.145 210.616)" fill="url(#c)" d="M0 0h15.768v26.672H0z"/>
  </g>
</g>
<g data-name="Group 111">
  <g data-name="Group 110" clip-path="url(#a)">
    <path data-name="Path 264" d="M206.309 246.05v-46.185l33.779 33.244 16.76-41.01 10.3 23.993 9.1 21.2-6.069 9.645c-21.245-1.325-42.56-1.518-63.865-.882" fill="#38b349"/>
    <path data-name="Path 265" d="m345.71 247.269-15.064 6.808q-17.824-3.182-35.777-5.064l3.252-39.481Z" fill="#38b349"/>
    <path data-name="Path 266" d="M282.913 226.686v-29.214l12.264 9.725Z" fill="#38b349"/>
    <path data-name="Path 267" d="m282.913 226.686 12.264-19.486 3.609-5.736-.665 8.07-3.252 39.482q-12.327-1.308-24.7-2.081l6.069-9.644Z" fill="#f27405"/>
  </g>
</g>
`;


/*------------------------------------------------VIS OG SKJUL PUTT-PÅ-PENGER-KNAPPENE-------------------------------------------
Når sparebøssen er full, vil du ikke at det skal gå an å putte på mer penger. Da kan du skjule knappene ved å kalle skjulKnappene()-funksjonen.
Men når sparebøssen er tømt, vil du jo vise knappene igjen. Da kan du kalle visKnappene(). 
-----------------------------------------------------------------------------------------------------------------------------------*/


function skjulKnappene() {
  knapp1.style.display = "none"; //Endre på stylingen til hver enkelt knapp, slik at den ikke vises. 
  knapp2.style.display = "none";
  knapp3.style.display = "none";
  knapp4.style.display = "none";
};

function visKnappene() {
  knapp1.style.display = "inline-block"; //Endre på stylingen til hver enkelt knapp, slik at den vises igjen.
  knapp2.style.display = "inline-block";
  knapp3.style.display = "inline-block";
  knapp4.style.display = "inline-block";
}
