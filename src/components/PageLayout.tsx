import React from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div className="z-30 flex min-h-screen w-full max-w-7xl flex-col gap-20 px-3 py-12 sm:px-4 md:px-6 lg:px-6">
          {children}
        </div>
      </div>
    </>
  );
}

export default PageLayout;
