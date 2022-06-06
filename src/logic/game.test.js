import { processWinner } from './game';
import { CHOICES, WINNER } from 'utils/constants';

describe('processWinner', () => {
  test('without parameters', () => {
    expect(() => {
      processWinner();
    }).toThrow();
  });

  test('with invalid parameters', () => {
    expect(() => {
      processWinner('abcdefgh', 'ijklmnop');
    }).toThrow();
  });

  test('when rock vs rock', () => {
    const result = processWinner(CHOICES.ROCK, CHOICES.ROCK);
    expect(result).toBe(WINNER.DRAW);
  });

  test('when rock vs paper', () => {
    const result = processWinner(CHOICES.ROCK, CHOICES.PAPER);
    expect(result).toBe(WINNER.COMPUTER);
  });

  test('when rock vs scissors', () => {
    const result = processWinner(CHOICES.ROCK, CHOICES.SCISSORS);
    expect(result).toBe(WINNER.PLAYER);
  });

  test('when paper vs rock', () => {
    const result = processWinner(CHOICES.PAPER, CHOICES.ROCK);
    expect(result).toBe(WINNER.PLAYER);
  });

  test('when paper vs paper', () => {
    const result = processWinner(CHOICES.PAPER, CHOICES.PAPER);
    expect(result).toBe(WINNER.DRAW);
  });

  test('when paper vs scissors', () => {
    const result = processWinner(CHOICES.PAPER, CHOICES.SCISSORS);
    expect(result).toBe(WINNER.COMPUTER);
  });

  test('when scissors vs rock', () => {
    const result = processWinner(CHOICES.SCISSORS, CHOICES.ROCK);
    expect(result).toBe(WINNER.COMPUTER);
  });

  test('when scissors vs paper', () => {
    const result = processWinner(CHOICES.SCISSORS, CHOICES.PAPER);
    expect(result).toBe(WINNER.PLAYER);
  });

  test('when scissors vs scissors', () => {
    const result = processWinner(CHOICES.SCISSORS, CHOICES.SCISSORS);
    expect(result).toBe(WINNER.DRAW);
  });
});
