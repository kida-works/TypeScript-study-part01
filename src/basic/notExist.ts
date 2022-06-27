export default function notExistSanple() {
  let name = null;
  console.log('notExist sanple 1:', typeof name, name);

  name = 'トラハック';

  if (name) {
    console.log('notExist sanple 2:', '我輩は猫である。名前は' + name);
  } else {
    console.log('notExist sanple 3:', '我輩は猫である。名前はまだ' + name);
  }

  let age = undefined;
  console.log('notExist sanple 4:', typeof age, age);
  age = 28;

  if (!age) {
    console.log('notExist sanple 3:', '年齢は秘密です。');
  } else {
    console.log('notExist sanple 3:', `年齢は${age}です。`);
  }
}
