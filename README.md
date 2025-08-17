# geneb Landing Page

AI制作で速く、安く、本気のLPを提供するgenebのランディングページです。

## 技術スタック

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: Vercel

## 機能

- 3つのモード対応（portfolio, corporate, app）
- 動的OGP画像生成
- Google Analytics 4対応
- SEO最適化（メタデータ、構造化データ）
- レスポンシブデザイン
- アクセシビリティ対応

## 環境変数

以下の環境変数を設定してください：

```env
# 基本設定
NEXT_PUBLIC_MODE=portfolio|corporate|app
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# お問い合わせフォーム
NEXT_PUBLIC_CONTACT_URL=https://forms.gle/your-form-url
NEXT_PUBLIC_FORM_EMBED_CODE=<iframe src="..."></iframe>

# 価格設定
NEXT_PUBLIC_TAX_NOTE=※価格は税込です

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 開発環境のセットアップ

1. リポジトリをクローン
```bash
git clone <repository-url>
cd geneb-landing-page
```

2. 依存関係をインストール
```bash
npm install
```

3. 環境変数を設定
```bash
cp .env.example .env.local
# .env.localを編集して必要な環境変数を設定
```

4. 開発サーバーを起動
```bash
npm run dev
```

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用ビルド
- `npm run start` - 本番サーバーを起動
- `npm run lint` - ESLintでコードチェック
- `npm run lint:fix` - ESLintでコードを自動修正
- `npm run type-check` - TypeScriptの型チェック
- `npm run format` - Prettierでコードフォーマット
- `npm run format:check` - Prettierでフォーマットチェック
- `npm run preview` - ビルドしてプレビューサーバーを起動

## Vercelでのデプロイ

### 1. Vercelプロジェクトの作成

1. [Vercel](https://vercel.com)にログイン
2. "New Project"をクリック
3. GitHubリポジトリを選択
4. プロジェクト名を設定（例：`geneb-landing-page`）

### 2. 環境変数の設定

Vercelダッシュボードで以下の環境変数を設定：

- `NEXT_PUBLIC_MODE` - 表示モード（portfolio/corporate/app）
- `NEXT_PUBLIC_SITE_URL` - サイトのURL
- `NEXT_PUBLIC_CONTACT_URL` - お問い合わせフォームのURL
- `NEXT_PUBLIC_FORM_EMBED_CODE` - 埋め込みフォームのHTML
- `NEXT_PUBLIC_TAX_NOTE` - 価格に関する注記
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analyticsの測定ID
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Consoleの検証コード

### 3. デプロイ設定

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. カスタムドメインの設定

1. Vercelダッシュボードでプロジェクトを選択
2. "Settings" → "Domains"をクリック
3. カスタムドメインを追加
4. DNSレコードを設定

## プレビューURL承認フロー

### 開発環境での確認

1. ローカルで開発サーバーを起動
```bash
npm run dev
```

2. ブラウザで `http://localhost:3000` にアクセス

3. 各モードでの表示を確認
   - `http://localhost:3000?mode=portfolio`
   - `http://localhost:3000?mode=corporate`
   - `http://localhost:3000?mode=app`

### 本番環境での確認

1. Vercelでデプロイが完了したら、プレビューURLを確認
2. 各モードでの表示を確認
3. OGP画像の生成を確認（`/api/og`）
4. Google Analyticsの動作を確認

## 品質チェック

### Lighthouse スコア目標

- Performance: 90+
- SEO: 90+
- Best Practices: 90+
- Accessibility: 90+

### レスポンシブ確認

以下の端末での表示を確認：

- iPhone SE (375px)
- Pixel 7 (412px)
- iPad (768px)
- Desktop (1440px)

## トラブルシューティング

### よくある問題

1. **OGP画像が生成されない**
   - `@vercel/og`パッケージがインストールされているか確認
   - Edge Runtimeが有効になっているか確認

2. **Google Analyticsが動作しない**
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`が正しく設定されているか確認
   - ブラウザのコンソールでエラーがないか確認

3. **環境変数が読み込まれない**
   - 環境変数名が`NEXT_PUBLIC_`で始まっているか確認
   - Vercelで環境変数が正しく設定されているか確認

## 貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## やったことリスト

- [x] 設計の整備
  - [x] 定数ファイルの改善（mode別の設定を構造化）
  - [x] 共通コンポーネントの追加（Container/Section）
  - [x] CTAリンク生成ユーティリティの実装
  - [x] 価格・修正回数・納期の定数化

- [x] SEO/メタ/OGP
  - [x] 動的メタデータの設定
  - [x] 動的OGP画像生成APIの実装
  - [x] JSON-LD構造化データの追加
  - [x] h1/h2/h3の階層構造の改善

- [x] パフォーマンス/UX
  - [x] next/imageの統一
  - [x] next/fontの設定
  - [x] CLS対策の実装

- [x] トラッキング/運用
  - [x] Google Analytics 4の導入
  - [x] 404/500エラーページの実装
  - [x] フォーム埋め込みの安全化

- [x] ビルド/デプロイ
  - [x] package.json scriptsの整備
  - [x] Prettierの設定
  - [x] READMEの作成

## 残タスク

- [ ] ESLint + Prettierの追加/整備
- [ ] TypeScript strict設定の有効化
- [ ] テストの追加（@testing-library/react）
- [ ] PRテンプレートの作成
- [ ] Lighthouse レポートの出力
- [ ] 代表端末でのレスポンシブ確認
- [ ] OGPプレビューの確認
