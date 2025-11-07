package com.videoclub.sakila.servicio;

import com.videoclub.sakila.modelo.Cliente;
import com.videoclub.sakila.modelo.Historial;
import com.videoclub.sakila.modelo.Pelicula;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class VideoclubService {

    private static final Logger log = LoggerFactory.getLogger(VideoclubService.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Pelicula> getCatalogoPeliculas() {
        String sql = "select film_id, title, description, length, rating from film";
        return jdbcTemplate.query(sql, (rs, rowNum) -> createPeliculaFromResultSet(rs));
    }

    public List<Pelicula> findPeliculasByTitulo(String titulo) {
        String sql = "select film_id, title, description, length, rating from film WHERE title LIKE ?";
        return jdbcTemplate.query(sql, (rs, rowNum) -> createPeliculaFromResultSet(rs), titulo + "%");
    }

    public Pelicula getPeliculaById(Integer id_peli) {
        String sql = "SELECT film_id, title, description, release_year, length, rating FROM film WHERE film_id = ?";
        return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> new Pelicula(
                rs.getInt("film_id"),
                rs.getString("title"),
                rs.getString("description"),
                rs.getInt("length"),
                rs.getString("rating"),
                rs.getInt("release_year"),
                null
        ), id_peli);
    }

    public Cliente findClienteByEmail(String email) {
        String sql = "SELECT customer_id, first_name, last_name, email FROM customer WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> new Cliente(
                rs.getInt("customer_id"),
                rs.getString("first_name"),
                rs.getString("last_name"),
                rs.getString("email")
        ), email);
    }

    public List<Historial> getHistorialAlquileres(Integer customerId) {
        String sql = "SELECT r.rental_id, r.rental_date, r.return_date, f.title " +
                "FROM rental r " +
                "JOIN inventory i ON r.inventory_id = i.inventory_id " +
                "JOIN film f ON i.film_id = f.film_id " +
                "WHERE r.customer_id = ? ORDER BY r.rental_date DESC";
        return jdbcTemplate.query(sql, (rs, rowNum) -> new Historial(
                rs.getInt("rental_id"),
                rs.getTimestamp("rental_date").toLocalDateTime(),
                rs.getTimestamp("return_date") != null ? rs.getTimestamp("return_date").toLocalDateTime() : null,
                rs.getString("title")
        ), customerId);
    }

    private Pelicula createPeliculaFromResultSet(ResultSet rs) throws SQLException {
        return new Pelicula(
                rs.getInt("film_id"),
                rs.getString("title"),
                rs.getString("description"),
                rs.getInt("length"),
                rs.getString("rating"),
                0, // release_year is not in this query
                null
        );
    }
}
