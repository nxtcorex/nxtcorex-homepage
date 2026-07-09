"use client";

import { useEffect } from "react";

export function ScrollRevealInitializer() {
  useEffect(() => {
    // 强制浏览器重新计算布局，确保初始状态正确
    document.body.offsetHeight;

    // 添加ready标记，防止闪烁
    document.documentElement.classList.add("scroll-reveal-ready");
  }, []);

  return null;
}