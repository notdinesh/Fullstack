package com.java.gift.Service.impl;

import com.java.gift.model.Gift;
import com.java.gift.Repository.GiftRepository;
import com.java.gift.Service.GiftService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GiftServiceImpl implements GiftService {

    @Autowired
    private GiftRepository giftRepository;

    @Override
    public List<Gift> getAllGifts() {
        return giftRepository.findAll();
    }

    @Override
    public Gift getGiftById(Long id) {
        Optional<Gift> optionalGift = giftRepository.findById(id);
        return optionalGift.orElse(null);
    }

    @Override
    public Gift createGift(Gift gift) {
        return giftRepository.save(gift);
    }

    @Override
    public Gift updateGift(Long id, Gift updatedGift) {
        Optional<Gift> optionalGift = giftRepository.findById(id);
        if (optionalGift.isPresent()) {
            Gift gift = optionalGift.get();
            gift.setGiftName(updatedGift.getGiftName());
            gift.setGiftImageUrl(updatedGift.getGiftImageUrl());
            gift.setGiftDetails(updatedGift.getGiftDetails());
            gift.setGiftPrice(updatedGift.getGiftPrice());
            return giftRepository.save(gift);
        }
        return null;
    }

    @Override
    public void deleteGift(Long id) {
        giftRepository.deleteById(id);
    }
}
