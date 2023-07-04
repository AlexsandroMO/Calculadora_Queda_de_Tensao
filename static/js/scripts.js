var lista = [
    ["0,5", 14.5000, 0.1100], //
    ["1", 19.5000, 0.3100], //
    ["1,5", 13.3000, 0.4100], //
    ["2,5", 7.9800, 0.4100], //
    ["4", 4.9500, 0.5100], //
    ["6", 3.3000, 0.5100], //
    ["10", 1.9100, 0.5100], //
    ["16", 1.2100, 0.6100], //
    ["25", 0.7800, 0.6100], //
    ["35", 0.5540, 0.6800], //
    ["50", 0.3860, 0.6800], //
    ["70", 0.2720, 0.6800], //
    ["95", 0.2060, 0.6800], //
    ["120", 0.1610, 0.6800], //
    ["150", 0.1290, 0.8600], //
    ["185", 0.1000, 0.8600], //
    ["240", 0.0801, 0.8600], //
    ["300", 0.0641, 0.8600]  //
];

console.log(lista);

//------------
let cableR = document.getElementById("cableR");
let cableX = document.getElementById("cableX");

let elementSected = document.getElementById("sectionAdopeted");

console.log("Cable: ", cableR, cableX);

elementSected.addEventListener("change", function () {
    let selectedValue = elementSected.value;
    let varCol1;
    let varCol2;

    for (var i = 0; i < lista.length; i++) {
        var sublista = lista[i];
        var varCol0 = sublista[0];

        if (varCol0 === selectedValue) {
            varCol1 = sublista[1];
            varCol2 = sublista[2];
            break;
        }
    }

    console.log("A: ", varCol1);
    console.log("B: ", varCol2);

    cableR.value = varCol1;
    cableX.value = varCol2;

    console.log("Valor da coluna 1: " + selectedValue);
});


function calcCirc() {
    let nominalTension = parseFloat(document.getElementById("nominalTension").value);
    let nominalCorrent = parseFloat(document.getElementById("nominalCorrent").value);
    let potencialFactor = parseFloat(document.getElementById("potencialFactor").value);
    let dimensionCorrent = document.getElementById("dimensionCorrent")
    let dropTension = parseFloat(document.getElementById("dropTension").value);
    let circuitLenght = parseFloat(document.getElementById("circuitLenght").value);
    let cableR = parseFloat(document.getElementById("cableR").value);
    let cableX = parseFloat(document.getElementById("cableR").value);
    let cableFase = parseFloat(document.getElementById("cableFase").value);
    let dropTensionE = document.getElementById("dropTensionE");

    let idim = ((nominalCorrent * 37) / 100) + nominalCorrent

    let result = 2 * idim * (cableR * potencialFactor + cableX * Math.sin(Math.acos(potencialFactor))) * circuitLenght / 100 / cableFase / (nominalTension / 10);
    //let result = (2 * idim * ((((cableR * potencialFactor) + (cableX * Math.sin(Math.acos(potencialFactor))))) * circuitLenght) / 1000 / cableFase) / (nominalTension * 1000);

    console.log('Result: ', result);
    dimensionCorrent.value = idim;
    dropTensionE.value = result.toFixed(2);
    dropTensionE.style.fontWeight = "bold";
    dropTensionE.style.color = "rgb(255, 255, 255)";

    if (result < dropTension) {
        dropTensionE.style.backgroundColor = "rgb(41, 154, 45)";
    } else {
        dropTensionE.style.backgroundColor = "rgb(255, 1, 69)"; //red
    }

}
