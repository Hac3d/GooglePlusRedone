// ==UserScript==
// @name         GoogleBar (SCRIPT)
// @icon         https://github.com/Hac3d/GooglePlusRedone/blob/main/images/plus.png?raw=true
// @namespace    https://github.com/Hac3d/
// @version      0.7.4
// @description  Brings back the old black top bar from 2011 - 2014 and adds Google+ services.
// @author       Hac3d
// @match        https://www.youtube.com/*
// @match        https://www.youtube.com/?*
// @match        https://www.youtube.com/
// @match        https://www.google.com/
// @match        https://www.google.com/?*
// @match        https://www.google.com/search*
// @match        https://www.google.com/videohp*
// @match        https://www.google.com/webhp*
// @match        https://www.google.com/imghp*
// @match        https://www.google.com/maps*
// @match        https://myaccount.google.com/
// @match        https://myaccount.google.com/*
// @match        https://mail.google.com/
// @match        https://mail.google.com/*
// @match        https://maps.google.com/
// @match        https://maps.google.com/*
// @match        https://googleplus.vercel.app/index2.html
// @run-at       document-start
// ==/UserScript==

window.addEventListener("DOMContentLoaded", () => {
        // DOM ready! Images, frames, and other subresources are still downloading.


console.log("I am running!");

var topempty = document.createElement("div");
topempty.innerHTML = '<div id="gbspace"></div>';
document.body.insertBefore(topempty, document.body.firstChild);

var topBar

function detectURL() {
    if (window.location.hostname === 'googleplus.vercel.app') {
        return 0;
    } else if (window.location.hostname === 'www.youtube.com') {
        return 3;
    } else if (window.location.hostname === 'mail.google.com') {
        return 7;
    } else if (window.location.href.includes('tbm=nws')) {
        return 6;
    } else if (window.location.href.includes('imghp') || window.location.href.includes('tbm=isch')) {
        return 2;
    } else if (window.location.href.includes('videohp')) {
        return 3;
    } else if (window.location.href.includes('maps')) {
        return 4;
    } else {
        return 1;
    }
}

function toggleMore() {
    event.preventDefault()
    if (!topBar.querySelector('div.tbLeftItems li.tbDropdown a.tbDropdown').classList.contains('tbOpen')) {
        topBar.querySelector('div.tbLeftItems li.tbDropdown a.tbDropdown').classList.add('tbOpen');
        topBar.querySelector('div.tbLeftItems li.tbDropdown div.tbMoreMenu').classList.add('tbOpen');
    } else if (topBar.querySelector('div.tbLeftItems li.tbDropdown a.tbDropdown').classList.contains('tbOpen')) {
        topBar.querySelector('div.tbLeftItems li.tbDropdown a.tbDropdown').classList.remove('tbOpen');
        topBar.querySelector('div.tbLeftItems li.tbDropdown div.tbMoreMenu').classList.remove('tbOpen');
    }
}

function toggleAccount() {
    event.preventDefault()
    if (!topBar.querySelector('div.tbRightItems li.tbDropdown div.tbAccountMenu').classList.contains('tbOpen')) {
        topBar.querySelector('div.tbRightItems li.tbDropdown div.tbAccountMenu').classList.add('tbOpen');
    } else if (topBar.querySelector('div.tbRightItems li.tbDropdown div.tbAccountMenu').classList.contains('tbOpen')) {
        topBar.querySelector('div.tbRightItems li.tbDropdown div.tbAccountMenu').classList.remove('tbOpen');
    }
}

function getEmail() {
    const emailAddress = document.querySelectorAll('div.gb_Cb')[0];
    if (emailAddress) {
        return emailAddress
    } else {
        return 'Sign in'
    }
}

function createtopBar() {
    /* Create the full html element */
    topBar = document.createElement("div");
    topBar.classList.add('topBar')
    topBar.innerHTML =
    `<div style="z-index: -1 !important; position: relative !important;" class="tbLeftItems">
        <a class="guser" href="https://googleplus.vercel.app/index2.html">+Joe</a>
        <a href="https://www.google.com">Search</a>
        <a href="https://www.google.com/imghp">Images</a>
        <a href="https://www.youtube.com/">YouTube</a>
        <a href="https://maps.google.com">Maps</a>
        <a href="https://news.google.com">News</a>
        <a href="https://store.google.com">Shopping</a>
        <a href="https://mail.google.com">Gmail</a>
        <li class="tbDropdown">
            <a class="tbDropdown" onClick="toggleMore()" href="https://about.google/intl/en/products/">More</a>
            <div class="tbMoreMenu">
                <a href="https://calendar.google.com">Calendar</a>
                <a href="https://translate.google.com">Translate</a>
                <a href="https://store.google.com/category/phones">Mobile</a>
                <a href="https://books.google.com">Books</a>
                <a href="https://pay.google.com">Offers</a>
                <a href="https://wallet.google.com">Wallet</a>
                <a href="https://shopping.google.com">Shopping</a>
                <a href="https://www.blogger.com">Blogger</a>
                <a href="https://web.archive.org/web/20130801001727id_/http://www.google.com/reader/about/">Reader</a>
                <a href="https://www.google.com/finance/">Finance</a>
                <a href="https://photos.google.com">Photos</a>
                <a href="https://play.google.com">Play</a>
                <a href="http://www.google.com/videohp">Videos</a>
                <a href="https://drive.google.com">Drive</a>
                <div class="tbSeperator"></div>
                <a href="https://about.google/intl/en/products/">Even more »</a>
            </div>
        </li>
    </div>
    <div class="tbRightItems">

    <a href="https://accounts.google.com/" style="margin-right: 5px; margin-left: 5px; color: #cccccc;">Joe Mother</a>

    <div class="tbSeperator"></div>

    <text style="padding-left: 9px; padding-right: 9px; margin-right: 5px; margin-left: 5px; margin-top: 5px; margin-bottom: 5px; background-color: #676767; color: grey; font-family: 'Times New Roman';">0</text>

    <div class="tbSeperator"></div>
    <input placeholder="Share..." style="height: 15px; width: 48px; margin-right: 3px; margin-left: 3px; margin-top: 4px;" />
    <div class="tbSeperator"></div>
        <li class="tbDropdown tbRight">
            <!-- <a class="tbRight" href="https://accounts.google.com/">Sign in</a> -->


            <a class="tbRight" href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://www.google.com/search%3Fq%3Dfacebook%26sca_esv%3D04037f73e2d082db%26hl%3Den%26sxsrf%3DACQVn0-niq5w8qW7q8H7EQzmlj2zxudKSg%253A1709627847431%26source%3Dhp%26ei%3Dx9nmZa7YFfrk5NoP6aiVYA%26iflsig%3DANes7DEAAAAAZebn1xl2mUDz59CX1P5FGky05o2PCYMi%26ved%3D0ahUKEwju16iE3NyEAxV6MlkFHWlUBQwQ4dUDCA8%26uact%3D5%26oq%3Dfacebook%26gs_lp%3DEgdnd3Mtd2l6IghmYWNlYm9vazIQEC4YgAQYigUYQxjHARjRAzIKEAAYgAQYigUYQzINEAAYgAQYigUYQxjJAzIFEAAYgAQyCxAAGIAEGIoFGJIDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIpRRQAFijEnAAeACQAQGYAaUGoAH3EaoBDTAuNC4yLjAuMS4wLjG4AQPIAQD4AQGYAgegAvsOwgILEC4YgAQYxwEY0QPCAg4QLhiABBjHARivARiOBcICCBAAGIAEGJIDmAMAkgcJMC40LjIuNi0xoAeaSA%26sclient%3Dgws-wiz&amp;ec=GBRAAQ" tabindex="0" role="button" aria-expanded="false">
            <img src="https://lh3.googleusercontent.com/a/ACg8ocIF7hl1haxhWbqpuE2_iGhHvl8WCKIOxTsIzLMC_UTQ8iI=s83-c-mo" height="17" width="17"></img>
            </a>


            <div class="tbAccountMenu">
                <div class="row main">
                    <img id="tbProfilePic"></img>
                    <div class="column">
                        <span id="tbName">Joe Mother</span>
                        <span id="tbEmail">epicalt2020@gmail.com</span>
                        <div class="row">
                            <a href="https://myaccount.google.com">Account</a>
                            <div id="tbSep"></div>
                            <a href="https://policies.google.com/privacy">Privacy</a>
                        </div>
                    </div>
                </div>
                <a id="tbSwitch" href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com">Switch Accounts</a>
            </div>
        </li>
        <div class="tbSeperator"></div>
        <a class="tbSettings" href="https://www.google.com/preferences"></>
    </div>`
    /* Detect URL and make sure the correct item is selected */
    topBar.querySelector('div.tbLeftItems').children[detectURL()].classList.add('tbSelected');

    /* Listen for when the more button is clicked and call the toggle function */
    topBar.querySelector('div.tbLeftItems li.tbDropdown a.tbDropdown').addEventListener("click", toggleMore);
    document.body.insertBefore(topBar, document.body.firstChild);
}

createtopBar();
console.log("I am done running!");

var element = document.querySelector('div[style="display:block!important;opacity:1!important;visibility:visible!important;left:unset!important;top:unset!important;margin:unset!important;background:#333!important;font-size:12px!important;position:fixed!important;bottom:0!important;right:0!important;z-index:2147483647!important;padding:10px 15px!important;color:#fff!important;text-indent:unset!important;font-family:Arial!important;letter-spacing:unset!important;height:unset!important;max-height:unset!important;min-height:unset!important;width:unset!important;max-width:unset!important;min-width:unset!important;clip:unset!important;filter:unset!important;transform:unset!important;overflow:unset!important;border:unset!important;clip-path:unset!important"]');
if (element) {
    element.remove();
}
});