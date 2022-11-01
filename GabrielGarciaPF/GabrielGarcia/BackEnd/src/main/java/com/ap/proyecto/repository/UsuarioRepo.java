
package com.ap.proyecto.repository;

import com.ap.proyecto.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepo extends JpaRepository <Usuario, Long>{
    
}
