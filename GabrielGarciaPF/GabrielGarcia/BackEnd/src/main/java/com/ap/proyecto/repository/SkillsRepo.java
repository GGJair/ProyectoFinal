
package com.ap.proyecto.repository;

import com.ap.proyecto.models.Skills;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillsRepo extends JpaRepository <Skills, Long> {
    
}
