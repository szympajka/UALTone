import {
  forEach, mergeWith, isFunction, isNull, isUndefined,
} from 'lodash';

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const toSize = (kb) => {
  const x = kb * 1000;
  let l = 0;
  let n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) n /= 1024;
  return (`${n.toFixed(n >= 10 || l < 1 ? 0 : 2)} ${units[l]}`);
};

export const multiFn = (fns, ...args) => {
  if (fns) {
    if (Array.isArray(fns)) {
      fns.forEach(fn => fn(...args));
    } else {
      return fns(...args);
    }
  }
  return null;
};

export const mergeWithFnCustomizer = (objValue, srcValue) => {
  if (isFunction(objValue) && isFunction(srcValue)) {
    return (...args) => {
      objValue(...args);
      srcValue(...args);
    };
  }
  return null;
};

export const mergeWithFn = (object, source) => mergeWith(object, source, mergeWithFnCustomizer);

export const delayApi = (delay = 2000) => new Promise(((resolve) => {
  setTimeout(resolve, delay);
}));

export const toHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const truncate = (value) => {
  if (value < 0) return 0;
  if (value > 255) return 255;

  return value;
};

export const rgbToHex = (r, g, b) => toHex(truncate(r)) + toHex(truncate(g)) + toHex(truncate(b));

export const hexToRgb = (hex) => {
  const shortHex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const longHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  let color = hex;

  color = color.replace(shortHex, (m, r, g, b) => r + r + g + g + b + b);

  const rgb = longHex.exec(color);

  return rgb ? {
    r: parseInt(rgb[1], 16),
    g: parseInt(rgb[2], 16),
    b: parseInt(rgb[3], 16),
  } : null;
};

export const isDefined = v => !isNull(v) && !isUndefined(v) && v !== '';

export const getContrastColor = (color) => {
  const rgb = hexToRgb(color);

  if ((rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) > 186) {
    return '#000000';
  }

  return '#ffffff';
};

/**
 * Function will remove non defined primitive values from flat object
 *
 * - Preserved values: "", 0, [], {}, false
 * - Removed values: null, undefined
 * @returns modified object
 * */
export const omitEmptyPreserveNatural = (obj) => {
  const newObj = {};

  forEach(obj, (p, k) => {
    if (p !== null && p !== undefined) {
      newObj[k] = p;
    }
  });

  return newObj;
};
