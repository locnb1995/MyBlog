export class Post {
    constructor() { }
    postConstruct = {
        id : 0,
        title: '',
        description: '',
        detail: '',
        date_submit: '',
        view_total: 0,
        image: '',
        member : {
            id : 0,
            name : '',
            role : {
                id : 0,
                name : '',
            }
        },
        postType : {
            id : 0,
            name : '',
        }
    };
}
