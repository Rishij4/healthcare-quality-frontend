export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-blue-700 text-white justify-center items-center">

        <div>

          <h1 className="text-5xl font-bold">
            Healthcare Quality
          </h1>

          <p className="mt-5 text-lg">
            Inspection & Root Cause Intelligence
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex justify-center items-center bg-slate-100">

        {children}

      </div>

    </div>
  );
}