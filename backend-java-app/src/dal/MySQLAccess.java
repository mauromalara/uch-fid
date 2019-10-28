package dal;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;

public class MySQLAccess {
	
	private Connection cnn = null;
	   public Connection getConnection(){
	      if (cnn == null) {
	    	  try{
		            cnn = DriverManager.getConnection("mysql://b0a9853bb934be:b5cc646e@us-cdbr-iron-east-05.cleardb.net/heroku_3f26ca8502dfdfc?reconnect=true", "b0a9853bb934be", "b5cc646e");
		            System.out.println("Connected...");
		            createTable();
	            }catch (SQLException ex) {
	        	 System.out.print("ERROR ENCONTRADO: "+ex);
	        	 }
	      }
	      return cnn;
	  }
	   public void closeConnection() throws SQLException {
	      if (cnn != null) {
	         cnn.close();
	      }
	   }
	   
	   private void createTable() throws SQLException {
		    String sqlCreate1 = "CREATE TABLE IF NOT EXISTS articles "
		            + "  (id_article           INTEGER,"
		            + "   code_article            INTEGER,"
		            + "   name_article          VARCHAR(10),"
		            + "   stock_article           INTEGER,"
		            + "   unit_prince_article           INTEGER)";
		    
		    String sqlCreate2 = "CREATE TABLE IF NOT EXISTS orders "
		            + "  (id_order           INTEGER,"
		            + "   number_order            INTEGER,"
		            + "   username          VARCHAR(10),"
		            + "   name_client           VARCHAR(10),"
		            + "   total_order           INTEGER)";
		    
		    String sqlCreate3 = "CREATE TABLE IF NOT EXISTS detail_order "
		            + "  (number_order           INTEGER,"
		            + "   code_article            INTEGER,"
		            + "   quantity_article          INTEGER,"
		            + "   unit_prince_article           INTEGER)";

		    Statement stmt = cnn.createStatement();
		    stmt.execute(sqlCreate1);
		    stmt.execute(sqlCreate2);
		    stmt.execute(sqlCreate3);
		}
}
