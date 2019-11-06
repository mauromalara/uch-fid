package bl;

import java.sql.SQLException;
import java.util.ArrayList;

import dal.MySQLAccess;

import model.PrincipalModel;

//entities
import dal.*;
import entities.*;

public class PrincipalService {
	MySQLAccess cnn = new MySQLAccess();
	
	public PrincipalService() {
		
		cnn.getConnection();	
	}
	public ArrayList<PrincipalModel> getTest(){
		
		ArrayList<PrincipalModel> result = new ArrayList<PrincipalModel>();
		
		PrincipalModel testArticle = new PrincipalModel();
		
		testArticle.id_article = Integer.parseInt("100");
		testArticle.code_article = Integer.parseInt("500");
		testArticle.name_article = "Computadora";
		testArticle.stock_article = Integer.parseInt("100");
		testArticle.unit_price_article = Integer.parseInt("500");
		
		result.add(testArticle);
		return result;
	}
	/*public ArrayList<Article> Articles(){
		
		ArticleRepository repoArticles = new ArticleRepository();
		
		ArrayList<Article> articles = new ArrayList<Article>();
		try {
			//PULL ALL THE DATA FROM THE DATA BASE
			
			articles = repoArticles.getArticles(cnn);
			
			} catch (SQLException e) {
				System.out.println("CONNECTION FAIL: "+e);
			}
		return articles;
		
	}
	
	public ArrayList<Order> Orders(){
		
		OrderRepository repoOrders = new OrderRepository();
		
		
		ArrayList<Order> orders = new ArrayList<Order>();
		try {
			//PULL ALL THE DATA FROM THE DATA BASE
			orders = repoOrders.getOrders(cnn);
			
			} catch (SQLException e) {
				System.out.println("CONNECTION FAIL: "+e);
			}
		return orders;
	}*/
}
	
	
	

