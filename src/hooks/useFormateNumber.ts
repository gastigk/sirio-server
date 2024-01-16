/**
 * Formats a number with commas as thousands separators.
 * @param {number} number - The number to format.
 * @return {string} The formatted number.
 */

export function formatNumber(number: number): string {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
