import {
  allegro_init,
  set_gfx_mode,
  load_bmp,
  stretch_blit,
  screen,
  SCREEN_H,
  SCREEN_W,
  END_OF_MAIN,
  loop,
  enable_debug,
} from "../src/allegro.js";

enable_debug("debug");

// Globally declared bitmap object
function main() {
  // Initialises allegro.js
  allegro_init();

  // Installs graphics at given canvas in 640x480 resolution
  set_gfx_mode("canvas_id", 0, 640, 480, 0, 0);

  // Loads an image into the bitmap object
  const logo = load_bmp("data/allegro.png");

  // the following function will get called as soon
  // as the image finishes loading
  loop(() => {
    // renders the loaded image on the screen
    stretch_blit(logo, screen, 0, 0, logo.w, logo.h, 0, 0, SCREEN_W, SCREEN_H);
  }, 100);

  return 0;
}
END_OF_MAIN(main);
