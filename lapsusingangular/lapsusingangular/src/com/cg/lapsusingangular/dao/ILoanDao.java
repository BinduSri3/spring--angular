package com.cg.lapsusingangular.dao;

import java.util.List;

import com.cg.lapsusingangular.beans.Loans;

public interface ILoanDao {

	public void addLoan(Loans lns);

	 public List<Loans> getAllLoans();

public void deleteLoan(String pgname);

	public Loans searchEmployee(String pgname);

public void updateEmployee(Loans lns);


}
