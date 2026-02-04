/**
 * Slideshow Picker Component
 * Reusable picker for product slideshows, image testing, background switching
 *
 * Usage:
 *   const picker = new SlideshowPicker({
 *     container: '#picker-container',
 *     target: '#slideshow-target',
 *     slides: [
 *       { id: 'slide1', label: 'Slide 1', image: 'path/to/image.jpg' },
 *       { id: 'slide2', label: 'Slide 2', image: 'path/to/image2.jpg' },
 *     ],
 *     controls: [
 *       { id: 'light', label: 'Light' },
 *       { id: 'standard', label: 'Standard', active: true },
 *       { id: 'heavy', label: 'Heavy' },
 *     ],
 *     onSlideChange: (slideId) => {},
 *     onControlChange: (controlId) => {},
 *   });
 */

class SlideshowPicker {
  constructor(options) {
    this.options = {
      container: null,
      target: null,
      slides: [],
      controls: [],
      autoplay: false,
      autoplayInterval: 5000,
      showInfo: true,
      infoTitle: 'Slideshow',
      infoDescription: 'Click to select a slide',
      theme: 'dark', // 'dark' or 'light'
      size: 'default', // 'small', 'default', 'large'
      position: 'bottom-center', // 'bottom-center', 'bottom-left', 'bottom-right', 'top-center', etc.
      onSlideChange: null,
      onControlChange: null,
      classPrefix: 'bg-',
      ...options
    };

    this.currentSlide = null;
    this.currentControl = null;
    this.autoplayTimer = null;
    this.progressTimer = null;

    this.init();
  }

  init() {
    // Find or create container
    if (typeof this.options.container === 'string') {
      this.container = document.querySelector(this.options.container);
    } else {
      this.container = this.options.container;
    }

    if (!this.container) {
      console.error('SlideshowPicker: Container not found');
      return;
    }

    // Find target element
    if (typeof this.options.target === 'string') {
      this.target = document.querySelector(this.options.target);
    } else {
      this.target = this.options.target;
    }

    // Set initial states
    const activeSlide = this.options.slides.find(s => s.active);
    this.currentSlide = activeSlide ? activeSlide.id : this.options.slides[0]?.id;

    const activeControl = this.options.controls.find(c => c.active);
    this.currentControl = activeControl ? activeControl.id : this.options.controls[0]?.id;

    this.render();
    this.bindEvents();

    if (this.options.autoplay) {
      this.startAutoplay();
    }
  }

  render() {
    const positionClasses = this.getPositionClasses();
    const themeClass = this.options.theme === 'light' ? 'slideshow-picker--light' : '';
    const sizeClass = this.options.size !== 'default' ? `slideshow-picker--${this.options.size}` : '';

    let html = `
      <div class="slideshow-picker ${positionClasses} ${themeClass} ${sizeClass}">
        <span class="slideshow-picker__label">Slides</span>
        <div class="slideshow-picker__options">
    `;

    // Render slide options
    this.options.slides.forEach(slide => {
      const activeClass = slide.id === this.currentSlide ? 'active' : '';
      html += `
        <div class="slideshow-picker__option ${activeClass}" data-slide="${slide.id}">
          <img src="${slide.image}" alt="${slide.label}">
          <span class="slideshow-picker__option-label">${slide.label}</span>
        </div>
      `;
    });

    html += '</div>';

    // Render controls if any
    if (this.options.controls.length > 0) {
      html += '<div class="slideshow-picker__controls">';
      this.options.controls.forEach(control => {
        const activeClass = control.id === this.currentControl ? 'active' : '';
        html += `
          <button class="slideshow-picker__btn ${activeClass}" data-control="${control.id}">
            ${control.label}
          </button>
        `;
      });
      html += '</div>';
    }

    // Autoplay indicator
    if (this.options.autoplay) {
      html += `
        <div class="slideshow-picker__autoplay">
          <span class="slideshow-picker__autoplay-dot"></span>
          <span class="slideshow-picker__autoplay-label">Auto</span>
        </div>
        <div class="slideshow-picker__progress">
          <div class="slideshow-picker__progress-bar"></div>
        </div>
      `;
    }

    html += '</div>';

    // Render info panel
    if (this.options.showInfo) {
      html += `
        <div class="slideshow-picker__info">
          <h4>${this.options.infoTitle}</h4>
          <p>${this.options.infoDescription}</p>
          <div class="slideshow-picker__info-selection">
            Current: <strong class="slideshow-picker__current-name">${this.getCurrentSlideName()}</strong>
          </div>
        </div>
      `;
    }

    this.container.innerHTML = html;

    // Cache elements
    this.pickerEl = this.container.querySelector('.slideshow-picker');
    this.infoEl = this.container.querySelector('.slideshow-picker__info');
    this.currentNameEl = this.container.querySelector('.slideshow-picker__current-name');
    this.progressBar = this.container.querySelector('.slideshow-picker__progress-bar');
  }

