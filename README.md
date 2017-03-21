 Url Shortener Api
 =============
 [![CircleCI](https://circleci.com/gh/imie-short-url/url-shortener-api.svg?style=shield)](https://circleci.com/gh/imie-short-url/url-shortener-api) 
 
 This api provide service for sharing shortener urls
 
 ##Install
```
    git clone git@github.com:imie-short-url/url-shortener-api.git
    npm intall
```

  ##Tests
  
 All features are validated by units tests.
```
    npm test
```
 
 
  ##API Routes
  
| METHOD | URL  | PARAMS  | RESPONSE  | need JWT |
|---|---|---|---| ---|
|POST| /user/register | {email: STRING, password: STRING} | {success: true} / {success: false, message:'error message'}|false|
|POST| /user/login | {email: STRING, password: STRING} | {success: true, token: tokenJWT'} / {success: false, message:'error message'}|false|
|GET| /user/:id| {} | {urls:[ {url:'http://domain.net', shortcode:'a53rT9'}]}|true|
|POST| /url | {url:'http://domain.net'} | {success: true} / {success: false, message:'error message'} |true|
|DELETE| /url/:id| {} | {success: true} / {success: false, message:'error message'} |true|
|GET | /:shortCode | {} | {url:'http://domain.net'} | false |
 
 

 
