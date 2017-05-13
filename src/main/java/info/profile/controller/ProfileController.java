package info.profile.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ProfileController {
	@RequestMapping("/")
	public ModelAndView getProfile(){
		return new ModelAndView("profile");
	}
}
