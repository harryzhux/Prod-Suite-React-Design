import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Workload from './Workload';
import FloatingCard from './FloatingCard';
import { Badge } from 'antd';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const product = props.product;
    delete props.isMode; // delete custom props so it will not pass into DOM
    delete props.product;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    const floatcards = [
      {
         key: 'fc1',
         title: 'Message Board',
         content: ['message line 1', 'message line 2', 'message line 3', 'message line 4'],
      },
      {
         key: 'fc2',
         title: 'My Recently Visited Sets',
         content: ['set 1', 'set 2', 'set 3'],
      },
      {
         key: 'fc3',
         title: 'My Recent Jobs',
         content: ['Job 1', 'Job 2', 'Job 3', 'Job 4', 'Job 5'],
      },
    ];
    const float_cards = floatcards.map( (item) => (<span key={item.key}><FloatingCard title={item.title} content={item.content} /> &nbsp; </span>) );

//  <a href="#">
//    <Badge count={5}>
//      <span className="head-example" />
//    </Badge>
//  </a>
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <a href="#Workload" className="anchor"></a>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          {float_cards}
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              Workload
            </h1>
            <div key="workload" id={`${props.id}-content`}>
              <Workload />
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
