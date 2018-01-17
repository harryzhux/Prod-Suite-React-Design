import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu, Icon } from 'antd';

const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const prod = props.product;
    delete props.product;
    const navData = prod.menu;
    const navChildren = Object.keys(navData).map((key, i) => (<Item key={i} onClick={window.location='#nc#'+navData[key].text}>
      {navData[key].text} <Icon type={navData[key].icon} />
    </Item>));
    const userTitle = (<div>
      <span className="img">
        <img
          src="https://avatars.slack-edge.com/2017-09-01/235243519715_4cf1dea48f028a6a3507_192.jpg"
          width="30"
          height="30"
        />
      </span>
      <span>User <Icon type="bars" /></span>
    </div>);
    navChildren.push((<Item className="help" key="help">
        <span>Help <Icon type="question-circle-o" /></span>
      </Item>),
      (<SubMenu className="user" title={userTitle} key="user">
        <Item key="a">Settings</Item>
        <Item key="b">Profile</Item>
        <Item key="c">Logout</Item>
      </SubMenu>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <div><img width="20%" src={`/images/rtda_icon.png`} /> {prod.name}™</div>
      </TweenOne>
      {isMode ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              defaultSelectedKeys={['0']}
              mode="inline"
              theme="dark"
            >
              {navChildren}
            </Menu>
          </div>
        </div>) :
        <TweenOne
          animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className={`${this.props.className}-nav`}
        >
          <Menu
            mode="horizontal" defaultSelectedKeys={['0']}
            id={`${this.props.id}-menu`}
          >
            {navChildren}
          </Menu>
        </TweenOne>
      }
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  isMode: PropTypes.bool,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;
