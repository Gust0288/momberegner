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


function momsBeregner (beloeb, moms){
    // moms = 0.25;
    
    return beloeb * moms
}

result.textContent = momsBeregner(1000, 0.25);



