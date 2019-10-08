package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import entities.Article;
import java.util.ArrayList;

public class ArticleRepository {
	private final String table = "articles";

	   public ArrayList<Article> getArticle(Connection cnx) throws SQLException {
	      ArrayList<Article> articlesList = new ArrayList<Article>();
	      try{
	         PreparedStatement query = cnx.prepareStatement("SELECT * FROM " + this.table);
	         ResultSet result = query.executeQuery();
	         while(result.next()){
	        	 
	             int id_article = Integer.parseInt(result.getString("id_article")) ;
	             int code_article = Integer.parseInt(result.getString("code_article"));
	             String name_article = result.getString("name_article");
	             int stock_article = Integer.parseInt(result.getString("stock_article"));
	             int unit_price_article = Integer.parseInt(result.getString("unit_price_article"));

	            Article a = new Article(id_article,code_article,name_article,stock_article,unit_price_article); //Create the object article
	            articlesList.add(a); //Add the object 
	            System.out.println("SELECT Realizado - Objeto producto realizado de forma exitosa.");
	         }
	         /*resultado.close();
	         consulta.close();
	         conexion.close();*/
	      }catch(SQLException ex){
	         throw new SQLException(ex);
	      }
	      return articlesList;
	   }       
}
