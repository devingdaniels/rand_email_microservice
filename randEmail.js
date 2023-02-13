function getRandomEmail() {
  const emails = [
    "johndoe@gmail.com",
    "gward@verizon.net",
    "cliffordj@hotmail.com",
    "tezbo@msn.com",
    "jimmichie@verizon.net",
    "philb@comcast.net",
    "rupak@me.com",
    "gslondon@aol.com",
    "gerlo@optonline.net",
    "geekoid@att.net",
    "stellaau@mac.com",
    "jfriedl@live.com",
    "dcoppit@verizon.net",
  ];
  return emails[Math.floor(Math.random() * emails.length)];
}

module.exports = {
  getRandomEmail,
};
