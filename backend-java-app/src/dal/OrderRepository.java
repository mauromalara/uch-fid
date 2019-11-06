package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import entities.Order;
import java.util.ArrayList;

public class OrderRepository {
	private final String table = "orders";
/*We pull all the table order*/ 
	   public ArrayList<Order> getOrders(Connection cnx) throws SQLException {
	      ArrayList<Order> ordersList = new ArrayList<Order>();
	      try{
	         PreparedStatement query = cnx.prepareStatement("SELECT * FROM " + this.table);
	         ResultSet result = query.executeQuery();
	         while(result.next()){
	        	 
	             int id_order = Integer.parseInt(result.getString("id_order")) ;
	             int number_order = Integer.parseInt(result.getString("number_order"));
	             String username = result.getString("username");
	             int date_order = Integer.parseInt(result.getString("date_order"));
	             String name_client = result.getString("name_client");
	             int total_order = Integer.parseInt(result.getString("total_order"));

	            Order o = new Order(id_order,number_order,date_order,username,name_client,total_order); //Create the object article
	            ordersList.add(o); //Add the object 
	            System.out.println("SELECT Realizado - Objeto producto realizado de forma exitosa.");
	         }
	      }catch(SQLException ex){
	         throw new SQLException(ex);
	      }
	      return ordersList;
	   }       
}