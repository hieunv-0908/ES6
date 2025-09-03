import React from 'react'

export default function Position() {
  return (
    <div className="relative bg-sky-100 w-[300px] h-[200px] rounded-lg p-4">
      <span className="absolute top-2 left-2 text-sky-900 font-medium">
        Relative parent
      </span>
      <button className="absolute bottom-2 left-2 bg-sky-500 text-white font-semibold px-3 py-1 rounded-lg shadow-md">
        Absolute child
      </button>
    </div>
  )
}
