(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[108],{383:function(e,n){e.exports={title:"1.5.37 Release",description:"Sound volume sliders, area sound mute, and new Jagex statement",author:"Adam",__content:'<p>The music plugin now changes the volume sliders on the in-game sound interface\nto slide:</p>\n<p><img src="/img/blog/1.5.37-Release/sliders.gif" alt="sliders"/></p>\n<p>The plugin additionally offers a new setting which will mute area sounds caused\nfrom animations of other players (mostly skilling animations like woodcutting).</p>\n<p>Jagex has released a new <a href="https://secure.runescape.com/m=news/another-message-about-unofficial-clients?oldschool=1">third party\nclient</a>\nstatement which builds on their previous\n<a href="https://secure.runescape.com/m=news/a-message-about-unofficial-clients?oldschool=1">statement</a>.\nThe vast majority of the statement seems targeted at features of clients other than\nRuneLite; most features listed are not and have never been features of RuneLite.\nHowever there are some changes required to RuneLite to make it compliant, so the\nfollowing changes have been made:</p>\n<ul>\n<li>Removal of the Cerberus plugin</li>\n<li>Removal of the reorder prayers plugin</li>\n<li>Remove &quot;opponent&#39;s opponent&quot; part of the opponent info overlay</li>\n<li>Remove the pickpocket/talk-to swap from the menu entry swapper</li>\n<li>Remove the minimap overlay from the barrows plugin</li>\n<li>Remove the Walk here/Attack swap on the Corporeal beast dark core</li>\n</ul>\n<p>I would also like to thank Mod Bonsai for providing us with draft statements and\nallowing us to provide feedback directly to Jagex. The collaboration between us\nand Jagex over the last few weeks on this has been more than all of the last 2\nyears combined.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix the random event plugin hiding menu options for your own randoms</li>\n<li>Fix the combat level plugin not showing combat level range in the wilderness</li>\n<li>Fix world map tooltip for Prifddinas farming patch</li>\n<li>Fix the PvP kill/death counter to once again be moveable</li>\n<li>Fix full teleblock timer</li>\n<li>Add pyramid plunder start-minigame and quick-leave to the menu entry swapper</li>\n<li>Add Fremennik Exiles to the world map and add tooltips for the new\ntransportation icons</li>\n<li>The fishing overlay colors are now configurable</li>\n<li>Add coordinate clue descriptor for Island of Stone clue</li>\n<li>Add fishing trawler to the loot tracker</li>\n<li>The loot tracker can now use High Alchemy price for item valuation</li>\n<li>Show price check when examining items on the trade interface</li>\n<li>The wiki plugin can now have its &quot;cast&quot; feature used on items in the bank and\nall other interfaces with items other than the inventory</li>\n<li>The <a href="https://runelite.net/account/loot-tracker">loot tracker</a> on the website now shows total value of loot</li>\n</ul>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 19 contributors this release!</p>\n<pre><code>15987632 (1):\n      widgets: fix wilderness level widget\n\nAbex (1):\n      wiki: support wiki-casting on non-inventory items\n\nAdam (16):\n      random events: fix menu being hidden for own events\n      achievement diary: remove requirements for Karamja hard kill a metal dragon task\n      client: update mockito\n      client: remove Cerberus plugin\n      client: remove reorderprayers plugin\n      opponentinfo: remove Opponent&#39;s opponent\n      corp plugin: remove dark core attack deprioritization\n      menuentryswapper: remove pickpocket swap\n      cache: update npc definition and loader\n      api: add source to sound effect events\n      devtools: add source to sound effect overlay\n      music plugin: add option to mute other players area sounds\n      http-service: make mongo database configurable\n      menu swapper: add pyramid plunder start-minigame and quick-leave\n      barrows plugin: remove minimap\n      http-api: centralize json mediatype\n\nAlex (1):\n      menu entry swapper: add shift click teleport spell swap\n\nAlexsuperfly (6):\n      world map: correct waterbirth ship transportation icon\n      world map: correct pirates&#39; cove ship transportation icon\n      world map: correct lunar diplomacy quest start icon\n      world map: add island of stone ship transport icon\n      quest: add fremennik exiles quest to enum\n      world map: add fremennik exiles quest start\n\nDavid (4):\n      farming calc: fix white lily level\n      fletching calc: add dragon crossbow\n      mining calc: add soft clay\n      hunter calc: add crystal impling\n\nDesetude (1):\n      Make the PvP kill/death counter moveable\n\nElpan (1):\n      world map: fix Prifddinas farming patch tooltip\n\nHarry Freeborough (1):\n      Correct capitalisations of &quot;RuneScape&quot; (#10142)\n\nHydrox6 (5):\n      loot tracker: rename price to gePrice\n      clues: fix Shayzien supply armour Sherlock clue\n      loot tracker: add HA prices\n      loot tracker: add price type display\n      clues: fix MultipleOfItemRequirement not working with non-stacking items\n\nJoel (1):\n      Add item mapping for Berserker Necklace (or) (#10158)\n\nLotto (2):\n      fishing: make overlay colors configurable\n      feed: use RuneLiteClient&#39;s Twitter list\n\nMax Weber (2):\n      music: Add ingame granular volume adjustment\n      music: check parent and siblings for null\n\nNathaniel Pather (2):\n      clues: add Island of Stone location descriptor\n      npc health: add lvl 44 zombie health (#10121)\n\nSebastiaanVanspauwen (2):\n      timers plugin: update full teleblock text\n      Worldmap: Fix incorrect Zeah quest start locations (#10135)\n\nTomas Slusny (1):\n      raids plugin: add option to manually broadcast layout\n\ndekvall (7):\n      skill calc: clear combined action slot on skill change\n      fishing: reset trawler start time when back on land\n      loottracker: add fishing trawler\n      loottracker: add confirm dialog to reset all\n      random events: fix npe on login\n      examine plugin: add pricecheck for trade interface\n      chat timestamps: add timestamps to split private chat\n\nln (1):\n      GPU: Floating point screen coordinates to eliminate vertex snapping\n\ntrimbe (1):\n      tabinterface: remember search after clicking deposit-x\n</code></pre>'}}}]);
//# sourceMappingURL=108.7de23ffb.chunk.js.map