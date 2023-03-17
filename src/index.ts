import { BigNumber } from 'ethers';
import { formatUnits } from 'ethers/lib/utils.js';

export const BIG_ZERO = BigNumber.from(0);
export const BIG_TEN = BigNumber.from(10);

export const shortenAddress = (address: `0x${string}`, charsNumber: number) => {
  return `${address.substring(0, charsNumber)}...${address.substring(address.length - charsNumber, address.length)}`;
};

export const formatBigNumberToFixed = (numberToFormat: BigNumber, decimalsToShow: number) => {
  const decimals = 18;
  const formattedString = formatUnits(numberToFormat, decimals);
  return (+formattedString).toFixed(decimalsToShow);
};

export const convertToWei = (value: string | number, decimals = 18) => {
  try {
    const valueBN: BigNumber = BigNumber.from(value);
    const decimalsBN: BigNumber = getFullDecimalMultiplier(decimals);
    const result: BigNumber = valueBN.mul(decimalsBN);
    return result.toString();
  } catch {
    return '0';
  }
};

const getFullDecimalMultiplier = (decimals: number) => {
  return BIG_TEN.pow(decimals);
};