  getPositionClasses() {
    const classes = [];
    const pos = this.options.position;

    if (pos.includes('top')) classes.push('slideshow-picker--top');
    if (pos.includes('left')) classes.push('slideshow-picker--left');
    if (pos.includes('right')) classes.push('slideshow-picker--right');

    return classes.join(' ');
  }

  getCurrentSlideName() {
    const slide = this.options.slides.find(s => s.id === this.currentSlide);
    return slide ? slide.label : '';
  }

  bindEvents() {
    // Slide selection
    this.container.querySelectorAll('.slideshow-picker__option').forEach(option => {
      option.addEventListener('click', () => {
        this.selectSlide(option.dataset.slide);
      });
    });

    // Control selection
    this.container.querySelectorAll('.slideshow-picker__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectControl(btn.dataset.control);
      });
    });
  }

  selectSlide(slideId) {
    if (slideId === this.currentSlide) return;

    // Update UI
    this.container.querySelectorAll('.slideshow-picker__option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.slide === slideId);
    });

    // Update target element classes
    if (this.target) {
      this.options.slides.forEach(slide => {
        this.target.classList.remove(this.options.classPrefix + slide.id);
      });
      this.target.classList.add(this.options.classPrefix + slideId);
    }

    // Update current name
    this.currentSlide = slideId;
    if (this.currentNameEl) {
      this.currentNameEl.textContent = this.getCurrentSlideName();
    }

    // Callback
    if (this.options.onSlideChange) {
      this.options.onSlideChange(slideId);
    }

    // Reset autoplay timer
    if (this.options.autoplay) {
      this.resetAutoplay();
    }
  }

  selectControl(controlId) {
    if (controlId === this.currentControl) return;

    // Update UI
    this.container.querySelectorAll('.slideshow-picker__btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.control === controlId);
    });

    // Update target element classes
    if (this.target) {
      this.options.controls.forEach(control => {
        this.target.classList.remove('overlay-' + control.id);
      });
      this.target.classList.add('overlay-' + controlId);
    }

    this.currentControl = controlId;

    // Callback
    if (this.options.onControlChange) {
      this.options.onControlChange(controlId);
    }
  }

  startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.options.autoplayInterval);

    this.startProgress();
  }

  stopAutoplay() {
    clearInterval(this.autoplayTimer);
    clearInterval(this.progressTimer);
    if (this.progressBar) {
      this.progressBar.style.width = '0%';
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }

  startProgress() {
    if (!this.progressBar) return;

    let progress = 0;
    const step = 100 / (this.options.autoplayInterval / 100);

    this.progressBar.style.width = '0%';

    this.progressTimer = setInterval(() => {
      progress += step;
      this.progressBar.style.width = Math.min(progress, 100) + '%';
    }, 100);
  }

  nextSlide() {
    const currentIndex = this.options.slides.findIndex(s => s.id === this.currentSlide);
    const nextIndex = (currentIndex + 1) % this.options.slides.length;
    this.selectSlide(this.options.slides[nextIndex].id);
  }

  prevSlide() {
    const currentIndex = this.options.slides.findIndex(s => s.id === this.currentSlide);
    const prevIndex = (currentIndex - 1 + this.options.slides.length) % this.options.slides.length;
    this.selectSlide(this.options.slides[prevIndex].id);
  }

  destroy() {
    this.stopAutoplay();
    this.container.innerHTML = '';
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SlideshowPicker;
}
