import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FoodForm from '../components/FoodForm';
import { vi } from 'vitest';
vi.mock('../services/auth', () => ({ getToken: () => 'token' }));

describe('FoodForm component', () => {
  it('calls onAddFood with form data', () => {
    const onAddFood = vi.fn();
  render(<FoodForm onAddFood={onAddFood} />);

  fireEvent.change(screen.getByPlaceholderText(/Date/i), { target: { value: '2025-08-15' } });
  fireEvent.change(screen.getByPlaceholderText(/Time/i), { target: { value: '12:00' } });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'apple' } });

    fireEvent.click(screen.getByText(/Add Food/i));

    expect(onAddFood).toHaveBeenCalled();
    const arg = onAddFood.mock.calls[0][0];
    expect(arg.date).toBe('2025-08-15');
    expect(arg.time).toBe('12:00');
    expect(arg.description).toBe('apple');
  });
});
