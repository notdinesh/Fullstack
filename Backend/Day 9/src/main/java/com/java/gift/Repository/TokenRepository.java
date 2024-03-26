package com.java.gift.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.gift.model.Token;

public interface TokenRepository  extends JpaRepository<Token, String>{
    List<Token> findAllByUser_IdAndRevokedFalseAndExpiredFalse(String userId);

    Optional<Token> findByToken(String token);
}
