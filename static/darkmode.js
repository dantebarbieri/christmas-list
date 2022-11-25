/**
 * Copyright 2019 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */

(() => {
    // if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
    //     // alert('Your browser does not support the `prefers-color-scheme` media query.');
    // }

    const manifests = document.querySelectorAll('link[rel="manifest"]');
    const favicons = document.querySelectorAll('link[rel="icon"]');

    const setTheme = (query) => {
        const lightModeOn = query.matches;
        manifests.forEach((link) => {
            link.href = lightModeOn ? link.dataset.hrefLight : link.dataset.hrefDark;
        });
        favicons.forEach((link) => {
            link.href = lightModeOn ? link.dataset.hrefLight : link.dataset.hrefDark;
        });
    };

    let query = window.matchMedia('(prefers-color-scheme: light)');
    query.onchange = setTheme;
    setTheme(query);
})();