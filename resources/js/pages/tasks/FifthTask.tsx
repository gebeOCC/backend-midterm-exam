import React from 'react';

export default function FifthTask() {
    return (
        <div className="border border-purple-200 bg-purple-50/40 rounded-lg overflow-hidden">
            <div className="bg-purple-100/50 px-5 py-3 border-b border-purple-200 flex items-center gap-3">
                <span className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    TASK 5
                </span>
                <h4 className="text-base font-bold text-purple-900">Final UI Design & UX Polish</h4>
            </div>
            <div className="p-5">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Apply the final polish to your application. This task focuses on the overall visual appeal (UI) and the user experience (UX) by ensuring the app feels responsive and looks professional across all screens.
                </p>
                <h5 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Action Items:</h5>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 mb-2 ml-1">
                    <li>
                        <strong>Overall UI Design:</strong> Use NativeWind/Tailwind to style all screens (List, Create, and Update). Ensure consistent spacing, font weights, and a modern color palette.
                    </li>
                    <li>
                        <strong>Component Styling:</strong> Transform the raw <code>Card.tsx</code> and form inputs into aesthetic, user-friendly components.
                    </li>
                    <li>
                        <strong>Loading States:</strong> Implement <code>isLoading</code> logic across the app. Users should see an <code>ActivityIndicator</code> or loading message during data fetching and while waiting for API responses (Save/Update/Delete).
                    </li>
                </ul>
            </div>
        </div>
    );
}