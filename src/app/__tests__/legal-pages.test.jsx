import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyPolicyPage, {
  metadata as privacyMetadata,
} from '../privacy.html/page';
import TermsOfUsePage, { metadata as termsMetadata } from '../terms.html/page';

const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
}));

describe('PrivacyPolicyPage', () => {
  it('exposes page metadata', () => {
    expect(privacyMetadata.title).toBe('Privacy Policy | NetSepio');
    expect(privacyMetadata.description).toMatch(/NetSepio collects/i);
  });

  it('renders the page title heading', () => {
    render(<PrivacyPolicyPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Privacy/i })
    ).toBeInTheDocument();
  });

  it('renders all eight numbered policy sections', () => {
    render(<PrivacyPolicyPage />);
    const sectionTitles = [
      'Our Approach',
      'Information You Provide',
      'Information Collected Automatically',
      'Cookies and Tracking Technologies',
      'How We Use Information',
      'Security of Data and No Liability',
      'Indemnification',
      'Changes and Contact',
    ];
    sectionTitles.forEach((title) => {
      expect(
        screen.getByRole('heading', { name: title })
      ).toBeInTheDocument();
    });
  });
});

describe('TermsOfUsePage', () => {
  it('exposes page metadata', () => {
    expect(termsMetadata.title).toBe('Terms of Use | NetSepio');
  });

  it('renders the page title heading', () => {
    render(<TermsOfUsePage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Terms of/i })
    ).toBeInTheDocument();
  });

  it('renders key terms sections', () => {
    render(<TermsOfUsePage />);
    ['Acceptance of Terms', 'Definitions', 'Acceptable Use'].forEach(
      (title) => {
        expect(
          screen.getByRole('heading', { name: title })
        ).toBeInTheDocument();
      }
    );
  });
});
