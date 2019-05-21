package baoloc.hus.server.responsitory;

import baoloc.hus.server.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostResponsitory extends JpaRepository<Post,Long> {
	
}
