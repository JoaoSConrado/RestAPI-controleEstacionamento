package br.com.api.controleestacionamento.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.api.controleestacionamento.entity.VagaEstacionamentoEntity;
import br.com.api.controleestacionamento.repository.VagaEstacionamentoRepository;

@Service
public class VagaEstacionamentoService {

	@Autowired
	VagaEstacionamentoRepository vagaEstacionamentoRepository;

	@Transactional
	public VagaEstacionamentoEntity salvar(VagaEstacionamentoEntity vagaEstacionamentoEntity) {
		return vagaEstacionamentoRepository.save(vagaEstacionamentoEntity);
	}

	public boolean existsByPlacaCarro(String placaCarro) {
		return vagaEstacionamentoRepository.existsByPlacaCarro(placaCarro);
	}

	public boolean existsByNumeroVagaEstacionamento(String numeroVagaEstacionamento) {
		return vagaEstacionamentoRepository.existsByNumeroVagaEstacionamento(numeroVagaEstacionamento);
	}

	public boolean existsByApartamentoAndBloco(String apartamento, String bloco) {
		return vagaEstacionamentoRepository.existsByApartamentoAndBloco(apartamento, bloco);
	}

	public Page<VagaEstacionamentoEntity> findAll(Pageable pageable) {
		return vagaEstacionamentoRepository.findAll(pageable);
	}

	public Optional<VagaEstacionamentoEntity> findById(Long id) {
		return vagaEstacionamentoRepository.findById(id);
	}

	@Transactional
	public void delete(VagaEstacionamentoEntity vagaEstacionamentoEntity) {
		vagaEstacionamentoRepository.delete(vagaEstacionamentoEntity);
	}

}
