(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[33],{308:function(e,n){e.exports={title:"1.3.4 Release",description:"Smooth animations, easier HiScore lookups, and smarter Abyss runs",author:"Soy",__content:'<p>Animation smoothing is here to showcase the bleeding edge of oldschool visuals.\nPlayers, NPCs, and environmental objects can now be interpolated (or &#39;tweened&#39;)\nto animate at higher framerates. Thanks to\n<a href="https://github.com/DevDennis">@DevDennis</a> for bringing this eye candy to life.</p>\n<p><img src="/img/blog/1.3.4-Release/animsmoothing1.gif" alt="animsmoothing1"/>\n<img src="/img/blog/1.3.4-Release/animsmoothing2.gif" alt="animsmoothing2"/>\n<img src="/img/blog/1.3.4-Release/animsmoothing3.gif" alt="animsmoothing3"/></p>\n<p>HiScore lookups can now be accessed from many more right-click menus, including\nin the chatbox, your friends list, from private messages, in the clan chat\nsidebar, and on the raiding party menu (for members with at least a kick-rank).\n<a href="https://github.com/Kamielvf">@Kamielvf</a> worked on this quality of life change,\nbig thanks to him.</p>\n<p><img src="/img/blog/1.3.4-Release/lookups.png" alt="lookups"/></p>\n<p>The Dark Mage in the Abyss can now be highlighted whenever your inventory\ncontains a degraded pouch in need of repairs. Props to\n<a href="https://github.com/jaeger25">@jaeger25</a> for looking after our forgetful\nrunecrafters.</p>\n<p><img src="/img/blog/1.3.4-Release/darkmage.png" alt="darkmage"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Added healing values for 30+ missing foods; most importantly, easter eggs!</li>\n<li>Menu entry swapper: updated the Travel option to include balloons and\nFremennik boats, and added a new Chase option for cats who love rat-hunting.\nPickpocket swapping is now limited to H.A.M. members only, due to unintended\nthieving balance issues (eg. with blackjacking).</li>\n<li>Removed the Pyramid Plunder plugin because\n<a href="http://services.runescape.com/m=news/quality-of-life-improvements?oldschool=1">we don&#39;t need it any more</a>.\nGood Jagex.</li>\n<li>Renamed the Attack Indicators plugin to Attack Styles, and added better\ncontrol over when the indicator appears.</li>\n<li>Added a toggle for displaying skilling session stats.</li>\n<li>Updated our overlay text to use the current oldschool font, complete with\nslashed 0&#39;s.</li>\n<li>Fixed several clue scroll helpers which pointed to wrong spots, suggested\nthe wrong dance emote, or contained typos.</li>\n<li>Hunter plugin: fix bug related to setting traps and walking in the same tick.</li>\n<li>Fixed report button not returning to normal when the plugin was disabled.</li>\n<li>Fixed the bank tag search forgetting to match item placeholders.</li>\n<li>Fixed the screenshot plugin crashing on certain dialogs, like grabbing a\nhammer from a Motherlode crate.</li>\n</ul>\n<p>Enjoy!</p>\n<p>~ Soy</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 19 contributors this release!</p>\n<pre><code>Adam (15):\n      deobfuscator: add fernflower dependency\n      runescape-client: refactor item composition int2 -&gt; placeholderId\n      runescape-client: refactor item composition int3 -&gt; placeholderTemplateId\n      runelite-api: add idEquals to inventory item query\n      player indicators: add config for recoloring menu and showing clan rank\n      indicators plugin: fix not always identifying menus by type\n      runescape-client: item comp team -&gt; shiftClickIndex\n      runescape-client: item comp int1 -&gt; team\n      runescape-client: field3671 -&gt; params\n      runelite-client: remove old plugin classloader\n      runelite-client: remove old Plugin.file too\n      pluginmanager: don&#39;t store plugin enabled/disabled state in config\n      runescape-client: export hintArrowOffsetX/Y/Z\n      Add animation smoothing plugin\n      xp tracker plugin: don&#39;t throw from startUp if unable to fetch worlds\n\nDennis (3):\n      runelite-api: expose item composition placeholder ids\n      runelite-client: fix bank tags search for placeholder items\n      runelite-client: only update the actions if the item id matches\n\nFatalWaffles (6):\n      Fixed typo for lighthouse clue\n      Fix mess hall emote clue\n      Fix &quot;JIG&quot; emote clues\n      Fix errors with emote clues (#1312)\n      Update worldpoint for map clue 2713\n      Fix manor, swamp and lumber yard clue wordpoints (#1356)\n\nGriffin Quarles (2):\n      Update README.md\n      Update CONTRIBUTING.md\n\nJeremy Plsek (1):\n      itemprices plugin: fix noted items not showing ge\n\nKamiel (3):\n      Reset report button text to default when plugin is disabled\n      Add HiScore lookup to right click menus\n      Update the runescape font to match current OSRS font\n\nLevi (1):\n      Average actions left between last 10 XP drops (#1323)\n\nLevi Schuck (2):\n      Lumbridge npcs have some bad compositions and return null in the dev\n      tools.\n      Reset XP on log-in of another character / mode\n\nLotto (1):\n      cluescroll-plugin: remove duplicate anagram answers\n\nMatt Jaeger (1):\n      Highlight dark mage NPC in the center of the abyss when inventory\n      contains a degraded pouch\n\nMorgan Lewis (1):\n      Add small clarification to Account Plugin tooltip\n\nRune Nielsen (2):\n      Fixed misspelling in clue and added missing clue (#1274)\n      Added UGTHANKI_KEBAB_1885 to itemstats plugin (#1263)\n\nSeptron (2):\n      Add player index to api\n      Add hint arrows to api\n\nSeth (1):\n      skill sessions: Add a toggle for displaying session stats\n\nSoyChai (12):\n      Add healing values (+14) for pumpkins and easter eggs\n      itemstats: Add anchovies (+1), fruit battas (+11), and missing (sliced)\n      fruits (+2) including peaches (+8)\n      itemstats: Fix errant healing stats for sweetcorn variants\n      itemstats: Add Dorgeshuun foods with wiki-claimed healing values\n      itemstats: Add chocolatey milk (+4) and giant carp (+6)\n      banktags: Adjust dialog text to match Withdraw-X dialog\n      screenshot: Fix ArrayIndexOutOfBounds errors caused by unsafe parsing of\n      level-up widget\n      screenshot: Add documentation for primary methods\n      screenshot: Define more accurate method names and access levels\n      attackstyles: Rename Attack Indicators plugin to Attack Styles\n      attackstyles: Add a toggle to Always show style\n      attackstyles: Simplify config descriptions\n\nTheLonelyDev (1):\n      menu swapper: add Fly, Rellekka travel options, and Chase\n\nTomas Slusny (4):\n      Save text configuration value on enter\n      Swap pickpocket only on H.A.M. members\n      Revert &quot;Reset XP on log-in of another character / mode&quot;\n      Remove pyramid plunder plugin\n\nWooxSolo (3):\n      Fix Actor.getWorldLocation to use pathX/pathY instead of getX/getY\n      Update game tick event to run after packets have been processed\n      hunter plugin: fix setting trap and walking at once\n\npsikoi (1):\n      Add a null check to avoid a NullPointerException when the query returns\n      null.\n</code></pre>'}}}]);
//# sourceMappingURL=33.a187a0a6.chunk.js.map