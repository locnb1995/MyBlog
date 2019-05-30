package baoloc.hus.server.responsitory;

import baoloc.hus.server.entity.PostType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostTypeResponsitory extends JpaRepository<PostType,Long> {
}
