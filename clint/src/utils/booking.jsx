export const calTotal = (checkIn, checkOut, price) => {
  if (!checkIn || !checkOut) return;
  //milli 1000 =1 วินาที 1000*60*60*24
  const milliDay = checkOut.getTime() - checkIn.getTime();
  const diffDay = milliDay / (1000 * 60 * 60 * 24);

  //calprice
  const total = diffDay * price;
  return { total, diffDay };
};

