import React from 'react';
import enquire from 'enquire.js';

import Nav from '../../components/Nav';
import Content0 from './Content0';
import Footer from '../../components/Footer';

import '../../assets/less/he/he_style.less';
import Products from '../ProductCatalog/Products.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // suitable for mobile screen;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
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
    const porder = 5;
    const product = Products[porder];
    const children = [
      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode} product={product} />,
      <Content0 id="content_2_0" key="content_2_0" isMode={this.state.isMode} product={product} />,
      <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
