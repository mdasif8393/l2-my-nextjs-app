"use client"

import { useRouter } from "next/navigation";


const HomePage = () => {
  const router = useRouter();
  const handleNavigate = () => {

    router.push("/dashboard")
  }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleNavigate}>Go to Dashboard</button>
    </div>
  );
};

export default HomePage;