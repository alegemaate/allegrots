////////////////////////////////////////////
/// @name TYPES
//@{

/// Special types
export type ALLEGRO_CANVAS = {
  w: number;
  h: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ready: boolean;
};

export type CONFIG_DATA = Record<string, Record<string, string>>;

export type CONFIG = {
  file: string;
  data: CONFIG_DATA;
  ready: boolean;
  type: "config";
};

/// Timer object
/// @param timer timer function
/// @param id timer id
export type TIMER = {
  timer: () => void;
  id: number;
};

/// Touch object
/// This is not a function, it's the structure of touch object found in touch[] array and inside touch_pressed touch_released. You can retain the touch obect picked up from touch_pressed in your code, but remember to let go of the dead ones.
/// @param x,y current touch position
/// @param mx,my delta position (amount of pixels moved)
/// @param px,py previous touch position
/// @param sx,sy starting touch position
/// @param id touch id
/// @param age how many loops is the touch in
/// @param dead true when touch is released
export type ALLEGRO_TOUCH_EVENT = {
  sx: number;
  sy: number;
  mx: number;
  my: number;
  px: number;
  py: number;
  x: number;
  y: number;
  id: number;
  dead: boolean;
  age: number;
};

/// 1.2.1
export type fixed = number;

/// 1.2.2 Bitmap object
/// This is not a function, it's the structure of bitmap object returned from load_bitmap() and create_bitmap(). For every bitmap laoded or created, a canvas element is created. Loaded images are then drawn onto the canvas, so that you can easily manipulate images and everything is consistent. You can also load a single file two times and modify it differently for each instance.
/// @param w bitmap width
/// @param h bitmap height
/// @param canvas underlying canvas element, used to draw the bitmap onto stuff
/// @param context canvas' rendering context, used to draw stuff onto this bitmap
/// @param ready flags whether loading of the bitmap is complete
/// @param type object type, "bmp" in this case
export type BITMAP = {
  w: number;
  h: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ready: boolean;
  type: "bmp";
};

/// 1.2.3 Rle Bitmap
export type RLE_SPRITE = {
  w: number;
  h: number;
  color_depth: number;
};

/// 1.2.4 Rle Bitmap
export type COMPILED_SPRITE = {
  w: number;
  h: number;
  color_depth: number;
  planar: number;
};

/// 1.2.5 Joy info
export type JOYSTICK_INFO = {
  flags: number;
  num_sticks: number;
  num_buttons: number;
  stick: JOYSTICK_STICK_INFO[];
  button: JOYSTICK_STICK_INFO[];
};

/// 1.2.6
export type JOYSTICK_BUTTON_INFO = {
  b: number;
  name: string;
};

/// 1.2.7
export type JOYSTICK_STICK_INFO = {
  flags: number;
  num_axis: number;
  axis: JOYSTICK_AXIS_INFO[];
  name: string;
};

/// 1.2.8
export type JOYSTICK_AXIS_INFO = {
  pos: number;
  d1: number;
  d2: number;
  name: string;
};

/// 1.2.9
export type GFX_MODE_LIST = {
  num_modes: number;
  mode: GFX_MODE;
};

/// 1.2.10
export type GFX_MODE = {
  width: number;
  height: number;
  bpp: number;
};

/// 1.2.11
export const PAL_SIZE = 256;

/// 1.2.12
export type PALETTE = RGB;

/// 1.2.13
export type RGB = {
  r: number;
  g: number;
  b: number;
};

/// 1.2.14
export type V3D = {
  x: number;
  y: number;
  z: number;
  u: number;
  v: number;
  c: number;
};

/// 1.2.15
export type V3D_f = {
  x: number;
  y: number;
  z: number;
  u: number;
  v: number;
  c: number;
};

/// 1.2.16
export type COLOR_MAP = {};

/// 1.2.17
export type RGB_MAP = {};

/// 1.2.18
export type al_ffblk = {
  attrib: number;
  time: number;
  name: string;
};

/// 1.2.19
export type DATAFILE = {
  dat: string;
  type: number;
  size: number;
  prop: string;
};

/// 1.2.20
export type MATRIX = {
  v: number[][];
  t: number[];
};

/// 1.2.21
export type MATRIX_f = {
  v: number[][];
  t: number[];
};

/// 1.2.22
export type QUAT = {
  w: number;
  x: number;
  y: number;
  z: number;
};

/// 1.2.23
export type DIALOG = {
  proc: () => {};
  x: number;
  y: number;
  w: number;
  h: number;
  fg: number;
  bg: number;
  flags: number;
  d1: number;
  d2: number;
  dp: string;
  dp2: string;
  dp3: string;
};

/// 1.2.24
export type MENU = {
  text: string;
  proc: () => void;
  child: MENU;
  flags: number;
  dp: string;
};

/// 1.2.25
export type DIALOG_PLAYER = {};

/// 1.2.26
export type MENU_PLAYER = {};

/// 1.2.27 Font object
/// This is not a function but a reference entry for font object returned by load_font() and create_cont().
/// @param element <style> element containing the font-face declaration. Not available for create_font() fonts and default font object.
/// @param file font file name, empty string for default font and create_font() typefaces.
/// @param name font-family name
/// @param type object type, "fnt" in this case
export type FONT = {
  element: HTMLStyleElement | null;
  file: string;
  name: string;
  size: number;
  type: "fnt";
};

/// 1.2.28
export type ZBUFFER = {};

/// 1.2.29 Sample object
/// This is not a function. This is a sample object structure returned by load_sample().
/// @param element HTML <audio> element containing the sound properties
/// @param file sample file name
/// @param volume sample volume, this is combined with global volume
/// @param ready loaded indicator flag
/// @param type object type, "snd" in this case
export type SAMPLE = {
  element: HTMLAudioElement;
  file: string;
  volume: number;
  ready: boolean;
  type: "snd";
};

/// 1.2.30
export type MIDI = {};

/// 1.2.31
export type AUDIOSTREAM = {
  voice: number;
};

/// 1.2.32
export type PACKFILE = {};

/// 1.2.33
export type PACKFILE_VTABLE = {};

/// 1.2.34
export type LZSS_PACK_DATE = {};

/// 1.2.35
export type LZSS_UNPACK_DATA = {};

//@}
