
package com.ap.proyecto.repository;

import com.ap.proyecto.models.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProyectoRepo extends JpaRepository<Proyecto, Long>{
    
}

