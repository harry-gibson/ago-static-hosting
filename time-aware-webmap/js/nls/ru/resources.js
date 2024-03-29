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
      error: "Не удалось создать карту"
    },
    legend:{
      title: "Легенда"
    },
    share: {
      title: "Опубликовать"
    },
    about: {
      title: "О приложении",
      error: "По умолчанию используется описание веб-карты или подсказка. Настройте приложение и добавьте пользовательское краткое описание на панель О."
    },
    time: {
        enableTimeMessage: "Указанная веб-карта не содержит слоев с информацией о времени. Дополнительные сведения см. в разделе справки <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Настройка параметров времени</a>. Чтобы использовать шаблон без отображения времени, настройте панель и отключите опцию времени.",
        datePattern: "MMMM d, yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "h:mm:ss",
        minuteTimePattern: "h:mm",
        secondTimePattern: "h:mm:ss",
        timeRange: "${startTime} до ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Нет слоёв с информацией о времени в режиме снимка, они доступны в веб-карте. Настройте приложение для использования другой веб-карты или отключите опцию гистограммы."
    }
  })
);