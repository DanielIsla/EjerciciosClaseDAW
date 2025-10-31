package com.videoclub.sakila;

import java.time.LocalDateTime;

public class Historial {
    private int rental_id;
    private LocalDateTime rental_date;
    private LocalDateTime return_date;
    private String titulo;

    public Historial() {
    }

    public Historial(int rental_id, LocalDateTime rental_date, LocalDateTime return_date, String titulo) {
        this.rental_id = rental_id;
        this.rental_date = rental_date;
        this.return_date = return_date;
        this.titulo = titulo;
    }

    public int getRental_id() {
        return rental_id;
    }

    public void setRental_id(int rental_id) {
        this.rental_id = rental_id;
    }

    public LocalDateTime getRental_date() {
        return rental_date;
    }

    public void setRental_date(LocalDateTime rental_date) {
        this.rental_date = rental_date;
    }

    public LocalDateTime getReturn_date() {
        return return_date;
    }

    public void setReturn_date(LocalDateTime return_date) {
        this.return_date = return_date;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
}
