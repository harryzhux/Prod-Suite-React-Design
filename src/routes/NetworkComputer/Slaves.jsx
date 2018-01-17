import React from 'react';
import ListTable from './ListTable';

class Slaves extends React.Component {
  render () {
    const data = [
      {
        key: 'sl1',
        name: 'Total slots',
        result: 10,
        address: '#totalslots',
      },
      {
        key: 'sl2',
        name: 'Overloaded',
        result: 4,
        address: '#overloaded',
      },
      {
        key: 'sl3',
        name: 'Full',
        result: 8,
        address: '#full',
      },
      {
        key: 'sl4',
        name: 'Working',
        result: 4,
        address: '#working',
      },
      {
        key: 'sl5',
        name: 'Ready',
        result: 3,
        address: '#ready',
      },
      {
        key: 'sl6',
        name: 'Not Responding',
        result: 0,
        address: '#notresponding',
      },
      {
        key: 'sl7',
        name: 'Suspended',
        result: 0,
        address: '#suspended',
      },
    ];

    return (
      <ListTable data={data} pagination={false} />
    );
  }
}

export default Slaves;
