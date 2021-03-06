package baoloc.hus.server.controller;

import baoloc.hus.server.entity.Member;
import baoloc.hus.server.entity.Post;
import baoloc.hus.server.entity.PostType;
import baoloc.hus.server.entity.Role;
import baoloc.hus.server.login.LoginService;
import baoloc.hus.server.responsitory.MemberResponsitory;
import baoloc.hus.server.responsitory.PostResponsitory;
import baoloc.hus.server.responsitory.PostTypeResponsitory;
import baoloc.hus.server.responsitory.RoleResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;


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
    
    @PutMapping("/editPost")
    public void editPost(@RequestBody Post post){
    	postResponsitory.save(post);
    }
    
    @DeleteMapping("/deletePost/{id}")
    public void deletePost(@PathVariable String id){
    	Long post_id = Long.parseLong(id);
    	postResponsitory.deleteById(post_id);
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
    
    @PostMapping("/checkUserInfo")
    public List<String> checkMemberExist(@RequestBody Member memberInfo){
    	List<String> result = new ArrayList<String>();
    	String invalid = "Invalid Username or Password";
    	result.add(invalid);
    	List<Member> listMember = memberResponsitory.findAll();
    	for(Member member: listMember) {
    		if(member.getUsername().equals(memberInfo.getUsername()) && member.getPassword().equals(memberInfo.getPassword())) {
    			if(LoginService.checkUserLogin(member)) {
    	    		result.add("Your account is logged in at 1 other locations");
    	    		result.remove(invalid);
    	    		return result;
    	    	}
    			result.remove(invalid);
    			result.add("Login Success");
    			result.add(LoginService.addUserLogin(member));
    			return result;
    		}
    	}
    	return result;
    }
    
    @GetMapping("/getPostByUser")
    public List<Post> getPostByUser(@RequestHeader(value="Authorization") String token){
    	List<Post> result = new ArrayList<Post>();
    	if(token.equals("")) {
    		return result;
    	}
    	Long user_id = LoginService.getUserByToken(token);
    	if(user_id == 0L) {
    		return result;
    	}
    	List<Post> allPost = postResponsitory.findAll(orderByIdDesc());
    	if(user_id == 1L) {
    		return allPost;
    	}
    	for(Post post : allPost) {
    		if(post.getMember().getId() == user_id) {
    			result.add(post);
    		}
    	}
    	return result;
    }
    
    @GetMapping("/getUserInfo")
    public List<Member> getUserInfo(@RequestHeader(value="Authorization") String token) {
    	List<Member> result = new ArrayList<Member>();
    	if(token.equals("")) {
    		return result;
    	}
    	Long user_id = LoginService.getUserByToken(token);
    	if(user_id == 0L) {
    		return result;
    	}
    	Optional<Member> member = memberResponsitory.findById(user_id);
    	result.add(member.get());
    	return result;
    }
    
    @GetMapping("/logout")
    public void logout(@RequestHeader(value="Authorization") String token) {
    	Long user_id = LoginService.getUserByToken(token);
    	LoginService.removeUserLogin(user_id);
    	HashMap<Long, String> list = LoginService.listUser();
    	list = new HashMap<Long, String>();
    }
    
}
