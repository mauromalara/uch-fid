package bl;

import java.util.ArrayList;

import dal.MySQLAccess;
import model.PrincipalModel;

public class PrincipalService {
MySQLAccess connection;
	
	public PrincipalService() {
		
		this.connection = new MySQLAccess();
		
	}

	public ArrayList<PrincipalModel> GetArticles(){
		
		ArrayList<PrincipalModel> result = new ArrayList<PrincipalModel>();
		
		PrincipalModel articleOne = new PrincipalModel();

		articleOne.id_article=Integer.parseInt("0");
		articleOne.code_article=Integer.parseInt("2550515");
		articleOne.name_article="Computadora";
		articleOne.stock_article=Integer.parseInt("200");
		articleOne.unit_price_article=Integer.parseInt("400000");

		result.add(articleOne);
		return result;
	}
}
