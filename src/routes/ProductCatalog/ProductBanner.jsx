import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Products from './Products.js';

const BgElement = Element.BgElement;
class ProductBanner extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenData = Products;
    const childrenToRender = Products.map((item, i) => {
      const name = item.name;
      const description = item.tag;
      const url_go = '/#/'+item.shortname;
      const button_go = "Let's Go";
      const url_info = 'https://runtimeinc.com/'+name;
      const button_info = "Learn More";
      const title = '<img width="100%" src="/images/'+name+'-icon-red.png" />';
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${i}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${i}`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock${i}`}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <div
            className="pname"
            key="name"
            id={`${props.id}-nameBlock${i}`}
          >
            {name}™ 
          </div>
          <p
            key="content"
            id={`${props.id}-contentBlock${i}`}
          >
            {description}
          </p>
          <div>
            <Button
              type="ghost"
              key="button_info"
              id={`${props.id}-buttonInfoBlock${i}`}
              onClick={() => window.open(`${url_info}`, '_blank')}
            >
              {button_info}
            </Button>
            &nbsp;
            <Button
              type="ghost"
              key="button_go"
              id={`${props.id}-buttonGoBlock${i}`}
              onClick={() => window.location=`${url_go}`}
            >
              {button_go}
            </Button>
          </div>
        </QueueAnim>
      </Element>);
    });
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              key="banner"
              autoPlay
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

ProductBanner.propTypes = {
  className: PropTypes.string,
};

ProductBanner.defaultProps = {
  className: 'banner1',
};

export default ProductBanner;

