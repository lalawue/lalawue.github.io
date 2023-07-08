function getCookie(name) {
   var cookieArr = document.cookie.split(";");
   for (var i=0; i<cookieArr.length; i++) {
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
      document.getElementById('site_theme').innerHTML =
      `html { background-color: #e7e7e7; filter: invert(1) hue-rotate(180deg); } img, .code-toolbar { filter: invert(1) hue-rotate(180deg); }`;
   }
}
changeTheme('@@@');
document.getElementById("sidebar").innerHTML = `<p class="header">Navi</p>
   <ul>
     <li><a href="../index.html">Home</a></li>
     <li><a href="../scratch/ThisSite.html">This Site</a></li>
     <li><a href="../live/AboutMe.html">About Me</a></li>
   </ul>
   <p class="header">Function</p>
   <ul>
      <li><a href="../pagefind.html">search ➟</a></li>
      <li><a onClick="changeTheme()">theme ➟</a><li>
   </ul>
   <p class="header">Categories</p>
   <ul>
     <li><a href="CategoryLinux.html">GNU/Linux</a></li>
     <li><a href="CategoryProgramming.html">Programming</a></li>
     <li><a href="CategoryLife.html">Life &#38; essay</a></li>
     <li><a href="CategoryStatistics.html">Statistics</a></li>
     <li><a href="CategoryReading.html">Reading</a></li>
     <li><a href="CategoryThisSite.html">This Site</a></li>
     <li><a href="CategoryMisc.html">Misc</a></li>
   </ul>
   <p class="header">Links</p>
   <ul>
     <li><a href="https://blog.csdn.net/g9yuayon/">G9</a></li>
     <li><a href="https://www.ruanyifeng.com/blog/">阮一峰的网络日志</a></li>
     <li><a href="https://blog.codingnow.com/">CloudWu</a></li>
     <li><a href="https://github.com/lalawue/">My GitHub</a></li>
     <li><a href="https://map.baidu.com/search/%E7%8E%89%E6%9E%97%E5%B8%82/@12263703.582905954,2572316.510483823,13.94z/maptype%3DB_EARTH_MAP">Yulin City</a></li>
   </ul>
   <p class="header">Archives</p><div class="archive_links"><ul><li><a href="2023-07.html">July 2023</a></li><li><a href="2023-06.html">June 2023</a></li><li><a href="2023-05.html">May 2023</a></li><li><a href="2023-04.html">April 2023</a></li><li><a href="2023-03.html">March 2023</a></li><li><a href="2023-02.html">February 2023</a></li><li><a href="2023-01.html">January 2023</a></li><li><a href="2022-12.html">December 2022</a></li><li><a href="2022-11.html">November 2022</a></li><li><a href="2022-10.html">October 2022</a></li><li><a href="2022-09.html">September 2022</a></li><li><a href="2022-08.html">August 2022</a></li><li><a href="2022-07.html">July 2022</a></li><li><a href="2022-06.html">June 2022</a></li><li><a href="2022-05.html">May 2022</a></li><li><a href="2022-04.html">April 2022</a></li><li><a href="2022-03.html">March 2022</a></li><li><a href="2022-02.html">February 2022</a></li><li><a href="2022-01.html">January 2022</a></li><li><a href="2021-12.html">December 2021</a></li><li><a href="2021-11.html">November 2021</a></li><li><a href="2021-10.html">October 2021</a></li><li><a href="2021-09.html">September 2021</a></li><li><a href="2021-08.html">August 2021</a></li><li><a href="2021-07.html">July 2021</a></li><li><a href="2021-06.html">June 2021</a></li><li><a href="2021-05.html">May 2021</a></li><li><a href="2021-04.html">April 2021</a></li><li><a href="2021-03.html">March 2021</a></li><li><a href="2021-02.html">February 2021</a></li><li><a href="2021-01.html">January 2021</a></li><li><a href="2020-12.html">December 2020</a></li><li><a href="2020-11.html">November 2020</a></li><li><a href="2020-10.html">October 2020</a></li><li><a href="2020-09.html">September 2020</a></li><li><a href="2020-08.html">August 2020</a></li><li><a href="2020-07.html">July 2020</a></li><li><a href="2020-06.html">June 2020</a></li><li><a href="2020-05.html">May 2020</a></li><li><a href="2020-04.html">April 2020</a></li><li><a href="2020-02.html">February 2020</a></li><li><a href="2020-01.html">January 2020</a></li><li><a href="2019-12.html">December 2019</a></li><li><a href="2019-11.html">November 2019</a></li><li><a href="2019-10.html">October 2019</a></li><li><a href="2019-09.html">September 2019</a></li><li><a href="2019-08.html">August 2019</a></li><li><a href="2019-07.html">July 2019</a></li><li><a href="2019-06.html">June 2019</a></li><li><a href="2018-11.html">November 2018</a></li><li><a href="2018-09.html">September 2018</a></li><li><a href="2018-06.html">June 2018</a></li><li><a href="2018-05.html">May 2018</a></li><li><a href="2018-03.html">March 2018</a></li><li><a href="2018-01.html">January 2018</a></li><li><a href="2017-12.html">December 2017</a></li><li><a href="2017-10.html">October 2017</a></li><li><a href="2017-09.html">September 2017</a></li><li><a href="2017-08.html">August 2017</a></li><li><a href="2017-06.html">June 2017</a></li><li><a href="2017-05.html">May 2017</a></li><li><a href="2017-04.html">April 2017</a></li><li><a href="2017-03.html">March 2017</a></li><li><a href="2017-02.html">February 2017</a></li><li><a href="2016-10.html">October 2016</a></li><li><a href="2016-05.html">May 2016</a></li><li><a href="2016-01.html">January 2016</a></li><li><a href="2015-12.html">December 2015</a></li><li><a href="2015-11.html">November 2015</a></li><li><a href="2015-10.html">October 2015</a></li><li><a href="2015-09.html">September 2015</a></li><li><a href="2015-08.html">August 2015</a></li><li><a href="2015-07.html">July 2015</a></li><li><a href="2015-06.html">June 2015</a></li><li><a href="2015-05.html">May 2015</a></li><li><a href="2015-03.html">March 2015</a></li><li><a href="2015-02.html">February 2015</a></li><li><a href="2015-01.html">January 2015</a></li><li><a href="2014-12.html">December 2014</a></li><li><a href="2014-05.html">May 2014</a></li><li><a href="2014-04.html">April 2014</a></li><li><a href="2014-03.html">March 2014</a></li><li><a href="2014-02.html">February 2014</a></li><li><a href="2014-01.html">January 2014</a></li><li><a href="2013-12.html">December 2013</a></li><li><a href="2013-11.html">November 2013</a></li><li><a href="2013-10.html">October 2013</a></li><li><a href="2013-09.html">September 2013</a></li><li><a href="2013-08.html">August 2013</a></li><li><a href="2013-07.html">July 2013</a></li><li><a href="2013-06.html">June 2013</a></li><li><a href="2013-05.html">May 2013</a></li><li><a href="2013-04.html">April 2013</a></li><li><a href="2013-03.html">March 2013</a></li><li><a href="2013-02.html">February 2013</a></li><li><a href="2013-01.html">January 2013</a></li><li><a href="2012-12.html">December 2012</a></li><li><a href="2012-11.html">November 2012</a></li><li><a href="2012-10.html">October 2012</a></li><li><a href="2012-08.html">August 2012</a></li><li><a href="2012-07.html">July 2012</a></li><li><a href="2012-06.html">June 2012</a></li><li><a href="2012-05.html">May 2012</a></li><li><a href="2012-04.html">April 2012</a></li><li><a href="2012-03.html">March 2012</a></li><li><a href="2012-02.html">February 2012</a></li><li><a href="2012-01.html">January 2012</a></li><li><a href="2011-12.html">December 2011</a></li><li><a href="2011-11.html">November 2011</a></li><li><a href="2011-10.html">October 2011</a></li><li><a href="2011-09.html">September 2011</a></li><li><a href="2011-08.html">August 2011</a></li><li><a href="2011-04.html">April 2011</a></li><li><a href="2011-02.html">February 2011</a></li><li><a href="2011-01.html">January 2011</a></li><li><a href="2010-12.html">December 2010</a></li><li><a href="2010-11.html">November 2010</a></li><li><a href="2010-09.html">September 2010</a></li><li><a href="2009-07.html">July 2009</a></li><li><a href="2009-06.html">June 2009</a></li><li><a href="2009-05.html">May 2009</a></li><li><a href="2009-04.html">April 2009</a></li><li><a href="2009-02.html">February 2009</a></li><li><a href="2009-01.html">January 2009</a></li><li><a href="2008-12.html">December 2008</a></li><li><a href="2008-11.html">November 2008</a></li><li><a href="2008-10.html">October 2008</a></li><li><a href="2008-09.html">September 2008</a></li><li><a href="2008-08.html">August 2008</a></li><li><a href="2008-07.html">July 2008</a></li><li><a href="2008-06.html">June 2008</a></li><li><a href="2008-05.html">May 2008</a></li><li><a href="2008-04.html">April 2008</a></li><li><a href="2008-03.html">March 2008</a></li><li><a href="2008-02.html">February 2008</a></li><li><a href="2008-01.html">January 2008</a></li><li><a href="2007-10.html">October 2007</a></li><li><a href="2007-07.html">July 2007</a></li><li><a href="2007-06.html">June 2007</a></li><li><a href="2007-05.html">May 2007</a></li><li><a href="2007-04.html">April 2007</a></li><li><a href="2007-03.html">March 2007</a></li><li><a href="2007-02.html">February 2007</a></li><li><a href="2007-01.html">January 2007</a></li><li><a href="2006-12.html">December 2006</a></li><li><a href="2006-11.html">November 2006</a></li><li><a href="2006-10.html">October 2006</a></li><li><a href="2006-09.html">September 2006</a></li><li><a href="2006-08.html">August 2006</a></li><li><a href="2006-07.html">July 2006</a></li><li><a href="2006-06.html">June 2006</a></li><li><a href="2006-05.html">May 2006</a></li><li><a href="2006-04.html">April 2006</a></li><li><a href="2006-03.html">March 2006</a></li><li><a href="2006-02.html">February 2006</a></li><li><a href="2006-01.html">January 2006</a></li><li><a href="2005-12.html">December 2005</a></li><li><a href="2005-11.html">November 2005</a></li><li><a href="2005-10.html">October 2005</a></li><li><a href="2005-09.html">September 2005</a></li><li><a href="2005-08.html">August 2005</a></li><li><a href="2005-07.html">July 2005</a></li><li><a href="2005-06.html">June 2005</a></li><li><a href="2005-05.html">May 2005</a></li><li><a href="2005-04.html">April 2005</a></li><li><a href="2005-03.html">March 2005</a></li><li><a href="2005-02.html">February 2005</a></li><li><a href="2005-01.html">January 2005</a></li><li><a href="2004-12.html">December 2004</a></li><li><a href="2004-11.html">November 2004</a></li><li><a href="2004-10.html">October 2004</a></li><li><a href="2004-09.html">September 2004</a></li></ul></div>`