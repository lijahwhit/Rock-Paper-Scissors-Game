import {game} from '/js/game.js';

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function main() {

    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));
    
    scissors_div.addEventListener('click', () => game('s'));
}

$config['system.core']['block_interest_cohort'] = FALSE;

main();
