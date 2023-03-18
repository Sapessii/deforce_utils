import { formatUnits } from 'ethers/lib/utils.js';
import BigNumber from 'bignumber.js';
import { BigNumberish } from 'ethers';

export const BIG_ZERO = new BigNumber(0);
export const BIG_TEN = new BigNumber(10);

export const shortenAddress = (address: `0x${string}`, charsNumber: number) => {
  return `${address.substring(0, charsNumber)}...${address.substring(address.length - charsNumber, address.length)}`;
};

export const formatBigNumberToFixed = (numberToFormat: BigNumberish, decimalsToShow: number) => {
  const decimals = 18;
  const formattedString = formatUnits(numberToFormat, decimals);
  return (+formattedString).toFixed(decimalsToShow);
};

export const convertToWei = (value: string | number, decimals = 18) => {
  try {
    const valueBN = new BigNumber(value);
    const decimalsBN = getFullDecimalMultiplier(decimals);
    const result = valueBN.times(decimalsBN);
    if (result.toString().includes('.')) {
      return '0';
    } else {
      return result.toString();
    }
  } catch {
    return '0';
  }
};

const getFullDecimalMultiplier = (decimals: number) => {
  return BIG_TEN.pow(decimals);
};
