// Content constants for geneb landing page
// Mode: portfolio | corporate | app

export type Mode = 'portfolio' | 'corporate' | 'app';

// Common pricing structure
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  revisions?: number;
  deliveryDays?: number;
}

// Common content structure
interface ContentConfig {
  meta: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  worksOrUseCases: {
    title: string;
    subtitle: string;
    type: 'works' | 'useCases' | 'screenshots';
    items: Array<{
      title: string;
      description: string;
      image?: string;
      category?: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  flow: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export const SITE_CONFIG = {
  brand: 'geneb',
  primaryClaim: 'AI制作で速く、安く、本気のLPを。',
  commonNote:
    'genebはBolt + Cursorを活用し、短納期・低コストで納品します。安さの理由はAI効率化による作業時間の短縮です。',
  contactUrl:
    process.env.NEXT_PUBLIC_CONTACT_URL || 'https://forms.gle/example',
  formEmbedCode: process.env.NEXT_PUBLIC_FORM_EMBED_CODE || '',
  taxNote: process.env.NEXT_PUBLIC_TAX_NOTE || '※価格は税込です',
  // Common pricing notes
  pricingNotes: {
    revisions: '修正回数',
    deliveryDays: '納期',
    taxNote: process.env.NEXT_PUBLIC_TAX_NOTE || '※価格は税込です',
  },
};

// Utility function for generating CTA links
export const generateCTALink = (mode: Mode, section?: string) => {
  const baseUrl = SITE_CONFIG.contactUrl;
  const params = new URLSearchParams({
    mode,
    ...(section && { section }),
  });
  return `${baseUrl}?${params.toString()}`;
};

// Utility function for generating aria-label
export const generateAriaLabel = (
  mode: Mode,
  action: string,
  section?: string
) => {
  const modeLabels = {
    portfolio: 'ポートフォリオ',
    corporate: 'コーポレートサイト',
    app: 'アプリ',
  };
  return `${modeLabels[mode]}の${action}${section ? `（${section}）` : ''}`;
};

export const MODE_CONTENT: Record<Mode, ContentConfig> = {
  portfolio: {
    meta: {
      title: '最短3日、AIで作るあなたの未来のポートフォリオ | geneb',
      description:
        '就活・インターンに間に合う、AI制作のポートフォリオ。学生向け価格で高品質なポートフォリオを最短3日で納品。',
      ogTitle: '最短3日、AIで作るあなたの未来のポートフォリオ',
      ogDescription:
        '就活・インターンに間に合う、AI制作のポートフォリオ。学生向け価格で高品質なポートフォリオを最短3日で納品。',
    },
    hero: {
      headline: '最短3日、AIで作るあなたの未来のポートフォリオ',
      subheadline: '就活・インターンに、今すぐ間に合う。',
      cta: 'ポートフォリオを相談する',
    },
    features: {
      title: 'なぜ学生に選ばれるのか',
      items: [
        {
          title: 'AI制作で爆速',
          description: '従来の1/3の時間で高品質なポートフォリオを制作',
          icon: 'Zap',
        },
        {
          title: '学生向け価格',
          description: '学生でも手が届く価格設定。分割払いも相談可能',
          icon: 'GraduationCap',
        },
        {
          title: 'スマホ対応',
          description: 'PC・タブレット・スマホで美しく表示される設計',
          icon: 'Smartphone',
        },
        {
          title: '独自ドメイン対応',
          description: 'あなただけのURLでプロフェッショナルな印象を',
          icon: 'Globe',
        },
      ],
    },
    worksOrUseCases: {
      title: '制作実績',
      subtitle: '学生の皆様から高い評価をいただいています',
      type: 'works',
      items: [
        {
          title: 'Webデザイナー志望の学生',
          description: 'デザインスキルをアピールするポートフォリオ',
          image: '/works/portfolio-1.jpg',
          category: 'デザイン',
        },
        {
          title: 'エンジニア志望の学生',
          description: '技術スキルとプロジェクト実績を紹介',
          image: '/works/portfolio-2.jpg',
          category: 'エンジニア',
        },
        {
          title: 'マーケター志望の学生',
          description: '分析力と企画力を表現するポートフォリオ',
          image: '/works/portfolio-3.jpg',
          category: 'マーケティング',
        },
      ],
    },
    pricing: {
      title: '料金プラン',
      subtitle: '学生でも手が届く価格設定',
      plans: [
        {
          name: 'Basic',
          price: '29,800',
          period: '円',
          description: 'シンプルで美しいポートフォリオ',
          features: [
            'レスポンシブデザイン',
            '独自ドメイン対応',
            'SEO対策',
            '3ページ構成',
          ],
          revisions: 2,
          deliveryDays: 3,
        },
        {
          name: 'Standard',
          price: '49,800',
          period: '円',
          description: 'より充実したポートフォリオ',
          features: [
            'Basicの全機能',
            'アニメーション効果',
            'ブログ機能',
            '5ページ構成',
            'SNS連携',
          ],
          highlighted: true,
          revisions: 3,
          deliveryDays: 5,
        },
        {
          name: 'Premium',
          price: '79,800',
          period: '円',
          description: '最高品質のポートフォリオ',
          features: [
            'Standardの全機能',
            'カスタムデザイン',
            'CMS機能',
            '10ページ構成',
            '分析ツール連携',
            '優先サポート',
          ],
          revisions: 5,
          deliveryDays: 7,
        },
      ],
    },
    flow: {
      title: '制作フロー',
      subtitle: '3つのステップで完成',
      steps: [
        {
          title: 'ヒアリング',
          description: 'あなたの希望を詳しくお聞かせください',
          icon: 'MessageSquare',
        },
        {
          title: '制作',
          description: 'AIを活用して最短3日で制作',
          icon: 'Zap',
        },
        {
          title: '納品',
          description: '修正を重ねて完成度を高めます',
          icon: 'CheckCircle',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: '本当に3日で完成しますか？',
          answer:
            'はい、AIを活用することで従来の1/3の時間で制作可能です。ただし、修正回数によっては期間が延びる場合があります。',
        },
        {
          question: '学生でも分割払いできますか？',
          answer:
            'はい、学生の皆様には柔軟な支払いプランをご提案しています。詳しくはお問い合わせください。',
        },
        {
          question: '修正は何回まで可能ですか？',
          answer:
            'プランによって2回〜5回まで修正可能です。追加修正も別途料金で対応いたします。',
        },
        {
          question: '独自ドメインは含まれていますか？',
          answer: 'はい、すべてのプランに独自ドメインが含まれています。',
        },
      ],
    },
  },
  corporate: {
    meta: {
      title: 'AI制作で速く、安く、本気のコーポレートサイト | geneb',
      description:
        '運用できるLP（計測/OGP/速度）とA/Bテスト前提のコーポレートサイトをAI制作で短納期・低コストで納品。',
      ogTitle: 'AI制作で速く、安く、本気のコーポレートサイト',
      ogDescription:
        '運用できるLP（計測/OGP/速度）とA/Bテスト前提のコーポレートサイトをAI制作で短納期・低コストで納品。',
    },
    hero: {
      headline: 'AI制作で速く、安く、本気のコーポレートサイト',
      subheadline: '運用できるLP（計測/OGP/速度）とA/Bテスト前提',
      cta: 'コーポレートサイトを相談する',
    },
    features: {
      title: 'なぜ企業に選ばれるのか',
      items: [
        {
          title: 'AI制作で爆速',
          description: '従来の1/3の時間で高品質なコーポレートサイトを制作',
          icon: 'Zap',
        },
        {
          title: '運用できるLP',
          description: '計測・OGP・速度を考慮した運用しやすい設計',
          icon: 'BarChart3',
        },
        {
          title: 'A/Bテスト前提',
          description: '継続的な改善を前提とした設計と実装',
          icon: 'TestTube',
        },
        {
          title: 'SEO対策済み',
          description: '検索エンジン最適化で集客力を最大化',
          icon: 'Search',
        },
      ],
    },
    worksOrUseCases: {
      title: '制作実績',
      subtitle: '様々な業界の企業様からご依頼いただいています',
      type: 'works',
      items: [
        {
          title: 'IT企業のコーポレートサイト',
          description: '技術力をアピールするモダンなデザイン',
          image: '/works/corporate-1.jpg',
          category: 'IT',
        },
        {
          title: '製造業のコーポレートサイト',
          description: '信頼性と品質を表現するデザイン',
          image: '/works/corporate-2.jpg',
          category: '製造業',
        },
        {
          title: 'サービス業のコーポレートサイト',
          description: '親しみやすさと専門性を両立したデザイン',
          image: '/works/corporate-3.jpg',
          category: 'サービス業',
        },
      ],
    },
    pricing: {
      title: '料金プラン',
      subtitle: '企業様のニーズに合わせた柔軟なプラン',
      plans: [
        {
          name: 'Starter',
          price: '198,000',
          period: '円',
          description: '小規模企業向けのコーポレートサイト',
          features: [
            'レスポンシブデザイン',
            'SEO対策',
            'Google Analytics連携',
            '5ページ構成',
            'お問い合わせフォーム',
          ],
          revisions: 3,
          deliveryDays: 7,
        },
        {
          name: 'Business',
          price: '398,000',
          period: '円',
          description: '中規模企業向けのコーポレートサイト',
          features: [
            'Starterの全機能',
            'A/Bテスト対応',
            'OGP最適化',
            '10ページ構成',
            'ブログ機能',
            'SNS連携',
          ],
          highlighted: true,
          revisions: 5,
          deliveryDays: 14,
        },
        {
          name: 'Enterprise',
          price: '798,000',
          period: '円',
          description: '大規模企業向けのコーポレートサイト',
          features: [
            'Businessの全機能',
            'カスタムCMS',
            '多言語対応',
            '20ページ構成',
            '社内システム連携',
            '専任サポート',
          ],
          revisions: 10,
          deliveryDays: 21,
        },
      ],
    },
    flow: {
      title: '制作フロー',
      subtitle: '5つのステップで完成',
      steps: [
        {
          title: 'ヒアリング',
          description: '企業様の課題と目標を詳しくお聞かせください',
          icon: 'MessageSquare',
        },
        {
          title: '企画・設計',
          description: '戦略的なサイト構成とデザインを提案',
          icon: 'Layout',
        },
        {
          title: '制作',
          description: 'AIを活用して効率的に制作',
          icon: 'Zap',
        },
        {
          title: 'テスト・修正',
          description: '品質チェックと修正を重ねて完成度を高めます',
          icon: 'TestTube',
        },
        {
          title: '納品・運用サポート',
          description: '運用方法をご説明し、継続的なサポートを提供',
          icon: 'CheckCircle',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: 'A/Bテストはどのように実装されますか？',
          answer:
            'Google OptimizeやVWOなどのツールを使用して、継続的な改善が可能な設計で実装いたします。',
        },
        {
          question: 'SEO対策はどの程度まで行いますか？',
          answer:
            '技術的SEO、コンテンツSEO、ローカルSEOまで包括的に対応いたします。',
        },
        {
          question: '運用サポートは含まれていますか？',
          answer:
            'プランによって異なりますが、基本的な運用サポートは含まれています。詳細はお問い合わせください。',
        },
        {
          question: 'CMSはどのようなものを使用しますか？',
          answer:
            'WordPress、Strapi、Next.js CMSなど、ご要望に応じて最適なCMSをご提案いたします。',
        },
      ],
    },
  },
  app: {
    meta: {
      title: 'AI制作で速く、安く、本気のアプリ | geneb',
      description:
        'MVP→拡張のロードマップで、権限/データ件数/連携を考慮したアプリをAI制作で短納期・低コストで納品。',
      ogTitle: 'AI制作で速く、安く、本気のアプリ',
      ogDescription:
        'MVP→拡張のロードマップで、権限/データ件数/連携を考慮したアプリをAI制作で短納期・低コストで納品。',
    },
    hero: {
      headline: 'AI制作で速く、安く、本気のアプリ',
      subheadline: 'MVP→拡張のロードマップで、あなたのアイデアを形に',
      cta: 'アプリを相談する',
    },
    features: {
      title: 'なぜアプリ開発に選ばれるのか',
      items: [
        {
          title: 'AI制作で爆速',
          description: '従来の1/3の時間で高品質なアプリを開発',
          icon: 'Zap',
        },
        {
          title: 'MVP→拡張',
          description: '最小限の機能から始めて、段階的に機能を拡張',
          icon: 'Rocket',
        },
        {
          title: '権限・データ考慮',
          description: 'セキュリティとパフォーマンスを考慮した設計',
          icon: 'Shield',
        },
        {
          title: '連携対応',
          description: '外部APIやサービスとの連携も柔軟に対応',
          icon: 'Link',
        },
      ],
    },
    worksOrUseCases: {
      title: '開発実績',
      subtitle: '様々なジャンルのアプリを開発しています',
      type: 'screenshots',
      items: [
        {
          title: 'SaaSアプリケーション',
          description: '企業向けの業務効率化ツール',
          image: '/works/app-1.jpg',
          category: 'SaaS',
        },
        {
          title: 'モバイルアプリ',
          description: 'ユーザー向けの便利なツール',
          image: '/works/app-2.jpg',
          category: 'モバイル',
        },
        {
          title: 'Webアプリケーション',
          description: 'ブラウザで動作するアプリ',
          image: '/works/app-3.jpg',
          category: 'Web',
        },
      ],
    },
    pricing: {
      title: '料金プラン',
      subtitle: 'アプリの規模に応じた柔軟なプラン',
      plans: [
        {
          name: 'MVP',
          price: '298,000',
          period: '円',
          description: '最小限の機能でアイデアを形に',
          features: [
            '基本機能の実装',
            'レスポンシブ対応',
            '基本的な認証機能',
            'データベース設計',
            'デプロイ環境構築',
          ],
          revisions: 3,
          deliveryDays: 14,
        },
        {
          name: 'Standard',
          price: '598,000',
          period: '円',
          description: '本格的なアプリケーション',
          features: [
            'MVPの全機能',
            '高度な認証・権限管理',
            '外部API連携',
            'リアルタイム機能',
            'プッシュ通知',
            '分析機能',
          ],
          highlighted: true,
          revisions: 5,
          deliveryDays: 28,
        },
        {
          name: 'Enterprise',
          price: '1,298,000',
          period: '円',
          description: '大規模アプリケーション',
          features: [
            'Standardの全機能',
            'マイクロサービス構成',
            '高可用性設計',
            'セキュリティ監査',
            'CI/CDパイプライン',
            '専任サポート',
          ],
          revisions: 10,
          deliveryDays: 60,
        },
      ],
    },
    flow: {
      title: '開発フロー',
      subtitle: '6つのステップで完成',
      steps: [
        {
          title: '要件定義',
          description: 'アプリの目的と機能を詳しく定義',
          icon: 'FileText',
        },
        {
          title: '設計',
          description: 'アーキテクチャとUI/UXを設計',
          icon: 'Layout',
        },
        {
          title: 'MVP開発',
          description: '最小限の機能でプロトタイプを開発',
          icon: 'Zap',
        },
        {
          title: 'テスト・改善',
          description: 'ユーザビリティテストと改善を実施',
          icon: 'TestTube',
        },
        {
          title: '機能拡張',
          description: 'フィードバックを基に機能を拡張',
          icon: 'Rocket',
        },
        {
          title: 'リリース・運用',
          description: '本番環境へのリリースと運用サポート',
          icon: 'CheckCircle',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: 'MVPから本格的なアプリへの拡張は可能ですか？',
          answer:
            'はい、MVPの設計段階から拡張を考慮した設計を行います。段階的な機能追加が可能です。',
        },
        {
          question: '権限管理はどのように実装されますか？',
          answer:
            'RBAC（ロールベースアクセス制御）を採用し、ユーザーの役割に応じた権限管理を実装いたします。',
        },
        {
          question: 'データ件数の制限はありますか？',
          answer:
            'プランによって異なりますが、スケーラブルな設計で大量データにも対応可能です。',
        },
        {
          question: '外部サービスとの連携は可能ですか？',
          answer:
            'はい、API連携やWebhookなど、様々な外部サービスとの連携に対応いたします。',
        },
        {
          question: 'セキュリティ対策はどの程度行いますか？',
          answer:
            'OWASP Top 10を基準としたセキュリティ対策を実装し、必要に応じてセキュリティ監査も実施いたします。',
        },
      ],
    },
  },
};

// Get current mode from environment variable
export const getCurrentMode = (): Mode => {
  const mode = process.env.NEXT_PUBLIC_MODE as Mode;
  return mode && ['portfolio', 'corporate', 'app'].includes(mode)
    ? mode
    : 'portfolio';
};

export const getCurrentContent = (): ContentConfig => {
  return MODE_CONTENT[getCurrentMode()];
};

// Pricing model for LP (制作プラン/月額プラン/オプション/通年契約特典)
export const pricing = {
  production: [
    {
      id: 'light',
      name: 'ライト（学生向け）',
      regularPrice: 5000,
      campaignPrice: 3000,
      features: [
        '1〜2ページ（自己紹介・プロジェクトリスト）',
        'テンプレートベース',
        'スマホ対応',
        '完成後の修正2回まで',
      ],
      target: '学生・ポートフォリオ用途',
      note: 'キャンペーン適用中',
    },
    {
      id: 'middle',
      name: 'ミドル（個人事業主向け）',
      regularPrice: 50000,
      campaignPrice: 29800,
      features: [
        '3〜5ページ（TOP/サービス紹介/問い合わせ）',
        'デザインカスタマイズあり',
        '問い合わせフォーム設置',
        '完成後修正3回まで',
      ],
      target: '個人事業主・フリーランス',
      note: 'キャンペーン適用中',
    },
    {
      id: 'premium',
      name: 'プレミアム（学生起業家・小規模スタートアップ向け）',
      regularPrice: 100000,
      campaignPrice: 70000,
      features: [
        '5〜10ページ（TOP/サービス詳細/採用ページなど）',
        '完全オリジナルデザイン',
        '問い合わせ＋簡易CMS導入',
        '基本的なSEO設定',
        '完成後修正5回まで',
      ],
      target: '学生起業家・小規模スタートアップ・NPO',
      note: 'キャンペーン適用中',
    },
  ],
  monthly: [
    {
      id: 'silver',
      name: 'シルバー',
      priceMonthly: 499,
      includes: [
        'サーバー保守、SSL維持、トラブル対応',
        '更新代行なし（オプション利用可）',
      ],
      options: ['追加更新：999円/回', 'まとめ更新（3箇所まで）：700円/回'],
      target: 'ポートフォリオ利用者・コスト最小層',
    },
    {
      id: 'gold',
      name: 'ゴールド',
      priceMonthly: 1200,
      includes: [
        'サーバー保守、SSL維持、トラブル対応',
        '月1回までの更新代行',
        'アクセス解析レポート（月1回）',
      ],
      target: '毎月更新が必要な個人事業主',
    },
    {
      id: 'platinum',
      name: 'プラチナ',
      priceMonthly: 3000,
      includes: [
        'サーバー保守、SSL維持、トラブル対応',
        '月3回までの更新代行',
        'ブログ化・記事投稿サポート',
        '個人事業サイトへの転用・拡張の相談込み',
      ],
      target: 'フリーランス志望者・学生起業家・小規模スタートアップ',
    },
  ],
  options: [
    '追加更新：999円/回',
    'まとめ更新（3箇所まで）：700円/回',
    'WordPress導入：＋30,000円',
    '簡易CMS導入＋Notion連携：＋20,000円',
  ],
  annualContractPerk: {
    title: '通年契約特典',
    items: ['最初の3ヶ月、月額費用が無料', '追加更新料 1回無料'],
    note: '※シルバー/ゴールド/プラチナ いずれかの通年契約が対象',
  },
  taxNote: process.env.NEXT_PUBLIC_TAX_NOTE || '※表示価格は税込です',
};
