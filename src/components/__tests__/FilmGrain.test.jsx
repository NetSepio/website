import React from 'react';
import { render } from '@testing-library/react';
import FilmGrain from '../FilmGrain';

describe('FilmGrain', () => {
  it('renders a fixed full-screen overlay that ignores pointer events', () => {
    const { container } = render(<FilmGrain />);
    const overlay = container.firstChild;
    expect(overlay).toHaveClass('pointer-events-none', 'fixed', 'inset-0');
  });

  it('applies a repeating noise background', () => {
    const { container } = render(<FilmGrain />);
    const overlay = container.firstChild;
    expect(overlay).toHaveStyle({
      backgroundRepeat: 'repeat',
      backgroundPosition: '0 0',
    });
  });
});
