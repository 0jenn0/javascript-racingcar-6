import { ERROR_MESSAGES } from '../Constants/constants';
import AppError from '../Error/AppError.js';

const PurchaseAmountValidator = Object.freeze({
  checkIsDevidedByThousand: (input) => {
    if (input % 1000 !== 0) throw new AppError(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  },
  checkIsNan: (input) => {
    if (Number.isNaN(input)) throw new AppError(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  },
  checkRange: (input) => {
    if (input < 1000) throw new AppError(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  },
  check: (input) => {
    PurchaseAmountValidator.checkIsNan(input);
    PurchaseAmountValidator.checkIsDevidedByThousand(input);
    PurchaseAmountValidator.checkRange(input);
  },
});

export default PurchaseAmountValidator;
