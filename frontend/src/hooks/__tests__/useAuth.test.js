import { renderHook, act, waitFor } from '@testing-library/react';
import useAuth from '../useAuth';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('../../services/auth', () => ({
  getToken: vi.fn(),
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn()
}));

import { getToken, login, register, logout } from '../../services/auth';

describe('useAuth', () => {
  beforeEach(() => {
    getToken.mockReset();
    login.mockReset();
    register.mockReset();
    logout.mockReset();
  });

  it('initializes token from getToken', () => {
    getToken.mockReturnValue('initial-token');
    const { result } = renderHook(() => useAuth());
    expect(result.current.token).toBe('initial-token');
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('loginUser calls login and updates token', async () => {
    getToken.mockReturnValue(null);
    login.mockResolvedValue({ token: 'new-token' });
    getToken.mockReturnValueOnce(null).mockReturnValueOnce('new-token');

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.loginUser('a@b.com', 'pw');
    });

    expect(login).toHaveBeenCalledWith('a@b.com', 'pw');
    await waitFor(() => expect(result.current.token).toBe('new-token'));
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('logoutUser clears token', () => {
    getToken.mockReturnValue('t');
    const { result } = renderHook(() => useAuth());
    act(() => {
      result.current.logoutUser();
    });
    expect(logout).toHaveBeenCalled();
    expect(result.current.token).toBeNull();
  });
});
