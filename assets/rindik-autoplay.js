// UPP JBTB 4 Bali — start the Rindik-inspired ambience on the first user interaction.
// Browsers block true autoplay until the visitor interacts with the page.
(function () {
  function enableFirstClickMusic() {
    const music = document.querySelector('.music, [data-music], #musicToggle');
    if (!music) return;

    const note = document.querySelector('.audio-note');
    if (note) note.textContent = '🎵 Alunan Rindik Bali · backsound instrumental · otomatis menyala saat web diklik';

    const startOnFirstInteraction = function (event) {
      // Let an intentional click on the music control be handled by its own listener.
      if (event.target && event.target.closest && event.target.closest('.music, [data-music], #musicToggle')) return;
      if (!music.classList.contains('playing')) music.click();
      document.removeEventListener('pointerdown', startOnFirstInteraction, true);
      document.removeEventListener('keydown', startOnFirstInteraction, true);
    };

    document.addEventListener('pointerdown', startOnFirstInteraction, true);
    document.addEventListener('keydown', startOnFirstInteraction, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enableFirstClickMusic, { once: true });
  } else {
    enableFirstClickMusic();
  }
})();
