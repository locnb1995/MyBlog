package baoloc.hus.server.controller;

import baoloc.hus.server.entity.Member;
import baoloc.hus.server.entity.Post;
import baoloc.hus.server.responsitory.MemberResponsitory;
import baoloc.hus.server.responsitory.PostResponsitory;
import baoloc.hus.server.responsitory.PostTypeResponsitory;
import baoloc.hus.server.responsitory.RoleResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
    @Autowired
    private MemberResponsitory memberResponsitory;

    @Autowired
    private RoleResponsitory roleResponsitory;

    @Autowired
    private PostResponsitory postResponsitory;

    @Autowired
    private PostTypeResponsitory postTypeResponsitory;
    
    @Autowired
    private EntityManager entityManager;
    
    private Sort orderByIdDesc() {
    	return new Sort(Sort.Direction.DESC, "id");
    }

    @GetMapping("/listPost")
    public List<Post> getAllPost(){
        return postResponsitory.findAll(orderByIdDesc());
    }

    @GetMapping("/PostDetail/{id}")
    public Optional<Post> getPostById(@PathVariable String id){
        Long post_id = Long.parseLong(id);
        return postResponsitory.findById(post_id);
    }
    
    @GetMapping("/relatedPost/{id}")
    public List<Post> getRelatedPostById(@PathVariable String id){
    	Long post_id = Long.parseLong(id);
    	List<Post> relatedpost = new ArrayList<Post>();
    	if(postResponsitory.existsById(post_id)) {
    		Optional<Post> post = postResponsitory.findById(post_id);
    		Long type_id = post.get().getPostType().getId();
    		String sql = "SELECT p.* FROM post as p INNER JOIN post_type as pt ON p.type_id = pt.id WHERE pt.id = " + type_id + 
    				" AND p.id != " + id;
            Query query = entityManager.createNativeQuery(sql);
            @SuppressWarnings("unchecked")
			List<Post> resultList = query.getResultList();
			relatedpost = resultList;
    	}
        return relatedpost;
    }
    
    @PutMapping("/viewDetailPost/{id}")
    public void updateViewOfPost(@PathVariable String id) {
    	Long post_id = Long.parseLong(id);
    	if(!postResponsitory.existsById(post_id)) {
    		return;
    	}
    	Optional<Post> post = postResponsitory.findById(post_id);
    	Post post_updated = post.get();
    	post_updated.setView_total(post_updated.getView_total() + 1);
    	postResponsitory.save(post_updated);
    }
    
    @GetMapping("/checkLoginStatus")
    public ArrayList<Boolean> checkLoginStatus(HttpSession session){
    	ArrayList<Boolean> checkLogin = new ArrayList<Boolean>();
    	checkLogin.add(false);
    	if(session.getAttribute("user") == null) {
    		return checkLogin;
    	}
    	checkLogin.set(0, true);
		return checkLogin;
    }
    
    @PostMapping("/MemberInfo")
    public List<Member> checkMemberExist(@RequestBody Member member , HttpSession session){
    	String sql = "SELECT * FROM members WHERE username = '"+member.getUsername()+"' AND password='"+member.getPassword()+"'";
        Query query = entityManager.createNativeQuery(sql);
        @SuppressWarnings("unchecked")
		List<Member> resultList = query.getResultList();
        if(!resultList.isEmpty()) {
        	session.setAttribute("user", 1);
        }
        return resultList;
    }
    
}
