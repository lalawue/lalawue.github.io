function generate_sidebar() {
    const content = `
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
<form id="searchform" method="get" action="http://cn.bing.com/search" >
  <p><input id="searchtext" type="text" name="q" value="" /></p>
 <p><input type="hidden" name="ie" value="utf-8" /></p>
  <p><input type="hidden" name="oe" value="utf-8" /></p>
  <p><input type="hidden" name="hl" value="zh-CN" /></p>
   <p><input type="hidden" name="domains" value="suchang.net" /></p>
 <p><input name="si" type="hidden" value="suchang.net" /></p>
 <p><input type="hidden" name="sitesearch" value="suchang.net" /></p>
</form>
<p class="header">Contact</p>
<ul>
  <li><a href="mailto:suchaaa@gmail.com">Email Me</a></li>
</ul>`
    document.getElementById('sidebar').innerHTML = content
}
generate_sidebar()