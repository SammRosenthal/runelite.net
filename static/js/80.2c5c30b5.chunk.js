(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[80],{355:function(e,n){e.exports={title:"1.5.10 Release",description:"Revamped color selector and boss personal best time chat command",author:"Jordan",__content:'<p>We have written a new color selector from scratch to offer a long-time requested feature for color\npicking: adjustable transparency values! This color selector now offers that functionality for the\n<a href="https://github.com/runelite/runelite/wiki/Cannon">Cannon</a>, <a href="https://github.com/runelite/runelite/wiki/Ground-Markers">Ground\nMarker</a>, <a href="https://github.com/runelite/runelite/wiki/Object-Markers">Object\nMarker</a>, <a href="https://github.com/runelite/runelite/wiki/Tile-Indicators">Tile\nIndicator</a>, and <a href="https://github.com/runelite/runelite/wiki/XP-Globes">XP\nGlobe</a> plugins. Thanks to\n<a href="https://github.com/psikoi">@psikoi</a> and <a href="https://github.com/raiyni">@raiyni</a> for this feature!</p>\n<p><img src="/img/blog/1.5.10-Release/color-picker.gif" alt="New color picker with transparency slider in action"/></p>\n<p>A <code>!pb</code> chat command has been added, which displays your personal best kill time of any boss which\nhas a kill timer. Make sure to secure a kill on the desired boss so RuneLite can store its best\nkill time to share!</p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/NPC-Indicators">NPC Indicators plugin</a> has been\nupdated to allow tagging of NPCs which, because of technical limitations, could not previously have\na &quot;Tag&quot; menu entry added, such as Menaphite Thugs. As a side effect, however, the &quot;Tag&quot; menu entry\nwill now be listed just before the NPC&#39;s &quot;Examine&quot; menu entry, shown below.</p>\n<p><img src="/img/blog/1.5.10-Release/npc-tag-change.png" alt="Updated NPC tag menu entry position"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>A number of Kebos area hot-cold clue locations have been added to the <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll">Clue Scroll\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Time-Tracking">Time Tracking plugin</a> now displays\nmore conservative estimates for farming patch growth timers to avoid showing a crop as finished\ntoo early</li>\n<li>An option has been added to the <a href="https://github.com/runelite/runelite/wiki/RuneLite">Runelite\nsettings</a> to require Shift to be pressed for\noverlay menu options to appear. Additionally, overlay menu options will no longer be a left-click\noption when positioned over other widgets.</li>\n<li>An ore tracker has been added to the <a href="https://github.com/runelite/runelite/wiki/Motherlode-Mine">Motherlode Mine\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/World-Map">World Map plugin</a> now adds the type of\nrare tree to the tree icon tooltips</li>\n<li>Upon completion, anti-venom <a href="https://github.com/runelite/runelite/wiki/Timers">timers</a> will now\nadd an anti-poison timer of the appropriate length</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chambers-of-Xeric">Chambers of Xeric plugin</a> now\nhas an option to send a game message with the raid layout when entering a new raid</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Barrows-Brothers">Barrows Brothers plugin</a> will no\nlonger display minimap dots for NPCs which would not ordinarily draw one elsewhere (such as pets)</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Screenshot">Screenshot plugin</a> now has an option to\nscreenshot duel wins and losses</li>\n<li>When buying slayer rewards, the <a href="https://github.com/runelite/runelite/wiki/Slayer">Slayer plugin</a>\ninfobox will now update the points displayed in its tooltip</li>\n<li>A <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper">Menu Entry Swapper plugin</a> option\nhas been added to swap &quot;Pick&quot; with &quot;Pick-lots&quot; to help you grab empty gourds faster in Chambers of\nXeric</li>\n<li>A bug causing some minor render order issues in the <a href="https://github.com/runelite/runelite/wiki/GPU">GPU\nplugin</a> has been fixed</li>\n<li>A bug causing the <a href="https://github.com/runelite/runelite/wiki/Mage-Training-Arena">Mage Training Arena\nplugin&#39;s</a> Telekinetic room helper\nto fail has been fixed</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 16 contributors this release!</p>\n<pre><code>4444N (1):\n      Remove tags from chat notifications (#7608)\n\nAdam (7):\n      chat controller: fix method name of getQp\n      Add !pb chat command\n      chat commands: capitalize boss names\n      http api: fix GameItem to have a no arg constructor\n      stausbars: don&#39;t assume menu is always populated\n      statusbars: avoid looking up item status unless the widget is the inventory\n      gpu: fix priority renderer face cull checking\n\nJordan Atwood (1):\n      chat commands: Add test case for PB without trailing period\n\nLucas (1):\n      Add normal colour to the !clues command\n\nMagic fTail (1):\n      Change menu manager to not modify npc composition\n\nMarshall Briggs (1):\n      Add 3 new Kebos clue spots to HotColdLocation.\n\nMax Weber (7):\n      farming: Centralize patch prediction\n      farming: Give a more conservative estimate of when patches are done\n      mixins: Force RUNELITE_OVERLAY menuops to not be left click\n      mousehighlight: Don&#39;t show tooltips for right click only menuops\n      cache: use lombok Data for all definitions\n      cache: Include id in StructDefinition\n      mixins: Don&#39;t clobber left click forced menuops\n\nRheon-D (1):\n      Remove invalid OverlayMenuEntries\n\nRon Young (5):\n      Config: add Alpha annotation\n      ColorUtil: add color to/from methods\n      Add RuneliteColorPicker\n      Screen Markers: use new color picker\n      plugins: Add alpha notation to configs\n\nRyan Bohannon (1):\n      Change location of clue scroll coordinates in Feldip Hills\n\nSirGirion (1):\n      mlm plugin: add ore tracker\n\nSpedwards (1):\n      Add Rare Tree locations\n\nTomas Slusny (13):\n      Move menu entry nulling to BeforeRender\n      Add anti-poison timers to anti-venom potions\n      Refresh infoboxes only when needed\n      Add toRoomString and toCodeString Raid utilities\n      Move ChatCommandsPlugin#sanitize to Text\n      Send raid layout message on raid enter\n      Limit only overlays that are not snapped\n      Remove activity prefix from Discord plugin\n      Add option to require shift for overlay menus\n      Dont display bank value GE/HA text when not needed\n      barrows plugin: don&#39;t draw dots for npcs which are hidden on the minimap\n      Show xp globe goal only if goal &gt; current xp\n      Remove anymatch regex from chat commands plugin patterns\n\nZakru (1):\n      Add option to screenshot duel wins and losses (#7576)\n\ndaiya7 (1):\n      Update slayer points in tooltip while in rewards screen (#7620)\n\nwinterdaze (3):\n      Add Hydra &amp; Karuulm Area to Discord Plugin (#7560)\n      Use better task icons for revs and ents (#7562)\n      Swap pick with pick-lots in CoX (#7563)\n</code></pre>'}}}]);
//# sourceMappingURL=80.2c5c30b5.chunk.js.map