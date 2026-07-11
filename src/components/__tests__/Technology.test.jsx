import React from 'react';
import { render, screen } from '@testing-library/react';
import { Technology, technologies } from '../Technology';

describe('Technology', () => {
  it('exports six stack modules', () => {
    expect(technologies).toHaveLength(6);
  });

  it('renders a heading for every technology entry', () => {
    render(<Technology />);
    technologies.forEach((tech) => {
      expect(
        screen.getByRole('heading', { name: tech.title })
      ).toBeInTheDocument();
    });
  });

  it('renders zero-padded module numbers', () => {
    render(<Technology />);
    expect(screen.getByText('MOD.01')).toBeInTheDocument();
    expect(screen.getByText('MOD.06')).toBeInTheDocument();
  });

  it('renders the description for each technology', () => {
    render(<Technology />);
    technologies.forEach((tech) => {
      expect(screen.getByText(tech.description)).toBeInTheDocument();
    });
  });

  it('renders the section header title', () => {
    render(<Technology />);
    expect(
      screen.getByRole('heading', { name: /Sovereignty/i })
    ).toBeInTheDocument();
  });
});
