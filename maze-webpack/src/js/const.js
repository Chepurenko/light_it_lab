export const width = 21;
export const height = 21;
export const validation = function validation (a, b) {
    if (a >= 0 && a < width && b >= 0 && b < height)	{
    return true
  }
};
export let gebi = function(id) {	return document.getElementById(id) };
