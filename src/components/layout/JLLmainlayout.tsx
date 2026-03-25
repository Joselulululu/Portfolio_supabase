import { Outlet } from 'react-router-dom';
import Header1 from "../main/JLLheader";

export const MainLayout = () => {
    return (
        <div className="min-h-screen w-full bg-slate-900 text-white">
            <Header1 />
            <main className="pt-20 p-4">
                <Outlet /> 
            </main>
        </div>
    );
};