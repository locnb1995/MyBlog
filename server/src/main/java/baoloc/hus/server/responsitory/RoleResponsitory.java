package baoloc.hus.server.responsitory;

import baoloc.hus.server.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleResponsitory extends JpaRepository<Role,Long> {
}
