import { auth, SignedIn, SignedOut } from "@clerk/nextjs";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/homepage/LandingPage";

const page = () => {
  return (
    <>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </>
  );
};

export default page;
