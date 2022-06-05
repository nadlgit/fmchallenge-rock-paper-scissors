import { CHOICES, WINNER } from 'utils/constants';

export const generateComputerChoice = () => {
  const choicesList = Object.values(CHOICES);
  return choicesList[Math.floor(Math.random() * choicesList.length)];
};

export const processWinner = (playerChoice = '', computerChoice = '') => {
  const choicesList = [CHOICES.ROCK, CHOICES.PAPER, CHOICES.SCISSORS];
  if (!choicesList.includes(playerChoice) || !choicesList.includes(computerChoice)) {
    throw new Error('Unexpected value for playerChoice or computerChoice');
  }
  if (playerChoice === computerChoice) {
    return WINNER.TIE;
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
