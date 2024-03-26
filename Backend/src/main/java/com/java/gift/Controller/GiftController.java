package com.java.gift.Controller;

import com.java.gift.model.Gift;
import com.java.gift.Service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gifts")
public class GiftController {

    @Autowired
    private GiftService giftService;

    @GetMapping
    public List<Gift> getAllGifts() {
        return giftService.getAllGifts();
    }

    @GetMapping("/{id}")
    public Gift getGiftById(@PathVariable Long id) {
        return giftService.getGiftById(id);
    }

    @PostMapping
    public Gift createGift(@RequestBody Gift gift) {
        return giftService.createGift(gift);
    }

    @PutMapping("/{id}")
    public Gift updateGift(@PathVariable Long id, @RequestBody Gift gift) {
        return giftService.updateGift(id, gift);
    }

    @DeleteMapping("/{id}")
    public void deleteGift(@PathVariable Long id) {
        giftService.deleteGift(id);
    }
}
