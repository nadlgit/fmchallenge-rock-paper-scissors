import { CHOICES, WINNER } from 'utils/constants';

const choicesList = [CHOICES.ROCK, CHOICES.PAPER, CHOICES.SCISSORS];

export const generateComputerChoice = () => {
  return choicesList[Math.floor(Math.random() * choicesList.length)];
};

export const processWinner = (playerChoice = '', computerChoice = '') => {
  if (!choicesList.includes(playerChoice) || !choicesList.includes(computerChoice)) {
    throw new Error('Unexpected value for playerChoice or computerChoice');
  }
  if (playerChoice === computerChoice) {
    return WINNER.DRAW;
  } else if (
    (playerChoice === CHOICES.ROCK && computerChoice === CHOICES.SCISSORS) ||
    (playerChoice === CHOICES.SCISSORS && computerChoice === CHOICES.PAPER) ||
    (playerChoice === CHOICES.PAPER && computerChoice === CHOICES.ROCK)
  ) {
    return WINNER.PLAYER;
  } else {
    return WINNER.COMPUTER;
  }
};
