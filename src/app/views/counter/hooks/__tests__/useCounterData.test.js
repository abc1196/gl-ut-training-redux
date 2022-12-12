// vendors
import { act, renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';

// hooks
import { useCounterData } from '../useCounterData';

// redux
import { store } from '../../../../entrypoint';

describe('useCounterData', () => {
  it('should return values', () => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useCounterData(), { wrapper });

    expect(result.current).toHaveProperty('count');
    expect(result.current).toHaveProperty('dispatch');
    expect(result.current).toHaveProperty('incrementAmount');
    expect(result.current).toHaveProperty('incrementValue', 2);
    expect(result.current).toHaveProperty('setIncrementAmount');
  });

  it('should return values', () => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useCounterData(), { wrapper });

    act(() => {
      result.current.setIncrementAmount(null);
    });

    expect(result.current).toHaveProperty('count');
    expect(result.current).toHaveProperty('dispatch');
    expect(result.current).toHaveProperty('incrementAmount');
    expect(result.current).toHaveProperty('incrementValue', 0);
    expect(result.current).toHaveProperty('setIncrementAmount');
  });
});
