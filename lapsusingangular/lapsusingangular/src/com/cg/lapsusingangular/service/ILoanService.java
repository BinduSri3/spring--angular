package com.cg.lapsusingangular.service;

import java.util.List;

import com.cg.lapsusingangular.beans.Loans;

public interface ILoanService {

	public void addLoan(Loans lns);
public List<Loans> getAllLoans();
public void deleteLoan(String pgname);
public Loans searchLoan(String pgname);
public void updateLoan(Loans lns);


}
