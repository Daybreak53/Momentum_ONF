const lyricsArray = [
  {
    lyrics: "넌 날 사랑하게 될 거야 난 너의 전부가 되고 말 거니까",
    title: "사랑하게 될 거야",
  },
  {
    lyrics: "오늘도 수고한 나에게 축복을",
    title: "Beautiful Beautiful",
  },
  {
    lyrics: "어쩌면 우린 아주 오래전에 마법에 홀려 기억을 뺏겼을지도",
    title: "Moscow Moscow",
  },
  {
    lyrics: "너와 나의 맘속은 언제나 여름",
    title: "여름 쏙",
  },
  {
    lyrics: "내 꿈의 조각조각까지 너야",
    title: "Complete",
  },
  {
    lyrics: "눈을 감고 너를 생각하면 밤 하늘 별이야",
    title: "Show Must Go On",
  },
  {
    lyrics: "흠칫한 찰나 내게 스며들어 날 움직이는 너",
    title: "Goosebumps",
  },
  {
    lyrics: "밤이 되면 더욱 눈부시게 빛나는 너를 만날래",
    title: "스쿰빗스위밍",
  },
  {
    lyrics: "너에게만 빛이 돼 밝게 밝혀줄게",
    title: "ON/OFF",
  }
];

const lyrics = document.querySelector("#lyrics span:first-child");
const title = document.querySelector("#lyrics span:last-child");
const todaysLyrics = lyricsArray[Math.floor(Math.random() * lyricsArray.length)];

lyrics.innerText = todaysLyrics.lyrics;
title.innerText = `~ ${todaysLyrics.title} ~`;
