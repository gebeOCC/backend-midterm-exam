import React from 'react';

export default function Database() {
    const groceryFields = [
        { name: 'item_name', type: 'string', details: 'Required, Max 255 characters' },
        { name: 'quantity', type: 'integer', details: 'Default: 1' },
        { name: 'category', type: 'enum', details: "['produce', 'meat', 'pantry', 'snacks', 'household']" },
        { name: 'status', type: 'enum', details: "['needed', 'in_cart', 'bought'] - Default: 'needed'" },
        { name: 'brand_preference', type: 'string (Nullable)', details: 'Optional text field' },
    ];

    return (
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-900">Grocery Schema</h3>
                <p className="text-sm text-gray-500">Structure of the groceries table in Laravel.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left">
                    <thead className="bg-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Field Name</th>
                            <th scope="col" className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data Type</th>
                            <th scope="col" className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Constraints</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {groceryFields.map((field, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">{field.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${field.type.includes('enum') ? 'bg-blue-100 text-blue-800' :
                                        field.type.includes('Nullable') ? 'bg-amber-100 text-amber-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                        {field.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{field.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}