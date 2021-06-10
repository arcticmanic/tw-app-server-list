import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem';
import { getServers } from '../../store/data/selectors';

const List = () => {
  const { servers } = useSelector(getServers);

  return (
    <section className="flex flex-col p-4 w-full md:w-1/3 overflow-y-scroll max-w-xl max-h-96 m-auto bg-white rounded shadow-xl">
      <ul>
        {servers.map((server, id) => (
          <ListItem key={id} server={server} />
        ))}
      </ul>
    </section>
  );
};

export default List;
