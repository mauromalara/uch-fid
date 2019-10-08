package entities;

public class Article {
	private Integer id_article;
	private Integer code_article;
	private String name_article;
	private Integer stock_article;
	private Integer unit_price_article;
	
	public Article(Integer id_article, Integer code_article, String name_article, Integer stock_article,
			Integer unit_price_article) {
		super();
		this.id_article = id_article;
		this.code_article = code_article;
		this.name_article = name_article;
		this.stock_article = stock_article;
		this.unit_price_article = unit_price_article;
	}
	
	public Integer getId_article() {
		return id_article;
	}
	public void setId_article(Integer id_article) {
		this.id_article = id_article;
	}
	public Integer getCode_article() {
		return code_article;
	}
	public void setCode_article(Integer code_article) {
		this.code_article = code_article;
	}
	public String getName_article() {
		return name_article;
	}
	public void setName_article(String name_article) {
		this.name_article = name_article;
	}
	public Integer getStock_article() {
		return stock_article;
	}
	public void setStock_article(Integer stock_article) {
		this.stock_article = stock_article;
	}
	public Integer getUnit_price_article() {
		return unit_price_article;
	}
	public void setUnit_price_article(Integer unit_price_article) {
		this.unit_price_article = unit_price_article;
	}
	
	
}
