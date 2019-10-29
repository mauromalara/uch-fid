package spring;

import java.util.Collections;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import dal.MySQLAccess;

@SpringBootApplication
public class Application {
	
    public static void main(String[] args) {
    	MySQLAccess cnn = new MySQLAccess();
    	cnn.getConnection();
    	
    	//HERE WE CAN CONFIGURE THE SERVER PORT FOR OUR PROYECT
        SpringApplication app = new SpringApplication(Application.class);
        Object serverPort = Collections.singletonMap("server.port","8080");
        app.setDefaultProperties((Map<String, Object>)serverPort);
        app.run(args);
    }
}