﻿/*global define */
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
define(
   ({
    map: {
      error: "Karte kann nicht erstellt werden"
    },
    legend:{
      title: "Legende"
    },
    share: {
      title: "Freigeben"
    },
    about: {
      title: "Informationen zu",
      error: "Die Beschreibung oder der Ausschnitt der Webkarte wird standardmäßig verwendet. Konfigurieren Sie die App, um einen benutzerdefinierten Abschnitt für das Fenster \"Info\" hinzuzufügen."
    },
    time: {
        enableTimeMessage: "Die angegebene Webkarte enthält keine Layer mit aktivierten Zeiteigenschaften. Weitere Informationen finden Sie im Hilfethema <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Konfigurieren von Zeiteinstellungen</a>. Um die Vorlage ohne Zeitanzeige zu verwenden, deaktivieren Sie die Zeitoption im Fenster \"Konfiguration\".",
        datePattern: "d. MMMM yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "H:mm:ss",
        minuteTimePattern: "H:mm",
        secondTimePattern: "H:mm:ss",
        timeRange: "${startTime} bis ${endTime}",
        yearPattern: "JJJJ"
    },
    histogram:{
      error: "In der Webkarte sind keine Feature-Layer mit aktivierten Zeiteigenschaften im Snapshot-Modus verfügbar. Konfigurieren Sie die App, um eine andere Webkarte zu verwenden, oder deaktivieren Sie die Histogramm-Option."
    }
  })
);