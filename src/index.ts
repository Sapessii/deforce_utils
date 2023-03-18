import { formatUnits } from 'ethers/lib/utils.js';
import BigNumber from 'bignumber.js';
import { BigNumberish } from 'ethers';

export const BIG_ZERO = BigNumber(0);
export const BIG_TEN = BigNumber(10);

export const shortenAddress = (address: `0x${string}`, charsNumber: number) => {
  return `${address.substring(0, charsNumber)}...${address.substring(address.length - charsNumber, address.length)}`;
};

export const formatBigNumberToFixed = (numberToFormat: BigNumberish, decimalsToShow: number): string => {
  try {
    const decimals = 18;
    const formattedString = formatUnits(numberToFormat, decimals);
    return (+formattedString).toFixed(decimalsToShow);
  } catch {
    return '0';
  }
};

export const convertToWei = (value: string | number, decimals = 18): string => {
  try {
    const valueBN = BigNumber(value);
    const decimalsBN = getFullDecimalMultiplier(decimals);
    const result = valueBN.times(decimalsBN);
    if (result.toFixed().includes('.')) {
      return '0';
    } else {
      return result.toFixed();
    }
  } catch {
    return '0';
  }
};

const getFullDecimalMultiplier = (decimals: number) => {
  return BIG_TEN.pow(decimals);
};
