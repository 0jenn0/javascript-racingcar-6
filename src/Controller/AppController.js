import { SetupController, ResultController } from './index.js';
import { InputView, OutputView } from '../View/index.js';
import CommonValidator from '../Validator/CommonValidator.js';
import PurchaseAmountValidator from '../Validator/PurchaseAmountValidator.js';
import ErrorHandler from '../Error/ErrorHandler.js';

export default class AppController {
  static async start() {
    const purchaseAmount = await ErrorHandler(AppController.readPurchaseAmount());
  }

  static async readPurchaseAmount() {
    const input = await InputView.promptPurchaseAmount();
    CommonValidator.check(input);
    PurchaseAmountValidator.check(input);
    return Number(input);
  }
}
