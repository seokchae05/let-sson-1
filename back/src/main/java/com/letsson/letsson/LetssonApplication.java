package com.letsson.letsson;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.annotation.Order;


@SpringBootApplication
@PropertySource("classpath:application.properties")


public class LetssonApplication{

	public static void main(String[] args) {
		SpringApplication.run(LetssonApplication.class, args);
	}



}
