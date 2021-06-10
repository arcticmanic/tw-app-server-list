import React from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentServer } from '../../store/current-data/actions';

const ListItem = ({server}) => {
  const {
    customer_id: customerId,
    server_name: serverName,
    server_type: serverType,
  } = server;
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(getCurrentServer(server));
  };

  return (
    <li className="flex items-center rounded shadow mb-3 py-5 border-b px-3 transition hover:bg-indigo-100">
      <div className="flex-grow">
        {customerId && (
          <div className="text-md text-gray-400">
            {customerId}{' '}
            <span className="italic text-xs text-gray-400 font-normal">
              (customer id)
            </span>
          </div>
        )}
        {serverName && (
          <div className="text-lg font-semibold">
            {serverName}{' '}
            <span className="italic text-xs text-gray-400 font-normal">
              (server name)
            </span>
          </div>
        )}
        {serverType && (
          <div className="text-md italic text-gray-400">
            {serverType}{' '}
            <span className="italic text-xs text-gray-400 font-normal">
              (server type)
            </span>
          </div>
        )}
      </div>
      <button
        className="h-5 w-5 d-flex"
        type="button"
        onClick={handleEditClick}
      >
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button className="h-5 w-5" type="button">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
};

export default ListItem;