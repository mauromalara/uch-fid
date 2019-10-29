package controler;

import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bl.PrincipalService;
import spring.springGET;

@RestController

public class PrincipalController {
	
	  private static final String template = "Hello, %s!";
	    private final AtomicLong counter = new AtomicLong();

	    @RequestMapping("/greeting")
	    public springGET greeting(@RequestParam(value="name", defaultValue="World") String name) {
	        return new springGET(counter.incrementAndGet(),
	                            String.format(template, name));
	    }
	    
	    @RequestMapping("/getMemberActivity") // URL sufig
	    public String GetData() throws SQLException {
	    	PrincipalService bl = new PrincipalService();
	    	bl.GetArticles();
	    	return "Servicio";
	    }
}
