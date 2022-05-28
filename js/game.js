//Elijah Whitchurch

import {getComputerChoice} from '/rps-game/js/getComputerChoice.js'
import {win, lose, draw} from '/rps-game/js/results.js';

export function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
    }
}