import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoIssuance {
  static LOTTO_PRICE = 1000;

  static calculateLottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / this.LOTTO_PRICE;

    return lottoCount;
  }

  static createLotto(count) {
    const allLotto = [];

    for (let i = 0; i < count; i++) {
      allLotto.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    return allLotto;
  }
}

export default LottoIssuance;
