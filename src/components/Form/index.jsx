import React from 'react'

const Form = () => {
  return (
    <div className="leading-loose w-full">
      <form className="max-w-xl m-auto p-10 bg-white rounded shadow-xl">
        <p className="text-gray-800 font-medium">Server information</p>
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
            <option value="1">Server 1</option>
            <option value="2">Server 2</option>
            <option value="3">Server 3</option>
            <option value="4">Server 4</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
