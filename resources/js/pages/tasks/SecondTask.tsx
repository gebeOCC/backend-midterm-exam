import React from 'react'

export default function SecondTask() {
    return (
        <div className="border border-green-200 bg-green-50/40 rounded-lg overflow-hidden">
            <div className="bg-green-100/50 px-5 py-3 border-b border-green-200 flex items-center gap-3">
                <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    TASK 2
                </span>
                <h4 className="text-base font-bold text-green-900">Create (POST)</h4>
            </div>
            <div className="p-5">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Build a form screen inside <strong><code>create.tsx</code></strong> to add new grocery items to the database. Use React Native <code>&lt;TextInput&gt;</code> components to capture the user's input.
                </p>
                <h5 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Action Items:</h5>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 mb-2 ml-1">
                    <li>Add <code>&lt;TextInput&gt;</code> fields and bind them to the correct state variables (<code>itemName</code>, <code>quantity</code>, etc.) using <code>onChangeText</code>.</li>
                    <li>Complete the <code>save()</code> function to send an Axios <code>POST</code> request to the API.</li>
                    <li>Ensure the required fields are filled before submitting to avoid Laravel validation errors.</li>
                    <li>Upon a successful save, <strong>clear the form</strong> by resetting all state variables to their empty/default values so the user can quickly add another item.</li>
                </ul>
            </div>
        </div>
    )
}
