package baoloc.hus.server.responsitory;

import baoloc.hus.server.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberResponsitory extends JpaRepository<Member,Long> {

}
