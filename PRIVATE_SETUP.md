# Configuración Local - Imágenes Privadas

Este archivo explica cómo configurar las imágenes privadas en tu versión local del proyecto.

## 📁 Estructura de Imágenes Privadas

Para usar tus propias imágenes privadas:

1. **Crea la carpeta de imágenes privadas:**
   ```
   mkdir img/fotos-priv
   ```

2. **Añade tus imágenes:**
   - `img/fotos-priv/primera_imagen.jpg` - Para la primera carta
   - `img/fotos-priv/segunda_imagen.jpg` - Para la segunda carta  
   - `img/fotos-priv/tercera_imagen.jpg` - Para la tercera carta

3. **Actualiza el HTML local:**
   Cambia en `index.html` las rutas de:
   - `img/placeholder_1.jpg` → `img/fotos-priv/primera_imagen.jpg`
   - `img/placeholder_2.jpg` → `img/fotos-priv/segunda_imagen.jpg` 
   - `img/placeholder_3.jpg` → `img/fotos-priv/tercera_imagen.jpg`

## 🛡️ Protección de Privacidad

- ✅ La carpeta `img/fotos-priv/` está en `.gitignore`
- ✅ Tus imágenes privadas NUNCA se subirán a Git
- ✅ El repositorio público usa imágenes placeholder

## 💡 Nota Importante

**SIEMPRE** verifica antes de hacer commit que tus imágenes privadas no estén siendo añadidas:
```bash
git status
```

Si ves `img/fotos-priv/` en la lista, NO hagas commit. Revisa tu `.gitignore`.
