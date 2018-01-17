import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import ProductBanner from './ProductBanner';
import '../../assets/less/products/products_style.less';

class ProductCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      show: !location.port,
    };
  }

  componentDidMount() {
    // suitable for mobile screen
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
    // dva 2.0 module dynamic loading after component mounting，results in rolling componet disabling; not affect online part
    if (location.port) {
      // module build time between 200-300ms;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <ProductBanner id="rtdaprod" key="rtdaprod" isMode={this.state.isMode} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}

export default ProductCatalog;
