package com.ap.proyecto.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity 
public class Proyecto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idPro;
    private String tituloPro;
    private int fechaPro;
    private String descPro;
    private String imagenPro;

    public Proyecto() {
    }

    public Proyecto(Long idPro, String tituloPro, int fechaPro, String descPro, String imagenPro) {
        this.idPro = idPro;
        this.tituloPro = tituloPro;
        this.fechaPro = fechaPro;
        this.descPro = descPro;
        this.imagenPro = imagenPro;
    }

    public Long getIdPro() {
        return idPro;
    }

    public void setIdPro(Long idPro) {
        this.idPro = idPro;
    }

    public String getTituloPro() {
        return tituloPro;
    }

    public void setTituloPro(String tituloPro) {
        this.tituloPro = tituloPro;
    }

    public int getFechaPro() {
        return fechaPro;
    }

    public void setFechaPro(int fechaPro) {
        this.fechaPro = fechaPro;
    }

    public String getDescPro() {
        return descPro;
    }

    public void setDescPro(String descPro) {
        this.descPro = descPro;
    }

    public String getImagenPro() {
        return imagenPro;
    }

    public void setImagenPro(String imagenPro) {
        this.imagenPro = imagenPro;
    }
    
}