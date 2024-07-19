import {
  PiggyBank,
  ReceiptText,
  Wallet,
  Sparkles,
  CircleDollarSign,
} from "lucide-react";

import React, { useEffect, useState } from "react";
import formatNumber from "../../../../../utlis";

function CardInfo({ budgetList, incomeList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpent] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [financialAdvice, setFinanacialAdvice] = useState("");

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList, incomeList]);

  useEffect(() => {
    // if (totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
    //   const fetchFinanacialAdvice = async () => {
    //     const advice = await getFinacialAdvice(
    //       totalBudget,
    //       totalIncome,
    //       totalSpend
    //     );
    //   };
    //   setFinanacialAdvice(advice)
    // }
    // fetchFinanacialAdvice();
  }, [totalBudget, totalIncome, totalSpend]);
  const CalculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    let totalIncome_ = 0;

    budgetList.forEach((element) => {
      totalBudget_ = totalBudget_ + Number(element.amount);
      totalSpend_ = totalSpend_ + element.totalSpend;
    });

    incomeList.forEach((element) => {
      totalIncome_ = totalIncome_ + element.totalAmount;
    });

    setTotalBudget(totalBudget_);
    setTotalSpent(totalSpend_);
    setTotalIncome(totalIncome_);
  };

  return (
    <div>
      {budgetList.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 rounded-2xl flex items-center justify-between">
            <div className="">
              <div className="flex mb-2 flex-row space-x-1 items-center">
                <h2>Finnce Smart AI</h2>
                <Sparkles
                  className="rounded-full text-white w-10 h-10 p-2
                bg-gradient-to-r
                from-pink-500
                via-red-500
                to-yellow-500
                background-animate
                "
                />
              </div>
              <h2 className="font-light text-md">
                {financialAdvice || "loading financial advice..."}
              </h2>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Budget</h2>
                <h2 className="font-bold text-2xl">${formatNumber}</h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-1 w-1 rounded-full text-white" />
            </div>
          </div>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">No. of Budget</h2>
                <h2 className="font-bold text-2xl">${budgetList.length}</h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-1 w-1 rounded-full text-white" />
            </div>
          </div>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">sum of Income Streams</h2>
                <h2 className="font-bold text-2xl">
                  ${formatNumber(totalIncome)}
                </h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-1 w-1 rounded-full text-white" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
