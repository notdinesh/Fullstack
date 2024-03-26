package com.java.gift.Controller;

import com.java.gift.model.Theme;
import com.java.gift.Service.ThemeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/themes")
public class ThemeController {

    private final ThemeService themeService;

    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @GetMapping
    public ResponseEntity<List<Theme>> getAllThemes() {
        List<Theme> themes = themeService.getAllThemes();
        return new ResponseEntity<>(themes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Theme> getThemeById(@PathVariable Long id) {
        Theme theme = themeService.getThemeById(id);
        return theme != null ?
                new ResponseEntity<>(theme, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Theme> createTheme(@RequestBody Theme theme) {
        Theme createdTheme = themeService.createTheme(theme);
        return new ResponseEntity<>(createdTheme, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Theme> updateTheme(@PathVariable Long id, @RequestBody Theme theme) {
        Theme updatedTheme = themeService.updateTheme(id, theme);
        return updatedTheme != null ?
                new ResponseEntity<>(updatedTheme, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTheme(@PathVariable Long id) {
        themeService.deleteTheme(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
