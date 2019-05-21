package baoloc.hus.server.entity;

import javax.persistence.*;

@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "detail")
    private String detail;

    @ManyToOne
    @JoinColumn(name = "type_id" , referencedColumnName = "id")
    private PostType postType;

    @ManyToOne
    @JoinColumn(name = "user_id" , referencedColumnName = "id")
    private Member member;

    @Column(name = "date_submit")
    private String date_submit;

    @Column(name = "view_total")
    private int view_total;

    @Column(name = "image")
    private String image;

    public Post() {
    }

    public Post(Long id, String title, String description, String detail, PostType postType, Member member, String date_submit, int view_total, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.detail = detail;
        this.postType = postType;
        this.member = member;
        this.date_submit = date_submit;
        this.view_total = view_total;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public PostType getPostType() {
        return postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public String getDate_submit() {
        return date_submit;
    }

    public void setDate_submit(String date_submit) {
        this.date_submit = date_submit;
    }

    public int getView_total() {
        return view_total;
    }

    public void setView_total(int view_total) {
        this.view_total = view_total;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
