import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Playground } from './playground';
import { generateComputerChoice, processWinner } from 'logic/game';
import { CHOICES, WINNER } from 'utils/constants';

jest.mock('logic/game');

describe('Playground component', () => {
  const testProps = { incrementScore: jest.fn(), decrementScore: jest.fn() };
  const testChoices = [
    { str: /rock/i, val: CHOICES.ROCK },
    { str: /paper/i, val: CHOICES.PAPER },
    { str: /scissors/i, val: CHOICES.SCISSORS },
  ];
  const replayStr = /play again/i;

  test('initial state', () => {
    render(<Playground {...testProps} />);
    testChoices.forEach((item) => {
      expect(screen.getByRole('button', { name: item.str })).toBeInTheDocument();
    });
    expect(screen.queryByRole('button', { name: replayStr })).not.toBeInTheDocument();
  });

  test('play and replay loop', async () => {
    generateComputerChoice.mockImplementation(() => CHOICES.ROCK);
    processWinner.mockImplementation(() => WINNER.PLAYER);
    render(<Playground {...testProps} />);

    for (let i = 0; i < testChoices.length; i++) {
      userEvent.click(screen.getByRole('button', { name: testChoices[i].str }));
      testChoices.forEach((item) => {
        expect(screen.queryByRole('button', { name: item.str })).not.toBeInTheDocument();
      });
      expect(screen.getByText(/you picked/i)).toBeInTheDocument();
      expect(screen.getByText(/the house picked/i)).toBeInTheDocument();
      await screen.findByRole('button', { name: replayStr });
      userEvent.click(screen.getByRole('button', { name: replayStr }));
      testChoices.forEach((item) => {
        expect(screen.getByRole('button', { name: item.str })).toBeInTheDocument();
      });
      expect(screen.queryByRole('button', { name: replayStr })).not.toBeInTheDocument();
    }
    expect(generateComputerChoice).toHaveBeenCalledTimes(testChoices.length);
    expect(processWinner).toHaveBeenCalledTimes(testChoices.length);
  });

  test.each(testChoices)('display player choice $val', async ({ str }) => {
    generateComputerChoice.mockImplementation(() => '');
    render(<Playground {...testProps} />);

    userEvent.click(screen.getByRole('button', { name: str }));
    await waitFor(() => expect(generateComputerChoice).toHaveBeenCalled());
    expect(screen.getByRole('img', { name: str })).toBeInTheDocument();
  });

  test.each(testChoices)('display computer choice $val', async ({ str, val }) => {
    const playerChoiceStr = testChoices[0].str;
    generateComputerChoice.mockImplementation(() => val);
    render(<Playground {...testProps} />);

    userEvent.click(screen.getByRole('button', { name: playerChoiceStr }));
    await waitFor(() => expect(generateComputerChoice).toHaveBeenCalled());
    expect(screen.getAllByRole('img', { name: str }).length).toBe(str === playerChoiceStr ? 2 : 1);
  });

  test('player wins', async () => {
    generateComputerChoice.mockImplementation(() => CHOICES.ROCK);
    processWinner.mockImplementation(() => WINNER.PLAYER);
    render(<Playground {...testProps} />);

    userEvent.click(screen.getByRole('button', { name: testChoices[0].str }));
    await screen.findByText(/you win/i);
    expect(testProps.incrementScore).toHaveBeenCalled();
    expect(testProps.decrementScore).not.toHaveBeenCalled();
  });

  test('player loses', async () => {
    generateComputerChoice.mockImplementation(() => CHOICES.ROCK);
    processWinner.mockImplementation(() => WINNER.COMPUTER);
    render(<Playground {...testProps} />);

    userEvent.click(screen.getByRole('button', { name: testChoices[0].str }));
    await screen.findByText(/you lose/i);
    expect(testProps.incrementScore).not.toHaveBeenCalled();
    expect(testProps.decrementScore).toHaveBeenCalled();
  });

  test('tie (no winner)', async () => {
    generateComputerChoice.mockImplementation(() => CHOICES.ROCK);
    processWinner.mockImplementation(() => WINNER.TIE);
    render(<Playground {...testProps} />);

    userEvent.click(screen.getByRole('button', { name: testChoices[0].str }));
    await screen.findByText(/tie/i);
    expect(testProps.incrementScore).not.toHaveBeenCalled();
    expect(testProps.decrementScore).not.toHaveBeenCalled();
  });
});
