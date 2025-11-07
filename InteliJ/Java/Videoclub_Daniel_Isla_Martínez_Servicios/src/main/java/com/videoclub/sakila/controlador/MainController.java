package com.videoclub.sakila.controlador;

import com.videoclub.sakila.modelo.Cliente;
import com.videoclub.sakila.modelo.Historial;
import com.videoclub.sakila.modelo.Pelicula;
import com.videoclub.sakila.servicio.VideoclubService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MainController {

    private static final Logger log = LoggerFactory.getLogger(MainController.class);

    @Autowired
    private VideoclubService videoclubService;

    @GetMapping({ "/", "/catalogo" })
    public String catalogoPeliculas(Model model) {
        try {
            model.addAttribute("listapelis", videoclubService.getCatalogoPeliculas());
        } catch (Exception e) {
            log.error("Error al obtener el catálogo de películas", e);
            model.addAttribute("error", "No se pudo cargar el catálogo de películas.");
        }
        return "catalogo";
    }

    @GetMapping("/peliculas")
    public String seleccionPeliculas(@RequestParam(required = false) String titulo, Model model) {
        try {
            List<Pelicula> lista;
            if (titulo != null && !titulo.isEmpty()) {
                lista = videoclubService.findPeliculasByTitulo(titulo);
            } else {
                lista = videoclubService.getCatalogoPeliculas();
            }
            model.addAttribute("listaPelis", lista);
        } catch (Exception e) {
            log.error("Error al buscar películas", e);
            model.addAttribute("error", "Ocurrió un error al buscar las películas.");
        }
        return "peliculas";
    }

    @GetMapping("/detallepelicula/{id_peli}")
    public String detallePelicula(@PathVariable Integer id_peli, Model model) {
        try {
            Pelicula peli = videoclubService.getPeliculaById(id_peli);
            model.addAttribute("pelicula", peli);
        } catch (Exception e) {
            log.error("Error al obtener detalle de la película con id: " + id_peli, e);
            model.addAttribute("error", "No se pudo encontrar la película solicitada.");
        }
        return "detallepeli";
    }

    @GetMapping("/clientes")
    public String getClientesByEmail(@RequestParam(required = false) String email, Model model) {
        if (email != null && !email.isEmpty()) {
            try {
                Cliente cliente = videoclubService.findClienteByEmail(email);
                model.addAttribute("cliente", cliente);
                List<Historial> historial = videoclubService.getHistorialAlquileres(cliente.getId());
                model.addAttribute("historial", historial);
            } catch (EmptyResultDataAccessException e) {
                model.addAttribute("notFound", "No se encontró ningún cliente con el email proporcionado.");
            } catch (Exception e) {
                log.error("Error al buscar cliente por email: " + email, e);
                model.addAttribute("error", "Ocurrió un error al buscar la información del cliente.");
            }
        }
        return "clientes";
    }

    @GetMapping("/contacto")
    public String contacto(Model model) {
        return "contacto";
    }
}
