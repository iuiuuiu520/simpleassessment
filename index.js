function main(){
    getAlpha();
    getBeta();
    getCharlie();
}

function getAlpha(){
    var a5 = document.getElementById('A5').innerHTML;
    var a20 = document.getElementById('A20').innerHTML;

    var alpha = Number(a5) + Number(a20);

    document.getElementById('alpha').innerHTML = alpha;
}

function getBeta(){
    var a15 = document.getElementById('A15').innerHTML;
    var a7 = document.getElementById('A7').innerHTML;

    var beta = Number(a15) / Number(a7);

    document.getElementById('beta').innerHTML = beta;
}

function getCharlie(){
    var a13 = document.getElementById('A13').innerHTML;
    var a12 = document.getElementById('A12').innerHTML;

    var charlie = Number(a13) * Number(a12);

    document.getElementById('charlie').innerHTML = charlie;
}

main();