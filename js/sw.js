'use strict';

importScripts('/js/sw-toolbox.js');

toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});