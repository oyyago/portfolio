export const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/oyyago`, {
      cache: "no-store",
    });
    return await response.json();
  };
  
  export const getUserRepos = async (perPage: number) => {
    const response = await fetch(
      `https://api.github.com/users/oyyago/repos?per_page=${perPage}`,
      { cache: "no-store" }
    );
    return await response.json();
  };
  