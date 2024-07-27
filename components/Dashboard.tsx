import DashboardCard from "./DashboardCard"
import ProfileCardServer from "./Profile/ProfileCard.server";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-12 md:p-8 sm:p-7 p-5">
      <DashboardCard />
      <ProfileCardServer />
    </div>
  );
};

export default Dashboard;
