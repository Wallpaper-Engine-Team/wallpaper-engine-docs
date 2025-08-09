---
prev: ../../reference.md
---

# SceneScript Event applyGeneralSettings

This event allows you to access various Wallpaper Engine settings and utilize them in some way in your wallpaper. The most useful option is the `language` key, as it allows you to access the current Wallpaper Engine user interface language. You can adjust on-screen text or date formatting to fit your users preferences.

::: danger Before you get started
Please respect users' wishes for their app setup. Do not place text elements in your wallpaper to ask users to change their app settings. Wallpapers should work on any setup.
:::

This event function will be called under two circumstances:

* It will be called once initially when the wallpaper is loaded.
* It will be called each time the user adjusts a general app setting.

```js
export function applyGeneralSettings(generalSettings) {

}
```

The parameter `applyGeneralSettings` will contain certain setting keys. You can access properties via `applyGeneralSettings.keyname`, where `keyname` is the option key that you want to access.

 ::: warning Important
  After the initial wallpaper load event, the parameters will only contain settings with changes. For this reason, it is crucial that you check which value is being sent with the current event. We recommend using the `hasOwnProperty()` function for this. See the language sample below as an example.
:::


## Supported General Settings

The event supports the following settings and their corresponding keys:

* `language`: The current language key (string).

::: details Click here to view the full language list

These are all language codes that are currently supported by Wallpaper Engine:

* `ar-sa`: Arabic (Saudi Arabia)
* `be-by`: Belarusian (Belarus)
* `bg-bg`: Bulgarian (Bulgaria)
* `cs-cz`: Czech (Czech Republic)
* `da-dk`: Danish (Denmark)
* `de-de`: German (Germany)
* `el-gr`: Greek (Greece)
* `en-us`: English (United States)
* `es-es`: Spanish (Spain)
* `eu-es`: Basque (Spain)
* `fa-ir`: Persian (Iran)
* `fi-fi`: Finnish (Finland)
* `fr-fr`: French (France)
* `he-il`: Hebrew (Israel)
* `hu-hu`: Hungarian (Hungary)
* `id-id`: Indonesian (Indonesia)
* `it-it`: Italian (Italy)
* `ja-jp`: Japanese (Japan)
* `ko-kr`: Korean (South Korea)
* `lt-lt`: Lithuanian (Lithuania)
* `nb-no`: Norwegian Bokmål (Norway)
* `nl-nl`: Dutch (Netherlands)
* `pl-pl`: Polish (Poland)
* `pt-br`: Portuguese (Brazil)
* `pt-pt`: Portuguese (Portugal)
* `ro-ro`: Romanian (Romania)
* `ru-ru`: Russian (Russia)
* `sk-sk`: Slovak (Slovakia)
* `sl-si`: Slovenian (Slovenia)
* `sv-se`: Swedish (Sweden)
* `th-th`: Thai (Thailand)
* `tr-tr`: Turkish (Turkey)
* `uk-ua`: Ukrainian (Ukraine)
* `vi-vn`: Vietnamese (Vietnam)
* `zh-chs`: Chinese (Simplified)
* `zh-cht`: Chinese (Traditional)
:::

* `fps`: The max FPS setting (int).
* `iconopacity`: The current icon opacity setting (int).
* `mediaintegration`: Enable Media integration setting (bool).
* `msaa`: Anti-aliasing setting (string). Possible values: `none`, `x2`, `x4`, `x8`.
* `postprocessing`: The post-processing quality setting (string). Possible values: `disabled`, `enabled`, `ultra`, `displayhdr`.
* `reflection`: The reflection option (bool).
* `shadows`: The shadow quality setting. Possible values: `disabled`, `low`, `medium`, `high`, `ultra`.
* `volumetrics`: The volumetrics quality setting. Possible values: `disabled`, `low`, `medium`, `high`, `ultra`.
* `konami`: Checks if the **k0n4m1** achievement easter egg has been unlocked on the current system (bool).

## Language-specific behavior

One especially useful key is the `language` key, as it allows you to customize behavior and introduce some basic translations and localizations to your wallpaper.

If you want to focus on a specific language, a simple `applyGeneralSettings` event might look like this, just replace `en-us` with the language key of your choice:

