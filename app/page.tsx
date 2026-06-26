'use client';
import Dashboard from "@/app/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Stellar Charts

        <div style={{width: '100%'}}>
        <Dashboard/>
        </div>

    </div>
  );
}
