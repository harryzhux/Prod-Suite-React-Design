import React from 'react';
import enquire from 'enquire.js';

import Nav from '../../components/Nav';
import WorkloadContainer from './WorkloadContainer';
import SlavesContainer from './SlavesContainer';
import ResourcesContainer from './ResourcesContainer';
import ReportsContainer from './ReportsContainer';
import SettingsContainer from './SettingsContainer';
import Footer from '../../components/Footer';
//import Point from './Point';

import '../../assets/less/nc/nc_style.less';
import Products from '../ProductCatalog/Products.js';
//import FloatingCard from './FloatingCard';

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
    const porder = 3;
    const product = Products[porder];
    const children = [
      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode} product={product} />,
      <WorkloadContainer id="content_2_0" key="content_2_0" isMode={this.state.isMode} product={product} />,
      <SlavesContainer id="content_3_0" key="content_3_0" isMode={this.state.isMode} />,
      <ResourcesContainer id="content_9_0" key="content_9_0" isMode={this.state.isMode} />,
      <ReportsContainer id="content_7_0" key="content_7_0" isMode={this.state.isMode} />,
      <SettingsContainer id="content_4_0" key="content_4_0" isMode={this.state.isMode} />,
      <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />,
      // Not include Nav and Footer，if needed, add them;
      //<Point key="list" ref="list" data={['content_2_0', 'content_3_0', 'content_4_0', 'content_10_0', 'content_9_0', 'content_5_0', 'content_6_0', 'content_7_0', 'content_8_0']} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
