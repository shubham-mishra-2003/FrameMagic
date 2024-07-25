import { auth } from "@clerk/nextjs";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/homepage/LandingPage";

const page = () => {
  const { userId } = auth();
  if (!userId) {
    return <LandingPage />;
  }
  return <Dashboard />;
};

export default page;
