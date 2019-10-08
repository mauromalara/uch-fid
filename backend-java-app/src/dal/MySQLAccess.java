package dal;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;

public class MySQLAccess {
	private Connection cnn = null;
	   public Connection getConnection(){
	      if (cnn == null) {
	    	  try{
		            cnn = DriverManager.getConnection("mysql://b0a9853bb934be:b5cc646e@us-cdbr-iron-east-05.cleardb.net/heroku_3f26ca8502dfdfc?reconnect=true", "b0a9853bb934be", "b5cc646e");
		            System.out.println("Connected...");
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
}
