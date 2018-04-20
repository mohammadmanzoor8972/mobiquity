export class GithubUser {
    constructor(
        public user: any,
        public repos: any,
        public userName: string
    ) { 
        this.user = user;
        this.repos = repos;
        this.userName = userName
    }
}