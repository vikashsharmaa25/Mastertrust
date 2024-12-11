import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import SegmentDisplay from "./Display/SegmentDisplay";
import PrivateRoute from "./Auth/PrivateRoute";

function App() {
  const Status = [
    {
      result: {
        flag: 1,
        flagMessage: "All activated segments.",
      },
      data: [
        {
          segment: "cm_nse",
          status: "Y",
        },
        {
          segment: "cm_bse",
          status: "Y",
        },
        {
          segment: "fo_nse",
          status: "N",
        },
        {
          segment: "fo_bse",
          status: "N",
        },
        {
          segment: "curr_nse",
          status: "N",
        },
        {
          segment: "curr_bse",
          status: "N",
        },
        {
          segment: "mf_nse",
          status: "Y",
        },
        {
          segment: "mf_bse",
          status: "N",
        },
        {
          segment: "comm_nse",
          status: "N",
        },
        {
          segment: "comm_ncdex",
          status: "N",
        },
        {
          segment: "comm_mcx",
          status: "N",
        },
      ],
    },
  ];

  const MasterData = [
    {
      result: {
        flag: 1,
        flagMessage: "",
      },
      data: {
        segments: [
          {
            name: "Cash Market",
            exchange: [
              {
                exc_name: "NSE",
                abbrevation: "cm_nse",
              },
              {
                exc_name: "BSE",
                abbrevation: "cm_bse",
              },
            ],
          },
          {
            name: "Future Option",
            exchange: [
              {
                exc_name: "NSE",
                abbrevation: "fo_nse",
              },
              {
                exc_name: "BSE",
                abbrevation: "fo_bse",
              },
            ],
          },
          {
            name: "Currency Option",
            exchange: [
              {
                exc_name: "NSE",
                abbrevation: "curr_nse",
              },
              {
                exc_name: "BSE",
                abbrevation: "curr_bse",
              },
            ],
          },
          {
            name: "Mutual Fund",
            exchange: [
              {
                exc_name: "NSE",
                abbrevation: "mf_nse",
              },
              {
                exc_name: "BSE",
                abbrevation: "mf_bse",
              },
            ],
          },
          {
            name: "Commodity",
            exchange: [
              {
                exc_name: "NSE",
                abbrevation: "comm_nse",
              },
              {
                exc_name: "NCDEX",
                abbrevation: "comm_ncdex",
              },
              {
                exc_name: "MCX",
                abbrevation: "comm_mcx",
              },
            ],
          },
        ],
      },
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto p-4">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/segment"
          element={
            <PrivateRoute>
              <SegmentDisplay statusData={Status} segment={MasterData} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
