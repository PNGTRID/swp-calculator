import { Suspense } from "react";
import SWPCalculator from "@/components/SWPCalculator";

function CalculatorLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Calculator...</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<CalculatorLoader />}>
      <SWPCalculator />
    </Suspense>
  );
}
