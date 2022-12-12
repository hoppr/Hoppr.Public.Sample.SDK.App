# Hoppr SDK Sample app

## Install Tizen TV studio
Click [here](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html) to setup Tizen studio with the following packages:

1. 6.5 Mobile -> Web app development
1. 6.5 Mobile -> advanced -> Web app development
1. Tizen SDK native cli , native IDE , web CLI , web IDE ,
1. Tizen SDK tools -> Baseline SDK -> Certificate Manager and Emulator manager
1. Extension SDK (the other tab) -> TvExtensions 6.5 and Samsung certificate extension and TV extensions tools

## Clone

Close this repo using the command below:
```
git clone https://github.com/hoppr/Hoppr.Sample.SDK.App.git
```
## Run the app
Follow those steps to run the sample app:
1. Open the project in tizen studio
1. Right click on the project name (Sample - tv-samsung-6.5)
1. In the menu, go to Run as
1. Click Tizen web simulator application (Samsung TV)

## Setup the ad
Once you have setup the ads in the warren, you can change the app ID /API key in the code to point at your app ID / API key.
The app ID can be find within the ```<header>``` of the page (ex: tab1.html, tab2.html, etc.).

Change this line with your own app ID: ```hopprtv.init('f3a3e74f-a436-4bed-aeb8-a51314ce8ebc', 'f3db2794-0a82-4c84-ab78-88b913d3e9e4', '11111');```
  
## Documentation
Click [here](https://hoppr.atlassian.net/wiki/spaces/~62f47c0e5111209f4fe1096f/pages/1767833624/HopprTV+JS+SDK+Documentationl) to access our SDK documentation.

## Required privileges

In your config.xml you might need to add the following permissions:

- ```<access origin="*" subdomains="true"></access>``` - To allow cross origin access

- ```<tizen:privilege name="http://tizen.org/privilege/internet"/>``` - To allow internet connection in the app

- ```<tizen:privilege name="http://tizen.org/privilege/application.launch"/>``` - To allow deep link interactive ad