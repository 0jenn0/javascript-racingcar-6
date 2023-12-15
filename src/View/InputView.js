import { Console } from '@woowacourse/mission-utils';
import SYMBOLS from '../Constants/symbol.js';

const InputView = Object.freeze({
  promptPurchaseAmount: async () => {
    const input = await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);

    return input;
  },

  promptWinningLottoNumbers: async () => {
    const input = await Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`);

    return input.split(SYMBOLS.comma);
  },

  prompotBonusNumber: async () => {
    const input = await Console.readLineAsync(`보너스 번호를 입력해 주세요.\n`);

    return input;
  },
});

export default InputView;
