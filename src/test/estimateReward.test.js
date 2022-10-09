import { render, screen } from '@testing-library/react';
import estimateAmount from '../utility/estimateReward';

test('reward should be 0 if txn amount less than 50', () => {
  const reward = estimateAmount(49)
  expect(reward).toEqual(0)
});

test('reward should be 1 mutltiple if txn amount less than 100', () => {
    const reward = estimateAmount(90)
    expect(reward).toEqual(40)
});

test('reward should be 90 if txn amount 120', () => {
    const reward = estimateAmount(120)
    expect(reward).toEqual(90)
});

