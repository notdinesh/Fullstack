package com.java.gift.model;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "gift_token")
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Token {
    
   @Id
   @GeneratedValue(strategy = GenerationType.UUID)
   private String id;
   private String token;
   @Enumerated(EnumType.STRING)
   @Builder.Default
   private TokenType tokenType = TokenType.BEARER;
   private boolean expired;
   private boolean revoked;

   @ManyToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL)
   @JoinColumn(name = "user_id")
   private User user;
}
