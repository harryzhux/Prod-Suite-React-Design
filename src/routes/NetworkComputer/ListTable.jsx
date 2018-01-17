import React from 'react';
import { Table } from 'antd';
import InfoModal from './InfoModal';

class ListTable extends React.Component {
  render () {
    const props = { ...this.props };
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <InfoModal title={text} />,
      },
      {
        title: 'Result',
        dataIndex: 'result',
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={props.data}
        showHeader={false}
        rowSelection={null}
	pagination={props.pagination}
      />
    );
  }
}

export default ListTable;
