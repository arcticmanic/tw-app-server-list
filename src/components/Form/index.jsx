import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const { currentServer } = useSelector((state) => state.CURRENT_DATA);

  const {
    customer_id: customerId,
    server_name: serverName,
    server_type: serverType,
  } = currentServer;

  const handleInputChange = ({target}) => {
    console.log(target);
  };

  const handleSelectChange = ({target}) => {
    console.log(target);
  };

  const handleSaveClick = ({target}) => {
    console.log(target);
  };

  const handleResetClick = ({target}) => {
    console.log(target);
  };

  return (
    <div className="leading-loose w-full">
      <form className="max-w-xl m-auto p-10 bg-white rounded shadow-xl">
        <div className="text-gray-800 font-medium">Server information</div>
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
        <div className="mt-3">
          <label className="block text-sm mb-2" htmlFor="server_name">
            Server name
          </label>
          <input
            className="w-full px-5 py-4 h-16 text-gray-700 bg-gray-200 rounded"
            id="server_name"
            name="server_name"
            type="text"
            required="required"
            placeholder="Server name"
            aria-label="Server name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-3">
          <label className="block text-sm mb-2" htmlFor="server_type">
            Server type
          </label>
          <select
            className="w-full px-5 py-4 h-16 text-gray-700 bg-gray-200 rounded"
            required="required"
            name="server_type"
            id="server_type"
            onChange={handleSelectChange}
          >
            <option value="null" disabled>
              Choose server type
            </option>
            <option value="1">Server 1</option>
            <option value="2">Server 2</option>
            <option value="3">Server 3</option>
            <option value="4">Server 4</option>
          </select>
        </div>
        <div className="flex mt-3">
          <button
            className="mr-5"
            type="button"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form
