import FifthTask from './FifthTask';
import FirstTask from './FirstTask';
import FourthTask from './FourthTask';
import SecondTask from './SecondTask';
import ThirdTask from './ThirdTask';

export default function Tasks() {
    return (
        <div className="space-y-6">
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">

                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Frontend Project Tasks</h3>
                        <p className="text-sm text-gray-500">Complete these milestones in the Expo mobile application.</p>
                    </div>
                </div>

                <div className="p-6 space-y-6">

                    {/* 🔵 TASK 1: READ */}
                    <FirstTask />

                    {/* 🟢 TASK 2: CREATE */}
                    <SecondTask />

                    {/* 🟡 TASK 3: UPDATE */}
                    <ThirdTask />

                    {/* 🔴 TASK 4: DELETE */}
                    <FourthTask />

                    {/* 🟣 TASK 5: DESIGN & POLISH */}
                    <FifthTask />
                </div>
            </div>
        </div>
    );
}