package entities;

public class Order {
	private Integer id_order;
	private Integer number_order;
	private Integer date_order;
	private String username;
	private String name_client;
	private Integer total_order;
	
	public Order(Integer id_order, Integer number_order, Integer date_order, String username, String name_client,
			Integer total_order) {
		super();
		this.id_order = id_order;
		this.number_order = number_order;
		this.date_order = date_order;
		this.username = username;
		this.name_client = name_client;
		this.total_order = total_order;
	}
	
	public Integer getId_order() {
		return id_order;
	}
	public void setId_order(Integer id_order) {
		this.id_order = id_order;
	}
	public Integer getNumber_order() {
		return number_order;
	}
	public void setNumber_order(Integer number_order) {
		this.number_order = number_order;
	}
	public Integer getDate_order() {
		return date_order;
	}
	public void setDate_order(Integer date_order) {
		this.date_order = date_order;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName_client() {
		return name_client;
	}
	public void setName_client(String name_client) {
		this.name_client = name_client;
	}
	public Integer getTotal_order() {
		return total_order;
	}
	public void setTotal_order(Integer total_order) {
		this.total_order = total_order;
	}
	
	
}
