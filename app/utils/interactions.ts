"use client";

import { useEffect } from "react";

// ============================================
// NAVIGATION UTILITIES
// ============================================

export function initNavigation(): () => void {
  const navbar = document.getElementById("navbar");
  if (!navbar) return () => {};

  // Scroll effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}

// ============================================
// MOBILE MENU UTILITIES
// ============================================

export function initMobileMenu(): () => void {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) return () => {};

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");

    // Animate hamburger to X
    const icon = menuBtn.querySelector("svg");
    if (icon) {
      if (mobileMenu.classList.contains("hidden")) {
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`;
      } else {
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`;
      }
    }
  };

  // Close menu on link click
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      const icon = menuBtn.querySelector("svg");
      if (icon) {
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`;
      }
    });
  });

  menuBtn.addEventListener("click", toggleMenu);

  return () => {
    menuBtn.removeEventListener("click", toggleMenu);
  };
}

// ============================================
// FAQ ACCORDION UTILITIES
// ============================================

export function initFAQ(): void {
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length === 0) return;

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-button");
    const content = item.querySelector(".faq-content");

    if (!button || !content) return;

    const toggleFAQ = () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Close all other FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherButton = otherItem.querySelector(".faq-button");
          const otherContent = otherItem.querySelector(".faq-content");
          if (otherButton && otherContent) {
            otherButton.setAttribute("aria-expanded", "false");
            otherContent.classList.remove("open");
            (otherContent as HTMLElement).style.maxHeight = "0";
          }
        }
      });

      // Toggle current FAQ
      button.setAttribute("aria-expanded", (!isExpanded).toString());

      if (!isExpanded) {
        content.classList.add("open");
        (content as HTMLElement).style.maxHeight = content.scrollHeight + "px";
      } else {
        content.classList.remove("open");
        (content as HTMLElement).style.maxHeight = "0";
      }
    };

    button.addEventListener("click", toggleFAQ);
  });
}

// ============================================
// COUNTER ANIMATION UTILITIES
// ============================================

export function initCounters(): () => void {
  const counters = document.querySelectorAll(".counter");
  if (counters.length === 0) return () => {};

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target as HTMLElement;
        const targetAttr = counter.getAttribute("data-target");
        if (targetAttr) {
          const target = parseInt(targetAttr, 10);
          animateCounter(counter, target);
        }
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));

  return () => observer.disconnect();
}

function animateCounter(element: HTMLElement, target: number): void {
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime: number): void {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (target - start) * easeOutQuart);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(updateCounter);
}

// ============================================
// PORTFOLIO FILTER UTILITIES
// ============================================

export function initPortfolioFilter(): void {
  const filterButtons = document.querySelectorAll(".portfolio-filter");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-primary-500", "text-white");
        btn.classList.add("bg-white/5", "text-dark-300");
      });
      button.classList.add("active", "bg-primary-500", "text-white");
      button.classList.remove("bg-white/5", "text-dark-300");

      // Filter items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        const itemElement = item as HTMLElement;

        if (filter === "all" || category === filter) {
          itemElement.style.display = "block";
          itemElement.style.animation = "fadeIn 0.5s ease-out";
        } else {
          itemElement.style.display = "none";
        }
      });
    });
  });
}

// ============================================
// NOTIFICATION UTILITIES
// ============================================

export function showNotification(type: "success" | "error" | "info", message: string): void {
  // Remove existing notifications
  const existing = document.querySelector(".notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.className = `notification fixed top-24 right-4 z-50 px-6 py-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform translate-x-full`;

  if (type === "success") {
    notification.classList.add("bg-green-500", "text-white");
  } else if (type === "error") {
    notification.classList.add("bg-red-500", "text-white");
  } else {
    notification.classList.add("bg-primary-500", "text-white");
  }

  const icon =
    type === "success"
      ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
      : type === "error"
      ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
      : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';

  notification.innerHTML = `
    <div class="flex items-center gap-3">
      ${icon}
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.classList.remove("translate-x-full");
  });

  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ============================================
// SMOOTH SCROLL UTILITIES
// ============================================

export function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId || '');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ============================================
// SCROLL ANIMATIONS UTILITIES
// ============================================

export function initAnimations(): () => void {
  const animateElements = document.querySelectorAll('[class*="animate-"]');

  if (animateElements.length === 0) return () => {};

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    observerOptions
  );

  animateElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

// ============================================
// CUSTOM HOOKS FOR REACT
// ============================================

export function useMobileMenu(): void {
  useEffect(() => {
    initMobileMenu();
  }, []);
}

export function useFAQ(): void {
  useEffect(() => {
    initFAQ();
  }, []);
}

export function useCounters(): void {
  useEffect(() => {
    initCounters();
  }, []);
}

export function usePortfolioFilter(): void {
  useEffect(() => {
    initPortfolioFilter();
  }, []);
}

export function useSmoothScroll(): void {
  useEffect(() => {
    initSmoothScroll();
  }, []);
}

export function useAnimations(): void {
  useEffect(() => {
    initAnimations();
  }, []);
}

export function useNavigation(): void {
  useEffect(() => {
    initNavigation();
  }, []);
}

// ============================================
// DEBOUNCE & THROTTLE UTILITIES
// ============================================

export function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle<T extends (...args: unknown[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ============================================
// COPY TO CLIPBOARD UTILITY
// ============================================

export async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      showNotification("success", "Copied to clipboard!");
    } catch {
      showNotification("error", "Failed to copy");
    }
  }
}

// ============================================
// MAGNETIC BUTTONS (Optional Enhancement)
// ============================================

export function initMagneticButtons(): () => void {
  const magneticButtons = document.querySelectorAll(".btn-primary, .btn-secondary");

  if (magneticButtons.length === 0) return () => {};

  const cleanups: (() => void)[] = [];

  magneticButtons.forEach((button) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      (button as HTMLElement).style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const handleMouseLeave = () => {
      (button as HTMLElement).style.transform = "translate(0, 0)";
    };

    button.addEventListener("mousemove", handleMouseMove as EventListener);
    button.addEventListener("mouseleave", handleMouseLeave);

    cleanups.push(() => {
      button.removeEventListener("mousemove", handleMouseMove as EventListener);
      button.removeEventListener("mouseleave", handleMouseLeave);
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
