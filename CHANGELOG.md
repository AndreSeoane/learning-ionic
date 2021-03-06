<a name="0.5.3"></a>
## [0.5.3](https://github.com/jdat82/learning-ionic/compare/v0.5.2...v0.5.3) (2016-08-20)


### Bug Fixes

* **doc:** Add one advantage of Travis over Greenhouse (both with a free account). ([1e26071](https://github.com/jdat82/learning-ionic/commit/1e26071))
* **tests:** Greenhouse (like Travis) should execute remote tests in saucelabs cloud like mentionned in README. ([880f75c](https://github.com/jdat82/learning-ionic/commit/880f75c))


### Features

* Upgrade npm packages with `updtr`. ([f6fa4ee](https://github.com/jdat82/learning-ionic/commit/f6fa4ee))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/jdat82/learning-ionic/compare/v0.5.1...v0.5.2) (2016-08-19)


### Bug Fixes

* **build:** Fix uglify conf (probably due to a version change). ([32fcd9d](https://github.com/jdat82/learning-ionic/commit/32fcd9d))


### Features

* Icon file for Play Store page. ([0adc76a](https://github.com/jdat82/learning-ionic/commit/0adc76a))
* Licence file. ([cc2d2e1](https://github.com/jdat82/learning-ionic/commit/cc2d2e1))
* Play store banner. ([9cb1d49](https://github.com/jdat82/learning-ionic/commit/9cb1d49))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/jdat82/learning-ionic/compare/v0.5.0...v0.5.1) (2016-08-17)


### Features

* **doc:** Update screenshots. ([8f6a804](https://github.com/jdat82/learning-ionic/commit/8f6a804))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/jdat82/learning-ionic/compare/v0.4.3...v0.5.0) (2016-08-17)


### Bug Fixes

* **build:** Duplicate task. ([99869cd](https://github.com/jdat82/learning-ionic/commit/99869cd))
* **cache:** Refresh tabs after clearing the cache in order to avoid bugs on iOS when image in cache is not present anymore. ([1a6932a](https://github.com/jdat82/learning-ionic/commit/1a6932a))
* **character-comic-list:** When request fail, spinner should disappear. ([4259ad4](https://github.com/jdat82/learning-ionic/commit/4259ad4))
* **character-detail:** When offline, we should not see a result inside comic list and notably the button 'See more'. ([129d367](https://github.com/jdat82/learning-ionic/commit/129d367))
* **doc:** Missing URL. ([505e293](https://github.com/jdat82/learning-ionic/commit/505e293))
* **favourite-list:** Avoid having the spinner and the unavailable message together. ([4a340dc](https://github.com/jdat82/learning-ionic/commit/4a340dc))
* **favourite-list:** Initializing the index when there is no fave yet was failing. ([f1fce49](https://github.com/jdat82/learning-ionic/commit/f1fce49))
* **favourite-list:** Move thumbnails caching from the service to the controller in order to be sure we always cache items before rendering the list. ([cbe3480](https://github.com/jdat82/learning-ionic/commit/cbe3480))
* **favourite-list:** Refresh list automatically the first time when firebase become available without the need to leave and come back. ([dbbb475](https://github.com/jdat82/learning-ionic/commit/dbbb475))
* **security:** On iOS, one google API was not handled by my CSP tag. ([853c832](https://github.com/jdat82/learning-ionic/commit/853c832))


### Features

* **boot:** Reduce timeout for firebase in order to start more quickly when network is bad. ([3806e8a](https://github.com/jdat82/learning-ionic/commit/3806e8a))
* **character-list:** Responsive technique to avoid hardcoding an height. ([13e31dd](https://github.com/jdat82/learning-ionic/commit/13e31dd))
* **character-list:** Save last search filter upon restart ([f183858](https://github.com/jdat82/learning-ionic/commit/f183858))
* **comic-detail:** Unnecessary cache processing (already done). ([f96c17d](https://github.com/jdat82/learning-ionic/commit/f96c17d))
* **comic-list:** Responsive technique to avoid hardcoding an height. ([a5ac482](https://github.com/jdat82/learning-ionic/commit/a5ac482))
* **comic-list:** Save last search filter upon restart ([fb9e873](https://github.com/jdat82/learning-ionic/commit/fb9e873))
* **doc:** Add details about the build functionalities. ([b0d8c36](https://github.com/jdat82/learning-ionic/commit/b0d8c36))
* **doc:** Add some basic hints for performance in angular world. ([6b94543](https://github.com/jdat82/learning-ionic/commit/6b94543))
* **doc:** Little detail which has its importance. ([cc89cba](https://github.com/jdat82/learning-ionic/commit/cc89cba))
* **doc:** Little precision about why I mixed two API in order to process two related events. ([329ed0e](https://github.com/jdat82/learning-ionic/commit/329ed0e))
* **doc:** Update TOC in README ([888673c](https://github.com/jdat82/learning-ionic/commit/888673c))
* **error:** Change default error message. ([a592c05](https://github.com/jdat82/learning-ionic/commit/a592c05))
* **error:** Renamed offline error message ([17911d8](https://github.com/jdat82/learning-ionic/commit/17911d8))
* **favourite-list:** favourite/favourite-list — Add a spinner while index is generated. ([f900bac](https://github.com/jdat82/learning-ionic/commit/f900bac))
* **favourite-list:** Refactor faves initialisation process. ([dd64506](https://github.com/jdat82/learning-ionic/commit/dd64506))
* **photo-viewer:** Factorize call to native photo viewer. ([d88b565](https://github.com/jdat82/learning-ionic/commit/d88b565))
* **settings:** Change font of clear cache button. ([50c7141](https://github.com/jdat82/learning-ionic/commit/50c7141))
* **status-bar:** Add some color to the status bar for coherence with app main theme. ([2557598](https://github.com/jdat82/learning-ionic/commit/2557598))
* **tests:** Incorporate saucelabs tests in travis build ([57e6e56](https://github.com/jdat82/learning-ionic/commit/57e6e56))
* **tests:** New container for unit tests: the saucelabs cloud platform ([3be8264](https://github.com/jdat82/learning-ionic/commit/3be8264))
* Missing optimisation. ([15b3f36](https://github.com/jdat82/learning-ionic/commit/15b3f36))
* Upgrade crosswalk to version 20 (Chrome 50). ([6832a01](https://github.com/jdat82/learning-ionic/commit/6832a01))



<a name="0.4.3"></a>
## [0.4.3](https://github.com/jdat82/learning-ionic/compare/0.4.2...v0.4.3) (2016-08-08)


### Bug Fixes

* **build:** grunt-bump-cordova was missing some configuration ([bfd81ba](https://github.com/jdat82/learning-ionic/commit/bfd81ba))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/jdat82/learning-ionic/compare/v0.4.0...v0.4.2) (2016-08-08)


### Bug Fixes

* **settings:** Tracker setting was not applied at startup ([7bd3859](https://github.com/jdat82/learning-ionic/commit/7bd3859))


### Features

* **build:** Move from grunt-bump to grunt-bump-cordova. ([8c87c16](https://github.com/jdat82/learning-ionic/commit/8c87c16))
* **doc:** Removed the Github Release badge ([ed7a9b4](https://github.com/jdat82/learning-ionic/commit/ed7a9b4))
* **tests:** Better debugging for unit tests ([5a572ec](https://github.com/jdat82/learning-ionic/commit/5a572ec))
* **tests:** Error case for a view controller. ([8f3d792](https://github.com/jdat82/learning-ionic/commit/8f3d792))
* **tests:** Example unit test for a controller ([c1e126f](https://github.com/jdat82/learning-ionic/commit/c1e126f))
* **tests:** New unit test for comic factory. ([12635dd](https://github.com/jdat82/learning-ionic/commit/12635dd))
* **tests:** New unit tests for error components ([f1b6145](https://github.com/jdat82/learning-ionic/commit/f1b6145))
* **tests:** Simplified throwErr unit test. ([79e3ec7](https://github.com/jdat82/learning-ionic/commit/79e3ec7))
* **tests:** Test generic network errors like offline, timeout, 500, … ([6c2c266](https://github.com/jdat82/learning-ionic/commit/6c2c266))
* **tests:** The global script now uses only `angular.mock.module` and not `angular.mock.inject` in order to avoid creating the injector too soon. ([b9fc5d8](https://github.com/jdat82/learning-ionic/commit/b9fc5d8))
* **tests:** Unit test for a directive ([1ed5143](https://github.com/jdat82/learning-ionic/commit/1ed5143))
* **tests:** Unit test for a filter ([4b9be8b](https://github.com/jdat82/learning-ionic/commit/4b9be8b))
* **tests:** Unit test for the setting service ([3f94d10](https://github.com/jdat82/learning-ionic/commit/3f94d10))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/jdat82/learning-ionic/compare/v0.3.0...v0.4.0) (2016-08-05)


### Bug Fixes

* **character-detail:** Text "See all" should be always visible even if there is less than 10 items (but still more than 0 of course). ([5d037cf](https://github.com/jdat82/learning-ionic/commit/5d037cf))
* **comic-list:** Duplicate ID in marvel database. ([99fc8e4](https://github.com/jdat82/learning-ionic/commit/99fc8e4))
* **keyboard-height:** Padding added to comic and character list when keyboard is visible was not added anymore. The height function doesn't exist anymore in angular#element. ([f9dd6db](https://github.com/jdat82/learning-ionic/commit/f9dd6db))
* **tests:** Fixed unit tests ([8c95e93](https://github.com/jdat82/learning-ionic/commit/8c95e93))


### Features

* **character-detail:** Show only 5 comics (10 before) in slidebox. Showing the list of comics in grid format trigger an immediate request to load 10 more. ([4db8a09](https://github.com/jdat82/learning-ionic/commit/4db8a09))
* **character-list:** Changed default pre-filled search. ([2cec526](https://github.com/jdat82/learning-ionic/commit/2cec526))
* **character-list:** Changed default visible items from 20 to 10. Most of the time, you don't go further than 10 results. ([ad4165a](https://github.com/jdat82/learning-ionic/commit/ad4165a))
* **character-list:** Disabled autocomplete in search field. ([2b31dde](https://github.com/jdat82/learning-ionic/commit/2b31dde))
* **doc:** Added a list of features and updated screenshots. ([79f6f77](https://github.com/jdat82/learning-ionic/commit/79f6f77))
* **doc:** Added missing comments. ([419e891](https://github.com/jdat82/learning-ionic/commit/419e891))
* **doc:** Added some badges in the README. ([cddfd43](https://github.com/jdat82/learning-ionic/commit/cddfd43))
* **doc:** Better screenshot for comic list. ([11d2c0b](https://github.com/jdat82/learning-ionic/commit/11d2c0b))
* **doc:** Commented the INCH badge because INCH is not really understanding my code structure. So there is no value showing it. I keep it as a reference. May be useful later. Happy having discovered that service nonetheless. ([2d8542d](https://github.com/jdat82/learning-ionic/commit/2d8542d))
* **doc:** Integrated doctoc to generate easily from an npm task a table of content inside README.md compatible with github. ([9938c8c](https://github.com/jdat82/learning-ionic/commit/9938c8c))
* **doc:** Mentionned recent work with Travis and Greenhouse. ([0aff7ba](https://github.com/jdat82/learning-ionic/commit/0aff7ba))
* Renamed ionic.project (name as changed apparently). ([dd92f65](https://github.com/jdat82/learning-ionic/commit/dd92f65))
* **doc:** minor detail ([1759b93](https://github.com/jdat82/learning-ionic/commit/1759b93))
* **doc:** Removed WIP state in doc. ([accef94](https://github.com/jdat82/learning-ionic/commit/accef94))
* **doc:** Replaced david badge by gemnasium because it handles bower dependencies too and added a coverage badge (for principle only there is so little unit tests). ([d344b56](https://github.com/jdat82/learning-ionic/commit/d344b56))
* **favourite-list:** Migration to Firebase 3. ([1b766c9](https://github.com/jdat82/learning-ionic/commit/1b766c9))
* Added a new screen capture. ([7050535](https://github.com/jdat82/learning-ionic/commit/7050535))
* Added an inch configuration file cause by default it searches only in lib and src folders. ([3b41bd6](https://github.com/jdat82/learning-ionic/commit/3b41bd6))
* Anonymous sign in made right with automatic refresh when booting if user was previously logged. ([711a70d](https://github.com/jdat82/learning-ionic/commit/711a70d))
* Better screenshots in doc. ([9976d27](https://github.com/jdat82/learning-ionic/commit/9976d27))
* Create codecov.yml ([2ce8cb6](https://github.com/jdat82/learning-ionic/commit/2ce8cb6))
* Improved bower semver ranges declarations. ([c8421ac](https://github.com/jdat82/learning-ionic/commit/c8421ac))
* New grunt file for distribution tasks. Moved the bump one. And created one for changelog generation. ([1acbd66](https://github.com/jdat82/learning-ionic/commit/1acbd66))
* **setting-list:** typos ([3a20ab0](https://github.com/jdat82/learning-ionic/commit/3a20ab0))
* Release 0.4.0. ([5c465eb](https://github.com/jdat82/learning-ionic/commit/5c465eb))
* **tests:** Added crashlytics from fabric in order to ease beta tests. ([8a0ddaa](https://github.com/jdat82/learning-ionic/commit/8a0ddaa))
* **tests:** Added travis support ([cc88397](https://github.com/jdat82/learning-ionic/commit/cc88397))
* **tests:** Better organisation for karma reporters (it is easier to add new reporters). ([1cd089f](https://github.com/jdat82/learning-ionic/commit/1cd089f))
* **tests:** Hooray, we can indeed block the build on greenhouse via a pre-build script. Was forced to do that on master unfortunately cause I have a free plan. ([4f9d55a](https://github.com/jdat82/learning-ionic/commit/4f9d55a))
* **tests:** Missing node target platform. ([c5d64b8](https://github.com/jdat82/learning-ionic/commit/c5d64b8))
* **tests:** Missing npm global packages ([78b0682](https://github.com/jdat82/learning-ionic/commit/78b0682))
* **tests:** Testing if failing during unit tests in the pre built script will fail globaly the build in greenhouse. ([ab46a61](https://github.com/jdat82/learning-ionic/commit/ab46a61))
* **tests:** Testing if failing during unit tests in the pre built script will fail globaly the build in greenhouse. ([ebd5126](https://github.com/jdat82/learning-ionic/commit/ebd5126))
* Restored firebase basic anonymous sign in by upgrading to version 3.1.0. Previous versions DO NOT WORK in a cordova context. ([e341dbc](https://github.com/jdat82/learning-ionic/commit/e341dbc))
* Started to document a list of known bugs ([69d28d4](https://github.com/jdat82/learning-ionic/commit/69d28d4))
* Update codecov.yml ([66e66d1](https://github.com/jdat82/learning-ionic/commit/66e66d1))
* Updated current task in README. ([4b4791f](https://github.com/jdat82/learning-ionic/commit/4b4791f))
* Updated doc with current status. ([1aec106](https://github.com/jdat82/learning-ionic/commit/1aec106))
* Upgrade to newest crosswalk version. ([dcfc086](https://github.com/jdat82/learning-ionic/commit/dcfc086))
* Upgraded grunt-bump and configured my gruntfile so that I can invoke bump-only and bump-commit individually cause it does not work out of the box with jit-grunt enabled. Removed also bower.json from grunt-bump configuration cause there is no version in it. Would be useless as I don't deploy on bower. ([18a5db4](https://github.com/jdat82/learning-ionic/commit/18a5db4))
* **tests:** Upgraded global package ionic to beta to reflect refactor made to ionic.project. ([bda7b17](https://github.com/jdat82/learning-ionic/commit/bda7b17))
* **tests:** Useful patch if I need to recreate the greenhouse job on greenhouseci.com for android only. Indeed, today, there is no other solution than to instrument platforms/platforms.json in order to select platforms. ([11f93b1](https://github.com/jdat82/learning-ionic/commit/11f93b1))





<a name="0.3.0"></a>
# [0.3.0](https://github.com/jdat82/learning-ionic/compare/baed59a19a95a7bc57af0932ed1771e97c1ccebf...v0.3.0) (2016-06-11)


### Bug Fixes

* **character-comic-list:** Infinite scroll was broken. ([c8c25a2](https://github.com/jdat82/learning-ionic/commit/c8c25a2))
* **character-detail:** On chrome android, when hiding content to reveal cover, content is not hidden enough because the height of element .scroll is the visible height whereas on other platform it is the scroll height. ([81b8ee1](https://github.com/jdat82/learning-ionic/commit/81b8ee1))
* **character-detail:** Replaced angular-imgcache dependency by my own fork because the official one uses an isolated scope which is not necessary and prevent using this directive on elements having multiple isolated scopes like ion-content or ion-modal-view. ([38116a1](https://github.com/jdat82/learning-ionic/commit/38116a1))
* **http-cache:** Cordova only issue when app is loaded from a file: url. ([7542bc9](https://github.com/jdat82/learning-ionic/commit/7542bc9))
* **image-not-found:** On Android, there was a bug with a particular image when cached with imgcache. ([c40cdc4](https://github.com/jdat82/learning-ionic/commit/c40cdc4))
* **imgcache:** One fix to rule them all. ([4de48e3](https://github.com/jdat82/learning-ionic/commit/4de48e3))
* **lists:** On iOS, the last item in characters and comics lists (show more button) is sticked to the bottom (margin bottom is not respected). ([919f665](https://github.com/jdat82/learning-ionic/commit/919f665))
* **settings:** Fix a regression: disabling animations was not affecting modals. ([ad4bbf8](https://github.com/jdat82/learning-ionic/commit/ad4bbf8))
* **tabs:** Annoying line on Android between title and tabs during activation phase after clicking a tab. ([a7f991e](https://github.com/jdat82/learning-ionic/commit/a7f991e))
* **tabs:** On android, there was an annoying line between title and tabs when there is at least 4 tabs. ([db23d86](https://github.com/jdat82/learning-ionic/commit/db23d86))


### Features

* **analytics:** Added google analytics support. ([d0e56e1](https://github.com/jdat82/learning-ionic/commit/d0e56e1))
* **bookmark-list:** Added a thumbnail for each item and the type. ([f671313](https://github.com/jdat82/learning-ionic/commit/f671313))
* **bookmark-list:** Added possibility to remove a fave from bookmark list. ([fde4e1c](https://github.com/jdat82/learning-ionic/commit/fde4e1c))
* **bookmark-list:** Big heavy work to get dividers in favourite list. Not sure it is worth it. ([22a2544](https://github.com/jdat82/learning-ionic/commit/22a2544))
* **bookmark-list:** It is now possible to save/delete bookmarks while offline if firebase has been ready once. Bookmarks are saved locally. So even if you save a bookmark while offline, you will retrieve it next time even if you start again the app in offline mode. The only limitation is if you start in offline mode, bookmarks are accessible in read mode only. You can't add or delete. I was forced to add this security because firebase doesn't send any event if it is not in state loaded. ([5e1247f](https://github.com/jdat82/learning-ionic/commit/5e1247f))
* **bookmark-list:** List of favourites (saved in firebase). For now it is only possible to add/delete and see the list in the third tab. ([909e8ac](https://github.com/jdat82/learning-ionic/commit/909e8ac))
* **bookmark-list:** Remove a forced reflow. ([0271df3](https://github.com/jdat82/learning-ionic/commit/0271df3))
* **bookmark-list:** Text correction. "shallow" has no meaning in that context. ([beda918](https://github.com/jdat82/learning-ionic/commit/beda918))
* **bower:** Better version rules + classic upgrade with ncu. ([3cafb63](https://github.com/jdat82/learning-ionic/commit/3cafb63))
* **build:** Thought it is harmless to specify the platform even it is not used for now in case we forget. ([a9afc0f](https://github.com/jdat82/learning-ionic/commit/a9afc0f))
* **cache:** Handled the case when user refuse to give rights to access media, photos and files. I don't have time for a demo app to make this optional and implement a pretty fallback which uses for instance my jd-src directive. It would complexify the app and slow me unnecessarily. ([d4e9879](https://github.com/jdat82/learning-ionic/commit/d4e9879))
* **cache:** Integrated ImgCache support. Allows to keep in cache images (in filesystem). Works with cordova and without (HTML5 File API). ([43f2cca](https://github.com/jdat82/learning-ionic/commit/43f2cca))
* **cache:** feature/cache Added a button in settings to empty the default cache. ([3256741](https://github.com/jdat82/learning-ionic/commit/3256741))
* **character-detail:** Added a spinner while comics are loading. ([00f660c](https://github.com/jdat82/learning-ionic/commit/00f660c))
* **character-detail:** Added basic meta info in detail page. ([f7347ad](https://github.com/jdat82/learning-ionic/commit/f7347ad))
* **character-detail:** Change style of button 'Read more'. ([83cb4c0](https://github.com/jdat82/learning-ionic/commit/83cb4c0))
* **character-detail:** Changed a little bit text look. Better price too. ([6ad38c7](https://github.com/jdat82/learning-ionic/commit/6ad38c7))
* **character-detail:** changed default font size. ([dd75bef](https://github.com/jdat82/learning-ionic/commit/dd75bef))
* **character-detail:** Changed effect when hiding text in detail views. Changed orientation because the .scroll area may vary in length and be smaller than the ion-content height. ([57ffad1](https://github.com/jdat82/learning-ionic/commit/57ffad1))
* **character-detail:** Changed effect when hiding text in detail views. Changed price look. ([59abba5](https://github.com/jdat82/learning-ionic/commit/59abba5))
* **character-detail:** character folder became too big. Added subfolders. ([c25b69a](https://github.com/jdat82/learning-ionic/commit/c25b69a))
* **character-detail:** Comic's cover is better rendered (ratio). Added a fallback image when thumbnail is unknown. ([f344ccd](https://github.com/jdat82/learning-ionic/commit/f344ccd))
* **character-detail:** Corrected navigation for child pages of characterDetail state. ([fe363ec](https://github.com/jdat82/learning-ionic/commit/fe363ec))
* **character-detail:** Depending on platform (cordova or web), when showing the thumbnail, it will not do the same thing. On web, I kept the text hiding whereas on cordova, I use a native photo viewer with zoom and share functionnalities. ([2e92385](https://github.com/jdat82/learning-ionic/commit/2e92385))
* **character-detail:** Finally I prefer to have both viewer even on cordova. ([5101101](https://github.com/jdat82/learning-ionic/commit/5101101))
* **character-detail:** Maintain compatibility with web mode. ([ba6729b](https://github.com/jdat82/learning-ionic/commit/ba6729b))
* **character-detail:** Moved the "read more" button in header bar. ([80a50eb](https://github.com/jdat82/learning-ionic/commit/80a50eb))
* **character-detail:** Possibility to hide text to show cover only. ([5a92e2e](https://github.com/jdat82/learning-ionic/commit/5a92e2e))
* **character-detail:** Prettier loading screen and pretty message when there is no results. ([781ac09](https://github.com/jdat82/learning-ionic/commit/781ac09))
* **character-detail:** Removed fallback image for comic's cover. Replaced by a grey background and comic title. ([bdff3d4](https://github.com/jdat82/learning-ionic/commit/bdff3d4))
* **character-detail:** Removed modal for character comics as we will need to navigate from that page. ([82b9f97](https://github.com/jdat82/learning-ionic/commit/82b9f97))
* **character-detail:** Replaced counters with a more generic and friendly message. ([b5f2379](https://github.com/jdat82/learning-ionic/commit/b5f2379))
* **character-detail-comic-list:** Comics list screen relative to a character with infinite scroll. Pretty cool as space is reserved in the grid and there is no relayout. ([892c354](https://github.com/jdat82/learning-ionic/commit/892c354))
* **character-list:** Following the withdrawal of native transitions, I made a few optimisations : ([c95b4df](https://github.com/jdat82/learning-ionic/commit/c95b4df))
* **character-list:** Less verbose writing for conditionals attributes ([d8bd718](https://github.com/jdat82/learning-ionic/commit/d8bd718))
* **character-list:** One time binding when possible. ([2aa337d](https://github.com/jdat82/learning-ionic/commit/2aa337d))
* **character-list:** Toast the number of results on search. ([b93568f](https://github.com/jdat82/learning-ionic/commit/b93568f))
* **character-list:** very light refactoring ([f9c7de4](https://github.com/jdat82/learning-ionic/commit/f9c7de4))
* **comic-detail:** Added a carousel of comics (first ten) in character detail page. ([74cb9e7](https://github.com/jdat82/learning-ionic/commit/74cb9e7))
* **comic-detail:** Changed print price look. ([8b8e928](https://github.com/jdat82/learning-ionic/commit/8b8e928))
* **comic-detail:** Comic detail page (not finished) ([15f45e3](https://github.com/jdat82/learning-ionic/commit/15f45e3))
* **comic-detail:** Moved files into their own child folder as the parent was becoming too big. ([be0bcef](https://github.com/jdat82/learning-ionic/commit/be0bcef))
* **comic-list:** Added possibility to add/remove faves in comic list view. ([0f9a91a](https://github.com/jdat82/learning-ionic/commit/0f9a91a))
* **comic-list:** Mimic changes made for characters (optimizations and ios bugfix on card bottom border). ([fb02880](https://github.com/jdat82/learning-ionic/commit/fb02880))
* **comic-list:** new spec (same as character-list). ([f383ee9](https://github.com/jdat82/learning-ionic/commit/f383ee9))
* **favourite-list:** Bugfix. ([d2626cc](https://github.com/jdat82/learning-ionic/commit/d2626cc))
* **favourite-list:** Clean way to handle offline start. Removed true offline support code because it is not possible wit firebase without a lot of efforts. ([ce81d74](https://github.com/jdat82/learning-ionic/commit/ce81d74))
* **favourite-list:** Default message when list of favourites is empty. ([f573dfa](https://github.com/jdat82/learning-ionic/commit/f573dfa))
* **favourite-list:** Finally offline is properly handled with creation and deletion tracked and saved locally. ([2ea1360](https://github.com/jdat82/learning-ionic/commit/2ea1360))
* **favourite-list:** Typo ([4aac38f](https://github.com/jdat82/learning-ionic/commit/4aac38f))
* **native-transitions:** Removed that plugin. It is a good plugin but I don't like to use it with an ionic wrapper. I think it may be more useful when handling it yourself. If I have time I will retry it without the ionic wrapper. I prefer to keep it simpler and focus on better web performance. ([3675c9f](https://github.com/jdat82/learning-ionic/commit/3675c9f))
* **native-transtions:** Useless. ionic-native-transitions will do it himself. ([cf52fdd](https://github.com/jdat82/learning-ionic/commit/cf52fdd))
* **native-transtions-keyboard:** Hook that will configure the android manifest with a new keyboard mode (adjustPan) every time the platform is added. ([e205dbd](https://github.com/jdat82/learning-ionic/commit/e205dbd))
* **native-transtions-keyboard:** On android, we need to handle the adjustPan mode by adding a fake content at the end of the scrollable area when keyboard is visible. ([a02b88f](https://github.com/jdat82/learning-ionic/commit/a02b88f))
* **native-transtions-swipe:** Swipe back deactivated for iOS (not interesting in this app). ([7048dfa](https://github.com/jdat82/learning-ionic/commit/7048dfa))
* **perfs:** Disable unnecessary ngAnimate checks. ([eacb22a](https://github.com/jdat82/learning-ionic/commit/eacb22a))
* **perfs:** I'm guessing it is more optimised to target a specific property. ([0e3fc6d](https://github.com/jdat82/learning-ionic/commit/0e3fc6d))
* **perfs:** Little optimisation to process several http promises in one $digest cycle when possible. ([8dd67f9](https://github.com/jdat82/learning-ionic/commit/8dd67f9))
* **perfs:** Memory leak. ([2d230b7](https://github.com/jdat82/learning-ionic/commit/2d230b7))
* **perfs:** Optimisation to avoid unnecessary $digest loops. ([00fefd0](https://github.com/jdat82/learning-ionic/commit/00fefd0))
* Added a fourth tab : favourites. ([8a95692](https://github.com/jdat82/learning-ionic/commit/8a95692))
* Added version and angular constants. ([72fa081](https://github.com/jdat82/learning-ionic/commit/72fa081))
* angular team guidelines. ([75186f2](https://github.com/jdat82/learning-ionic/commit/75186f2))
* Better error handling. No more throw inside the http interceptor. Every exception is interceptable by the controller. One unique workflow. ([3d839e6](https://github.com/jdat82/learning-ionic/commit/3d839e6))
* Better footer. ([f7b07ac](https://github.com/jdat82/learning-ionic/commit/f7b07ac))
* Better splash handling. ([fe88831](https://github.com/jdat82/learning-ionic/commit/fe88831))
* BIG CHANGE: detail views are now open in modals. I made that change because IONIC and UIROUTER are not smart enough to allow you to show in your current view a shared template/controller. Which means you have to duplicate state configuration in order to reuse the same component (template/controller). This not good enough. So I change my design and I now open detail views in a modal like Google do for all its apps. This is a shame I had to sacrifice the swipe back functionality on iOS. Maybe IONIC will add a swipe back behavior on modal later. ([47e7503](https://github.com/jdat82/learning-ionic/commit/47e7503))
* Big refresh about how the build works. ([74bf5f2](https://github.com/jdat82/learning-ionic/commit/74bf5f2))
* Bugfix to avoid treating normal pages. ([7bcfdb7](https://github.com/jdat82/learning-ionic/commit/7bcfdb7))
* Bugfix. Forgot lodash dependency. ([af24e7a](https://github.com/jdat82/learning-ionic/commit/af24e7a))
* Bugfix. Outline and full icon where inversed. ([2bc7e91](https://github.com/jdat82/learning-ionic/commit/2bc7e91))
* Build a little bit more simple and easy to read/understand. ([1570566](https://github.com/jdat82/learning-ionic/commit/1570566))
* Change of plan for naming conventions. Easier reading when using suffix 'list' or 'detail' instead of 's' or ''. ([e54c996](https://github.com/jdat82/learning-ionic/commit/e54c996))
* Change splash duration to 2s. ([5bc7c37](https://github.com/jdat82/learning-ionic/commit/5bc7c37))
* Change splash duration to 3s. ([bca40e0](https://github.com/jdat82/learning-ionic/commit/bca40e0))
* Changed bundle id. ([0f859f0](https://github.com/jdat82/learning-ionic/commit/0f859f0))
* Changed crosswalk version from 16 to 18. Thus, Chrome has been updated from version 45 to 48. ([5c6cc64](https://github.com/jdat82/learning-ionic/commit/5c6cc64))
* Changed default background color for modals to be coherent with default background color in views. ([d486360](https://github.com/jdat82/learning-ionic/commit/d486360))
* Clean startup : we always execute the boot process first and then load the first view. ([cdc2783](https://github.com/jdat82/learning-ionic/commit/cdc2783))
* Cleaning. ([84ec4c3](https://github.com/jdat82/learning-ionic/commit/84ec4c3))
* Commented the copy task until it is used. ([af5dc58](https://github.com/jdat82/learning-ionic/commit/af5dc58))
* Corrected detail pages title. ([2577b41](https://github.com/jdat82/learning-ionic/commit/2577b41))
* Custom directive to optimize image loading and avoid as possible the web effect (image loading from top to bottom). ([67e4d68](https://github.com/jdat82/learning-ionic/commit/67e4d68))
* Deactivated debug infos permanently as they can be enabled manually when needed. ([f5bfa17](https://github.com/jdat82/learning-ionic/commit/f5bfa17))
* Disable landscape orientation on all platforms. ([7be72eb](https://github.com/jdat82/learning-ionic/commit/7be72eb))
* Doc fix. ([f78674f](https://github.com/jdat82/learning-ionic/commit/f78674f))
* Enabled backup in persistent cache (local storage). ([65c3ba4](https://github.com/jdat82/learning-ionic/commit/65c3ba4))
* Experimentation with native transitions. Too bad, there is glitches when inputs gain focus and the keyboard is shown/hidden. ([2bcf352](https://github.com/jdat82/learning-ionic/commit/2bcf352))
* Experimentation with WkWebView. ([a688fd5](https://github.com/jdat82/learning-ionic/commit/a688fd5))
* Finally. Splashscreen is good. ([0cb90ff](https://github.com/jdat82/learning-ionic/commit/0cb90ff))
* Fix tests. ([485974d](https://github.com/jdat82/learning-ionic/commit/485974d))
* Fix to bypass marvel security API from a cordova context (file:// urls). This is stupid but cordova apps can't use their API. ([b329ece](https://github.com/jdat82/learning-ionic/commit/b329ece))
* Fixed coverage configuration. ([32dfb0f](https://github.com/jdat82/learning-ionic/commit/32dfb0f))
* Helper to find which pattern file was loaded in grunt tasks. ([036d618](https://github.com/jdat82/learning-ionic/commit/036d618))
* Implemented a transverse layer to manager errors. There is 3 defaults errors : ([b51a39e](https://github.com/jdat82/learning-ionic/commit/b51a39e))
* Imported interesting parts from another project. ([c5a86a6](https://github.com/jdat82/learning-ionic/commit/c5a86a6))
* In order to always have a back button even in chrome desktop. ([a5e42f7](https://github.com/jdat82/learning-ionic/commit/a5e42f7))
* Initiated the character detail page. ([8fa11fc](https://github.com/jdat82/learning-ionic/commit/8fa11fc))
* Integrated and configured Restangular. ([651f68a](https://github.com/jdat82/learning-ionic/commit/651f68a))
* Ionic transitions not necessary anymore. ([3aac1f0](https://github.com/jdat82/learning-ionic/commit/3aac1f0))
* List of character cards + name search. ([3d9d251](https://github.com/jdat82/learning-ionic/commit/3d9d251))
* List of characters with search and incremental rendering. ([2b82e3a](https://github.com/jdat82/learning-ionic/commit/2b82e3a))
* List of comics implemented like characters. ([b54bb8f](https://github.com/jdat82/learning-ionic/commit/b54bb8f))
* Little refactor: ([997af33](https://github.com/jdat82/learning-ionic/commit/997af33))
* Migrated from grunt-concurrent to grunt-parallel as it doesn't work with the former one. Allows to launch in one command a web server and a watcher. ([d36f223](https://github.com/jdat82/learning-ionic/commit/d36f223))
* Missing dependencies ([bd8ddbb](https://github.com/jdat82/learning-ionic/commit/bd8ddbb))
* Much cleaner csp configuration (minimum to work). ([96f2fd9](https://github.com/jdat82/learning-ionic/commit/96f2fd9))
* New `platform` option which is not used right now but could be useful for instance if you want to instrument your configuration file based on it. ([481b62f](https://github.com/jdat82/learning-ionic/commit/481b62f))
* New icon and splashscreen. ([1e8734b](https://github.com/jdat82/learning-ionic/commit/1e8734b))
* New run task for npm which allow to build any platform without launching anything. Useful when you want to run yourself the app from an IDE. ([63b844e](https://github.com/jdat82/learning-ionic/commit/63b844e))
* New unit tests for characters service. ([00a9a80](https://github.com/jdat82/learning-ionic/commit/00a9a80))
* No more icloud backup storage. ([8d75eed](https://github.com/jdat82/learning-ionic/commit/8d75eed))
* One-time binding when possible. ([778741a](https://github.com/jdat82/learning-ionic/commit/778741a))
* Optimisation in order to avoid animation after too much scrolling (too laggy). ([c4c691e](https://github.com/jdat82/learning-ionic/commit/c4c691e))
* Optimisation to have smoother animations when transitioning to a new state. Moved any async code after DOM processing. ([e7e4062](https://github.com/jdat82/learning-ionic/commit/e7e4062))
* Optimisation to parallelize script loading. ([73a54f5](https://github.com/jdat82/learning-ionic/commit/73a54f5))
* Readme is now uptodate. ([eea782c](https://github.com/jdat82/learning-ionic/commit/eea782c))
* Refactored specs name based on a previous refactor (forgot to rename specs too). ([810aae0](https://github.com/jdat82/learning-ionic/commit/810aae0))
* Reinstalled platforms and plugins after a git clone. ([1fc3678](https://github.com/jdat82/learning-ionic/commit/1fc3678))
* Removed .has-tabs class which reserve space at the bottom of the page. Not necessary because tabs are under the navbar (top). ([80512ce](https://github.com/jdat82/learning-ionic/commit/80512ce))
* Removed async cause it seems to mess with livereload ([7699178](https://github.com/jdat82/learning-ionic/commit/7699178))
* Removed border under tabs (not so beautiful). ([34f2b5a](https://github.com/jdat82/learning-ionic/commit/34f2b5a))
* Removed doc folder from VCS. ([6153411](https://github.com/jdat82/learning-ionic/commit/6153411))
* Removed enableCache setting for now because I may not have time to implement that use case. ([8c52b4b](https://github.com/jdat82/learning-ionic/commit/8c52b4b))
* Removed jQuery dependency because the few I use doesn't justify 252 KB. ([57d6804](https://github.com/jdat82/learning-ionic/commit/57d6804))
* Rename deadpool.json to Deadpool.json ([a645539](https://github.com/jdat82/learning-ionic/commit/a645539))
* Renamed jd-ic-src as jd-ic-bg because it is more accurate and coherent with img-cache ic-bg. ([7bc5e14](https://github.com/jdat82/learning-ionic/commit/7bc5e14))
* Revert "feature/character-list & feature/comic-list — Less verbose writing for conditionals attributes" ([0623a46](https://github.com/jdat82/learning-ionic/commit/0623a46))
* Simplification in handling the livereload option. ([f091909](https://github.com/jdat82/learning-ionic/commit/f091909))
* Smoother animation for modals. ([ba92ba3](https://github.com/jdat82/learning-ionic/commit/ba92ba3))
* Splashscreen is completely bogued on android. Only thing working correctly is Auto Hide. ([e1a64bc](https://github.com/jdat82/learning-ionic/commit/e1a64bc))
* Tests repaired. ([12183ac](https://github.com/jdat82/learning-ionic/commit/12183ac))
* The default title shoud be equivalent to the first page title for coherence and harmony. ([3cddfe3](https://github.com/jdat82/learning-ionic/commit/3cddfe3))
* Unnecessary config preferences. Plus they were interfering with a nice android effect: when you come back to your app after putting it in background, app content is revealed bit by bit with a scale effect. ([0a63e1e](https://github.com/jdat82/learning-ionic/commit/0a63e1e))
* Unused file. ([e9b1e00](https://github.com/jdat82/learning-ionic/commit/e9b1e00))
* Unused images ([82b0f9f](https://github.com/jdat82/learning-ionic/commit/82b0f9f))
* Unused page. ([789099e](https://github.com/jdat82/learning-ionic/commit/789099e))
* Unused reference ([e416996](https://github.com/jdat82/learning-ionic/commit/e416996))
* Upgrade des paquets npm et bower ([ec7b8ee](https://github.com/jdat82/learning-ionic/commit/ec7b8ee))
* **settings-tracking:** Typo. ([cbf764f](https://github.com/jdat82/learning-ionic/commit/cbf764f))
* Upgraded from ionic 1.2.1 to 1.2.4 ([0f46498](https://github.com/jdat82/learning-ionic/commit/0f46498))
* **perfs:** Removed angular imgcache live processing. Now it is done once when retrieving models and the url in cache is setted once in the model. Used raf when needed. ([18f6441](https://github.com/jdat82/learning-ionic/commit/18f6441))
* **perfs:** Simple optimisation to avoid having scripting while animating the modal. ([e99123b](https://github.com/jdat82/learning-ionic/commit/e99123b))
* **photo-viewer:** Use cached url instead of remote one to avoid issues when offline as this plugin doesn't have any error handling. Plus it will be quicker. ([a89adc9](https://github.com/jdat82/learning-ionic/commit/a89adc9))
* **quota:** Handle error 429 when limit of 3000 requests/day has been reached. ([7414d1a](https://github.com/jdat82/learning-ionic/commit/7414d1a))
* **scroll-top:** Allows to scroll back to the top of an ion content by clicking the view title. ([bc182b3](https://github.com/jdat82/learning-ionic/commit/bc182b3))
* **settings:** Better volume effect ([1c652d4](https://github.com/jdat82/learning-ionic/commit/1c652d4))
* **settings:** Capacity to empty cache on demand (http + images). ([67a64ea](https://github.com/jdat82/learning-ionic/commit/67a64ea))
* **settings:** Click handler should be setted on button and not the whole item. ([949d809](https://github.com/jdat82/learning-ionic/commit/949d809))
* **settings:** Credits for Marvel. ([cc5b28c](https://github.com/jdat82/learning-ionic/commit/cc5b28c))
* **settings:** Persist settings accross restart and apply them when starting. ([221a07a](https://github.com/jdat82/learning-ionic/commit/221a07a))
* **settings:** Refactor settings service. ([517fd77](https://github.com/jdat82/learning-ionic/commit/517fd77))
* **settings:** Replaced two DOM elements by one. ([1de9267](https://github.com/jdat82/learning-ionic/commit/1de9267))
* **settings-animations:** Facility for users with less granted phones, they can now disable animations. ([8b5bdf9](https://github.com/jdat82/learning-ionic/commit/8b5bdf9))
* **settings-tracking:** Added possibility to disable tracking in settings. ([08dad3e](https://github.com/jdat82/learning-ionic/commit/08dad3e))
* **tests:** As PhantomJS does not support the HTML5 File API, ImgCache calls needs to be mocked. ([73163fa](https://github.com/jdat82/learning-ionic/commit/73163fa))
* **tests:** Moved back to the official repo cause my pull request has been merged. ([4d5f11f](https://github.com/jdat82/learning-ionic/commit/4d5f11f))
* **tests:** Unnecessary dependency. ([db098bd](https://github.com/jdat82/learning-ionic/commit/db098bd))
* Upgraded package.json ([d60ff8a](https://github.com/jdat82/learning-ionic/commit/d60ff8a))
* Useful logs when there is issues during boot. ([b68c901](https://github.com/jdat82/learning-ionic/commit/b68c901))
* Very cool way to start the app. ([63f5a60](https://github.com/jdat82/learning-ionic/commit/63f5a60))
* Waiting messages. ([0714d75](https://github.com/jdat82/learning-ionic/commit/0714d75))
* www folder should be there when checkouting the project (cordova will yell if not present). ([ca12453](https://github.com/jdat82/learning-ionic/commit/ca12453))



