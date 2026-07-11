import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ScrambleText from '../ScrambleText';

// Control whether the element is considered in-view.
let mockInView = true;
jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: mockInView }),
}));

describe('ScrambleText', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockInView = true;
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders empty before the scramble interval starts', () => {
    const { container } = render(<ScrambleText text="HELLO" />);
    expect(container.querySelector('span').textContent).toBe('');
  });

  it('scrambles to a string of the same length as the input', () => {
    const { container } = render(<ScrambleText text="HELLO" />);
    act(() => {
      jest.advanceTimersByTime(30);
    });
    expect(container.querySelector('span').textContent).toHaveLength(5);
  });

  it('resolves to the original text once enough iterations elapse', () => {
    render(<ScrambleText text="HELLO" />);
    act(() => {
      jest.advanceTimersByTime(30 * 60);
    });
    expect(screen.getByText('HELLO')).toBeInTheDocument();
  });

  it('does not start scrambling while out of view', () => {
    mockInView = false;
    const { container } = render(<ScrambleText text="HELLO" />);
    act(() => {
      jest.advanceTimersByTime(30 * 10);
    });
    expect(container.querySelector('span').textContent).toBe('');
  });

  it('applies the provided className to the rendered span', () => {
    const { container } = render(
      <ScrambleText text="HI" className="text-glow" />
    );
    expect(container.querySelector('span')).toHaveClass('text-glow');
  });

  it('only uses characters from the input or the scramble charset', () => {
    const text = 'ABC';
    const scrambleChars = '!<>-_\\/[]{}—=+*^?#_';
    const allowed = new Set([...text, ...scrambleChars]);
    const { container } = render(<ScrambleText text={text} />);
    act(() => {
      jest.advanceTimersByTime(30);
    });
    const rendered = container.querySelector('span').textContent;
    for (const ch of rendered) {
      expect(allowed.has(ch)).toBe(true);
    }
  });
});
