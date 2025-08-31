---
prev: ../../reference.md
---

# SceneScript Event applyGeneralSettings

This event allows you to access the Wallpaper Engine general settings and utilize them in your wallpaper. This primarily allows you to access the `language` key, providing you access to the current Wallpaper Engine user interface language. You can adjust on-screen text, date formatting or perform other localizations to fit your users preferences.

This event function will be called under two circumstances:

* It will be called once initially when the wallpaper is loaded.
* It will be called each time the user adjusts a general app setting.

```js
export function applyGeneralSettings(generalSettings) {

}
```

The parameter `applyGeneralSettings` will contain the language key. You can access properties via `applyGeneralSettings.keyname`, where `keyname` is the option key that you want to access.

 ::: warning Important
  After the initial wallpaper load event, the parameters will only contain settings with changes. For this reason, it is crucial that you check which value is being sent with the current event. We recommend using the `hasOwnProperty()` function for this. See the language sample below as an example. **In the future, more values may become available in this function, so it is absolutely crucial that you add this check, otherwise your wallpaper might break with a future update.**
:::

## Language-specific behavior

You can access the `language` key to customize behavior and introduce some basic translations and localizations to your wallpaper.

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

The following code snippet is a full example that allows you to define custom logic for every language that is currently supported by Wallpaper Engine. You can remove any languages that you do not wish to support. **Please note:** Make sure you always end on a final `else` block that defines some standard behavior (typically English). This is important since new languages might be added in the future and if your wallpaper does not define logic for a certain language, it might break:

```js
export function applyGeneralSettings(generalSettings) {
    if (generalSettings.hasOwnProperty('language')) {
        switch (generalSettings.language) {
            case 'ar-sa':
                // Language: Arabic / العربية
                break;
            case 'be-by':
                // Language: Belarusian / Беларуская
                break;
            case 'bg-bg':
                // Language: Bulgarian / Български
                break;
            case 'cs-cz':
                // Language: Czech / Čeština
                break;
            case 'da-dk':
                // Language: Danish / Dansk
                break;
            case 'de-de':
                // Language: German / Deutsch
                break;
            case 'el-gr':
                // Language: Greek / Ελληνικά
                break;
            case 'es-es':
                // Language: Spanish / Español
                break;
            case 'eu-es':
                // Language: Basque / Euskara
                break;
            case 'fa-ir':
                // Language: Persian / فارسی
                break;
            case 'fi-fi':
                // Language: Finnish / Suomi
                break;
            case 'fr-fr':
                // Language: French / Français
                break;
            case 'he-il':
                // Language: Hebrew / עברית
                break;
            case 'hu-hu':
                // Language: Hungarian / Magyar
                break;
            case 'id-id':
                // Language: Indonesian / Bahasa Indonesia
                break;
            case 'it-it':
                // Language: Italian / Italiano
                break;
            case 'ja-jp':
                // Language: Japanese / 日本語
                break;
            case 'ko-kr':
                // Language: Korean / 한국어
                break;
            case 'lt-lt':
                // Language: Lithuanian / Lietuvių
                break;
            case 'nb-no':
                // Language: Norwegian Bokmål / Norsk bokmål
                break;
            case 'nl-nl':
                // Language: Dutch / Nederlands
                break;
            case 'pl-pl':
                // Language: Polish / Polski
                break;
            case 'pt-br':
                // Language: Portuguese (Brazil) / Português (Brasil)
                break;
            case 'pt-pt':
                // Language: Portuguese (Portugal) / Português (Portugal)
                break;
            case 'ro-ro':
                // Language: Romanian / Română
                break;
            case 'ru-ru':
                // Language: Russian / Русский
                break;
            case 'sk-sk':
                // Language: Slovak / Slovenčina
                break;
            case 'sl-si':
                // Language: Slovenian / Slovenščina
                break;
            case 'sv-se':
                // Language: Swedish / Svenska
                break;
            case 'th-th':
                // Language: Thai / ไทย
                break;
            case 'tr-tr':
                // Language: Turkish / Türkçe
                break;
            case 'uk-ua':
                // Language: Ukrainian / Українська
                break;
            case 'vi-vn':
                // Language: Vietnamese / Tiếng Việt
                break;
            case 'zh-chs':
                // Language: Chinese (Simplified) / 中文 (简体)
                break;
            case 'zh-cht':
                // Language: Chinese (Traditional) / 中文 (繁體)
                break;
            default:
                // Fallback Language: English
                // Always fall back to English in this final block in case new languages get added in the future
                break;
        }
    }
}
```