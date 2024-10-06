import { SignedIn, SignedOut } from "@clerk/nextjs";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/homepage/LandingPage";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";

const Page = () => {
  return (
    <SplashScreenWrapper>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </SplashScreenWrapper>
  );
};

export default Page;
