package com.letsson.letsson;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.PropertySource;


@SpringBootApplication
public class LetssonApplication{
	public static final String APPLICATION_LOCATIONS = "spring.config.location="
			+ "classpath:application.properties";


	public static void main(String[] args) {
		new SpringApplicationBuilder(LetssonApplication.class)
				.properties(APPLICATION_LOCATIONS)
				.run(args);
	}



}
