var onPageSearch = function() {
  var value = document.getElementById("searchtext").value
  window.open('https://cn.bing.com/search?q=site:suchang.net+'+value,'_blank');
}
document.getElementById('sidebar').innerHTML = `
<p class="header">Here</p>
<ul>
  <li><a href="../index.html">Home</a></li>
  <li><a href="index.html">Front</a></li>
  <li><a href="../scratch/ThisSite.html">This Site</a></li>
  <li><a href="../live/AboutMe.html">About Me</a></li>
</ul>
<p class="header">Categories</p>
<ul>
  <li><a href="../blog/index.html">Blog</a></li>
  <li><a href="../live/index.html">Life</a></li>
  <li><a href="../cs/index.html">Lab</a></li>
  <li><a href="../slack/index.html">Slackware</a></li>
  <li><a href="../muse/index.html">Muse</a></li>
  <li><a href="../scratch/index.html">Scratch</a></li>
</ul>
<p class="header">Search</p><!-- Bing Search -->
<form>
  <input id="searchtext" type="text" />
  <input type="text" class="form-control" style="display:none" />
  <a style="text-decoration: none;" href="javascript:"onclick="onPageSearch();">🔍</a>
</form>
<p class="header">Contact</p>
<ul>
  <li><a href="mailto:suchaaa@gmail.com">Email Me</a></li>
</ul>`