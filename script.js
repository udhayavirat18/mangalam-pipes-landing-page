document.addEventListener("DOMContentLoaded", () => {
  // 1. STICKY HEADER
  const header = document.querySelector(".main-header");
  const heroSection = document.querySelector(".hero-section");

  if(header && heroSection) {
      window.addEventListener("scroll", () => {
        const firstFoldHeight = heroSection.offsetTop + heroSection.offsetHeight;
        if (window.scrollY > firstFoldHeight) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      });
  }

  // 2. CAROUSEL & HOVER ZOOM
  const mainImg = document.querySelector(".main-carousel-img");
  const thumbnails = document.querySelectorAll(".thumb-img");
  const imageWrapper = document.querySelector(".main-image-wrapper");

  if(thumbnails.length > 0 && mainImg) {
      thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", function () {
          mainImg.src = this.src;
          document.querySelector(".thumb-img.active").classList.remove("active");
          this.classList.add("active");
        });
      });
  }

  if(imageWrapper && mainImg) {
      imageWrapper.addEventListener("mousemove", function (e) {
        const rect = imageWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        mainImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        mainImg.classList.add("zoomed");
      });

      imageWrapper.addEventListener("mouseleave", function () {
        mainImg.classList.remove("zoomed");
        mainImg.style.transformOrigin = "center center";
      });
  }

  // 3. FAQ TOGGLE
  const faqCards = document.querySelectorAll(".faq-card");
  faqCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  // 4. MODALS LOGIC
  const modalDownload = document.getElementById('modal-download');
  const modalQuote = document.getElementById('modal-quote');
  
  const btnDownload = document.getElementById('btn-download-datasheet');
  const btnQuoteHero = document.getElementById('btn-request-quote-hero'); // Top hero button
  const btnQuote = document.getElementById('btn-request-quote'); // Performance section button
  
  const closeBtns = document.querySelectorAll('.modal-close');

  // Open Modal 1 (Catalogue)
  if(btnDownload) {
      btnDownload.addEventListener('click', (e) => {
          e.preventDefault();
          modalDownload.classList.add('active');
      });
  }

  // Open Modal 2 (Quote)
  const openQuoteModal = (e) => {
      e.preventDefault();
      modalQuote.classList.add('active');
  };
  if(btnQuoteHero) btnQuoteHero.addEventListener('click', openQuoteModal);
  if(btnQuote) btnQuote.addEventListener('click', openQuoteModal);

  // Close Modals
  closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          modalDownload.classList.remove('active');
          modalQuote.classList.remove('active');
      });
  });

  // Close when clicking outside modal content
  window.addEventListener('click', (e) => {
      if (e.target === modalDownload) {
          modalDownload.classList.remove('active');
      }
      if (e.target === modalQuote) {
          modalQuote.classList.remove('active');
      }
  });

});