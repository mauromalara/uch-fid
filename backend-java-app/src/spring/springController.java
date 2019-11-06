package spring;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bl.PrincipalService;
import model.PrincipalModel;

@RestController
public class springController {
	
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public springGET greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new springGET(counter.incrementAndGet(),
                            String.format(template, name));
    }
    @RequestMapping("/test")
    public ArrayList<PrincipalModel> getTest() throws SQLException {
    	PrincipalService bl = new PrincipalService();
    	ArrayList<PrincipalModel> result = new ArrayList<PrincipalModel>();
    	result = bl.getTest();
    	
    	return result;
    }
    @RequestMapping("/article")
    public String getArtcle() throws SQLException {
    	PrincipalService bl = new PrincipalService();
    	bl.getTest();
    	return null;
    }
    @RequestMapping("/order")
    public String getOrder() throws SQLException {
    	PrincipalService bl = new PrincipalService();
    	bl.getTest();
    	return null;
    }
}
