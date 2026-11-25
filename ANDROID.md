# Android版のビルド

元のReact画面、Node.js API、共有コード、DB定義を保持したまま、CapacitorのAndroidアプリを追加しています。画面と端末内記録はアプリに同梱されます。

## APIとログイン

AIの返答、文字起こし、手紙生成、クラウド保存、共有リンクには、元のNode.js APIをHTTPSで公開しておく必要があります。`.env.android.example` を `.env.android` にコピーし、APIのURL、アプリID、OAuthポータルURLを設定してください。`.env.android` はGit対象外です。

Android版のAPI接続先は `https://APIホスト/api/trpc` です。データベースとAI/音声ストレージの環境変数は既存サーバー側に設定します。Android WebViewのローカルURLへOAuthコールバックを戻せないため、ログイン・共有は実際のOAuthプロバイダーに対応したネイティブ用リダイレクトURI/Deep Link設定が別途必要です。設定しない場合、端末内記録を利用できますが、ログイン依存機能は利用できません。

## ビルド手順（Windows）

- Node.js 20以降、Android Studio、Android SDK（API 24以上）をインストールします。
- `pnpm install`
- `.env.android` を設定します。
- `pnpm android:sync`
- `pnpm android:open` でAndroid Studioから実機・エミュレーターへインストールできます。

デバッグAPKはAndroid StudioのBuildメニューから生成できます。Google Play配布用は署名付きAABを作成してください。

## Android権限

録音時にマイク権限を要求します。Android 6以降は初回録音時にOSの許可ダイアログが表示されます。写真選択はシステムファイル選択画面を使います。
