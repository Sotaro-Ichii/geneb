import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

// Mock the constants
jest.mock('@/content/constants', () => ({
  getCurrentMode: () => 'portfolio',
  getCurrentContent: () => ({
    hero: {
      headline: 'テスト用ヘッドライン',
      subheadline: 'テスト用サブヘッドライン',
      cta: 'テスト用CTA',
    },
  }),
  SITE_CONFIG: {
    brand: 'geneb',
    primaryClaim: 'テスト用プライマリクレーム',
    contactUrl: 'https://test.com',
    taxNote: '※価格は税込です',
  },
  generateCTALink: () => 'https://test.com',
  generateAriaLabel: () => 'テスト用ラベル',
}));

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays the headline', () => {
    render(<Hero />);
    expect(screen.getByText('テスト用ヘッドライン')).toBeInTheDocument();
  });

  it('displays the subheadline', () => {
    render(<Hero />);
    expect(screen.getByText('テスト用サブヘッドライン')).toBeInTheDocument();
  });

  it('has a CTA button', () => {
    render(<Hero />);
    expect(
      screen.getByRole('link', { name: /テスト用CTA/ })
    ).toBeInTheDocument();
  });

  it('displays the brand name', () => {
    render(<Hero />);
    expect(screen.getByText('geneb')).toBeInTheDocument();
  });
});
