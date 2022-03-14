package com.dio_class.devweek.Controller;

import com.dio_class.devweek.Entity.Incidencia;
import com.dio_class.devweek.Repo.IncidenciaRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ControllerIncidencia {
    private final IncidenciaRepo inRepository;

    public ControllerIncidencia(IncidenciaRepo inRepository) {
        this.inRepository = inRepository;
    }

    @GetMapping("/ocorrencias")
    public ResponseEntity<List<Incidencia>> findIncidencia(){
        List<Incidencia> listaIncidencia = inRepository.findAll();
        if (listaIncidencia.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
        return new ResponseEntity<>(listaIncidencia, HttpStatus.OK);
    }

    @GetMapping("/ocorrencias/{id}")
    public ResponseEntity<Incidencia> findIncidenciasById(@PathVariable Long id){
        Optional<Incidencia> incidenciaOptional = inRepository.findById(id);
        if (incidenciaOptional.isPresent()){
            Incidencia incidenciaUnid = incidenciaOptional.get();
            return new ResponseEntity<>(incidenciaUnid, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/ocorrencias/novo")
    public Incidencia newIncidencia(@RequestBody Incidencia newIncidencia){
        return inRepository.save(newIncidencia);
    }
}
