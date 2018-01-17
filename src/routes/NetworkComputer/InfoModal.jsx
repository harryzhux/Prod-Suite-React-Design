import { Modal, Button } from 'antd';

class InfoModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  //      <Button type="primary" onClick={this.showModal}>
  //        Open
  //      </Button>
  render() {
    const props = { ...this.props };
    const { visible, loading } = this.state;
    return (
      <div>
        <a href="javascript:void(0)" onClick={this.showModal}>
          {props.title}
        </a>
        <Modal
          visible={visible}
          title={props.title}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" size="large" onClick={this.handleOk} loading={loading}>Export</Button>,
            <Button key="back" type="primary" size="large" onClick={this.handleCancel}>Close</Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default InfoModal;
