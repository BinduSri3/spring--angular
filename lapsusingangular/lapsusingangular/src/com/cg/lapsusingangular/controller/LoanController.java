package com.cg.lapsusingangular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cg.lapsusingangular.beans.Loans;
import com.cg.lapsusingangular.service.ILoanService;


@RestController
public class LoanController {
	
	@Autowired
	ILoanService loanservice;
		


	@RequestMapping(value ="/loans/create/",consumes = MediaType.APPLICATION_JSON_VALUE,headers="Accept=application/json",method = RequestMethod.POST)
	public List<Loans> createLoan(@RequestBody Loans lns) {
		
		System.out.println("hiiii");
		System.out.println(lns);
		loanservice.addLoan(lns);
		return loanservice.getAllLoans();
}
	
	
	@RequestMapping(value = "/loans",method = RequestMethod.GET,headers="Accept=application/json")
	public List<Loans> getAllCounties(Model model) {
		
		
		return loanservice.getAllLoans();
		
	}
	
	@RequestMapping(value = "/loans/delete/{pgname}",
			headers="Accept=application/json",method = RequestMethod.DELETE)
	public List<Loans> deleteEmployee(@PathVariable("pgname") String pgname) {
		System.out.println(pgname);
		loanservice.deleteLoan(pgname);
		return loanservice.getAllLoans();
}
	
	
	@RequestMapping(value ="/loans/search/{pgname}",headers="Accept=application/json",method = RequestMethod.GET)
	public Loans searchEmployee(@PathVariable("pgname") String pgname) {
		System.out.println("In search");
		return loanservice.searchLoan(pgname);
}
	
	@RequestMapping(value ="/loans/update/",consumes = MediaType.APPLICATION_JSON_VALUE,headers="Accept=application/json",method = RequestMethod.PUT)
	public List<Loans> updateEmployee(@RequestBody Loans lns) {
		
		System.out.println("Update");
		System.out.println(lns);
		loanservice.updateLoan(lns);
		return loanservice.getAllLoans();
}
	
}
