# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code (claude.ai/code) へのガイダンスを提供します。

## よく使うコマンド

| コマンド | 目的 |
|---------|------|
| `npm run dev` | localhost:3000で開発サーバーを起動 |
| `npm run build` | プロダクション版サイトを./dist/にビルド |
| `npm run preview` | プロダクション版ビルドをローカルでプレビュー |

## アーキテクチャ概要

microCMSをヘッドレスCMSとして統合したAstroベースのポートフォリオブログサイトです。

### 主要な統合
- **microCMS**: ブログコンテンツとアバウトページコンテンツのヘッドレスCMS
- **Tailwind CSS**: スタイリング用のユーティリティファーストCSSフレームワーク
- **TypeScript**: 厳密な型チェックが有効
- **Partytown**: Webワーカー最適化によるGoogle Analytics統合

### コンテンツ管理
- ブログ投稿はmicroCMS API (`src/library/microcms.ts`) から取得
- サイトは環境変数 `MICROCMS_SERVICE_DOMAIN` と `MICROCMS_API_KEY` を使用
- コンテンツタイプ: `Blog` (ブログ投稿) と `About` (アバウトページコンテンツ)

### サイト構造
- `[...slug].astro` によるブログ投稿ページの動的ルーティング
- 静的ページ: index (ブログ一覧)、about
- ブログ投稿のRSSフィード生成
- サイトマップの自動生成

### スタイリングアプローチ
- レスポンシブデザインによるグリッドベースレイアウト (モバイル1列、デスクトップ3列)
- カスタムホバーエフェクトとツールチップ
- 黒いボーダーと幾何学的デザイン要素
- object-containサイズ指定による画像サムネイル

### 環境要件
- microCMSの認証情報を環境変数で設定する必要があります
- サイトURLは astro.config.mjs で 'https://hajimemath.com' として設定