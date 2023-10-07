export function stopAnimation() {
  const loader = document.getElementById('loading');
  if(loader?.classList.contains('start-loading')) {
    loader.classList.remove('start-loading');
  }

  loader?.classList.add('stop-loading');
}

export function startAnimation() {
  const loader = document.getElementById('loading');
  if(loader?.classList.contains('stop-loading')) {
    loader.classList.remove('stop-loading');
  }

  loader?.classList.add('start-loading');
}