// interfaceについて
// interfaceを使い宣言した型をもう一度宣言すると、一度目に宣言した型が二度目に宣言した型にマージされる。

interface Bread {
  calories: number;
}

interface Bread {
  type: string;
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
};

// 上記を型エイリアスで表現
type MaboDofu = {
  calories: number;
  spicyLevel: number;
};

type Rice = {
  calories: number;
  gram: number;
};

type MaboDon = MaboDofu & Rice; //交差型(union)

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
};

// interfaceの拡張について
// ・extendsを使うことで継承したサブインターフェースを作ることができる
// ・Type Aliasをextendsをすることもできる

// interfaceの継承
interface Book {
  page: number;
  title: string;
}

interface Magazine extends Book {
  cycle: 'daly' | 'weekly' | 'monthly' | 'yearly';
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
};

type BookType = {
  page: number;
  title: string;
};

interface HandBook extends BookType {
  theme: string;
}

const cotrip: HandBook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
};

// intefaceでclassに型を定義できる
// ・implementsを使って型定義できる

// implementsを使ってclassに型を定義する
class Comic implements Book {
  page: number;
  title: string;

  constructer(page: number, title: string, private publishYear: string) {
    this.page = page;
    this.title = title;
  }

  getPublishYear() {
    return this.title + 'が開発されたのは' + this.getPublishYear + '年です。';
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '2016');
console.log(popularComic());
