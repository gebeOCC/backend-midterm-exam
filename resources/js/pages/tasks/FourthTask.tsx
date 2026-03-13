import React from 'react'

export default function FourthTask() {
    return (
        <div className="border border-red-200 bg-red-50/40 rounded-lg overflow-hidden">
            <div className="bg-red-100/50 px-5 py-3 border-b border-red-200 flex items-center gap-3">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    TASK 4
                </span>
                <h4 className="text-base font-bold text-red-900">Delete</h4>
            </div>
            <div className="p-5">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Implement the delete functionality directly from the main list view. After a successful deletion, you must refresh the list to show the updated data.
                </p>
                <h5 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Action Items:</h5>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 mb-2 ml-1">
                    <li>Complete the <code>handleDelete(id)</code> function in <strong><code>index.tsx</code></strong>.</li>
                    <li>Send an Axios <code>DELETE</code> request to the API using the specific item <code>id</code>.</li>
                    <li>
                        Upon successful deletion, call the <strong><code>getGroceries()</code></strong> function again to refetch the data and update the UI automatically.
                    </li>
                </ul>
            </div>
        </div>
    )
}