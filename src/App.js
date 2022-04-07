import React from 'react';

function Game ({name, picture}) {
  return (
  <div>
    <h1>i LIKE {name}!!!!!!!!!!!</h1>;
    <img src={picture} />
  </div>
  );
}

const GameIlike = [
  {
    name: 'DarkSouls',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-zF3NyE3AWok%2FWQ25BYyjXPI%2FAAAAAAAAAPM%2F-n-s1cKmDYoPTXBQky3Qg8gFklvvK3TPwCLcB%2Fs1600%2F1ahjn5624h.jpg&f=1&nofb=1s://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F2960002%2Fimages%2Fo-DEFAULT-facebook.jpg&f=1&nofb=1'
  },
  {
    name: 'Eldenring',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%3A%252F%252Fblog.kakaocdn.net%252Fdn%252FclU3td%252Fbtq61KJX8dk%252F6zi3Pl3T8RDeaIvDgKVbik%252Fimg.jpg&f=1&nofb=1-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2FFbMetaImage%2F201809%2F25a532e9-a644-4a99-a5ed-fc588e5e8e2d.jpg&f=1&nofb=1'
  },
  {
    name: 'RainbowSivSeige',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FY02yYKiJObE%2Fmaxresdefault.jpg&f=1&nofb=1'
  },
  {
    name: 'Tekken',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FatFn3AYc8CE%2Fmaxresdefault.jpg&f=1&nofb=1'
  },
  {
    name: 'Pokemon',
    Image: 'https://w.namu.la/s/f741fe9ca2eb66b84853115824f3e9a0f55b331d55a435ccb5f3425a1498861f63dc68ed5673afd864ccc45f21e1f33105a6ed24bbcf1e4127872d1c8fe06c9c00ace10746c5d5e94cd7ee5fe72b88f976aaa1bd470a3bc72c247817a17e46c899d0f3a3c33db0f0e0b04782df47f55e'
  }
];

function App() {
  return (
   <div>
     {GameIlike.map(category => (
       <Game name={category.name} picture={category.Image} />
     ))}
     </div>
  );
}

export default App;
