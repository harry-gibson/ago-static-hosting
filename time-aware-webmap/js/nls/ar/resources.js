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
      error: "يتعذر إنشاء الخريطة"
    },
    legend:{
      title: "مفتاح الخريطة"
    },
    share: {
      title: "مشاركة"
    },
    about: {
      title: "حول",
      error: "سيتم استخدام وصف أو قصاصة خريطة الويب افتراضيًا. قم بتكوين التطبيق لإضافة قصاصة مخصصة للوحة."
    },
    time: {
        enableTimeMessage: "لا تتضمن خريطة الويب المحددة أي طبقات مُمكنة زمنيًا. راجع موضوع تعليمات <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>تكوين الإعدادات الزمنية</a> لمزيد من التفاصيل. لاستخدام القالب بدون عرض الزمن تفضل باستخدام لوحة التكوين لتعطيل الخيار الزمني.",
        datePattern: "dd MMMM, yyyy",
        hourTimePattern: "h a",
        millisecondTimePattern: "h:mm:ss a",
        minuteTimePattern: "h:mm a",
        secondTimePattern: "h:mm:ss a",
        timeRange: "${startTime} إلى ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "لا توجد طبقات معالم مُمكنة زمنيًا، في وضع اللقطة، متاحة في خريطة الويب. قم بتكوين التطبيق لاستخدام خريطة ويب أخرى أو تعطيل خيار المدرج التكراري."
    }
  })
);