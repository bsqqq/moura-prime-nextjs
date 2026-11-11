"use client";

import { useEffect } from "react";

// This component adds no content of its own — every word on the page is
// already server-rendered in page.js and fully present in the HTML that
// Googlebot (or any crawler) receives, with or without JavaScript running.
// It only wires up progressive-enhancement animations after mount.
export default function ScrollFX() {
  useEffect(() => {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- topbar shrink on scroll ---------- */
    var topbar = document.getElementById("topbar");
    function onScrollTop() {
      if (!topbar) return;
      if (window.scrollY > 40) topbar.classList.add("scrolled");
      else topbar.classList.remove("scrolled");
    }
    document.addEventListener("scroll", onScrollTop, { passive: true });
    onScrollTop();

    /* ---------- scroll progress rail ---------- */
    var progressFill = document.getElementById("progressFill");
    function onScrollProgress() {
      var h = document.documentElement;
      var scrollTop = h.scrollTop || document.body.scrollTop;
      var scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (progressFill) progressFill.style.height = pct + "%";
    }
    document.addEventListener("scroll", onScrollProgress, { passive: true });
    onScrollProgress();

    /* ---------- reveal on scroll ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    var io;
    if ("IntersectionObserver" in window && !reduceMotion) {
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }

    /* ---------- active section dot nav ---------- */
    var sections = document.querySelectorAll("main section, header.hero");
    var dots = document.querySelectorAll(".dotnav .dot");
    function setActive(id) {
      dots.forEach(function (d) {
        d.classList.toggle("active", d.getAttribute("data-target") === id);
      });
    }
    var navIo;
    if ("IntersectionObserver" in window) {
      navIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { threshold: 0.5 }
      );
      sections.forEach(function (s) {
        navIo.observe(s);
      });
    }

    /* ---------- counters ---------- */
    var counters = document.querySelectorAll("[data-count]");
    function animateCount(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
      var duration = 1400;
      var start = null;
      function fmt(n) {
        return n.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      }
      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = fmt(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target) + suffix;
      }
      if (reduceMotion) el.textContent = fmt(target) + suffix;
      else requestAnimationFrame(step);
    }
    var countIo;
    if ("IntersectionObserver" in window) {
      countIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              countIo.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach(function (c) {
        countIo.observe(c);
      });
    }

    /* ---------- coordinate table toggle ---------- */
    var coordToggle = document.getElementById("coordToggle");
    var coordPanel = document.getElementById("coordPanel");
    function onCoordClick() {
      var isOpen = coordPanel.classList.toggle("open");
      coordToggle.classList.toggle("open", isOpen);
      coordToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
    if (coordToggle && coordPanel) {
      coordToggle.addEventListener("click", onCoordClick);
    }

    /* ---------- hero boundary polygon draw-in ---------- */
    var plotPath = document.getElementById("plotPath");
    var drawTimeout;
    if (plotPath) {
      if (reduceMotion) {
        plotPath.style.opacity = 1;
      } else {
        var len = 1600;
        plotPath.style.strokeDasharray = len;
        plotPath.style.strokeDashoffset = len;
        plotPath.style.opacity = 1;
        drawTimeout = setTimeout(function () {
          plotPath.style.transition = "stroke-dashoffset 2.2s cubic-bezier(.22,1,.36,1)";
          plotPath.style.strokeDashoffset = "0";
        }, 260);
      }
    }

    return function cleanup() {
      document.removeEventListener("scroll", onScrollTop);
      document.removeEventListener("scroll", onScrollProgress);
      if (io) io.disconnect();
      if (navIo) navIo.disconnect();
      if (countIo) countIo.disconnect();
      if (coordToggle) coordToggle.removeEventListener("click", onCoordClick);
      if (drawTimeout) clearTimeout(drawTimeout);
    };
  }, []);

  return null;
}
