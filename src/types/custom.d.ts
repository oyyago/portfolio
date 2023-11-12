declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

export interface Repo {
    id?: number;
    name: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    homepage: string | null;
}

interface UserData {
    public_repos: number;
}

export default UserData;
