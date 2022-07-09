// 非同期処理
export default function callbackSample() {
  const url = 'https://api.github.com/users/kida-works';

  //コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSOMで読み取った結果を返す
        res.json().then((json) => {
          console.log('Asynchronous Callback Sample 1:', json);
          return json;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample 2:', profile);
}
