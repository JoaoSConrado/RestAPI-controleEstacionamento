package br.com.api.controleestacionamento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.controleestacionamento.entity.VagaEstacionamentoEntity;

@Repository
public interface VagaEstacionamentoRepository extends JpaRepository<VagaEstacionamentoEntity, Long> {

	boolean existsByPlacaCarro(String placaCarro);
	boolean existsByNumeroVagaEstacionamento(String numeroVagaEstacionamento);
	boolean existsByApartamentoAndBloco(String apartamento, String bloco);

}
