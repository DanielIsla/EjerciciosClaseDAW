package com.videoclub.sakila;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.InvalidResultSetAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	@Autowired
	   JdbcTemplate jdbcTemplate;

	private static final Logger log= LoggerFactory.getLogger(VideoclubV1Application.class);
	
	@GetMapping("/catalogo")
	public String catalogoPeliculas (@RequestParam (required=false) String pelicula, Model model) {
		Connection connection = null; 
		log.info("1. creamos lista ");

		try {
		   connection = jdbcTemplate.getDataSource().getConnection();
		   Statement st=connection.createStatement();
		   st.execute("select film_id, title, description, length, rating from film");
		   ResultSet pelis=st.getResultSet();
		   model.addAttribute("listapelis", createList(pelis));
		   
		   } catch (SQLException e) { 
		   model.addAttribute("error", e.getMessage());
		   }
		   return "catalogo";
	}
	
	@GetMapping("/peliculas")
	public String seleccionPeliculas(@RequestParam (required = false) String titulo, Model model) {
		Connection connection = null;
		try {
		   connection = jdbcTemplate.getDataSource().getConnection();

		   PreparedStatement ps=connection.prepareStatement("select film_id, title, description, length, rating from film WHERE title LIKE ?");
		   ps.setString(1,titulo + "%");
		   ResultSet pelis=ps.executeQuery();
		   List<Pelicula> lista = new ArrayList<>();
		   lista = createList(pelis);
		   log.info("tamaño "+lista.size());
		    model.addAttribute("listaPelis",lista ); 

		} catch (SQLException e) { 
		model.addAttribute("error", e.getMessage());
		} 

		return "peliculas";

   }

	@SuppressWarnings("deprecation")
	@GetMapping("/detallepelicula/{id_peli}")
	public String detallePelicula(@PathVariable Integer id_peli, Model model) {
		log.info("Detalle pelicula "+ id_peli);
		Pelicula peli = new Pelicula();
		String sql="SELECT film_id, title, description, release_year, length, rating FROM film WHERE film_id = ?";
		try {
			peli = jdbcTemplate.query(
			        sql,
			        (rs, rowNum) -> new Pelicula(rs.getInt("film_id"),
			            rs.getString("title"),
			            rs.getString("description"),
			            rs.getInt("length"),
			            rs.getString("rating"),
			            rs.getInt("release_year"),
			            null
			        ), id_peli)
			    .getFirst();
			  
		
			
				}catch (InvalidResultSetAccessException e)
		{
			model.addAttribute("error",e.getMessage());
		}
		catch (DataAccessException e)
		{
			model.addAttribute("error",e.getMessage());
		}
		
		log.info("Pelicula recuperada "+peli.getTitulo() );
		
		model.addAttribute("pelicula",peli);
		
		return "detallepeli";
	}
		
	@GetMapping("/clientes")
	public String getClientesByEmail(@RequestParam(required = false) String email, Model model) {
		if (email != null && !email.isEmpty()) {
			try {
				String sqlCliente = "SELECT customer_id, first_name, last_name, email FROM customer WHERE email = ?";
				Cliente cliente = jdbcTemplate.queryForObject(sqlCliente, (rs, rowNum) ->
						new Cliente(
								rs.getInt("customer_id"),
								rs.getString("first_name"),
								rs.getString("last_name"),
								rs.getString("email")
						), email);
				model.addAttribute("cliente", cliente);

				String sqlHistorial = "SELECT r.rental_id, r.rental_date, r.return_date, f.title " +
						"FROM rental r " +
						"JOIN inventory i ON r.inventory_id = i.inventory_id " +
						"JOIN film f ON i.film_id = f.film_id " +
						"WHERE r.customer_id = ? ORDER BY r.rental_date DESC";
				List<Historial> historial = jdbcTemplate.query(sqlHistorial, (rs, rowNum) ->
						new Historial(
								rs.getInt("rental_id"),
								rs.getTimestamp("rental_date").toLocalDateTime(),
								rs.getTimestamp("return_date") != null ? rs.getTimestamp("return_date").toLocalDateTime() : null,
								rs.getString("title")
						), cliente.getId());
				model.addAttribute("historial", historial);

			} catch (EmptyResultDataAccessException e) {
				model.addAttribute("notFound", "No se encontró ningún cliente con el email proporcionado.");
			}
		}
		return "clientes";
	}

    @GetMapping("/contacto")
    public String contacto(Model model) {
        return "contacto";
    }

	
	
	public static List createList(ResultSet resultSet) throws SQLException {
		List<Pelicula> lista = new ArrayList<>();
		
	    Integer i=0;
	    log.info("createList");
	    while (resultSet.next()) {
	        Pelicula p = new Pelicula();

	        p.setId(resultSet.getInt("film_id"));
	        p.setTitulo(resultSet.getString("title"));
	        p.setDescripcion(resultSet.getString("description"));
	        p.setDuracion(resultSet.getInt("length"));
	        p.setClasificacion(resultSet.getString("rating"));
	        log.info(p.toString());
	       lista.add(p);
	        
	    }
	    log.info("Tamaño de la lista "+lista.size());
	    return lista;
	}
}
