// CONTENU MENU
var menu = `
    <header class="header-site">
        <div id="menu">
            <a href="../index.html">
                <ul class="nom-site">
                    <li><h1>Auguste Lefort</h1></li>
                </ul>
            </a>

            <ul class="categories">
                <li><a href="../shorts.html">shorts</a></li>
                <li><a href="../apps.html">apps</a></li>
                <li><a href="../other_stuff.html">other stuff</a></li>
                <li><a href="../about.html">about</a></li>
            </ul>
        </div>
        <img src="../img/menu.png" id="icon-menu"/>
    </header>
    <ul id="menu-mobile">
        <li><a href="../shorts.html">shorts</a></li>
        <li><a href="../apps.html">apps</a></li>
        <li><a href="../other_stuff.html">other stuff</a></li>
        <li><a href="../about.html">about</a></li>
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
