package baoloc.hus.server.controller;

import baoloc.hus.server.entity.Member;
import baoloc.hus.server.entity.Post;
import baoloc.hus.server.entity.PostType;
import baoloc.hus.server.entity.Role;
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
import java.util.Collections;
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
    public ArrayList<Post> getPostById(@PathVariable String id){
        Long post_id = Long.parseLong(id);
        ArrayList<Post> result = new ArrayList<Post>();
        if(!postResponsitory.existsById(post_id)) {
        	return result;
        }
        Post post = postResponsitory.findById(post_id).get();
        post.setView_total(post.getView_total() + 1);
        postResponsitory.save(post);
        result.add(post);
        return result;
    }
    
    @GetMapping("/relatedPost/{id}")
    public List<Post> getRelatedPostById(@PathVariable String id){
    	Long post_id = Long.parseLong(id);
    	List<Post> relatedpost = new ArrayList<Post>();
    	if(!postResponsitory.existsById(post_id)) {
    		return relatedpost;
    	}
    	List<Post> allPost = postResponsitory.findAll();
    	for(Post post : allPost) {
    		if(post.getId() == postResponsitory.findById(post_id).get().getId()) {
    			continue;
    		}
    		if(post.getPostType().getId() == postResponsitory.findById(post_id).get().getPostType().getId()) {
    			relatedpost.add(post);
    		}
    	}
        return relatedpost;
    }
    
    @GetMapping("/getAllPostType")
    public List<PostType> getAllPostType(){
    	return postTypeResponsitory.findAll();
    }
    
    @GetMapping("/getAllMember")
    public List<Member> getAllMember(){
    	return memberResponsitory.findAll();
    }
    
    @GetMapping("/getUserRole")
    public List<Role> getUserRole(){
    	return roleResponsitory.findAll();
    }
    
    @PostMapping("/addPost")
    public void addPost(@RequestBody Post post){
    	postResponsitory.save(post);
    }
    
    @GetMapping("/getPostByTypeId/{id}")
    public List<Post> getPostByTypeId(@PathVariable String id){
    	Long type_id = Long.parseLong(id);
    	ArrayList<Post> result = new ArrayList<Post>();
    	if(!postTypeResponsitory.existsById(type_id)) {
    		return result;
    	}
    	for(Post post : postResponsitory.findAll()) {
    		if(post.getPostType().getId() == type_id) {
    			result.add(post);
    		}
    	}
        return result;
    }
    
    @GetMapping("/getPostByView")
    public List<Post> getPostByView(){
    	List<Post> result = postResponsitory.findAll();
    	Collections.sort(result, new ComparatorPostByView());
        return result;
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
