import React from 'react';
import ListTable from './ListTable';

class Workload extends React.Component {
  render () {
    const data = [
      {
        key: 'wl1',
        name: 'Running jobs',
        result: 10,
        address: '#runningjobs',
      },
      {
        key: 'wl2',
        name: 'Jobs in queue',
        result: 42,
        address: '#jobsinqueue',
      },
      {
        key: 'wl3',
        name: 'Longest wait time',
        result: '21s',
        address: '#',
      },
      {
        key: 'wl4',
        name: 'Jobs/Hour',
        result: 32,
        address: '#jobshour',
      },
      {
        key: 'wl5',
        name: 'FairShare',
        result: 'On',
        address: '#fairshare',
      },
      {
        key: 'wl6',
        name: 'Preemption',
        result: '',
        address: '#preemption',
      },
      {
        key: 'wl7',
        name: 'Job classes',
        result: '',
        address: '#jobclasses',
      },
    ];

    return (
      <ListTable data={data} />
    );
  }
}

export default Workload;
