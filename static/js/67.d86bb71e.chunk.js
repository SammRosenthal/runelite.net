(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[67],{342:function(e,t){e.exports={title:"1.4.24 Release",description:"Stretched resizable mode, bank tags and shift-click for item charges and variations",author:"Jordan",__content:'<p>The <a href="https://github.com/runelite/runelite/wiki/Stretched-Mode">Stretched Mode plugin</a> (formerly\nknown as the Stretched Fixed Mode plugin) now supports stretching the game in\nresizable mode. Thanks to <a href="https://github.com/devLotto">@devLotto</a> for adding this\nfeature!</p>\n<p><img src="/img/blog/1.4.24-Release/stretched-resizable-mode.gif" alt="Stretched resizable mode at 75% resizing"/></p>\n<p>You can now tag and un-tag all variations of an item, e.g. all dosages of a particular type of\npotion, all charges of an Amulet of Glory, or all degraded states of a Barrows equipment piece or\npiece of crystal equipment, etc. To do so, drag the item onto a tag tab while holding Shift, or add\n&quot;*&quot; to the end of the tag. Thanks to <a href="https://github.com/raiyni">@raiyni</a> and\n<a href="https://github.com/deathbeam">@deathbeam</a> for developing this feature.</p>\n<p><img src="/img/blog/1.4.24-Release/bank-tag-variations.gif" alt="Bank tags: tagging and untagging variations"/></p>\n<p>Shift-click configuration now applies to all variations and charges of items too in very similar way as\nnew bank tab improvements do. This means that some previous shift-click configuration on affected items\nwill be reset. Thanks to <a href="https://github.com/deathbeam">@deathbeam</a> for implementing this.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Some clue scrolls will display less text in their panels to take up less space</li>\n<li>Added Abyssal Bracelet charge tracking</li>\n<li>The Slayer plugin will no longer desync when slaying Grotesque Guardians with the Double Trouble\nreward active</li>\n<li>Chopping sullicep mushrooms now activates the woodcutting plugin</li>\n<li>Fix clue and bounty hunter hiscores lookup for update</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 16 contributors this release!</p>\n<pre><code>15987632 (1):\n      Add support for objects to Anagram clues\n\nAdam (4):\n      feed controller: add cache control for feed result\n      http api/service: map .js to application/json and use in http clients\n      Remove model viewer\n      http-api: lombok HiscoreResult\n\nAlexsuperfly (4):\n      XPglobes: capitalize XP in globe tooltip\n      Item Charges: add Abyssal Bracelet charge tracking (#6184)\n      Remove White Helm requirement from Sir Vyvin cryptic clue (#6179)\n      Slayer Highlighting: Add all types of shades to task target list (#6182)\n\nArthur Tyukayev (2):\n      Fix typo in Lunar Isle teleport location (#6218)\n      Make twitch channel string case insensitive (#6223)\n\nDustin (1):\n      Stop slayer kills desync for Grotesque Guardians with Double Trouble reward active (#5983)\n\nFarmour (1):\n      Apply PM chat recolor for PMODs in loadColors\n\nGamer1120 (1):\n      Add consistency to capitalization of timer in Timers settings\n\nHydrox6 (1):\n      Merge multiple varbitChanged events in AttackStyles to one (#6258)\n\nKasparRosin (1):\n      Update Hot/Cold location NW of fishing tutor (#6230)\n\nLotto (2):\n      stretchedfixedmode: add resizable interface scaling\n      stretchedfixedmode: rename plugin to &#39;stretched mode&#39;\n\nMagic fTail (2):\n      Fix JavaDoc for hitsplat colours (#6237)\n      http api/service: update Jagex hiscore API\n\nMattias Cederlund (1):\n      Recognize all Pharaoh&#39;s sceptre versions for emote clues (#6233)\n\nMax Weber (3):\n      cluescrolls: Add STASH unit object ids to emote clues\n      cluescrolls: Move Druids&#39; circle clue to the stash\n      cluescrolls: Move trollheim emote clue to Trollheim\n\nRon Young (2):\n      Add ItemVariationMapping enum and test\n      Add ability to set/read tags on varations of items\n\nSebastiaanVanspauwen (1):\n      Woodcutting: Add support for sullicep mushrooms for logs/hr and logs cut (#6245)\n\nTomas Slusny (12):\n      Fix combat brace slayer task race condition\n      Swap &quot;Perks&quot; option with &quot;Admire&quot; for mounted max cape\n      Remove full clue description from CrypticClue\n      Remove full clue description for Hot/Cold clue\n      Add back check for widget.isHidden() to TabInterface\n      Export ObjectComposition ID\n      Add support for impostors to clue scroll plugin\n      Fix combat brace slayer test after double trouble addition\n      Move SlayerUnlock to net.runelite.api.vars\n      Use ChatMessageManager to send game messages in Notifier\n      Correctly highlight Juna for cryptic clue step\n      Add support for configuring shift-click for variation items\n</code></pre>'}}}]);
//# sourceMappingURL=67.d86bb71e.chunk.js.map