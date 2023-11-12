import { useEffect, useState } from "react";
import { getUserData } from "../../services/req";
import Projects from "./projects";


export default function Index() {
  const [user, setUser] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setUser(userData.public_repos);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return user !== null ? <Projects totalRepos={user} /> : null;
}