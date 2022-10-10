package br.com.api.controleestacionamento.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.controleestacionamento.entity.VagaEstacionamentoEntity;
import br.com.api.controleestacionamento.service.VagaEstacionamentoService;
import br.com.api.controleestacionamento.vo.VagaEstacionamentoVO;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/vaga-estacionamento")
public class VagaEstacionamentoController {

	@Autowired
	VagaEstacionamentoService vagaEstacionamentoService;

	@PostMapping
	public ResponseEntity<Object> salvarVagaEstacionamento(
			@RequestBody @Valid VagaEstacionamentoVO vagaEstacionamentoVO) {

		if (vagaEstacionamentoService.existsByPlacaCarro(vagaEstacionamentoVO.getPlacaCarro())) {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body("ERRO: Já existe um cadastro com essa placa de carro informada!");
		}
		if (vagaEstacionamentoService
				.existsByNumeroVagaEstacionamento(vagaEstacionamentoVO.getNumeroVagaEstacionamento())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("ERRO: Já existe um cadastro na vaga solicitada!");
		}
		if (vagaEstacionamentoService.existsByApartamentoAndBloco(vagaEstacionamentoVO.getApartamento(),
				vagaEstacionamentoVO.getBloco())) {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body("ERRO: Já existe um cadastro com esse Apartamento/Bloco!");
		}

		var vagaEstacionamentoEntity = new VagaEstacionamentoEntity();
		BeanUtils.copyProperties(vagaEstacionamentoVO, vagaEstacionamentoEntity);
		vagaEstacionamentoEntity.setRegistraData(LocalDateTime.now(ZoneId.of("America/Sao_Paulo")));
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(vagaEstacionamentoService.salvar(vagaEstacionamentoEntity));
	}

	@GetMapping
	public ResponseEntity<Page<VagaEstacionamentoEntity>> getAllVagaEstacionamento(
			@PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
		return ResponseEntity.status(HttpStatus.OK).body(vagaEstacionamentoService.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> getIdVagaEstacionamento(@PathVariable(value = "id") Long id) {
		Optional<VagaEstacionamentoEntity> vagaEstacionamentoEntityOptional = vagaEstacionamentoService.findById(id);
		if (!vagaEstacionamentoEntityOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERRO: A vaga solicitada não foi encontrada!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(vagaEstacionamentoEntityOptional.get());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteVagaEstacionamento(@PathVariable(value = "id") Long id) {
		Optional<VagaEstacionamentoEntity> vagaEstacionamentoEntityOptional = vagaEstacionamentoService.findById(id);
		if (!vagaEstacionamentoEntityOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERRO: A vaga solicitada não foi encontrada!");
		}
		vagaEstacionamentoService.delete(vagaEstacionamentoEntityOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("SUCESSO: A vaga foi deletada!");
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateVagaEstacionamento(@PathVariable(value = "id") Long id,
			@RequestBody @Valid VagaEstacionamentoVO vagaEstacionamentoVO) {
		Optional<VagaEstacionamentoEntity> vagaEstacionamentoEntityOptional = vagaEstacionamentoService.findById(id);
		if (!vagaEstacionamentoEntityOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERRO: A vaga solicitada não foi encontrada!");
		}
		VagaEstacionamentoEntity vagaEstacionamentoEntity = vagaEstacionamentoEntityOptional.get();
		vagaEstacionamentoEntity.setNumeroVagaEstacionamento(vagaEstacionamentoVO.getNumeroVagaEstacionamento());
		vagaEstacionamentoEntity.setPlacaCarro(vagaEstacionamentoVO.getPlacaCarro());
		vagaEstacionamentoEntity.setModeloCarro(vagaEstacionamentoVO.getModeloCarro());
		vagaEstacionamentoEntity.setMarcaCarro(vagaEstacionamentoVO.getMarcaCarro());
		vagaEstacionamentoEntity.setCorCarro(vagaEstacionamentoVO.getCorCarro());
		vagaEstacionamentoEntity.setNomeResponsavel(vagaEstacionamentoVO.getNomeResponsavel());
		vagaEstacionamentoEntity.setApartamento(vagaEstacionamentoVO.getApartamento());
		vagaEstacionamentoEntity.setBloco(vagaEstacionamentoVO.getBloco());

		return ResponseEntity.status(HttpStatus.OK).body(vagaEstacionamentoService.salvar(vagaEstacionamentoEntity));
	}

}
