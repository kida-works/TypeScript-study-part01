export default function promiseSample() {
  const url = 'https://api.github.com/users/kida-works';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const feichProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          // レスポンスのBodyをJSOMで読み取った結果を返す
          res.json().then((json) => {
            console.log('Asynchronous Promise Sample 1:', json);
            resolve(json);
          });
        })
        .catch((error) => {
          console.error(error);
          reject(null);
        });
    });
  };

  feichProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('Asynchronous Promise Sample 2:', profile);
      }
    })
    .catch(() => {});
}
