package com.ap.proyecto;

import java.util.Arrays;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class ProyectoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoApplication.class, args);
	}
        @Bean
        public CorsFilter CorsFilter(){
            CorsConfiguration  corsConfiguration = new CorsConfiguration();
            corsConfiguration.setAllowCredentials(true);
            corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
            corsConfiguration.setAllowedHeaders(Arrays.asList("Origin","Acces-Control-Allow-Origin",
                                                               "Accept","Authorization","Origin,Accept","X-Requested-With",
                                                               "Access-Control-Request-Method","Access-Control-Request-Headers"));
            corsConfiguration.setExposedHeaders(Arrays.asList("Origin","Content-Type","Accept","Authorization","Acces-Control-Allow-Origin","Access-Control-Allow-Origin","Access-Control-Allow-Credentials"));
            corsConfiguration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","OPTIONS"));
            UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
            urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
            return new CorsFilter(urlBasedCorsConfigurationSource);
        }

}
