import { PostType } from './PostType';
import { Member } from './Member';

export class Post {
    id: number;
    title: string;
    description: string;
    detail: string;
    postType: PostType;
    member: Member;
    // tslint:disable-next-line:variable-name
    date_submit: string;
    // tslint:disable-next-line:variable-name
    view_total: number;
    image: string;
}
