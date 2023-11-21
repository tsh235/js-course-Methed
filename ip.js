'use strict';

import { listIPv4 } from "./ipv4.js";

/*
Вам дан список ip-адресов -> IPv4
задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов
*/

const getUniqueIpCount = (list) => {
  const uniqueIpCount = [...new Set(list)];
  console.log(`Количество уникальный ip-адресов составляет ${uniqueIpCount.length}`);

  // либо так:
  // const uniqueIpCount = new Set(list);
  // console.log(uniqueIpCount.size);
};

const ipList = listIPv4;
getUniqueIpCount(ipList);