```js
export function applyGeneralSettings(generalSettings) {
        if (generalSettings.hasOwnProperty('language')) {
            if (generalSettings.language === 'en-us') {
              // Special logic for English users
            } else {
              // All other languages
            }
        }
}
```

The following code snippet is an full example that allows you to define custom logic for every language that is currently supported by Wallpaper Engine. You can remove any languages that you do not wish to support. **Please note:** Make sure you always end on a final `else` block that defines some standard behavior (typically English). This is important since new languages might be added in the future and if your wallpaper does not define logic for a certain language, it might break:

```js
export function applyGeneralSettings(generalSettings) {
        if (generalSettings.hasOwnProperty('language')) {
            if (generalSettings.language === 'ar-sa') {
              // Language: Arabic / العربية
            } else if (generalSettings.language === 'be-by') {
              // Language: Belarusian / Беларуская
            } else if (generalSettings.language === 'bg-bg') {
              // Language: Bulgarian / Български
            } else if (generalSettings.language === 'cs-cz') {
              // Language: Czech / Čeština
            } else if (generalSettings.language === 'da-dk') {
              // Language: Danish / Dansk
            } else if (generalSettings.language === 'de-de') {
              // Language: German / Deutsch
            } else if (generalSettings.language === 'el-gr') {
              // Language: Greek / Ελληνικά
            } else if (generalSettings.language === 'es-es') {
              // Language: Spanish / Español
            } else if (generalSettings.language === 'eu-es') {
              // Language: Basque / Euskara
            } else if (generalSettings.language === 'fa-ir') {
              // Language: Persian / فارسی
            } else if (generalSettings.language === 'fi-fi') {
              // Language: Finnish / Suomi
            } else if (generalSettings.language === 'fr-fr') {
              // Language: French / Français
            } else if (generalSettings.language === 'he-il') {
              // Language: Hebrew / עברית
            } else if (generalSettings.language === 'hu-hu') {
              // Language: Hungarian / Magyar
            } else if (generalSettings.language === 'id-id') {
              // Language: Indonesian / Bahasa Indonesia
            } else if (generalSettings.language === 'it-it') {
              // Language: Italian / Italiano
            } else if (generalSettings.language === 'ja-jp') {
              // Language: Japanese / 日本語
            } else if (generalSettings.language === 'ko-kr') {
              // Language: Korean / 한국어
            } else if (generalSettings.language === 'lt-lt') {
              // Language: Lithuanian / Lietuvių
            } else if (generalSettings.language === 'nb-no') {
              // Language: Norwegian Bokmål / Norsk bokmål
            } else if (generalSettings.language === 'nl-nl') {
              // Language: Dutch / Nederlands
            } else if (generalSettings.language === 'pl-pl') {
              // Language: Polish / Polski
            } else if (generalSettings.language === 'pt-br') {
              // Language: Portuguese (Brazil) / Português (Brasil)
            } else if (generalSettings.language === 'pt-pt') {
              // Language: Portuguese (Portugal) / Português (Portugal)
            } else if (generalSettings.language === 'ro-ro') {
              // Language: Romanian / Română
            } else if (generalSettings.language === 'ru-ru') {
              // Language: Russian / Русский
            } else if (generalSettings.language === 'sk-sk') {
              // Language: Slovak / Slovenčina
            } else if (generalSettings.language === 'sl-si') {
              // Language: Slovenian / Slovenščina
            } else if (generalSettings.language === 'sv-se') {
              // Language: Swedish / Svenska
            } else if (generalSettings.language === 'th-th') {
              // Language: Thai / ไทย
            } else if (generalSettings.language === 'tr-tr') {
              // Language: Turkish / Türkçe
            } else if (generalSettings.language === 'uk-ua') {
              // Language: Ukrainian / Українська
            } else if (generalSettings.language === 'vi-vn') {
              // Language: Vietnamese / Tiếng Việt
            } else if (generalSettings.language === 'zh-chs') {
              // Language: Chinese (Simplified) / 中文 (简体)
            } else if (generalSettings.language === 'zh-cht') {
              // Language: Chinese (Traditional) / 中文 (繁體)
            } else {
              // Fallback Language: English
              // Always fall back to English in this final block in case new languages get added in the future
            }
        }
}
```