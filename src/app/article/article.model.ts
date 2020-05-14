
export default class Article {


    constructor(public titre:string, 
                public lien:string, 
                public points:number=0){

    }

    getVote(){
        return this.points;
    }

    votePour(){
        this.points++;
    }

    voteContre(){
        this.points--;
    }
}