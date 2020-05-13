package com.cg.lapsusingangular.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Loanoffer")

public class Loans {

	@Id
	@Column(name="pgm_name")
	private String programName;
	@Column(name="pgm_description")
	private String programDescription;
	@Column(name="loan_type")
	private String loanType;
	@Column(name="pgm_duration")
	private int programDuration;
	
	@Column(name="min_amount")
	private int minimumAmount;
	
	@Column(name="max_amount")
	private int maximumAmount;
	
	@Column(name="rate_of_interest")
	private int rateOfInterest;
	
	@Column(name="proofs_required")
	private String proofsRequired;
	
	
	public String getProgramName() {
		return programName;
	}

	public void setProgramName(String programName) {
		this.programName = programName;
	}

	public String getProgramDescription() {
		return programDescription;
	}

	public void setProgramDescription(String programDescription) {
		this.programDescription = programDescription;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public int getProgramDuration() {
		return programDuration;
	}

	public void setProgramDuration(int programDuration) {
		this.programDuration = programDuration;
	}

	public int getMinimumAmount() {
		return minimumAmount;
	}

	public void setMinimumAmount(int minimumAmount) {
		this.minimumAmount = minimumAmount;
	}

	public int getMaximumAmount() {
		return maximumAmount;
	}

	public void setMaximumAmount(int maximumAmount) {
		this.maximumAmount = maximumAmount;
	}

	public int getRateOfInterest() {
		return rateOfInterest;
	}

	public void setRateOfInterest(int rateOfInterest) {
		this.rateOfInterest = rateOfInterest;
	}

	public String getProofsRequired() {
		return proofsRequired;
	}

	public void setProofsRequired(String proofsRequired) {
		this.proofsRequired = proofsRequired;
	}

	
	public Loans() {
		// TODO Auto-generated constructor stub
	}

	public Loans(String programName, String programDescription, String loanType, int programDuration,
			int minimumAmount, int maximumAmount, int rateOfInterest, String proofsRequired) {
		super();
		this.programName = programName;
		this.programDescription = programDescription;
		this.loanType = loanType;
		this.programDuration = programDuration;
		this.minimumAmount = minimumAmount;
		this.maximumAmount = maximumAmount;
		this.rateOfInterest = rateOfInterest;
		this.proofsRequired = proofsRequired;
	}

	
	
	
	
	
	
}
