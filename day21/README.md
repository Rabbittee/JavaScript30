# day 21

### 開發上的前提

https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only

```
從 Google Chrome 50 版開始，一些在 HTML5 上的 Web APIs 將會需要使用來源為 HTTPS 才可以讓執行的功能正常運作。
被影響的 APIs 包含：Geolocation、Fullscreen、Device motion 以及 Device orientation。
```

[MDN Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

雖然在localhost的開發上可以避免，但如果相關的功能需要透過手機進行測試，則就無法正常運作，<br>
會觸發`GeolocationPositionError`錯誤，[錯誤代碼為1, PERMISSION_DENIED](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError#properties)

所以我們必須在針對local開發上也能具有HTTPS

使用mkcert進行https簽證，相關流程請參考<br>
https://web.dev/i18n/en/how-to-use-local-https/


## 使用範例

#### serve
```zsh
serve --ssl-cert "[YOUR_PATH]/example.com+5.pem" --ssl-key "[YOUR_PATH]/example.com+5-key.pem"
```

#### VS Code Live Server
```json
"liveServer.settings.donotVerifyTags": true,
"liveServer.settings.donotShowInfoMsg": true,
"liveServer.settings.https": {
    "enable": true, //set it true to enable the feature.
    "cert": "[YOUR_PATH]/example.com+5.pem", //full path
    "key": "[YOUR_PATH]/example.com+5-key.pem", //full path
}
```


#### 相關連結
- https://github.com/vercel/serve
- https://github.com/FiloSottile/mkcert


## Links

- [吠吠](https://rabbittee.github.io/JavaScript30/day21/haha/)
- [凱文](https://rabbittee.github.io/JavaScript30/day21/kevin/)
- [哈囉](https://rabbittee.github.io/JavaScript30/day21/kirby/)
- [奶捲](https://rabbittee.github.io/JavaScript30/day21/recoil/)
