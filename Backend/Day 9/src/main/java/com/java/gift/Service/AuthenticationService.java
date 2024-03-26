package com.java.gift.Service;

import com.java.gift.dto.Request.ForgotPasswordRequest;
import com.java.gift.dto.Request.LoginRequest;
import com.java.gift.dto.Request.RegisterRequest;
import com.java.gift.dto.Response.BasicResponse;
import com.java.gift.dto.Response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
    
}
