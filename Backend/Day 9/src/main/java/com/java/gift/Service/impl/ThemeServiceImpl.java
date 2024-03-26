package com.java.gift.Service.impl;

import com.java.gift.model.Theme;
import com.java.gift.Repository.ThemeRepository;
import com.java.gift.Service.ThemeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemeServiceImpl implements ThemeService {

    private final ThemeRepository themeRepository;

    public ThemeServiceImpl(ThemeRepository themeRepository) {
        this.themeRepository = themeRepository;
    }

    @Override
    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    @Override
    public Theme getThemeById(Long id) {
        return themeRepository.findById(id).orElse(null);
    }

    @Override
    public Theme createTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    @Override
    public Theme updateTheme(Long id, Theme theme) {
        if (themeRepository.existsById(id)) {
            theme.setThemeId(id);
            return themeRepository.save(theme);
        }
        return null;
    }

    @Override
    public void deleteTheme(Long id) {
        themeRepository.deleteById(id);
    }
}
