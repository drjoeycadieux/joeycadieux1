// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: "Joey Cadieux",
  description: "I am a Full Stack Developer",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Contact", link: "/contact/" },
      { text: "Facebook", link: "https://facebook.com/joey1cadieux" },
      {
        text: "Twitter",
        link: "https://twitter.com/@joeycadieux1"
      }
    ]
  }
};
