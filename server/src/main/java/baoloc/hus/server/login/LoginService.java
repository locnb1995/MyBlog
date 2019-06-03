package baoloc.hus.server.login;

import java.util.Base64;
import java.util.HashMap;

import baoloc.hus.server.entity.Member;

public class LoginService {
	
	private static HashMap<Long, String> listUserLogin = new HashMap<Long, String>();
	
	public static String addUserLogin(Member member) {
		String member_id = Long.toString(member.getId());
		String token = Base64.getEncoder().encodeToString(member_id.getBytes());
		listUserLogin.put(member.getId(), token);
		return token;
	}
	
	public static void removeUserLogin(Long id) {
		listUserLogin.remove(id);
	}
	
	public static Long getUserByToken(String token) {
		if(!listUserLogin.containsValue(token)) {
			return 0L;
		}
		byte[] user_id_decode = Base64.getDecoder().decode(token);
		Long user_id = Long.parseLong(new String(user_id_decode));
		return user_id;
	}
	
	public static boolean checkUserLogin(Member member) {
		if(listUserLogin.containsKey(member.getId())) {
			return true;
		}
		return false;
	}
	
	public static HashMap<Long, String> listUser(){
		return listUserLogin;
	}
	
}
