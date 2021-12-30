'use strict';

import _ from 'lodash';
import PropTypes from 'prop-types';
import Vizceral from 'vizceral-react';

class CustomVizceral extends Vizceral {
  constructor(props) {
    super(props);

    this.state = {
      styles: {}
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.styles) {
      if (this.shouldStylesUpdate(nextProps.styles)) {
        this.setState({ styles: nextProps.styles });
        //console.log(nextProps.styles)
        // this.vizceral.updateStyles({
        //   colorTraffic: {
        //     normal: '#5396CD',
        //   },
        //   colorPageBackground: '#326CE5',
        // });
        this.vizceral.updateStyles({ colorTraffic: nextProps.styles });
        this.refreshNodes();
      }
    }
    return true;
  }

  refreshNodes() {
    if (!(this.vizceral.currentGraph && this.vizceral.currentGraph.nodes)) {
      return;
    }
    _.map(this.vizceral.currentGraph.nodes, (value) => {
      if (value.view) {
        value.view.refresh(true);
      }
    });
  }

  shouldStylesUpdate(styles) {
    const currentKeys = Object.keys(this.state.styles).sort();
    const newKeys = Object.keys(styles).sort();

    if (currentKeys.toString() === newKeys.toString()) {
      return false;
    }

    return !_.every(newKeys, key => styles[key] === this.state.styles[key]);
  }
}

CustomVizceral.propTypes = {
  styles: PropTypes.object
};

export default CustomVizceral;
