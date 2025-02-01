"use client"

import { useRouter } from "next/navigation";


const HomePage = () => {
  const router = useRouter();
  const handleNavigate = () => {

    router.push("/dashboard")
  }
  return (
    <div>
      <button onClick={handleNavigate}>Go to Dashboard</button>
    </div>
  );
};

export default HomePage;