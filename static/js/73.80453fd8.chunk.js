(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[73],{348:function(e,n){e.exports={title:"1.5.3 Release",description:"GPU anti-aliasing and loot-exclusive ground item display",author:"Jordan",__content:'<p>The GPU plugin now supports anti-aliasing, which reduces jagged lines. It can\nbe configured in the GPU plugin settings. Thanks to <a href="https://github.com/devLotto">@devLotto</a> for\nimplementing this feature!</p>\n<p><img src="/img/blog/1.5.3-Release/anti-aliasing.png" alt="GPU anti-aliasing"/></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Ground-Items">Ground Items plugin</a> now has an option\nto only show loot. Thanks to <a href="https://github.com/Adam-">@Adam-</a> for this feature.</p>\n<p><img src="/img/blog/1.5.3-Release/ground-items-show-loot.png" alt="ground items plugin showing only loot"/></p>\n<p>After discussions among the RuneLite team, the fight cave plugin was removed as it was decided to\nbe too over-powered. For more insight on this decision, <a href="https://github.com/runelite/runelite/pull/6724#issuecomment-444289767">you can read Adam&#39;s comment on\nthis</a>.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The GPU plugin no longer causes overlays to render in black within the smoke devil dungeon\nand during the fight with the Grotesque Guardians</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/WASD-Camera">WASD Camera plugin</a> will no longer\ncause camera spinning when the chatbox loses focus</li>\n<li>Marks of grace, golden nuggets, and items bought with them now have prices calculated for them in\nthe <a href="https://github.com/runelite/runelite/wiki/Bank-Value">Bank Value plugin</a>, the <a href="https://github.com/runelite/runelite/wiki/Examine">Examine\nplugin</a> and others</li>\n<li>The &quot;Panic in the heart of the Haunted Woods&quot; clue step properly warns you to remove your ammo\nslot item</li>\n<li>Teleport icons for the pharaoh&#39;s sceptre have been added to the <a href="https://github.com/runelite/runelite/wiki/World-Map">World Map\nplugin</a></li>\n<li>The fairy ring search chatbox will no longer remain active when you select a teleport destination\nvery quickly</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Slayer">Slayer plugin</a> will now display your\ninitial task amount when hovering the slayer infobox</li>\n<li>The Kourend favour widget is now moveable</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Screenshot">Screenshot plugin</a> can now take\nscreenshots when receiving valuable and/or untradeable drops</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 17 contributors this release!</p>\n<pre><code>Adam (8):\n      runelite-client: exclude xz dependency from commons-compress\n      runelite-client: remove github-release-plugin\n      Revert &quot;Merge pull request #6760 from deathbeam/fix-slayer-task&quot;\n      Revert &quot;Add initial kill counter to slayer task (#6654)&quot;\n      slayer plugin: show initial assignment amount in infobox tooltip\n      Move EventBus implementation to runelite-client\n      wasd plugin: fix not unpressing keys when chatbox loses focus\n      grounditems: add option to only show loot\n\nAlex Kolpa (1):\n      Add world map region overlay dev tool\n\nDavis Cook (2):\n      Add initial kill counter to slayer task (#6654)\n      don&#39;t check chatbox status on last tick for fairyring search\n\nJoshua Filby (1):\n      fix: use correct char for boolean type\n\nKyle Goodale (1):\n      Fix Seers&#39; Village house clue grammar (#6720)\n\nLotto (1):\n      gpu: add scene anti-aliasing\n\nMagic fTail (2):\n      Add a tooltip to loot tracker value, showing exact value\n      Remove the fight cave plugin\n\nMax Weber (4):\n      ClientLoader: Use our classloader, not the system one for loading rs\n      Remove polymorphic events\n      Replace usages of Guava Subscribe with ours\n      FairyRingPlugin: Don&#39;t close vanilla chatboxes\n\nMika Kuijpers (1):\n      Add untradable item price support to ItemManager (#6595)\n\nMonsterxSync (1):\n      Add missing empty ammo slot requirement for clue step.\n\nSebastiaan Vanspauwen (1):\n      2005 interface: fix resized offsets\n\nSebastiaanVanspauwen (1):\n      worldmap: add pharaoh&#39;s sceptre teleport icons (#6810)\n\nTomas Slusny (4):\n      Update setTask for new assign first slayer field\n      Add dense essence chiseling to idle notifier\n      Add EventBus to replace Guava one\n      Replace usages of Guava EventBus with custom one\n\nTyler Hardy (1):\n      Make Kourend favour a moveable widget (#6797)\n\nWooxSolo (1):\n      gpu: fix black overlays behind gradients\n\ntanlines (1):\n      screenshot plugin: add screenshot on valuable/untradeable item drop\n\ntrimbe (1):\n      loot tracker: validate boxes after rebuilding\n</code></pre>'}}}]);
//# sourceMappingURL=73.80453fd8.chunk.js.map