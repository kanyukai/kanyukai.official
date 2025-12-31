# 観友会 公式ホームページ

観友会 (kanyukai) の公式ウェブサイトです。

## 概要

観友会のサークル活動を紹介するホームページです。

### 主なコンテンツ

- **Activity** - 普段の活動紹介
- **Awards** - 大会実績
- **Invitation** - イベント・新歓情報
- **Information** - お知らせ・イベント情報
- **History** - 観友会の歴史

### ページ構成

| パス | 内容 |
|------|------|
| `/` | トップページ |
| `/Activities` | 活動一覧 |
| `/awards` | 大会実績一覧 |
| `/Information` | お知らせ |
| `/History` | 歴史 |

## 技術スタック

- **フレームワーク:** [Astro](https://astro.build/) v5
- **スタイリング:** Tailwind CSS, SCSS
- **CMS:** [microCMS](https://microcms.io/)
- **UIフレームワーク:** Preact, Solid.js
- **その他:** Swiper (スライダー)

## セットアップ

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. 環境変数の設定

`.env` ファイルをプロジェクトルートに作成し、microCMSの認証情報を設定してください。

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### 3. 開発サーバーの起動

```bash
pnpm dev
```

開発サーバーが起動したら、ブラウザで http://localhost:4321/kanyukai.official にアクセスしてください。

## その他のコマンド

| コマンド | 説明 |
|----------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 本番用にビルド |
| `pnpm preview` | ビルド結果をプレビュー |
| `pnpm format` | Prettierでコード整形 |

## デプロイ

GitHub Pages にデプロイされます。

- **URL:** https://kanyukai.github.io/kanyukai.official
