package br.com.api.controleestacionamento.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_VAGA_ESTACIONAMENTO")
public class VagaEstacionamentoEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true, length = 10)
	private String numeroVagaEstacionamento;

	@Column(nullable = false, unique = true, length = 7)
	private String placaCarro;

	@Column(nullable = false, length = 70)
	private String marcaCarro;

	@Column(nullable = false, length = 70)
	private String modeloCarro;

	@Column(nullable = false, length = 70)
	private String corCarro;

	@Column(nullable = false)
	private LocalDateTime registraData;

	@Column(nullable = false, length = 130)
	private String nomeResponsavel;

	@Column(nullable = false, length = 30)
	private String apartamento;

	@Column(nullable = false, length = 30)
	private String bloco;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumeroVagaEstacionamento() {
		return numeroVagaEstacionamento;
	}

	public void setNumeroVagaEstacionamento(String numeroVagaEstacionamento) {
		this.numeroVagaEstacionamento = numeroVagaEstacionamento;
	}

	public String getPlacaCarro() {
		return placaCarro;
	}

	public void setPlacaCarro(String placaCarro) {
		this.placaCarro = placaCarro;
	}

	public String getMarcaCarro() {
		return marcaCarro;
	}

	public void setMarcaCarro(String marcaCarro) {
		this.marcaCarro = marcaCarro;
	}

	public String getModeloCarro() {
		return modeloCarro;
	}

	public void setModeloCarro(String modeloCarro) {
		this.modeloCarro = modeloCarro;
	}

	public String getCorCarro() {
		return corCarro;
	}

	public void setCorCarro(String corCarro) {
		this.corCarro = corCarro;
	}

	public LocalDateTime getRegistraData() {
		return registraData;
	}

	public void setRegistraData(LocalDateTime registraData) {
		this.registraData = registraData;
	}

	public String getNomeResponsavel() {
		return nomeResponsavel;
	}

	public void setNomeResponsavel(String nomeResponsavel) {
		this.nomeResponsavel = nomeResponsavel;
	}

	public String getApartamento() {
		return apartamento;
	}

	public void setApartamento(String apartamento) {
		this.apartamento = apartamento;
	}

	public String getBloco() {
		return bloco;
	}

	public void setBloco(String bloco) {
		this.bloco = bloco;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
