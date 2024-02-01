const input = document.getElementById("playerInput");
const calcBut = document.getElementById("calcButton");
const showResultat = document.getElementById("resultat");
const result = document.getElementById("result");


calcBut.addEventListener("click", (beloeb, moms) => {
    moms = 0.25;
    beloeb = Number(input.value)

    const resultat = moms * beloeb;

    showResultat.textContent = " Du betaler: "+ resultat + " kr. i Moms"
    
})


function momsBeregner (beloeb, moms = 0.25){
    // moms = 0.25;

    const resulat = beloeb * moms;
    console.log(`Beløb: ${beloeb} Moms: ${moms}`)
    console.log(`Endelige beløb: ${beloeb + resulat}`)
}

result.textContent = momsBeregner(1000);



