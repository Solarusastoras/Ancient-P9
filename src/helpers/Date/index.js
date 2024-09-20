export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};
// Pour faire correspondre l'index retourné par getMonth() avec les clés de votre objet MONTHS, vous devez ajouter 1 à l'index retourné par getMonth().
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
