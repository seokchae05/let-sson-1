package com.letsson.letsson.security.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider {

    private String secretKey = "letsson";

    private long tokenValidTime = 30 * 60 * 1000L;

    private final UserDetailsService userDetailsService;
   /* private final StudentUserDetailService studentUserDetailService;
    private final TeacherUserDetailService teacherUserDetailService;*/
    private final CustomUserDetailsService customUserDetailsService;

    //객체 초기화, secretKy를 Base64로 인코딩

    @PostConstruct
    protected void init(){
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    //JWT 토큰 생성
    public String createToken(String tel, List<String> roles){
        Claims claims = Jwts.claims().setSubject(tel);//Jwt payload에 저장되는 정보 단위
        claims.put("role",roles);//정보는 key / value 쌍으로 저장된다.
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)//정보 저장
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + tokenValidTime))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
    //Jwt 토큰에서 인증 정보 조회
    public Authentication getAuthentication(String token){
       UserDetails userDetails  = userDetailsService.loadUserByUsername(this.getTel(token));
        return new UsernamePasswordAuthenticationToken(userDetails,"", userDetails.getAuthorities());
    }
    //토큰에서 회원 정보 추출
    public String getTel(String token){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    //Request의 Header에서 token 값을 가져옵니다. "X-Auth-Token":"token값"
    public String resolveToken(HttpServletRequest request){
        System.out.println("request: "+request.getHeader("X-AUTH-TOKEN"));
        return request.getHeader("X-AUTH-TOKEN");
    }
    //토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String jwtToken){
        try{
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        }catch (Exception e){
            return false;
        }
    }
}
