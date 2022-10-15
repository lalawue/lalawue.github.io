var onPageSearch = function() {
  var value = document.getElementById("searchtext").value
  window.open('https://cn.bing.com/search?q=site:suchang.net+'+value,'_blank');
}
document.getElementById('sidebar').innerHTML = `
<p class="header">Navi</p>
<ul>
  <li><a href="../index.html">Home</a></li>
  <li><a href="index.html">Front</a></li>
  <li><a href="../scratch/ThisSite.html">This Site</a></li>
  <li><a href="../live/AboutMe.html">About Me</a></li>
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
<p class="header">Search</p>
<ul>
  <li><a href="../pagefind.html">search ➟</a></li>
</ul>
<p class="header">Discussions</p>
<ul>
  <li><a href="https://github.com/lalawue/homepage/discussions/categories/site" target="_blank">discuss ➟</a></li>
</ul>
`
