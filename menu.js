    var shortsStyle = ``;
    var appsStyle = ``;
    var otherStuffStyle = ``;
    var aboutStyle = ``;

    var current_page = document.getElementsByTagName("TITLE")[0].innerHTML;

    // AFFICHE DANS QUELLE PAGE ON SE TROUVE
    switch(String(current_page)) {
    case "AUGUSTE LEFORT | SHORTS":
        shortsStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
    case "AUGUSTE LEFORT | ABOUT":
        aboutStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
    case "AUGUSTE LEFORT | APPS":
        appsStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
    case "AUGUSTE LEFORT | OTHER STUFF":
        otherStuffStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
}

    // CONTENU MENU
    var menu = `
        <header class="header-site">
            <div id="menu">
                <a href="index.html" title="Go to homepage">
                    <ul class="nom-site">
                        <li><h1>Auguste Lefort</h1></li>
                    </ul>
                </a>

                <ul class="categories">
                    <li><a href="shorts.html" title="Go to shorts" ` + shortsStyle + `>shorts</a></li>
                    <li><a href="apps.html" title="Go to apps" ` + appsStyle + `>apps</a></li>
                    <li><a href="other_stuff.html" title="Go to other stuff" ` + otherStuffStyle + `>other stuff</a></li>
                    <div id="menu-icons">
                      <a href="https://www.youtube.com/user/Dahaarl/" title="Go to my Google Play page" target="_blank"><li><i class="fa fa-youtube-play" aria-hidden="true" style="font-size: 1.3em; color: #FFFFFF; transform: translateY(6%);"></i></a></li>
                      <a href="https://vimeo.com/augustelefort" title="Go to my Vimeo account" target="_blank"><li><i class="fa fa-vimeo-square" aria-hidden="true" style="font-size: 1.1em; color: #FFFFFF;"></i></a></li>
                      <a href="https://twitch.tv/auguste_lefort" title="Go to my Twitch" target="_blank"><li><i class="fa fa-twitch" aria-hidden="true" style="font-size: 1.0em; color: #FFFFFF;"></i></a></li>
                      <a href="https://www.instagram.com/auguste.lefort/" title="Go to my Instagram account" target="_blank"><li><i class="fa fa-instagram" aria-hidden="true" style="font-size: 1.1em; color: #FFFFFF;"></i></a></li>
                      <a href="https://twitter.com/AugusteLefort" title="Go to my Twitter account" target="_blank"><li><i class="fa fa-twitter-square" aria-hidden="true" style="font-size: 1.1em; color: #FFFFFF;"></i></a></li>
                    </div>
                </ul>
            </div>
            <img src="img/menu.png" alt="Menu icon" id="icon-menu"/>
        </header>
        <ul id="menu-mobile">
            <li><a href="shorts.html" title="Go to shorts" ` + shortsStyle + `>shorts</a></li>
            <li><a href="apps.html" title="Go to apps" ` + appsStyle + `>apps</a></li>
            <li><a href="other_stuff.html" title="Go to other stuff" ` + otherStuffStyle + `>other stuff</a></li>
        </ul>
`
    // AFICHER MENU
    document.write(menu);

    // MENU MOBILE
    document.getElementById('icon-menu').addEventListener('click',function(){
        document.getElementById('menu-mobile').classList.toggle('visible');
    });

    document.getElementById('menu-mobile').addEventListener('click',function(){
        document.getElementById('menu-mobile').classList.remove('visible');
    });
