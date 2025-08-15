import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../components/Register';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../services/auth', () => ({ register: vi.fn() }));
import { register as registerApi } from '../services/auth';

describe('Register component', () => {
  it('calls registerApi on submit', async () => {
    registerApi.mockResolvedValueOnce({ token: 't' });
    const onSuccess = vi.fn();
    render(
      <MemoryRouter>
        <Register auth={{ registerUser: (e,p) => registerApi(e,p) }} onSuccess={onSuccess} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter email/i), { target: { value: 'a@b.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter password/i), { target: { value: 'pw' } });
  // click the form submit button specifically (find button[type="submit"]) because multiple 'Register' nodes exist
  const buttons = screen.getAllByRole('button', { name: /Register/i });
  const submitBtn = buttons.find(b => b.getAttribute('type') === 'submit') || buttons[0];
  fireEvent.click(submitBtn);

    // wait a tick
    await new Promise(r => setTimeout(r, 0));
    expect(registerApi).toHaveBeenCalledWith('a@b.com', 'pw');
  });
});
