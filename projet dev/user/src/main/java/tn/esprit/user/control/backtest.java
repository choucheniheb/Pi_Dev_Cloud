package tn.esprit.user.control;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/back")
public class backtest {
  @GetMapping("/backhi")
  public  String hello()
  {
    return "back " ;
  }
}
