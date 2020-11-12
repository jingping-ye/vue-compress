#!/usr/bin/env node
const compressing = require("compressing");

const chalk = require("chalk");
const successLog = (message) => console.log(chalk.green(`${message}`)); // success log
const errorLog = (error) => console.log(chalk.red(`${error}`)); // error log

const time = () => {
  const d = new Date();
  const formatNumber = (value) => `${value < 10 ? "0" + value : value}`; // 将小于10的值左补零
  let val = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
  let formatTime = val.map((item) => {
    return formatNumber(item);
  });
  return formatTime.join("");
};

/**
 * 执行压缩
 */
const runCompress = async function () {
  try {
    const compressDir = process.argv[2]; // 需要压缩的文件夹
    let compressionFileName = `${compressDir}.${time()}.zip`;
    await compressing.zip.compressDir(`${compressDir}`, compressionFileName);
    successLog(`已压缩${compressDir}包！`);
  } catch (err) {
    errorLog(`压缩出错：${err}`);
  }
};

runCompress();
