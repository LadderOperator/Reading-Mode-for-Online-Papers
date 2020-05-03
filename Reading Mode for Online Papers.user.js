// ==UserScript==
// @name         Reading Mode for Online Papers
// @name:zh-cn   在线论文阅读模式
// @namespace    https://github.com/LadderOperator/Reading-Mode-for-Online-Papers
// @version      0.1
// @description  Simplify websites of some journals for better reading experience
// @description:zh-cn  简化一些期刊论文的网站页面以供更好的阅读体验
// @author       LadderOperator
// @include       *://science.sciencemag.org/content/*
// @include       *://journals.aps.org/*/abstract/*
// @include       *://www.nature.com/articles/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var currentPage = window.location.host

    switch(currentPage) {
     case "science.sciencemag.org":
           document.querySelector(".tertiary").remove()
           document.querySelector(".secondary").remove()
           document.querySelector(".section.ref-list").setAttribute("style","text-align:left;")
           document.querySelector("article").setAttribute("style","padding-left:30px;margin-left:30px;text-align:justify;")
        break;
     case "journals.aps.org":
           document.querySelector("#article-sidebar").remove()
           document.querySelector(".nav-toggle").remove()
           document.querySelector("#article-content").setAttribute("style","width:100%;text-align:justify;")
           document.querySelectorAll(".fulltext-media > div > div").forEach(function(img){img.setAttribute("style","text-align:center;")})

        break;
     case "www.nature.com":
           document.querySelector("#content > div > div > article > div.c-article-extras.u-hide-print").remove()
           document.querySelector("#content > div > div > article > div.c-article-main-column.u-float-left.js-main-column").setAttribute("style","width:100%;text-align:justify;margin-right:0;")
        break;
    }

})();