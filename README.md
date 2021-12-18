# Express API Example

Expressを使用した読書ログのAPIの実装例です。

[API入門動画](https://youtu.be/6_zIN-bByB4)の解説で使用しています。

## 機能

- 読んだ本の読書ログを記録できる
- 記録した読書ログを取得できる

## 起動方法

npmをインストールします。

```sh
npm install
```

サーバーを起動します。

```sh
node app.js
```

## APIの使用方法

### 読書ログを記録する

- メソッド: POST
- URI: http://localhost:3000/booklog
- パラメータ: name, text
- レスポンス: { "ok": true, "booklogs": { "name": "キングダム", "text": "熱い" }}
- エラー: { "ok": false, "error": "invalid parameter" }

### 読書ログの一覧を取得する

- メソッド: GET
- URI: https://api.example.com/booklog
- パラメータ: なし
- レスポンス: { "ok": true, "booklog": { 1: { "name": "キングダム", "text": "熱い" }}:
