import { random, range } from "lodash";

const btn = document.querySelector(".buyButton");

const SHIMMER_DURATION = 1000;

function generateShimmer() {
  const shimmer = document.createElement("span");
  shimmer.classList.add("shimmer");
  shimmer.style.animationDuration = `${SHIMMER_DURATION}ms`;

  btn.appendChild(shimmer);

  window.setTimeout(() => {
    shimmer.remove();
  }, SHIMMER_DURATION);
}

btn.addEventListener("mouseenter", generateShimmer);
btn.addEventListener("focus", generateShimmer);
