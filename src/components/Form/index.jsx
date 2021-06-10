import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setServerName, setServerType } from '../../store/current-data/actions';
import { updateServer } from '../../store/data/actions';
import { getCurrentServer } from '../../store/current-data/selectors';

import './Form.css';

const Form = () => {
  const { currentServer } = useSelector(getCurrentServer);
  const dispatch = useDispatch();
  const serverForm = useRef();

  const {
    customer_id: customerId,
    server_name: serverName,
    server_type: serverType,
  } = currentServer;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const inputField = serverForm.current.querySelector('#server_name');
    const selectField = serverForm.current.querySelector('#server_type');

    dispatch(setServerName(inputField.value));
    dispatch(setServerType(selectField.value));
    dispatch(
      updateServer({
        customer_id: customerId,
        server_name: inputField.value,
        server_type: selectField.value,
      })
    );
  };

  return (
    <div className="leading-loose w-full">
      <form
        className="max-w-xl m-auto p-10 bg-white rounded shadow-xl"
        ref={serverForm}
        onSubmit={handleFormSubmit}
      >
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
          >
            <option value="">Choose server type</option>
            <option value="vds">vds</option>
            <option value="dedicated">dedicated</option>
            <option value="hosting">hosting</option>
          </select>
        </div>
        <div className="flex mt-3">
          <button className="button mr-5" type="submit">
            Save
          </button>
          <button className="button" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
