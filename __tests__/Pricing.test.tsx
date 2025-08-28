import { render, screen } from '@testing-library/react';
import Pricing from '@/components/sections/Pricing';

jest.mock('@/content/constants', () => ({
  getCurrentMode: () => 'portfolio',
  SITE_CONFIG: { brand: 'geneb', contactUrl: 'https://test.com', taxNote: '※価格は税込です' },
  pricing: {
    production: [
      { id: 'light', name: 'ライト', regularPrice: 5000, campaignPrice: 3000, features: ['A'], target: '学生' },
      { id: 'middle', name: 'ミドル', regularPrice: 50000, campaignPrice: 29800, features: ['B'], target: '個人' },
      { id: 'premium', name: 'プレミアム', regularPrice: 100000, campaignPrice: 70000, features: ['C'], target: '起業' },
    ],
    monthly: [
      { id: 'silver', name: 'シルバー', priceMonthly: 499, includes: ['I1'], target: '層' },
      { id: 'gold', name: 'ゴールド', priceMonthly: 1200, includes: ['アクセス解析レポート（月1回）'], target: '層' },
      { id: 'platinum', name: 'プラチナ', priceMonthly: 3000, includes: ['ブログ化・記事投稿サポート'], target: '層' },
    ],
    options: ['追加更新：999円/回'],
    annualContractPerk: { title: '通年契約特典', items: ['最初の3ヶ月無料'], note: '' },
    taxNote: '※価格は税込です',
  },
}));

describe('Pricing Component', () => {
  it('renders production, monthly, and options blocks', () => {
    render(<Pricing />);
    expect(screen.getByText('制作プラン（買い切り）')).toBeInTheDocument();
    expect(screen.getByText('月額プラン（維持・更新）')).toBeInTheDocument();
    expect(screen.getByText('オプション & 通年契約特典')).toBeInTheDocument();
  });

  it('renders 3 production cards and 3 monthly cards', () => {
    render(<Pricing />);
    expect(screen.getAllByRole('button', { name: /このプランで相談する/ })).toHaveLength(3);
    expect(screen.getAllByRole('button', { name: /この月額で相談する/ })).toHaveLength(3);
  });
});


