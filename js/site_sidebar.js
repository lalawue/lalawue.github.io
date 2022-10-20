function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
var site_theme = getCookie("site_theme");
function changeTheme(key) {
  var sk = ''
  if (key == "@@@") {
    sk = site_theme == 'dark' ? 'dark' : 'light';
  } else {
    sk = site_theme == 'dark' ? 'light' : 'dark';
  }
  site_theme = sk;
  document.cookie = "site_theme=" + sk + "; path=/; max-age=2147483647;"
  if (site_theme == 'light') {
    document.getElementById('site_theme').innerHTML = ``;
  } else {
    document.getElementById('site_theme').innerHTML = `html { background-color: #e7e7e7; filter: invert(1) hue-rotate(180deg); } img, .code-toolbar { filter: invert(1) hue-rotate(180deg); }`;
  }
}
changeTheme('@@@');
document.getElementById('sidebar').innerHTML = `
<p class="header">Navi</p>
<ul>
  <li><a href="../index.html">Home</a></li>
  <li><a href="../scratch/ThisSite.html">This Site</a></li>
  <li><a href="../live/AboutMe.html">About Me</a></li>
</ul>
<p class="header">Function</p>
<ul>
  <li><a href="../pagefind.html">search ➟</a></li>
  <li><a href="https://github.com/lalawue/homepage/discussions/categories/site" target="_blank">discuss ➟</a></li>
  <li><a onClick="changeTheme()">theme ➟</a><li>
</ul>
<p class="header">Categories</p>
<ul>
  <li><a href="../blog/index.html">Blog</a></li>
  <li><a href="../live/index.html">Travel</a></li>
  <li><a href="../cs/index.html">Projects</a></li>
  <li><a href="../slack/index.html">Linux</a></li>
  <li><a href="../muse/index.html">Muse</a></li>
  <li><a href="../scratch/index.html">Scratch</a></li>
</ul>
`
