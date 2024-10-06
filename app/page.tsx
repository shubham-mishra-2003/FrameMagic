import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
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
        {/* <Dashboard /> */}
        <div className="flex gap-10 p-10">
        <h1>Logged in</h1>
        <UserButton />
        </div>
      </SignedIn>
    </SplashScreenWrapper>
  );
};

export default Page;
