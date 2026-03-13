import React from 'react';

export default function Api() {
    const baseUrl = 'http://127.0.0.1:8000';

    const apiEndpoints = [
        { method: 'GET', route: '/api/groceries', action: 'Fetch all grocery items' },
        { method: 'POST', route: '/api/groceries', action: 'Create a new grocery item' },
        { method: 'PUT/PATCH', route: '/api/groceries/{id}', action: 'Update quantity or status (Partial)' },
        { method: 'DELETE', route: '/api/groceries/{id}', action: 'Remove item from list' },
    ];

    return (
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">API Endpoints</h3>

            <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Base URL:
                </span>
                <code className="text-sm font-mono text-blue-700 bg-blue-50 px-3 py-1.5 rounded border border-blue-100">
                    {baseUrl}
                </code>
            </div>

            <div className="space-y-3">
                {apiEndpoints.map((api, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-md border border-gray-200 shadow-sm hover:border-gray-300 transition-colors gap-4">
                        <div className="flex items-center gap-3 overflow-x-auto">
                            <span className={`px-2.5 py-1 text-xs font-bold rounded text-center ${api.method === 'GET' ? 'bg-green-100 text-green-700' :
                                api.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                                    api.method === 'PUT/PATCH' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'
                                }`}>
                                {api.method}
                            </span>
                            <div className="flex items-center text-sm font-mono whitespace-nowrap">
                                <span className="text-gray-400 hidden md:inline">{baseUrl}</span>
                                <span className="text-gray-900 font-semibold">{api.route}</span>
                            </div>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                            {api.action}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}