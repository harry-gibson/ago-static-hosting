/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  //Default configuration settings for the application. This is where you'll define things like a bing maps key,
  //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
  "appid": "",
  "webmap": "a653a1852cdb43f1a65a38a572c23b1a",
  "oauthappid": null, //"AFTKRmv16wj14N3z",
  //Group templates must support a group url parameter. This will contain the id of the group.
  "group": "",
  //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
  //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  "proxyurl": "",
  "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
  //Defaults to arcgis.com. Set this value to your portal or organization host name.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  // "sharinghost": location.protocol + "//" + "oxforduni.maps.arcgis.com",
  "units": null,
  "time": true,
  //Overwrite the calculated date time format with a custom value. 
  "datetimeformat": "yyyy",//"MMMM d yyyy, h:m:s.SSS a",
  //Disable slider ticks when true
  "sliderticks":false, //display slider tics
  "looptime": false,//loop through time 
  "autoplay": false, //auto play the slider when app starts 
  "sliderrate": 2000, //rate at which time slider plays in milliseconds.
  "noslider":false, //hide slider and play controls and just show time
  "timenav": true, //When true show the time navigation (next previous arrows)
  //position time container. Valid values are  bottom-right, 
  //bottom-left, bottom-center. 
  "timeposition":"top-right",
  "panelbackground": "#575757", //panel and title bar background color as hex value
  "panelcolor":"#FFF", //text color as hex value 
  "timecolor": "#a8a8a8", //#007AC2 //color for play and slider controls
  "slidercolor": "#a8a8a8", //color for the slider bar on time slider
  "legend": true, //Add legend to map
    "legendposition": "top-left",
  "title": false, //add title
  "titletext": null, //specify title text 
  "logo": null, //Provide the url to a logo image 
  "logolink":null,//optionally provide link text for the logo image 
  "about":false, //Enable the about dialog
  //Define text that appears in the about dialog. If no text is specified the web map desc is used. 
  "abouttext": null,
  //Enable the social sharing dialog (email, facebook, twitter etc)
  "share":false,
  //Enable the map zoom slider 
  "zoomslider":true,
  //add the search tool 
  "search": false,
  "scale": true, //display a scale bar on the map 
  "helperServices": {
    "geometry": {
      "url": null
    },
    "printTask": {
      "url": null
    },
    "elevationSync": {
      "url": "http://ahn.arcgisonline.nl/arcgis/rest/services/Geoprocessing/Profile/GPServer/Profile"
    },
    "geocode": [{
      "url": null
    }]
  }
});
