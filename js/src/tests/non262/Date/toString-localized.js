// |reftest| skip-if(xulRuntime.OS=="WINNT"||!this.hasOwnProperty("Intl")) -- Windows doesn't accept IANA names for the TZ env variable; Requires ICU time zone support

// Date.prototype.toString includes a localized time zone name comment.

inTimeZone("Europe/Paris", () => {
    let dt = new Date(2018, Month.July, 14);

    withLocale("en", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0200 (Central European Summer Time)", "CEST");
    });
    withLocale("fr", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0200 (heure d’été d’Europe centrale)", "CEST");
    });
    withLocale("de", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)", "CEST");
    });
    withLocale("ar", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0200 (توقيت وسط أوروبا الصيفي)", "CEST");
    });
    withLocale("zh", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0200 (中欧夏令时间)", "CEST");
    });
});

inTimeZone("America/Los_Angeles", () => {
    let dt = new Date(2018, Month.July, 14);

    withLocale("en", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT-0700 (Pacific Daylight Time)", "PDT");
    });
    withLocale("fr", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT-0700 (heure d’été du Pacifique)", "PDT");
    });
    withLocale("de", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT-0700 (Nordamerikanische Westküsten-Sommerzeit)", "PDT");
    });
    withLocale("ar", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT-0700 (توقيت المحيط الهادي الصيفي)", "PDT");
    });
    withLocale("zh", () => {
        assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT-0700 (北美太平洋夏令时间)", "PDT");
    });
});

for (let tz of ["UTC", "UCT", "Zulu", "Universal", "Etc/UTC", "Etc/UCT", "Etc/Zulu", "Etc/Universal"]) {
    inTimeZone(tz, () => {
        let dt = new Date(2018, Month.July, 14);

        withLocale("en", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (Coordinated Universal Time)", "UTC");
        });
        withLocale("fr", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (Temps universel coordonné)", "UTC");
        });
        withLocale("de", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (Koordinierte Weltzeit)", "UTC");
        });
        withLocale("ar", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (التوقيت العالمي المنسق)", "UTC");
        });
        withLocale("zh", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (协调世界时)", "UTC");
        });
    });
}

for (let tz of ["GMT", "Etc/GMT"]) {
    inTimeZone(tz, () => {
        let dt = new Date(2018, Month.July, 14);

        withLocale("en", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (Greenwich Mean Time)", "GMT");
        });
        withLocale("fr", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (heure moyenne de Greenwich)", "GMT");
        });
        withLocale("de", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (Mittlere Greenwich-Zeit)", "GMT");
        });
        withLocale("ar", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (توقيت غرينتش)", "GMT");
        });
        withLocale("zh", () => {
            assertDateTime(dt, "Sat Jul 14 2018 00:00:00 GMT+0000 (格林尼治标准时间)", "GMT");
        });
    });
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
