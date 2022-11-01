
package com.ap.proyecto.services;

import com.ap.proyecto.models.Proyecto;
import com.ap.proyecto.repository.ProyectoRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProyectoService {
    
    private final ProyectoRepo proyectoRepo;
    
    @Autowired
    public ProyectoService(ProyectoRepo proyectoRepo){
        this.proyectoRepo = proyectoRepo;
    }
    public Proyecto addProyecto(Proyecto proyecto){
        return proyectoRepo.save(proyecto);
    }
    public List<Proyecto> buscarProyectos(){
        return proyectoRepo.findAll();
    }
    public Proyecto editarProyecto(Proyecto proyecto){
        return proyectoRepo.save(proyecto);
        
    }
    public void borrarProyecto(Long id){
        proyectoRepo.deleteById(id);
    }
}
