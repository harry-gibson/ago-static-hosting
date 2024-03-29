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
      error: "Kan ikke oprette kort"
    },
    legend:{
      title: "Signaturforklaring"
    },
    share: {
      title: "Del"
    },
    about: {
      title: "Om",
      error: "Som standard anvendes webkortbeskrivelsen eller snippet. Konfigurér app\'en for at tilføje en brugertilpasset snippet til panelet Om."
    },
    time: {
        enableTimeMessage: "Det angivne webkort indeholder ingen tidsafhængige lag. Se <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>hjælp-emnet Konfigurér tidsindstillinger</a> for yderligere oplysninger. For at bruge skabelonen uden at vise tid skal tidsindstillingen deaktiveres i konfigurationspanelet.",
        datePattern: "MMMM d, åååå",
        hourTimePattern: "H",
        millisecondTimePattern: "H:mm:ss",
        minuteTimePattern: "H:mm",
        secondTimePattern: "H:mm:ss",
        timeRange: "${startTime} til ${endTime}",
        yearPattern: "åååå"
    },
    histogram:{
      error: "Tidsaktiverede vektorlag i snapshot-tilstand er ikke tilgængelige i webkortet. Konfigurér app\'en for at anvende et andet webkort eller deaktivere histogramindstillingen."
    }
  })
);