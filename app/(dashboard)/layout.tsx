import { NavBar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";
import { SideBar } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="h-full pl-[60px]">
        <div className="h-full flex gap-x-3">
        <OrgSidebar />
          <div className="h-full flex-1">
            <NavBar/>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
