package baoloc.hus.server.controller;

import java.util.Comparator;

import baoloc.hus.server.entity.Post;

public class ComparatorPostByView implements Comparator<Post> {

	@Override
	public int compare(Post o1, Post o2) {
		// TODO Auto-generated method stub
		return o2.getView_total() - o1.getView_total();
	}

}
