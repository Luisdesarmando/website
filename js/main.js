/**
 * The Languages Academy - Versão 2.0 Core Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Glass Header & Scroll Detection
  const header = document.querySelector('.header-v2');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Header Dropdown Navigation
  const navDropdownToggle = document.getElementById('navDropdownToggle');
  const navDropdownPanel = document.getElementById('navDropdownPanel');

  if (navDropdownToggle && navDropdownPanel) {
    const toggleMenu = () => {
      const isOpen = navDropdownPanel.classList.toggle('open');
      navDropdownToggle.classList.toggle('active', isOpen);
      navDropdownToggle.setAttribute('aria-expanded', isOpen);
    };

    navDropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking any link inside the panel
    navDropdownPanel.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        navDropdownPanel.classList.remove('open');
        navDropdownToggle.classList.remove('active');
        navDropdownToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navDropdownPanel.contains(e.target) && !navDropdownToggle.contains(e.target)) {
        navDropdownPanel.classList.remove('open');
        navDropdownToggle.classList.remove('active');
        navDropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDropdownPanel.classList.contains('open')) {
        navDropdownPanel.classList.remove('open');
        navDropdownToggle.classList.remove('active');
        navDropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Hero Video continuous loop playback
  const heroVideo = document.getElementById('heroPromoVideo');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(() => {});
  }

  // Testimonials Video Players (Click-to-play with audio)
  const testimonialCards = document.querySelectorAll('.cinema-video-card');
  const allTestimonialVideos = document.querySelectorAll('.cinema-video-card video');

  testimonialCards.forEach(container => {
    const video = container.querySelector('video');
    const overlay = container.querySelector('.cinema-overlay');

    if (video && overlay) {
      overlay.addEventListener('click', () => {
        // Pause all other testimonial videos
        allTestimonialVideos.forEach(v => {
          if (v !== video) {
            v.pause();
            const parent = v.closest('.cinema-video-card');
            const parentOverlay = parent?.querySelector('.cinema-overlay');
            if (parentOverlay) parentOverlay.classList.remove('hidden');
          }
        });

        // Play active video with controls
        video.controls = true;
        video.play();
        overlay.classList.add('hidden');
      });

      video.addEventListener('pause', () => {
        if (!video.seeking && !video.ended) {
          overlay.classList.remove('hidden');
        }
      });

      video.addEventListener('ended', () => {
        overlay.classList.remove('hidden');
        video.controls = false;
        video.load();
      });
    }
  });

  // 4. Language Explorer Interactive Tabs (English, Spanish, Portuguese)
  const langTabs = document.querySelectorAll('.lang-tab-btn');
  const langPanels = document.querySelectorAll('.lang-tab-panel');
  const langNavLinks = document.querySelectorAll('.lang-nav-link');

  const switchLanguageTab = (targetLang) => {
    langTabs.forEach(t => {
      if (t.getAttribute('data-lang') === targetLang) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
    langPanels.forEach(p => p.classList.remove('active'));
    const targetPanel = document.getElementById(`lang-${targetLang}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  };

  langTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetLang = tab.getAttribute('data-lang');
      switchLanguageTab(targetLang);
    });
  });

  langNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetLang = link.getAttribute('data-lang');
      if (targetLang) switchLanguageTab(targetLang);
    });
  });

  // 5. FAQ Accordion 2.0
  const faqItems = document.querySelectorAll('.faq-item-v2');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-v2');
    const answer = item.querySelector('.faq-answer-v2');

    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer-v2');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 35 + 'px';
      }
    });
  });

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstAnswer = firstItem.querySelector('.faq-answer-v2');
    firstItem.classList.add('active');
    if (firstAnswer) firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 35 + 'px';
  }

  // 6. Modal de Aula Experimental Grátis
  const trialModal = document.getElementById('trialModal');
  const openTrialBtns = document.querySelectorAll('.open-trial-modal');
  const closeTrialBtn = document.getElementById('closeTrialModal');

  openTrialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (trialModal) {
        trialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    if (trialModal) {
      trialModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  closeTrialBtn?.addEventListener('click', closeModal);

  trialModal?.addEventListener('click', (e) => {
    if (e.target === trialModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && trialModal?.classList.contains('active')) {
      closeModal();
    }
  });

  // 7. Modal Form -> Formatted WhatsApp URL
  const trialForm = document.getElementById('trialForm');
  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('trialName')?.value.trim();
      const email = document.getElementById('trialEmail')?.value.trim();
      const language = document.getElementById('trialLanguage')?.value;
      const level = document.getElementById('trialLevel')?.value;
      const notes = document.getElementById('trialNotes')?.value.trim();

      const text = `Olá, Professor Luis! Gostaria de agendar minha Aula Experimental Grátis na The Languages Academy.%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*E-mail:* ${encodeURIComponent(email)}%0A*Idioma:* ${encodeURIComponent(language)}%0A*Nível Estimado:* ${encodeURIComponent(level)}%0A*Disponibilidade:* ${encodeURIComponent(notes || 'A combinar')}`;

      window.open(`https://wa.me/5554991863491?text=${text}`, '_blank');
      closeModal();
      trialForm.reset();
    });
  }

  // 8. Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('cfFirstName')?.value.trim();
      const lastName = document.getElementById('cfLastName')?.value.trim();
      const email = document.getElementById('cfEmail')?.value.trim();
      const subject = document.getElementById('cfSubject')?.value;
      const message = document.getElementById('cfMessage')?.value.trim();

      const text = `Olá, Professor Luis! Nova mensagem recebida pelo site The Languages Academy:%0A%0A*Nome:* ${encodeURIComponent(firstName + ' ' + lastName)}%0A*E-mail:* ${encodeURIComponent(email)}%0A*Assunto:* ${encodeURIComponent(subject)}%0A*Mensagem:* ${encodeURIComponent(message)}`;

      window.open(`https://wa.me/5554991863491?text=${text}`, '_blank');
      
      const statusEl = document.getElementById('contactStatus');
      if (statusEl) {
        statusEl.innerHTML = `<div style="background:rgba(16, 185, 129, 0.15); border:1px solid #10B981; color:#10B981; padding:0.9rem; border-radius:12px; margin-top:1.2rem; font-weight:600; font-size:0.95rem;">✓ Mensagem direcionada para o WhatsApp com sucesso!</div>`;
      }
      contactForm.reset();
    });
  }

  // 9. Plan Pricing CTA Button -> WhatsApp
  const planBtns = document.querySelectorAll('.select-plan-btn');
  planBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan') || 'Plano de Aulas';
      const planHours = btn.getAttribute('data-hours') || '';
      const text = `Olá, Professor Luis! Gostaria de me inscrever no *${planName}* (${planHours}) da The Languages Academy. Como podemos definir os horários das minhas aulas?`;
      window.open(`https://wa.me/5554991863491?text=${encodeURIComponent(text)}`, '_blank');
    });
  });
});
