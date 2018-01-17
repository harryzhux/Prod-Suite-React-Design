import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import InfoModal from './InfoModal';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content5',
  };

  getBlockChildren = (item, i) =>
    (<li
      key={i}
      id={`${this.props.id}-block${i}`}
    >
      <span>
        <img src={item.img} width="100%" />
      </span>
      <h2><InfoModal title={item.title} /></h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const dataSource = [
      {
        img: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        title: 'Who',
        content: 'List of job owners'
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
        title: 'Job Statistics',
        content: 'short description of the report'
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title: 'Slave Load',
        content: 'short description of the report'
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title: 'Something',
        content: 'short description of the report'
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
        title: 'Resource Statistics',
        content: 'short description of the report' },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title: 'My Jobs',
        content: 'short description of the report'
      },
    ];
    const ulChildren = dataSource.map(this.getBlockChildren);
    delete props.isMode;
    const queue = isMode ? 'bottom' : 'left';
    const imgAnim = isMode ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className="content-template-wrapper content5-wrapper">
        <a href="#Reports" className="anchor"></a>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
            <h1
              key="h1"
              id={`${props.id}-title`}
            >
              Reports
            </h1>
            <QueueAnim
              component="ul"
              key="ul" type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyleBool
          >
            <img width="100%" src="https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
