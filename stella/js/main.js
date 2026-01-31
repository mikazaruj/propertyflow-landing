// PropertyFlow Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Pro checkout button (placeholder until Paddle is configured)
  const proCheckoutBtn = document.getElementById('pro-checkout-btn');
  if (proCheckoutBtn) {
    proCheckoutBtn.addEventListener('click', function() {
      // TODO: Replace with Paddle checkout when configured
      // Paddle.Checkout.open({
      //   items: [{ priceId: 'pri_pro_monthly', quantity: 1 }],
      //   settings: {
      //     successUrl: window.location.origin + '/success.html',
      //     displayMode: 'overlay'
      //   }
      // });
      alert('Paddle checkout will be configured here.\n\nFor now, install the free extension to get started!');
    });
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.querySelector('.faq-content').classList.add('hidden');
        otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
      });

      // Toggle current item
      if (!isOpen) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  });
});
