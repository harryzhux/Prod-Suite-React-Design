import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const props = { ...this.props };
    const date = new Date();
    const year = date.getFullYear();
    delete props.isMode;
    return (<OverPack
      {...props}
      playScale={0.05}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span id={`${props.id}-content`}>
          Copyright © {year} <a href="https://runtimeinc.com" target="_blank"><img width="1%" src="/images/rtda_icon.png" />Runtime Design Automation</a> - An <a href="http://www.altair.com" target="_blank"><img width="1%" src="/images/altair_icon.png" />Altair Engineering</a> Company.<br />All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
