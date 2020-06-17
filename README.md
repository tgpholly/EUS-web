<p align="center">
  <img width="150" height="150" src="http://ethanus.ml/images/logo.png">
</p>
<p align="center">
  EUS-web is the current frontend of EUS, my public screenshot server.<br>
</p>
<p align="center">
  <a href="https://www.codefactor.io/repository/github/tgpethan/eus-web"><img src="https://www.codefactor.io/repository/github/tgpethan/eus-web/badge" alt="CodeFactor" /></a>
  <a src="https://discord.gg/BV8QGn6"><img src="https://img.shields.io/discord/477024246959308810?color=7289da&label=Discord&logo=discord&logoColor=ffffff"></a>
</p>

## Setup

EUS-web requires an installation of [EUS](https://github.com/tgpethan/EUS) to work, see the [EUS Setup guide](https://github.com/tgpethan/EUS#setup) for more details.
Once EUS is installed drop EUS-web's files into the EUS/files folder and it should show on the server.

## API Usage

EUS-web makes use of the EUS API and therefore can not be used without EUS.
The endpoints EUS-web makes use of are [/api/get-stats](https://ethanus.ml/api/get-stats) and [api/get-info](https://ethanus.ml/api/get-info)

## Adding pages

Along with making a new html file you will also need to add an entry to the buttons array in [navbarHelper.js](https://github.com/tgpethan/EUS-web/blob/master/js/navbarHelper.js).
When navbarHelper is initialised on a page you can define what page it is, this is used for highlighting which page you are on in the navbar.

For example the home page's initialiser looks like this
```
  <script>
      // Page initialiser
      navbar("Home");
      fetchStatsFromAPI();
  </script>
```
