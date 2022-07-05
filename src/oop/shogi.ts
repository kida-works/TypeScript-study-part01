type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

// コマの位置を表すクラス
class Position {
  constructor (private suji: Suji, private dan: Dan  ) {

  }
}

// 駒を表すクラス
