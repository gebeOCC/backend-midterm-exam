import React from 'react'

export default function FirstTask() {
    return (
        <div className="border border-blue-200 bg-blue-50/40 rounded-lg overflow-hidden">
            <div className="bg-blue-100/50 px-5 py-3 border-b border-blue-200 flex items-center gap-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    TASK 1
                </span>
                <h4 className="text-base font-bold text-blue-900">Read (Fetch Data)</h4>
            </div>
            <div className="p-5">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Connect the Expo app to the Laravel backend. Fetch the list of groceries using Axios and pass the data down to the Card components.
                </p>
                <h5 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Action Items:</h5>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 mb-2 ml-1">
                    <li>Complete the <code>getGroceries()</code> function inside <strong><code>index.tsx</code></strong>.</li>
                    <li>Bind the passed data to the empty <code>&lt;Text&gt;</code> tags inside <strong><code>components/card.tsx</code></strong>.</li>
                </ul>
            </div>
        </div>
    )
}
