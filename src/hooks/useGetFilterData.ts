import moment, { Moment } from "moment";

/**
 * Filters products that were ordered within the last 7 days.
 * @param {Array} products - The products to filter.
 * @param {Moment} last7Days - The start date of the period to filter.
 * @param {Moment} currentDate - The end date of the period to filter.
 * @return {Array} The filtered products.
 */

export function getFilterData(
  products: any[],
  last7Days: Moment,
  currentDate: Moment
) {
  const last7DaysData = products.filter((item: any) => {
    const orderDate = moment(item.orderDate, "DD/MM/YY h:mm a");
    return orderDate.isBetween(last7Days, currentDate, "day", "[]"); // Include both start and end dates
  });

  return last7DaysData;
}

/**
 * Calculates the total number of sold items.
 * @param {Array} todayData - The products sold today.
 * @return {number} The total number of sold items.
 */

export function getSellsItems(todayData: any[]) {
  const sellsItems = todayData.reduce((sum: number, product: any) => {
    return sum + product.totalCard;
  }, 0);

  return sellsItems;
}

/**
 * Calculates the total sales.
 * @param {Array} todayData - The products sold today.
 * @return {number} The total sales.
 */

export function getSells(todayData: any[]) {
  const sells = todayData.reduce((sum: number, product: any) => {
    return sum + product.price * product.totalCard;
  }, 0);

  return sells;
}
