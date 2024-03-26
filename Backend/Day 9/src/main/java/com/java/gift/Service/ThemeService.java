package com.java.gift.Service;

import com.java.gift.model.Theme;

import java.util.List;

public interface ThemeService {
    List<Theme> getAllThemes();
    Theme getThemeById(Long id);
    Theme createTheme(Theme theme);
    Theme updateTheme(Long id, Theme theme);
    void deleteTheme(Long id);
}
