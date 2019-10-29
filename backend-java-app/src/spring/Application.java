package spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import dal.MySQLAccess;

@SpringBootApplication
public class Application {
	
    public static void main(String[] args) {
    	MySQLAccess cnn = new MySQLAccess();
    	cnn.getConnection();
        SpringApplication.run(Application.class, args);
    }
}