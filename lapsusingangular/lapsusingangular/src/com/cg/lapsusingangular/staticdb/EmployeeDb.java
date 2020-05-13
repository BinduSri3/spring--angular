package com.cg.lapsusingangular.staticdb;

import java.util.ArrayList;
import java.util.List;

import com.cg.lapsusingangular.beans.Loans;



public class EmployeeDb {
private static List<Loans> empList=new ArrayList<Loans>();
	
	static{
		
		empList.add(new Loans("car","it is a car loan","purchase",1,20000,200000,2,"aadhar"));
		empList.add(new Loans("home","it is a home loan","purchase",1,20000,200000,2,"aadhar"));
		empList.add(new Loans("c","it is a home loan","purchase",1,20000,200000,2,"aadhar"));
	}
	public static List<Loans> getEmpList() {
		
		return empList;
	}

	public static void setCountryList(List<Loans> empList) {
		
		EmployeeDb.empList = empList;
	}
}

