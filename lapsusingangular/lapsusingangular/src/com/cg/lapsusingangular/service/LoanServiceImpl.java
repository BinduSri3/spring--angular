package com.cg.lapsusingangular.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.lapsusingangular.beans.Loans;
import com.cg.lapsusingangular.dao.ILoanDao;

@Transactional
@Service("loanservice")
public class LoanServiceImpl  implements ILoanService{

	@Autowired
	ILoanDao lndao;
	
	@Override
	public void addLoan(Loans lns) {
		// TODO Auto-generated method stub
	  lndao.addLoan(lns);
		
	}
	
	@Override
	public List<Loans> getAllLoans() {
		// TODO Auto-generated method stub
		return lndao.getAllLoans();
	}

	@Override
	public void deleteLoan(String pgname) {
		// TODO Auto-generated method stub
		 lndao.deleteLoan(pgname);
				
	}

	@Override
	public Loans searchLoan(String pgname) {
		// TODO Auto-generated method stub
		return lndao.searchEmployee(pgname);
	}

	@Override
	public void updateLoan(Loans lns) {
		// TODO Auto-generated method stub
		lndao.updateEmployee(lns);
	}

}
