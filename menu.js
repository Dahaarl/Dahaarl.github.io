    var shortsStyle = ``;
    var appsStyle = ``;
    var otherStuffStyle = ``;
    var aboutStyle = ``;

    var current_page = document.getElementsByTagName("TITLE")[0].innerHTML;

    // AFFICHE DANS QUELLE PAGE ON SE TROUVE
    switch(String(current_page)) {
    case "SHORTS":
        shortsStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
    case "ABOUT":
        aboutStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
    case "APPS":
        appsStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
    case "OTHER STUFF":
        otherStuffStyle = `style="color: #C0C0C0; cursor: default;"`;
        break;
}

    // CONTENU MENU
    var menu = `
        <header class="header-site">
            <div id="menu">
                <a href="index.html">
                    <ul class="nom-site">
                        <li><h1>Auguste Lefort</h1></li>
                    </ul>
                </a>

                <ul class="categories">
                    <li><a href="shorts.html" ` + shortsStyle + `>shorts</a></li>
                    <li><a href="apps.html" ` + appsStyle + `>apps</a></li>
                    <li><a href="other_stuff.html" ` + otherStuffStyle + `>other stuff</a></li>
                    <li><a href="about.html" ` + aboutStyle + `>about</a></li>
                </ul>
            </div>
            <img src="img/menu.png" id="icon-menu"/>
        </header>
        <ul id="menu-mobile">
            <li><a href="shorts.html" ` + shortsStyle + `>shorts</a></li>
            <li><a href="apps.html" ` + appsStyle + `>apps</a></li>
            <li><a href="other_stuff.html" ` + otherStuffStyle + `>other stuff</a></li>
            <li><a href="about.html" ` + aboutStyle + `>about</a></li>
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
