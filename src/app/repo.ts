// export class Repo {
//     constructor(public name: string,
//          public description: string,
//           public html_url: string, 
//           public  clone_url: string, 
//           public homepage:string ) {}
// }
export class Repo {
    constructor(public public_repos: number,
         public create_at: number,
          public public_gists: number, 
          public  followers: number, 
          public following:number ) {}
}


