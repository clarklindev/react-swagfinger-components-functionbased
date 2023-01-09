import { Table } from './Table';

export const TableExample = () => {
  const configure = {
    padding: 'p-5',
  };
  const HEADERS = [
    { title: 'year', width: 150, alignHeader: 'left', alignContent: 'left' },
    {
      title: 'artist',
      width: 150,
      alignHeader: 'left',
      alignContent: 'left',
    },
    { title: 'song', width: 300, alignHeader: 'left', alignContent: 'left' },
  ];

  const DATA = [
    {
      year: 2003,
      artist: 'Kanlam',
      song: 'Extended dynamic paradigm',
    },
    {
      year: 2003,
      artist: 'Subin',
      song: 'Focused even-keeled ability',
    },
    {
      year: 1999,
      artist: 'Alpha',
      song: 'Organic directional projection',
    },
  ];

  return <Table headers={HEADERS} data={DATA} configure={configure}></Table>;
};
