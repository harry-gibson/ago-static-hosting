﻿define(
   ({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Žemėlapio sukurti nepavyko",
      general: "Klaida"
    }
  },
  tools:{
    time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      datePattern: "yyyy MMMM dd",
      yearPattern: "yyyy",
      hourTimePattern: "H a",
      minuteTimePattern: "HH:mm",
      secondTimePattern: "hh:m:s.SSS",
      millisecondTimePattern:"h:m:ss.SSS a",
      timeRange: "Nuo ${start_time} iki ${end_time}",
      timeRangeSingle: "<b>Laiko intervalas:</b> ${time}"
    },
    legend: {
      label: "Legenda",
      layerMessage: "Darbinių sluoksnių nėra"
    }
  }
})
);
