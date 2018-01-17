import { Popover, Button } from 'antd';

class FloatingCard extends React.Component {
  render () {
    const props = { ...this.props };
    const content = (
      <div>
	{props.content.map((text, i) => (<p key={i}>{text}</p>))}
      </div>
    );

    return (
      <Popover content={content} title={props.title}>
        <Button type="primary">{props.title}</Button>
      </Popover>
    );
  }
}

export default FloatingCard;
