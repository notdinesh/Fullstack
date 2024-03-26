package com.java.gift.Service;

import com.java.gift.model.Gift;

import java.util.List;

public interface GiftService {
    List<Gift> getAllGifts();

    Gift getGiftById(Long id);

    Gift createGift(Gift gift);

    Gift updateGift(Long id, Gift gift);

    void deleteGift(Long id);
}
