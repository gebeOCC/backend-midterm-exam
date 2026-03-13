import React from 'react';

export default function ThirdTask() {
    return (
        <div className="border border-yellow-200 bg-yellow-50/40 rounded-lg overflow-hidden">
            <div className="bg-yellow-100/50 px-5 py-3 border-b border-yellow-200 flex items-center gap-3">
                <span className="bg-yellow-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    TASK 3
                </span>
                <h4 className="text-base font-bold text-yellow-900">Update (PATCH / PUT)</h4>
            </div>

            <div className="p-5">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Allow users to edit an existing grocery item. You must first fetch the current data from the API to pre-fill the form, then send the updated values back to the server using the <code>id</code>.
                </p>

                <h5 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Action Items:</h5>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-1">
                    <li>
                        Capture the <code>id</code> parameter from the URL using <code>useLocalSearchParams()</code>.
                    </li>
                    <li>
                        Complete the <code>getGroceryDetails()</code> function inside <strong><code>update/[id].tsx</code></strong> to fetch the specific item's data.
                    </li>
                    <li>
                        Update the state variables with the fetched data so the <code>&lt;TextInput&gt;</code> fields are pre-filled when the screen loads.
                    </li>
                    <li>
                        Complete the <code>updateGrocery()</code> function to send an Axios <code>PATCH</code> or <code>PUT</code> request to the backend.
                    </li>
                    <li>
                        Upon a successful update, redirect the user back to the Home screen to see the changes.
                    </li>
                </ul>
            </div>
        </div>
    );
}