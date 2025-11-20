/***************hotspotOeje********************/
console.log(document.querySelector("#hotspotOeje"));

/***************Const***********************/
const hotSpotEye = document.querySelector("#hotspotOeje");
const hotSpotKind = document.querySelector("#hotspotKind");
const hotSpotHaand = document.querySelector("#hotspotHaand");

const boxEfficiency = document.querySelector("#efficiency");
const boxRequirement = document.querySelector("#requirement");

hotSpotEye.addEventListener("mouseover", mouseOverOeje);
hotSpotEye.addEventListener("mouseout", mouseOutOeje);

function mouseOverOeje() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotOeje").style.fill = "#61B8E7";
}

function mouseOutOeje() {
  console.log("mouseOutHead");
  document.querySelector("#hotspotOeje").style.fill = "#c1454a";
}

hotSpotEye.addEventListener("click", clickOeje);

function clickOeje() {
  boxEfficiency.classList.remove("hide");
  boxEfficiency.classList.add("fadeIn");
  boxRequirement.classList.remove("hide");
  boxRequirement.classList.add("fadeIn");

  document.querySelector(".info-text > h2").textContent = "Symptom:";
  document.querySelector(".placeholder").textContent = "Øjeforvrængning:";

  boxEfficiency.innerHTML = `<h3>Beskrivelse:</h3>
  <p>Lisas forældre fortæller, at denne forvrængning begyndte kort tid efter begge forældre flyttede fra hinanden pg.a. skilsmisse.  Lisa har nu adskillige pupiller i sit ene øje, som vibrerer og flytter rundt hele tiden.</p>`;
  boxRequirement.innerHTML = `<h3>Mulige monstre:</h3>
  <ul>
  <li>Pahrina dæmon: Elsker sit eget spejlbillede. Inficering af denne dæmon kan resultere i multiplikation af øjne/pupiller, fordi den altid er på udkig efter spejle.</li>
  <li>McZoom-Ding Gremlin: Har altid fuld fart pa. Inficering af denne Gremlin kan resultere i multiplikation af øjne/pupiller, fordi den gerne vil følge med i alt.</li>
  <li>Oleanders vræler: Afskyer sit eget spejlbillede. Inficering af denne ånd kan resultere i multiplikation af øjne/pupiller, fordi den altid er på vagt overfor spejle.</li>
  </ul>`;
}
/***************RESET BOXES************************/

boxEfficiency.addEventListener("animationend", resetEfficiency);
boxRequirement.addEventListener("animationend", resetRequirement);

function resetEfficiency() {
  boxEfficiency.classList.remove("fadeIn");
}
function resetRequirement() {
  boxRequirement.classList.remove("fadeIn");
}

/***************hotspotKind************************/
console.log(hotSpotKind);

hotSpotKind.addEventListener("mouseover", mouseOverKind);

function mouseOverKind() {
  console.log("mouseOverKind");
  hotSpotKind.style.fill = "#61B8E7";
}

hotSpotKind.addEventListener("mouseout", mouseOutKind);

function mouseOutKind() {
  console.log("mouseOutKind");
  hotSpotKind.style.fill = "#c1454a";
}

hotSpotKind.addEventListener("click", clickKind);

function clickKind() {
  console.log("clickKind");
  boxEfficiency.classList.add("fadeIn");
  boxRequirement.classList.add("fadeIn");
  boxEfficiency.classList.remove("hide");
  boxRequirement.classList.remove("hide");

  document.querySelector(".info-text > h2").textContent = "Symptom:";
  document.querySelector(".placeholder").textContent = "Kindforvrængning:";

  document.querySelector("#efficiency").innerHTML = `<h3>Beskrivelse:</h3>
  <p>Ifølge Lisas forældre begyndte denne forvrængning omkring en måned efter hendes første forvrængning. Lisas opførelse ændrede sig også mærkbart fra glad og udadgående, til aggressiv til derefter usikker.   
</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Mulige monstre:</h3>
  <ul>
  <li>Pahrina dæmon: Er specielt begejstret for sine store hugtænder. Dette kan resultere i at den inficerede gror hugtænder.</li>
  <li>Oleanders vræler:  Denne ånd har store hugtænder. Dette kan resultere i at den inficerede gror hugtænder der ligner åndens egne.</li>
  <li>Tandtyven: Denne fe er besat af at samle tænder. en inficering af denne fe kan resultere i vagest af ekstra tænder, da den håber man vil tabe de ekstra tænder, saa den kan stjæle dem.</li>
  </ul>`;
}
/**************hotspotHaand********************/
console.log(document.querySelector("#hotspotHaand"));

document.querySelector("#hotspotHaand").addEventListener("mouseover", mouseOverHaand);

function mouseOverHaand() {
  console.log("mouseOverHaand");
  document.querySelector("#hotspotHaand").style.fill = "#61B8E7";
}

document.querySelector("#hotspotHaand").addEventListener("mouseout", mouseOutHaand);

function mouseOutHaand() {
  console.log("mouseOutHaand");
  document.querySelector("#hotspotHaand").style.fill = "#c1454a";
}

document.querySelector("#hotspotHaand").addEventListener("click", clickHaand);

function clickHaand() {
  console.log("clickHaand");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");

  document.querySelector(".info-text > h2").textContent = "Symptom:";
  document.querySelector(".placeholder").textContent = "Håndforvrængning:";

  document.querySelector("#efficiency").innerHTML = `<h3>Symptom:</h3>
  <p>Lisas forældre siger, at kort tid efter forvrængningen af Lisas tænder og ændringen af hendes opførelse, begyndte hun at blive ekstremt fortvivlet og smadre spejle. hvergang hun kom i nærheden af dem. (Side note: Lisas mor fortæller at hun fornyeligt fandt ud af, at Lisa fra starten af vidste, at skilsmissen var paa grund af utroskab). </p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Mulige monstre:</h3>
  <ul>
  <li>Oleanders vræler:  Afskyer sit eget spejlbillede. inficering af denne ånd kan resultere i at den inficerede begynder at smadre spejle og lader skårene gro ind, fordi ånden hader sit eget spejlebillede saa meget, og vil ikke bekymre sig om at fjerne skårene.</li>
  <li>Krystalvågteren: Denne ånd består udelukkende af krystalglas. Inficering af denne ånd kan resultere i, at den inficerede smadre glas og lader skårene gro ind, for at efterligne åndens udseende saa meget som muligt.</li>
  <li>Largas’ smærte: Denne dæmon elsker alt form for smerte. Inficering af denne dæmon kan resultere i at den inficerede smadre glas og lade skårene gro ind, for at smerten skal vare ved.</li>
  </ul>`;
}
