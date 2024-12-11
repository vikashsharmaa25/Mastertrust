import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices";

function SegmentDisplay({ statusData, segment }) {
  const activeSegments = [];
  const inactiveSegments = [];
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const statusMap = statusData[0].data.reduce((map, item) => {
    map[item.segment] = item.status;
    return map;
  }, {});

  segment[0].data.segments.forEach((seg) => {
    seg.exchange.forEach((exc) => {
      if (statusMap[exc.abbrevation] === "Y") {
        activeSegments.push({
          name: seg.name,
          exchange: exc.exc_name,
        });
      } else if (statusMap[exc.abbrevation] === "N") {
        inactiveSegments.push({
          name: seg.name,
          exchange: exc.exc_name,
        });
      }
    });
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {token && (
        <div className="flex justify-end items-center">
          <button
            onClick={handleLogout}
            className="bg-red-400 px-4 py-2 text-xl rounded-md"
          >
            Logout
          </button>
        </div>
      )}

      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-start">
        Active Segments in Your Account
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {activeSegments.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.name}
            </h2>
            <div className="flex space-x-2">
              <span className="border px-3 py-1 rounded-md text-sm text-green-700 border-green-300 bg-blue-100">
                {item.exchange}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-start">
        Add New Segments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {inactiveSegments.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.name}
            </h2>
            <div className="flex space-x-2">
              <span className="border px-3 py-1 rounded-md text-sm text-gray-600 border-gray-300">
                {item.exchange}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SegmentDisplay;
