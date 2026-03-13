import React, { useState } from 'react';

export default function Criteria() {
    // Initial State: Every category defaults to the max score of 20
    const [scores, setScores] = useState({
        read: 0,
        create: 0,
        update: 0,
        delete: 0,
        design: 0,
        loading: 0
    });

    const handleScoreChange = (e) => {
        const { name, value } = e.target;
        // Ensure the value doesn't go over 20 or under 0
        let newScore = Number(value);
        if (newScore > 20) newScore = 20;
        if (newScore < 0) newScore = 0;

        setScores(prev => ({
            ...prev,
            [name]: newScore
        }));
    };

    const rubric = [
        {
            id: 'read',
            criteria: 'Read',
            weight: '30%',
            weightValue: 30,
            max: 20,
            excellent: 'Successfully fetches and displays all API data using .map(). State is managed perfectly with no missing key props.',
            good: 'Fetches and displays data, but has minor console warnings (e.g., missing key prop) or slight state delays.',
            fair: 'Fetches data from the API but fails to render it properly on the screen, or only displays partial data.',
            needsWork: 'API call is attempted but fails entirely due to bad URL, network error, or incorrect use of Axios.',
            zero: 'No attempt made to fetch or display data.'
        },
        {
            id: 'create',
            criteria: 'Create',
            weight: '20%',
            weightValue: 20,
            max: 20,
            excellent: 'Correctly sends POST request, saves to the database, and immediately updates the UI state so the new item appears.',
            good: 'Sends POST request successfully, but the user has to manually refresh the app to see the newly added item.',
            fair: 'Form data is captured, but the POST request fails due to bad payload formatting or incorrect endpoint.',
            needsWork: 'A "Add" button or form exists, but no actual API call or functional logic is attached to it.',
            zero: 'No attempt made to implement Create functionality.'
        },
        {
            id: 'update',
            criteria: 'Update',
            weight: '20%',
            weightValue: 20,
            max: 20,
            excellent: 'Correctly identifies item by ID, sends PUT/PATCH request, and updates the specific item in the UI state immediately.',
            good: 'Sends PUT/PATCH successfully, but requires a manual app refresh to see the edited changes on screen.',
            fair: 'Opens edit state/form for the correct item, but the API request fails to save the updated data.',
            needsWork: 'Edit button exists and registers clicks, but backend API logic is completely missing.',
            zero: 'No attempt made to implement Update functionality.'
        },
        {
            id: 'delete',
            criteria: 'Delete',
            weight: '10%',
            weightValue: 10,
            max: 20,
            excellent: 'Correctly sends DELETE request by ID and instantly removes the item from the screen\'s UI state.',
            good: 'Successfully deletes the item from the backend, but the deleted item stays on the screen until refresh.',
            fair: 'Attempts to delete but passes the wrong ID, uses a GET request instead of DELETE, or crashes the app.',
            needsWork: 'Delete button exists and triggers a console log, but no API call is actually made.',
            zero: 'No attempt made to implement Delete functionality.'
        },
        {
            id: 'design',
            criteria: 'Design',
            weight: '10%',
            weightValue: 10,
            max: 20,
            excellent: 'Clean, logical UI using Tailwind classes. Good spacing, readable text, and distinct, user-friendly buttons.',
            good: 'Functional design but lacks polish (e.g., cramped margins, basic unstyled buttons, slightly messy alignment).',
            fair: 'Layout is cluttered or hard to navigate. Elements might be overlapping or poorly sized.',
            needsWork: 'Raw, completely unstyled text and views. Bare minimum effort put into the visual layout.',
            zero: 'UI is completely broken, unusable, or unreadable.'
        },
        {
            id: 'loading',
            criteria: 'Loading State',
            weight: '10%',
            weightValue: 10,
            max: 20,
            excellent: 'Properly uses ActivityIndicator or loading text while data is being fetched or during API submissions.',
            good: 'Implements a loading state for the initial data fetch, but forgets it for Add/Edit/Delete actions.',
            fair: 'Loading state variable (isLoading) is created in code but never actually displayed in the UI.',
            needsWork: 'Loading state is implemented incorrectly (e.g., stays loading forever or flashes too quickly to see).',
            zero: 'No loading states implemented at all; app just shows a blank white screen while fetching.'
        }
    ];

    // The Math: (Score / 20) * Category Weight
    const totalScore = rubric.reduce((acc, item) => {
        const score = Number(scores[item.id]) || 0;
        const weightedContribution = (score / item.max) * item.weightValue;
        return acc + weightedContribution;
    }, 0);

    return (
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        Interactive Grading Rubric
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Type the score directly into the row to calculate the final grade.</p>
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left">
                    <thead className="bg-white">
                        <tr>
                            {/* THE STICKY INPUT HEADER */}
                            <th scope="col" className="sticky left-0 z-20 bg-indigo-100 px-6 py-4 text-xs font-bold text-indigo-700 uppercase tracking-wider whitespace-nowrap border-r border-indigo-200 shadow-[1px_0_0_0_#c7d2fe]">
                                Score (/20)
                            </th>

                            {/* Non-sticky remaining headers */}
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-gray-800 uppercase tracking-wider whitespace-nowrap">Criteria</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap bg-gray-50">Weight</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-green-600 uppercase tracking-wider min-w-[200px]">20 Pts (Excellent)</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-blue-600 uppercase tracking-wider min-w-[200px]">15 Pts (Good)</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-yellow-600 uppercase tracking-wider min-w-[200px]">10 Pts (Fair)</th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold text-orange-600 uppercase tracking-wider min-w-[200px]">5 Pts (Needs Work)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {rubric.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors group">

                                {/* THE STICKY INPUT CELL */}
                                <td className="sticky left-0 z-20 bg-indigo-50 px-6 py-4 whitespace-nowrap border-r border-indigo-100 shadow-[1px_0_0_0_#e0e7ff] group-hover:bg-indigo-100/50 transition-colors">
                                    <div className="flex items-center gap-1">
                                        <input
                                            type="number"
                                            name={row.id}
                                            value={scores[row.id] === '' ? '' : scores[row.id]}
                                            onChange={handleScoreChange}
                                            className="border border-indigo-200 rounded-md px-2 py-1.5 w-16 text-center text-indigo-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
                                            min="0"
                                            max="20"
                                        />
                                    </div>
                                </td>

                                {/* Non-sticky remaining cells */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                    {row.criteria}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500 bg-gray-50/50">
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{row.weight}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">{row.excellent}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{row.good}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{row.fair}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{row.needsWork}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Sticky-style Bottom Grade Banner */}
            <div className="bg-slate-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
                <div className="text-slate-300 font-medium mb-2 sm:mb-0">
                    System automatically calculates weights out of 100%
                </div>
                <div className="flex items-center gap-3 bg-slate-900 px-5 py-2 rounded-lg border border-slate-700 shadow-inner">
                    <span className="text-slate-400 font-semibold uppercase tracking-wider text-sm">Final Grade:</span>
                    <span className={`text-2xl font-bold ${totalScore >= 75 ? 'text-green-400' : totalScore >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {totalScore.toFixed(1)} <span className="text-lg text-slate-500 font-medium">/ 100</span>
                    </span>
                </div>
            </div>
        </div>
    );
}