(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[86],{361:function(n,e){n.exports={title:"1.5.15 Release",description:"Music unlock notifications, clan chat join messages and member counter",author:"Adam",__content:'<p>A music notification plugin was added which sends you a message whenever a new\npiece of music is unlocked.</p>\n<p><img src="/img/blog/1.5.15-Release/music.png" alt="music"/></p>\n<p>The clan plugin now has an option to show when players join or leave clan chats.\nThe messages disappear after a short duration, and can also be filtered by\nplayer rank.</p>\n<p><img src="/img/blog/1.5.15-Release/ccjoin.png" alt="ccjoin"/></p>\n<p>The clan plugin also has an option to show an infobox of the number of clan\nmembers near you.</p>\n<p><img src="/img/blog/1.5.15-Release/ccplayers.png" alt="ccplayers"/></p>\n<p>Finally, the clan plugin has a new option to show clan member rank in public and\nprivate messages too.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix Monkey Madness I requirement on the Kourend Diary</li>\n<li>Fix twitter feed links not working in the news panel with newer Twitter theme</li>\n<li>Add pestle and mortar to idle notifier</li>\n<li>Replaced our raids point overlay with the ingame one, and made it movable with\nalt.</li>\n<li>Move Tai Bwo Wannai Emote location closer to STASH unit</li>\n<li>Fix logging into RuneLite accounts after having just logged out</li>\n<li>Add Compost, Bastion and Battlemage potions to Herblore skill calc</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 13 contributors this release!</p>\n<pre><code>Adam (15):\n      Move session events from api to client\n      api: add changed varp index to VarbitChanged event\n      runescape-api: make RSNameableContainer a generic type\n      xptracker: remove unused exception\n      xptracker: use tracked overall xpstate to calculate total xp\n      xptracker: use long for tracking overall xp\n      api: add method to remove MessageNodes\n      api: add clan member join and leave events\n      api: add methods to get clan owner and chat name\n      clanchat plugin: add join/leave messages\n      Revert &quot;Merge pull request #8070 from Nightfirecat/fix-ground-markers-bug&quot;\n      Revert &quot;Merge pull request #5890 from Nightfirecat/colored-ground-markers&quot;\n      clan chat: cleanup onGameStateChanged logic from earlier merge\n      account plugin: move logout off of swing thread\n      session manager: change to null session on close\n\nBrennan Williams (1):\n      Add Hydra shortcut pipes to agility plugin (#8052)\n\nChives (2):\n      Remove Monkey Madness I requirement from Kourend Diary.\n      Replace assert keyword with JUnit assert functions\n\nJordan Atwood (7):\n      worldpoint: Fix plane value in toLocalInstance\n      worldpoint: Add static fromRegion method\n      worldpoint: Add getRegionX() and getRegionY()\n      ground markers plugin: Clean up legacy code\n      ground markers: Fix startup and shutdown bug\n      ground markers: Allow different colored markers\n      ground markers: Fix marking non-marked tiles\n\nLotto (1):\n      http-service: fix twitter feed links not working with newer theme\n\nSebastiaan Vanspauwen (1):\n      Clanchat: added onClanChanged event to count players already in scene\n\nSebastiaanVanspauwen (2):\n      Clanchat: Show amount of members near you in infobox\n      Clanchat: clear counter on login/connection lost instead of loading (#8068)\n\nShaun Dreclin (7):\n      idle notifier: Add support for grinding with pestle and mortar\n      daily task indicator: Fix plugin not checking tasks when first enabled\n      api: Add EnumID class\n      api: Add getKeys() to EnumComposition\n      api: Add unlocked music tracks to VarPlayer\n      client: Add Music Track Indicator plugin\n      rogues den: Update plugin to use ItemContainerChanged event\n\nTheStonedTurtle (1):\n      clanchat plugin: add CC rank icons to oublic and private messages\n\nTomas Slusny (11):\n      Add missing toggle for clan chat icons\n      Fix RAIDS_POINTS_INFOBOX widget ID\n      Make raids widget moveable\n      Remove raids points overlay\n      Null-check remote configuration in config manager\n      Change logged-in redir to redirect to HTTPS\n      Update suppressions.xml dtd link to one that exists\n      Fix SpringBootWebApplication auto-configuration annotation\n      Migrate SpringBootWebApplicationTest to spring profiles\n      Migrate Spring unit tests to spring profiles\n      clanchat: Update clan members set on join/leave events\n\nWoneTooPhree (1):\n      Move Tai Bwo Wannai Emote location closer to STASH\n\nchivesrs (2):\n      Update CheckStyle XML dtd link to one that exists (#8079)\n      Enable checkstyle on test sources\n\npiebandit (1):\n      Add Compost, Bastion and Battlemage potions to Herblore skill calc (#8031)\n\ntrimbe (4):\n      mixins: use a ClanMember for ClanMemberJoined/Left\n      clanchat: retrieve rank from ClanMember rather than ClanManager\n      clanchat: respect rank icon config for join/leave messages\n      clanchat: remove activity in buffer in ClanMemberLeft as well\n</code></pre>'}}}]);
//# sourceMappingURL=86.edd84ec4.chunk.js.map