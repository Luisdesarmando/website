# The Languages Academy - Versión 2.0 (Liveluxe Parallax)

Sitio web estático institucional de última generación, ultra-rápido, visualmente llamativo y moderno para **The Languages Academy**, fundado por el profesor y poliglota internacional **Luis Armando Molina**.

Diseñado desde cero para ser desplegado de forma 100% gratuita en **GitHub Pages** (coste de hosting $0 de por vida) y vinculado a tu dominio personalizado (`thelanguagesacademy.com.br`).

---

## 🌟 Novedades y Características de la Versión 2.0

- **Estética Cósmica Dark & Glassmorphism:** Paleta profunda (`#060913`, `#090E1D`) con orbes de luz dinámicos, bordes luminosos y cristales esmerilados (`backdrop-filter: blur(16px)`).
- **Motor Parallax & Inclinación 3D (60fps+ Vanilla JS):**
  - Efecto *3D Mouse Tilt* en tarjetas de metodología, cursos y quizzes (`[data-tilt]`).
  - Capas de desplazamiento suave con velocidad diferenciada (`[data-parallax-speed]`).
  - Animaciones fluidas al hacer scroll (*Scroll Reveal* con `IntersectionObserver`).
  - Contadores numéricos interactivos animados al entrar en pantalla.
- **Hero Cinematográfico con Luz Ambiental Dinámica:**
  - Video de presentación del profesor Luis Molina con overlay interactivo de reproducción.
  - Halo ambiental que pulsa y reacciona cuando el video se reproduce.
- **Explorador Interactivo de Idiomas (Tabs):**
  - Pestañas dinámicas para **Inglês Global**, **Espanhol Fluente** y **Português para Estrangeiros (CELPE-Bras)**.
  - Grilla interactiva de niveles del Marco Común Europeo (CEFR A1 a C2).
- **Escenario Editorial Doble Foto (Professor Luis Molina):**
  - Retratos ejecutivo y de ciudadano del mundo con insignias flotantes de trayectoria internacional (Reino Unido, EE.UU., Francia, Venezuela, Brasil).
- **Cinema Lounge de Depoimentos Reais em Vídeo:**
  - 3 tarjetas de video con controles integrados para los testimonios de los alumnos **Augusto**, **Nicolas** y **Pamela**.
  - Videos optimizados mediante compresión H.264 para carga instantánea y sin consumo excesivo de datos.
- **Quizzes de Nivelación Interactivos (Hub 2.0):**
  - `test-ingles.html` (🇺🇸 Test de Nivel de Inglés CEFR A1 - C1)
  - `test-espanol.html` (🇪🇸 Prueba de Nivel de Español MCER A1 - C1)
  - `test-portugues.html` (🇧🇷 Teste de Nível de Português Brasileiro)
  - Cálculo instantáneo de puntuación y botón directo para compartir resultado y agendar aula con el profesor en WhatsApp.
- **Luxury Pricing Deck 2.0:**
  - Tarjetas de planes: **Explorador** (R$ 260), **Viajante** (R$ 520), **Aventureiro** (R$ 600 - *Más Popular*) y **Conquistador** (R$ 680).
  - Botones con enlace directo a WhatsApp con mensaje personalizado según el plan elegido.
- **Captación de Alumnos & Conversión:**
  - Botón flotante animado de WhatsApp tipo Radar.
  - Modal interactivo para solicitar la **Aula Experimental Gratuita** con envío formateado a WhatsApp.
  - Formulario de contacto con pre-llenado y direccionamiento automático.
  - Acordeón interactivo de Preguntas Frecuentes (FAQ 2.0).
  - Páginas legales adaptadas: `termos.html` y `privacidade.html` (LGPD).

---

## 📂 Estructura del Proyecto

```text
the-languages-academy-web/
├── index.html                   # Landing page principal Versión 2.0
├── test-ingles.html             # Quiz interactivo de nivelación de inglés
├── test-espanol.html            # Quiz interactivo de nivelación de español
├── test-portugues.html          # Quiz interactivo de nivelación de portugués
├── termos.html                  # Términos y condiciones
├── privacidade.html             # Política de privacidad (LGPD)
├── CNAME                        # Configuración de dominio personalizado (thelanguagesacademy.com.br)
├── favicon.ico                  # Favicon institucional
├── css/
│   └── styles.css               # Estilos completos Versión 2.0 (Glassmorphism & Neon)
├── js/
│   ├── parallax.js              # Motor 60fps de parallax, 3D tilt y contadores
│   ├── main.js                  # Lógica de navegación, modal, drawer, tabs, FAQ y WhatsApp
│   └── quiz.js                  # Motor interactivo de los quizzes de nivelación
└── assets/
    ├── images/                  # Fotos de Luis, logos transparentes y posters de video
    └── videos/                  # Videos comprimidos (Promo, Augusto, Nicolas, Pamela)
```

---

## 🛠️ Cómo Probar Localmente

Puedes abrir directamente el archivo `index.html` en cualquier navegador, o levantar un servidor local rápido con Python:

```bash
cd "C:\Carpeta Maestra\the-languages-academy-web"
python -m http.server 8000
```
Luego abre en tu navegador: `http://localhost:8000`

---

## 🌐 Pasos para Desplegar en GitHub Pages y Activar tu Dominio

### Paso 1: Crear el repositorio en GitHub
1. Entra a tu cuenta en [github.com](https://github.com) y crea un nuevo repositorio público (ej. `the-languages-academy`).
2. Sube los archivos desde la terminal:
```bash
cd "C:\Carpeta Maestra\the-languages-academy-web"
git init
git add .
git commit -m "Lanzamiento oficial The Languages Academy v2.0"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/the-languages-academy.git
git push -u origin main
```

### Paso 2: Activar GitHub Pages
1. En tu repositorio en GitHub, ve a **Settings** > **Pages**.
2. En **Build and deployment > Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
3. Haz clic en **Save**. ¡Tu web se publicará automáticamente en pocos segundos!

### Paso 3: Configurar tu Dominio Personalizado
1. En la misma sección de **Pages**, en el campo **Custom domain**, confirma que esté escrito tu dominio: `thelanguagesacademy.com.br` (o `www.thelanguagesacademy.com.br`) y dale a **Save**.
2. En el panel de control de tu registrador de dominios (Registro.br, GoDaddy, Hostinger, etc.), configura los DNS:
   - **Registro CNAME:**
     - Host: `www`
     - Destino: `TU-USUARIO.github.io`
   - **Registros A** (para la raíz `@`):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. En GitHub Pages, marca la casilla **Enforce HTTPS** para activar el certificado SSL de seguridad gratuito.
