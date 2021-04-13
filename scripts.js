document.getElementById("bibleSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("bibleInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://bible-api.com/" + value + "?translation=kjv";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let result = "";
      result += "<h2>" + json.reference + '</h2>';
      for (let i = 0; i < json.verses.length; ++i) {
        result += '<p>' + json.verses[i].verse + '. ' + json.verses[i].text + '</p>';
      }
      document.getElementById("bible-passage").innerHTML = result;
    })
    });

function showJohn8() {
fetch("https://bible-api.com/john 8:7?translation=kjv")
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let result = "";
    result += "<h2>" + json.reference + '</h2>';
    result += '<p>8. ' + json.text + '</p>';
    result += "<hr> <iframe width='560' height='315' src='https://www.youtube.com/embed/w5GXnM_TxSQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    result += "<div class='korean-image'><img src='Christ_with_adultress_korean.jpg'/></div>";
    result += "<hr> <div class='third-nephi'><h2>3 Nephi 14:2-5</h2>2. For with what judgment ye judge, ye shall be judged; and with what measure ye mete, it shall be measured to you again.<br><br>3. And why beholdest thou the mote that is in thy brother’s eye, but considerest not the beam that is in thine own eye?<br><br>4. Or how wilt thou say to thy brother: Let me pull the mote out of thine eye—and behold, a beam is in thine own eye?<br><br>5. Thou hypocrite, first cast the beam out of thine own eye; and then shalt thou see clearly to cast the mote out of thy brother’s eye.</div>"
    document.getElementById("bible-passage").innerHTML = result;
  })
}

function showMatthew6() {
fetch("https://bible-api.com/matthew 6:31-33?translation=kjv")
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let result = "";
    result += "<h2>" + json.reference + '</h2>';
    for (let i = 0; i < json.verses.length; ++i) {
      result += '<p>' + json.verses[i].verse + '. ' + json.verses[i].text + '</p>';
    }
    result += "<hr> <div class='kingdom-meme'><img src='seek_kingdom_meme.jpeg'/></div>";
    result += "<iframe width='560' height='315' src='https://www.youtube.com/embed/21Vw42Kb00g' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    result += "<div class='benson-quote'>\"The breadth, depth, and height of this love of God extend into every facet of one’s life. Our desires, be they spiritual or temporal, should be rooted in a love of the Lord. Our thoughts and affections should be centered on the Lord. “Let all thy thoughts be directed unto the Lord,” said Alma, 'yea, let the affections of thy heart be placed upon the Lord forever'\" - Ezra Taft Benson</div>";
    document.getElementById("bible-passage").innerHTML = result;
  })
}

function showJohn14() {
fetch("https://bible-api.com/john 14:26-27?translation=kjv")
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let result = "";
    result += "<h2>" + json.reference + '</h2>';
    for (let i = 0; i < json.verses.length; ++i) {
      result += '<p>' + json.verses[i].verse + '. ' + json.verses[i].text + '</p>';
    }
    result += "<hr> <div class='printed-image'><img src='jesus_praying_in_gethsemane.jpeg'/></div>";
    result += "<div class='quote'>\"The Savior has suffered not just for our iniquities but also for the inequality, the unfairness, the pain, the anguish, and the emotional distresses that so frequently beset us. There is no physical pain, no anguish of soul, no suffering of spirit, no infirmity or weakness that you or I ever experience during our mortal journey that the Savior did not experience first. You and I in a moment of weakness may cry out, 'No one understands. No one knows.' No human being, perhaps, knows. But the Son of God perfectly knows and understands, for He felt and bore our burdens before we ever did. And because He paid the ultimate price and bore that burden, He has perfect empathy and can extend to us His arm of mercy in so many phases of our life. He can reach out, touch, succor—literally run to us—and strengthen us to be more than we could ever be and help us to do that which we could never do through relying upon only our own power.\" - David A. Bednar</div>";
    document.getElementById("bible-passage").innerHTML = result;
  })
}

function showLuke6() {
fetch("https://bible-api.com/luke 6:35?translation=kjv")
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let result = "";
    result += "<h2>" + json.reference + '</h2>';
    for (let i = 0; i < json.verses.length; ++i) {
      result += '<p>' + json.verses[i].verse + '. ' + json.verses[i].text + '</p>';
    }
    result += "<hr> <div class='printed-image'><img src='Christ_teaching_painting.jfif'/></div>";
    result += "<div class='Eyering-quote'>\"In God’s kingdom, greatness and leadership means seeing others as they truly are—as God sees them—and then reaching out and ministering to them. It means rejoicing with those who are happy, weeping with those who grieve, lifting up those in distress, and loving our neighbor as Christ loves us. The Savior loves all of God’s children regardless of their socioeconomic circumstance, race, religion, language, political orientation, nationality, or any other grouping. And so should we! God’s greatest reward goes to those who serve without expectation of reward. It goes to those who serve without fanfare; those who quietly go about seeking ways to help others; those who minister to others simply because they love God and God’s children.\" - Henry B. Eyering</div>";
    result += "<iframe width='560' height='315' src='https://www.youtube.com/embed/Ik0aS368Kv0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    document.getElementById("bible-passage").innerHTML = result;
  })
}
