/* global process */

'use strict';

import 'bootstrap';
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './app.css';
import './bootstrap.css';
import TrafficFlow from './components/trafficFlow';

const meshAPI = process.env.IMESH_API || "http://127.0.0.1:9091/api/graph";
const interval = Number(process.env.INTERVAL) || 3000;
const maxReplayOffset = Number(process.env.MAX_REPLAY_OFFSET) || 10800;

function fontsActive() {
  ReactDOM.render(
    <TrafficFlow src={meshAPI} interval={interval} maxReplayOffset={maxReplayOffset} />,
    document.getElementById('traffic')
  );
}


// Only load the app once we have the webfonts.
// This is necessary since we use the fonts for drawing on Canvas'...

// imports are loaded and elements have been registered

WebFont.load({
  custom: {
    families: ['Source Sans Pro:n3,n4,n6,n7'],
    urls: ['/fonts/source-sans-pro.css']
  },
  active: fontsActive
});

