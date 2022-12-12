// vendors
import { fireEvent, render, screen } from '@testing-library/react';

// views
import { Counter } from '../Counter';

// hooks
import * as hook from '../hooks/useCounterData';

describe('Counter', () => {
  const mockUseCounterData = jest.spyOn(hook, 'useCounterData');
  const mockSetIncrementAmount = jest.fn();
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockUseCounterData.mockImplementation(() => ({
      count: 10,
      dispatch: mockDispatch,
      incrementAmount: 10,
      incrementValue: 10,
      setIncrementAmount: mockSetIncrementAmount,
    }));
  });

  it('should render component', () => {
    render(<Counter />);

    expect(screen.getByTestId(/counter-container/i)).toBeInTheDocument();
  });

  describe('Handlers', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should handleDecrementButtonClick', () => {
      render(<Counter />);

      const button = screen.getByTestId(/decrement-button/i);

      expect(button).toBeInTheDocument();

      fireEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should handleIncrementAmountButtonClick', () => {
      render(<Counter />);

      const button = screen.getByTestId(/increment-input-button/i);

      expect(button).toBeInTheDocument();

      fireEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should handleIncrementAsyncButtonClick', () => {
      render(<Counter />);

      const button = screen.getByTestId(/increment-async-button/i);

      expect(button).toBeInTheDocument();

      fireEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should handleIncrementButtonClick', () => {
      render(<Counter />);

      const button = screen.getByTestId(/increment-button/i);

      expect(button).toBeInTheDocument();

      fireEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should handleIncrementIfOddButtonClick', () => {
      render(<Counter />);

      const button = screen.getByTestId(/increment-odd-button/i);

      expect(button).toBeInTheDocument();

      fireEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should handleIncrementAmountChange', () => {
      render(<Counter />);

      const input = screen.getByTestId(/amount-input/i);

      expect(input).toBeInTheDocument();

      fireEvent.change(input, { target: { value: '23' } });

      expect(mockSetIncrementAmount).toHaveBeenCalledWith('23');
    });
  });
});
