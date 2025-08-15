import { renderHook, waitFor } from '@testing-library/react';
import useFoods from '../useFoods';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// mock services
vi.mock('../../services/food', () => ({
  getFoodsByDate: vi.fn()
}));
vi.mock('../../services/auth', () => ({
  getToken: () => 'fake-token'
}));

import { getFoodsByDate } from '../../services/food';

describe('useFoods', () => {
  beforeEach(() => {
    getFoodsByDate.mockReset();
  });

  it('returns foods when service resolves', async () => {
    getFoodsByDate.mockResolvedValueOnce([{ id: 1, description: 'apple' }]);

  const { result } = renderHook(() => useFoods('2025-08-15'));
  await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.foods).toEqual([{ id: 1, description: 'apple' }]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('sets error when service rejects', async () => {
    getFoodsByDate.mockRejectedValueOnce(new Error('fail'));
  const { result } = renderHook(() => useFoods('2025-08-15'));
  await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.foods).toEqual([]);
    expect(result.current.error).toBe('fail');
  });
});
