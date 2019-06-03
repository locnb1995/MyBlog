package baoloc.hus.server.login;

import java.util.Base64;
import java.util.HashMap;

import baoloc.hus.server.entity.Member;

public class LoginService {
	
	private HashMap<Long, String> listUserLogin = new HashMap<Long, String>();
	
	public void addUserLogin(Member member) {
		String member_id = Long.toString(member.getId());
		String token = Base64.getEncoder().encodeToString(member_id.getBytes());
		listUserLogin.put(member.getId(), token);
	}
	
	public boolean checkUserLogin(Member member) {
		if(listUserLogin.containsKey(member.getId())) {
			return false;
		}
		return true;
	}
	
}
