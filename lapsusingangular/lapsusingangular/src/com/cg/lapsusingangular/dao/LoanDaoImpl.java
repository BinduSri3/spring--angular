package com.cg.lapsusingangular.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.cg.lapsusingangular.beans.Loans;

@Repository("lndao")
public class LoanDaoImpl implements ILoanDao{
	@PersistenceContext
	EntityManager entitymanager;
	
	
	@Override
	public void addLoan(Loans lns) {
		// TODO Auto-generated method stub
		entitymanager.persist(lns);
		entitymanager.flush();
		//return pro.getProdId();
	}
	
	
	@Override
	public List<Loans> getAllLoans() {
		// TODO Auto-generated method stub
		Query queryOne=entitymanager.createQuery("FROM Loans");
        List<Loans> allProduct=queryOne.getResultList();		
		return allProduct;
	}

	@Override
	public void deleteLoan(String pgname) {
		// TODO Auto-generated method stub
		Query queryTwo=entitymanager.
				createQuery("DELETE FROM Loans WHERE programName=:pgname");
		queryTwo.setParameter("pgname",pgname);
		queryTwo.executeUpdate();
		
		
	}
	
	@Override
	public Loans searchEmployee(String pgname) {
		// TODO Auto-generated method stub
		Loans lns=new Loans();
		Query queryOne=entitymanager.createQuery("FROM Loans");
        List<Loans> allProduct=queryOne.getResultList();	
		
		for (Loans loans : allProduct) {
			if(loans.getProgramName().equals(pgname)) {
				lns=loans;
				break;
			}
		}
		return lns;
	}
	

	@Override
	public void updateEmployee(Loans lns) {
		// TODO Auto-generated method stub
		Query queryThree=entitymanager.createQuery("UPDATE Loans SET programDescription=:pgmdes,loanType=:ltype,programDuration=:pgmdur,minimumAmount=:minamt,maximumAmount=:maxamt,rateOfInterest=:rate,proofsRequired=:proofs WHERE programName=:pgname");
		queryThree.setParameter("pgname",lns.getProgramName());
		queryThree.setParameter("pgmdes",lns.getProgramDescription());
		queryThree.setParameter("ltype",lns.getLoanType());
		queryThree.setParameter("pgmdur",lns.getProgramDuration());
		queryThree.setParameter("minamt",lns.getMinimumAmount());
		queryThree.setParameter("maxamt",lns.getMaximumAmount());
		queryThree.setParameter("rate",lns.getRateOfInterest());
		queryThree.setParameter("proofs",lns.getProofsRequired());
	
	
		queryThree.executeUpdate();
	}
	

}
