# BMS 명령어 메모 (임시)

- 마지막 업데이트: 2014-07-11
  - 한글화: 2023-11-25
- 작성: hitkey [홈페이지](https://hitkey.nekokan.dyndns.info/)
  - 이메일: hitkey0801\[at\]hotmail.com
- 옮김: 保登楽月（ほと　ラス） [홈페이지](https://home.hotoras.kr "홈페이지 (한국어)") [트위터(X)](https://x.com/hoto_ras "X 계정") [ActivityPub](https://stella.place/@dohyeon "@dohyeon@stella.place") [^apub]
  - 이메일: hotoras03\[at\]gmail.com

[^apub]: 서버 프로그램이 마스토돈, 미스키, 체리픽(미스키 계열), 메타 스레드 [^threads] 등 ActivityPub 프로토콜을 통해 소통하는 경우, `@dohyeon@stella.place` 쪽으로 팔로우가 가능합니다. 같은 서버일 필요가 없습니다.

[^threads]: 작성 시점 기준, 실험적 기능으로 팔로우가 불가

* 레퍼런스

  |     |     |
  | --- | --- |
  | about BMS: | [https://en.wikipedia.org/wiki/Be-Music_Source](https://en.wikipedia.org/wiki/Be-Music_Source "Be-Music Source - Wikipedia, the free encyclopedia") |
  | This report referred to: | [https://web.archive.org/web/*/http://wiki.bms.ms/Bms:Spec](https://web.archive.org/web/*/http://wiki.bms.ms/Bms:Spec "Bms:Spec - wiki.bms.ms -") |
  | BMS Format Specification: | [http://bm98.yaneu.com/bm98/bmsformat.html](http://bm98.yaneu.com/bm98/bmsformat.html "BM98Data_format_specification") (1998-11-26) |
  | Basic specification of BML: | [https://nvyu.net/rdm/rby_ex.php](https://nvyu.net/rdm/rby_ex.php "ruv-it! \| support page") |
  | BMS extensions proposed by Sonorous: | [https://cosmic.mearie.org/f/sonorous/bmsexts](https://cosmic.mearie.org/f/sonorous/bmsexts "BMS extensions proposed by Sonorous") (since 2013-07-10) (as reference data) |
  | DTX file format specifications: | [http://dtxmania.net/wiki.cgi?page=qa\_dtx\_spec_e](http://dtxmania.net/wiki.cgi?page=qa_dtx_spec_e "qa_dtx_spec_e - DTXMania powered by YAMAHA Silent Session Drums") (as reference data) |
  | Guide to understand BMS format: | [https://cosmic.mearie.org/2005/03/bmsguide/](https://cosmic.mearie.org/2005/03/bmsguide/ "TokigunStudio: Guide to understand BMS format") (2005-03-22) (as reference data) |
  | Angolmois Internals: | [https://github.com/lifthrasiir/angolmois/blob/master/INTERNALS.md](https://github.com/lifthrasiir/angolmois/blob/master/INTERNALS.md "angolmois/INTERNALS.md at master · lifthrasiir/angolmois · GitHub") (2013-03-09) (as reference data) |
  | about obsolete MGQ notation: | [https://web.archive.org/web/*/http://ivy.pr.co.kr/rdm/jp/extension.htm](https://web.archive.org/web/*/http://ivy.pr.co.kr/rdm/jp/extension.htm "Dear Feeling") (2001-06-21) (as reference data) |
  | LR2 beta3 Skin csv specification revision 5: | [http://right-stick.sub.jp/lr2skinhelp.html](http://right-stick.sub.jp/lr2skinhelp.html "LR2SkinHELP 第五版") (2013-09-29) (as reference data) |

* 주의사항
  * BMS를 클릭 수천 번으로 제작할 수 있게 된 지금, 이 문서는 심한 `#RANDOM` 기믹을 사용할 게 아니라면 채보 제작자에게 필요하지 않습니다.
    * `#RANDOM`을 이용한 S-RANDOM 구현 등의 심한 `#RANDOM` 기믹은 해당 부분, 혹은 `RANDOM`의 차분 파일을 참조해주세요.
    * 이 문서는 BMS 구동기나 파서를 개발하는 분들을 위해 작성되었으나, 호기심에 이끌려 오신 분들과 같이 개발과는 관계가 없는 분들도 어렵지 않게 읽을 수 있도록 작성하려 노력했습니다.
  * 스펙 사항을 번역한 문서가 아닙니다. 단순한 메모입니다.
  * 온라인 번역기로 작성된 문서를 번역한 문서입니다.
  * 원문 작성자가 영어/일본어를 잘 이해하지 못하기에, 원본 문서가 정확한지 판단할 수 없습니다.
    * 원본 번역이 부정확해 잘못된 이해를 불러일으킬 수도 있습니다.
  * 출처 문서가 정확한 내용이 아닐 수도 있습니다.
    * 실수 안 하기 위해 노력은 했지만, 모든 항목이 정확하다고 단정지을 수는 없습니다.
  * 위 이유로, 이 문서에 대한 책임을 지지 않습니다.
  * 질문이 있다면 제게 연락해주세요. 오류가 발견되었다면 수정하겠습니다.

- 업데이트 기록
  - 2023-11-25: [원본 문서](./cmds-en.md)([출처](https://hitkey.nekokan.dyndns.info/cmds.htm "BMS command memo (draft) by hitkey"))를 Markdown으로 모두 옮기고, 본 문서의 번역 작성을 시작했습니다.

## 목차
- [BMS 앱](#bms-앱)
  - [현역 BMS 앱](#현역-bms-앱)
- [BMS 포맷에 대한 메모](#bms-포맷에-대한-메모)
  - [스펙상 최소 사양에 대하여](#스펙상-최소-사양에-대하여)
  - [스펙에서 언급되지 않는 세부 사항](#스펙에서-언급되지-않는-세부-사항)
  - [일반적인 반영에서](#일반적인-반영에서)

## BMS 앱
편의를 위해, 이 문서에서는 아래와 같은 약어를 사용합니다.
(범용적으로 사용되는 약어와 상이할 수 있습니다.)

| The name and version | Abbr | Description |
| --- | --- | --- |
| Body (obsolete): |     |     |
| BM98 & BM98 kikuchan version 330 revision 42 | BM98 | [https://hitkey.nekokan.dyndns.info/bm98.htm](https://hitkey.nekokan.dyndns.info/bm98.htm "BM98 Kikuchan Version 3.30 Revision #4.2") |
| BM98 Kikuchan Version 3.32β Drink Edition | BM98de | [http://www.uranus.dti.ne.jp/~kikuchan/bm98/](http://www.uranus.dti.ne.jp/%7Ekikuchan/bm98/ "きくちゃんのページ 2nd - BM98") |
| music game quest ver2.18 | MGQ | [https://web.archive.org/web/\*/http://www.geocities.co.jp/Playtown/4702/\*](<https://web.archive.org/web/*/http://www.geocities.co.jp/Playtown/4702/*> "Internet Archive Wayback Machine") |
| Delight Delight Reduplication Ver.0.50 beta5 | DDR | [https://delight.airytail.co/download.html](https://delight.airytail.co/download.html "Download - Delight Delight Reduplication Support Page") |
| rhythm-it 1.72a | RDM | [https://nvyu.net/rdm/download3.php](https://nvyu.net/rdm/download3.php "ruv-it! \| support page") |
| Mixwaver 1.6 Final & MixWaver\]\[ 1.2 | MW  | [http://mixwaver.s18.xrea.com/html/dl_mw.html](http://mixwaver.s18.xrea.com/html/dl_mw.html "Download - MixWaver Official Support Page") |
| BmDx Millennium Edition M6 ([old document](https://web.archive.org/web/*/http://www.interq.or.jp/ski/sakura/BmDxA.html "Internet Archive Wayback Machine")) | BmDx | [https://web.archive.org/web/*/http://www.interq.or.jp/ski/sakura/otoge/otoge_bmdx.html](<https://web.archive.org/web/*/http://www.interq.or.jp/ski/sakura/otoge/otoge_bmdx.html> "Internet Archive Wayback Machine") |
| bemaniaDX Vision.3 APPEND Vision.4 Skin version 0.95 | bemaniaDX | [https://web.archive.org/web/20070518162219/http://bemaniadx.s3.xrea.com/download.html](https://web.archive.org/web/20070518162219/http://bemaniadx.s3.xrea.com/download.html "■ bemaniaDX Download Site ■") |
| unofficial nazobmplay rev.798 | nazo | [https://manbow.nothing.sh/nazobmplay/download.html](https://manbow.nothing.sh/nazobmplay/download.html "nazoBMplay 非公式ダウンロードサイト") |
| unofficial nazobmplay rev.798 + Glasopal 20080313 | nazoZZ | [https://hitkey.nekokan.dyndns.info/glasopal.html](https://hitkey.nekokan.dyndns.info/glasopal.html "Glasopal ミラーページ") |
| BM2DXEmu a20 | DXEmu | [http://www.charatsoft.com/software/bm2dxemu/index.html](http://www.charatsoft.com/software/bm2dxemu/index.html "■CharatSoft.com » SOFTWARE » BM2DXEmu α") |
| MacBeat 0.9.8.3 | Mac | http://harinezumi.s14.xrea.com/download/MacBeat0983.sit.bin |
| Aqua'n Beats 1.0.3 | Aqua | [http://aquan-beats.matrix.jp/](http://aquan-beats.matrix.jp/ "Aqua'nBeats") |
| nanasigroove ver.1.552 | nanasi | [http://d11x.sakura.ne.jp/asdf/?p=13](http://d11x.sakura.ne.jp/asdf/?p=13 "ナナシグルーヴ » A.S.D.F.") |
| forgetalia++ (2009-04-15) | fgt++ | http://cerebralmuddystream.hp.infoseek.co.jp/forgetalia++/index.html (closed) |
| Body (current): |     |     |
| LunaticRave2 100201 | LR2 | [https://web.archive.org/web/20110210225009/http://www.lr2.sakura.ne.jp/index2.html](https://web.archive.org/web/20110210225009/http://www.lr2.sakura.ne.jp/index2.html "縮小運営中") (for now, the de facto standard in Japan) |
| ruv-it! 2.0 b5p7 test #7 (2012-03-19) | ruvit | [https://nvyu.net/rdm/](https://nvyu.net/rdm/ "ruv-it! \| support page") (for now, the de facto standard in South Korea) |
| nanasigroove2 beta (Toy Musical 3 Ver.2.2) | nanasi2 | [http://d11x.sakura.ne.jp/asdf/](http://d11x.sakura.ne.jp/asdf/ "A.S.D.F") |
| forgetalia# (2011-04-16) | fgt# | https://cerebralmuddystream.nekokan.dyndns.info/soft/forgetalia_sp.zip |
| Feeling Pomu Second Ver 0.8001 | pomu2 | [https://pmcc.nekokan.dyndns.info/pmcc2/download.html](https://pmcc.nekokan.dyndns.info/pmcc2/download.html "Colorful Channel official website ++ download") |
| charatbeatHDX VIOLET (v1.05) | HDX | [http://www.charatsoft.com/software/charatbeatHDX/index.html](http://www.charatsoft.com/software/charatbeatHDX/index.html "■CharatSoft.com » SOFTWARE » charatbeatHDX VAIOLET") |
| Angolmois 2.0 e5cea53a2cbd | Angolmois | [https://mearie.org/projects/angolmois/](https://mearie.org/projects/angolmois/ "Angolmois \| mearie.org Projects") |
| Angolmois Rust Edition (2014-04-08) | Angolmois | [https://github.com/lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust "lifthrasiir/angolmois-rust · GitHub") |
| Sonorous 0.1.0-pre (2014-07-08) | Sonorous | [https://cosmic.mearie.org/f/sonorous/](https://cosmic.mearie.org/f/sonorous/ "Sonorous") |
| Editor: |     |     |
| BMS Creator 2.0b1 | BMSC | [http://tixlab.com/software/bmsc.shtml](http://tixlab.com/software/bmsc.shtml "BMS Creator") |
| beditor 1.3.1 | beditor | [https://web.archive.org/web/*/http://macbeat.at.infoseek.co.jp/data/*](https://web.archive.org/web/*/http://macbeat.at.infoseek.co.jp/data/* "Internet Archive Wayback Machine") |
| GDA Creator Professional Edition Ver.0.24 | GDAC2 | [https://www.asahi-net.or.jp/~nm4j-tyn/gdac2/](https://www.asahi-net.or.jp/%7Enm4j-tyn/gdac2/ "GDA Creator Professional Edition") |
| GDAC2 lane-script for nanasigroove-extended-command | 774gsc | http://asdf.bms.ms/soft/nanasi/774gsc.zip (download is impossible now) |
| BMx Sequence Editor 1.3.8 | BMSE | [http://ucn.tokonats.net/software/bmse/](http://ucn.tokonats.net/software/bmse/ "UCN-Soft - Software » BMSE") |
| BMx Sequence Editor dttvb-1.3.8 (2011-11-16T18:36:00 ver.) | BMSE | [https://github.com/dtinth/UCN-BMSE](https://github.com/dtinth/UCN-BMSE "dtinth/UCN-BMSE · GitHub") (visualization of LN) |
| iBMS BMS Creator 3.0.5 Delta | iBMSC | [https://web.archive.org/web/20140819164923/http://www.cs.mcgill.ca/~ryang6/iBMSC/](https://web.archive.org/web/20140819164923/http://www.cs.mcgill.ca/%7Eryang6/iBMSC/ "iBMSC - Home") |
| DTXCreator 026 (July 7th, 2014) | DTXC | [https://en.osdn.jp/projects/dtxmania/releases/](https://en.osdn.jp/projects/dtxmania/releases/ "Download Files List - DTXMania - OSDN") |
| Viewer (obsolete): |     |     |
| BMS Viewer 2.0 | BMSV | [https://web.archive.org/web/*/http://www.h3.dion.ne.jp/~cpp/download/bmview/index.html](https://web.archive.org/web/*/http://www.h3.dion.ne.jp/%7Ecpp/download/bmview/index.html "BMS Viewer - ていくいっと れいずぃ！") |
| BME(BMS) Viewer 0.04 | BMEV | [http://www.din.or.jp/~k-uraki/game/tools.html](http://www.din.or.jp/%7Ek-uraki/game/tools.html "Game Support Tools - うらこく") |
| nBMplay v0.26a | nBMplay | [https://www.nothing.sh/download/](https://www.nothing.sh/download/ "Index of /download - area[nothing]: Really Simple Site") |
| in_bm 1.17 (WAview) | WAview | [https://web.archive.org/web/*/http://nickle.ath.cx/~softlab/in_bm/](https://web.archive.org/web/*/http://nickle.ath.cx/%7Esoftlab/in_bm/ "in_bm公開ページ") (plug-in of Winamp ([https://www.winamp.com/](https://www.winamp.com/ "Winamp Media Player - MP3, Video, and Music Player - Winamp")) |
| o2play 2009-09-12 | o2play | [http://rlnoparo.ys168.com/](http://rlnoparo.ys168.com/ "rlnoparo.ys168.com") |
| Viewer (current): |     |     |
| uBMplay 1.5.2 | uBMplay | [http://ucn.tokonats.net/software/ubmplay/](http://ucn.tokonats.net/software/ubmplay/ "UCN-Soft - Software » uBMplay") |
| PMSee-V v2.2.3 | PMSee-V | [https://sakukoba.ninja-x.jp/ponila/](https://sakukoba.ninja-x.jp/ponila/ "ポニラボ") |
| BMIIDXView2010 v2.14 | IIDXv | [http://www.charatsoft.com/software/bmview/index.html](http://www.charatsoft.com/software/bmview/index.html "■CharatSoft.com » SOFTWARE » BMIIDXView2010") |
| Others (obsolete): |     |     |
| otama Ver.0.991 | otama | [https://www.asahi-net.or.jp/~VG5M-OBT/otama.html](https://www.asahi-net.or.jp/%7EVG5M-OBT/otama.html "otama") (bullet curtain) |
| NINJA AGENT GALLI ver1.03 | GALLI | [https://web.archive.org/web/20160311123053/http://ninjaactionteam.sakura.ne.jp/sakuhin_bmsplayer.html](https://web.archive.org/web/20160311123053/http://ninjaactionteam.sakura.ne.jp/sakuhin_bmsplayer.html "忍者放送協会") (action game) |
| BMS Printer Ver.0.01 Pre-Release | bmsPRN | [https://delight.airytail.co/download.html](https://delight.airytail.co/download.html "Download - Delight Delight Reduplication Support Page") |
| bms2wav 0.07b / 0.07c | bms2wav | http://homepage2.nifty.com/ma~/ (download is impossible now) |
| bme2wav BETA 13 | bme2wav | [http://childs.squares.net/program/bme2wav/index.html](http://childs.squares.net/program/bme2wav/index.html "BME2WAV - CHILD'S SQUARE") |
| BmsToAvi 0.03c | bms2avi | [http://www32.tok2.com/home/digitalapeman/Tools/BmsToAvi/BmsToAvi.html](http://www32.tok2.com/home/digitalapeman/Tools/BmsToAvi/BmsToAvi.html "BmsToAvi") |
| BGAEncoder 0.2a | BGAenc | [http://titans-server.ddo.jp/~murasin/](http://titans-server.ddo.jp/%7Emurasin/) (download is impossible now) |
| in_bm 2.01 | in_bm2 | [https://web.archive.org/web/*/http://nickle.ath.cx/~softlab/in_bm/](<https://web.archive.org/web/*/http://nickle.ath.cx/%7Esoftlab/in_bm/> "in_bm公開ページ") (plug-in of [Winamp](https://www.winamp.com/ "Winamp Media Player - MP3, Video, and Music Player - Winamp")) |
| BMS/BME/EMS plugin for KbMediaPlayer version 1.0r13 | bmse.kpi | KbMedia Player Version 2.63a contains this<br><br>[http://hwm5.gyao.ne.jp/kobarin/index.htm](http://hwm5.gyao.ne.jp/kobarin/index.htm "Kobarinのホームページ") |
| Others (current): |     |     |
| bmx2wav 1.3.3 | bmx2wav | [http://childs.squares.net/program/bmx2wav/index.html](http://childs.squares.net/program/bmx2wav/index.html "BMX2WAV - CHILD'S SQUARE") |
| PMChr-V v4.0.2 | PMChr-V | [https://sakukoba.ninja-x.jp/ponila/](https://sakukoba.ninja-x.jp/ponila/ "ポニラボ") |
| woslicerII (wav-file slicer) | woslicerII | [https://cerebralmuddystream.nekokan.dyndns.info/](https://cerebralmuddystream.nekokan.dyndns.info/ "脳性濁流") |
| woslicerII (bug-fix version? 2012-09-14) | woslicerII | [https://twitter.com/wosderge/status/246852579550699522](https://twitter.com/wosderge/status/246852579550699522 "Twitter / wosderge:") |
| woslicerIII ~(requires .NET Framework 4.5 (Windows Vista or later))~ | woslicerIII | [https://cerebralmuddystream.nekokan.dyndns.info/](https://cerebralmuddystream.nekokan.dyndns.info/ "脳性濁流") |
| BMx Outliner (for now, `#RANDOM` / `#SWITCH` viewer) | outliner | [https://hitkey.nekokan.dyndns.info/bmxoutliner.htm](https://hitkey.nekokan.dyndns.info/bmxoutliner.htm "BMx Outliner") (web apps) |
| Starry Music Beat ver1.03 | SMB | [https://itunes.apple.com/jp/app/starry-music-beat/id481749987?mt=8](https://itunes.apple.com/jp/app/starry-music-beat/id481749987?mt=8 "App Store - Starry Music Beat") (for iOS) |
| BGAEncAdvance Ver0.034 | BGAEncAdv | [https://yaruki0.net/programs/bgaencadv.html](https://yaruki0.net/programs/bgaencadv.html "Nageyari Software > プログラム > BGAEncAdvance") |
| bms diff tool | diff | [https://stairway.sakura.ne.jp/smalltools/minibmsplay/diff.htm](https://stairway.sakura.ne.jp/smalltools/minibmsplay/diff.htm "bms diff tool") (web apps) |
| lr2\_pmsview\_helper | LR2PMS | [https://twitter.com/misty_ls04/status/473058415636279296](https://twitter.com/misty_ls04/status/473058415636279296 "【人柱求む】") |
| to be tested: |     |     |
| o2mania 1.2.0 | o2mania | [http://www.o2mania.com/](http://www.o2mania.com/ "O2MANIA-DJMAX劲乐团单机版模拟器") |
| MyO2 2011-06-01 | MyO2 | (Since it seems that I received warning, I do not indicate URI.) |
| D3beat ver1.1 ([jubeat](https://en.wikipedia.org/wiki/Jubeat "Jubeat - Wikipedia, the free encyclopedia") style / Windows7 or later) | D3beat | [http://www.nicovideo.jp/mylist/29296483](http://www.nicovideo.jp/mylist/29296483 "プログラミング ‐ ニコニコ動画(原宿)") |
| Invisible Object to Landmine Object Converter | 3-4toD-E | [https://nekokan.dyndns.info/~otlovers/guidance/guidance_4b.html](https://nekokan.dyndns.info/%7Eotlovers/guidance/guidance_4b.html "Obj Tech Lovers \| Guidance chapter4-7") |
| Sp2Dp ver_110622 | SP2DP | http://www.geocities.jp/o6o\_o9o\_o6o/soft/ (download is impossible now) |
| BMSE ClipBoard Object Data Format to NoteDrop Converter | BM-ND | [http://bmse-notedrop.jgate.de/](http://bmse-notedrop.jgate.de/ "bmse-notedrop") (web apps) |
| Be-Music Helper (beta 4′) ~(Windows Vista or later)~ | bmhelper | [https://excln.github.io/bmhelper.html](https://excln.github.io/bmhelper.html "Lazy Notes") |
| Mid2BMS | Mid2BMS | [http://mid2bms.web.fc2.com/](http://mid2bms.web.fc2.com/ "Mid2BMS BMS Improved Development Environment") |
| \[tentative name\] \[suspended\] TechnicalGroove | techGrv | [https://web.archive.org/web/*/https://dl.dropboxusercontent.com/u/19134729/otogeokiba.html](<https://web.archive.org/web/*/https://dl.dropboxusercontent.com/u/19134729/otogeokiba.html> "おとげせいさくちゅう") |

마지막 정리: 2014-07-11

### 현역 BMS 앱
Lunatic Rave 2를 제외한 모든 현역 BMS 앱은 아래 사양표의 전부를 지원한다.

| 명칭 | 설명 |
| --- | --- |
| **beatoraja** | Lunatic Rave 2 이후에 출시된 구동기 중 가장 널리 사용되는 구동기.<br>스킨 문제, 유저층의 빈약함, 느린 업데이트 등으로 인해 평이 크게 좋지는 않았으나,<br>세월이 지나면서 기능도 어느 정도 확충되고 무료 스킨도 다수 추가되어<br>많은 유저들에게 선택받고 있다.<br>최근 플레이 유저 수는 LR2와 유사한 수준.<br><br>온라인 랭킹 지원 |
| bemuse | 태국에서 개발하고 있는 BMS 구동기.<br>웹 기반으로 키맵이 가능하며, 배속은 방향키 위, 아래로 조절한다.<br><br>온라인 랭킹 지원 |
| **Lunatic Rave 2** | 2008년 이후로 개발이 중단되었으나 여전히 현역의 자리를<br>유지하고 있는 구동기. HD, FLAC 개조 등이 이루어졌으며,<br>오랜 세월 누적된 데이터와 IIDX와 가장 유사한 오토 저지,<br>판정 및 게이지 체계를 보유하고 있다.<br>일본에서는 여전히 1위의 자리를 유지하고 있다.<br><br>개조 여부에 상관 없이 온라인 랭킹 지원 |
| **Qwilight** | 2018년부터 개발 중인 국산 구동기.<br>컨트롤러라고 하면 떠올릴 수 있는 모든 장비를 지원하는 것이 특징.<br>여기에서 설명하는 BMS와 이의 변종들 함께 JSON 기반의 BMSON 포맷을 완벽 지원하며,<br>관련 에디터와 연동해 차분 오토플레이와 비주얼 수정도 가능하다.<br>이 문서에서 언급하는 로케일 문제도 신경 쓰지 않아도 된다.<br><br>온라인 랭킹 지원 |
| Project OutFox | StepMania를 개량해 제작되고 있는 구동기.<br>BMS 파싱 기능을 바닥부터 새로 만들고 있어 기믹 채보와의 호환성이 좋지 않다.<br>StepMania 기반이라 플레이 도중 배속 변경이 불가하고,<br>노멀 게이지(Groove Gauge)도 지원되지 않는다. |

마지막 정리: 2023-12-25

## BMS 포맷에 대한 메모
### 스펙상 최소 사양에 대하여
다음은 BMS 사양의 요약이다.
- 이 포맷은 일본의 Yane Urao와 NBK가 1998년에 처음 제안했다.
- 누구나 이 포맷을 자유롭게 사용할 수 있다.
- `#`로 시작하는 줄은 명령줄이다. 나머지는 무시되며, 주석처럼 사용된다.
- 명령줄은 대소문자를 구분하지 않는다.
- 명령줄은 header 줄과 channel 줄로 구분된다.
- 실행 시간에 컴파일되므로, 명령의 작성 순서는 구동과 무관하다.
  - 예를 들어: 헤더는 어느 곳에나 작성될 수 있고, 채널 부분 전에 작성될 필요도 없다.

하지만, 세부 사양으로 들어가면 구현체에 의존하는 부분이 있다.
- 몇몇 경우에서, 일부 구현체는 대소문자를 구분한다. 예: `#LNOBJ XX`
- O2play에서와 같이, `<HEADER>`에서의 소문자를 인식하지 못하는 경우도 있다.

### 스펙에서 언급되지 않는 세부 사항
헤더 문장은 구분자로 하나의 반각 공백을 사용한다.
- `#header value`
- 몇몇 구현체는 tab 문자도 사용할 수 있다.
- 몇몇 구현체는 연속된 공백 문자를 하나의 구분자로 본다.
- 몇몇 구현체는 공백 문자로 이루어진 들여쓰기를 지원한다.
- 몇몇 구현체는 이러한 사항을 지원하지 않으므로, BMS를 제대로 파싱하지 못할 수 있다.

채널 문장은 구분자로 하나의 반각 콜론 문자를 사용한다.
- `#xxxCH:00112233`
- `xxx`: 마디의 위치
- `CH`: 실행할 채널
- `00`, `11`, `22`, `33`: 알파벳과 숫자로, 각 항목의 색인을 나타낸다.
  일반적으로 이의 경우의 수를 키음의 수로 부른다.
  | 시기 | 경우의 수 | 구현 |
  | --- | --- | --- |
  | 초기: 16진수 | 16*16 = 256 | `[0-9A-Fa-f][0-9A-Fa-f]` |
  | 현대 이전: 제한된 36진수 | 16*36 = 576 | `[0-9A-Fa-f][0-9A-Za-z]` |
  | 현대: 36진수 | 36*36 = 1296 | `[0-9A-Za-z][0-9A-Za-z]` |
- 일부 색인으로 구성된 값은 동일한 간격으로 측정값을 나눈다.
  - 4개의 색인을 작성하면 측정값을 4개로 나눈다. 즉, 4분음표 4개라는 박자를 지정했다는 의미이다.
- `00`은 쉼표를 나타낸다.
- 채널에 따라 헤더가 바뀔 수 있다. 이는 `#WAVxx`, `#BMPxx` 등에서 나타난다.

차분 파일은 기술적으로 평문 텍스트 파일이다. 확장자를 `TXT`에서 `BMS`로 변경하면, BMS 앱에서 이를 차분으로 인식한다.
- 스펙에는 문자 인코딩을 정의하고 있지 않다. 이 때문에 한글, 일본어, 일부 특수 문자와 같은 다중 바이트 문자열이 깨지는 문제가 있다.
- 일본 BMS 파일은 대부분 [Shift-JIS](https://ko.wikipedia.org/wiki/Shift_JIS "위키백과: Shift-JIS") 포맷으로 되어 있다.
- 대부분의 일본 BMS 앱은 다중 언어 인코딩을 지원하지 않는다.
  - 다중 바이트 문자열을 포함하고 있는 BMS 명령은 깨진다.
  다만 일본어 Windows 환경에서는 Shift-JIS 다중 바이트 문자열이 정상적으로 표시된다.
  - 파일 이름 또는 경로에 다중 바이트 문자열이 포함되어 있다면, BMS 앱이 제대로 동작하지 않는다.
  다만 일본어 Windows 환경에서는 Shift-JIS 다중 바이트 문자열은 정상적으로 처리된다.
  - 일본어 Windows 환경에서는, LR2와 BMX2WAV에서 [JIS (ISO-2022-JP)](https://en.wikipedia.org/wiki/ISO/IEC_2022 "Wikipedia: ISO/IEC 2022")나 [EUC-KR](https://ko.wikipedia.org/wiki/EUC-KR "위키백과: EUC-KR")로 작성된 BMS가 제대로 작동하지 않음이 확인되어 있다.
- 환경에 무관하게 안전하게 작동된다고 확인된 문자열은 ASCII뿐이다. 최소한 파일 이름이나 경로 이름에는 영숫자를 사용하자.
- ruvit, iBMSC, IIDXv (2.13+), HDX (0.98+), Sonorous, BGAEncAdv, TechnicalGroove와 같은 경우 다중 언어 인코딩을 지원한다.
  - 다만 Qwilight를 제외하면 글자가 정확하게 표시된다는 것이 보장되지는 않는다.
  - 엔화 문자, 전각 물결표/대시, 원화 문자 문제, GB_18030 등의 문제는 해결되지 않았다.

### 일반적인 반영에서
같은 헤더가 중복된다면, 가장 마지막에 있는 명령이 적용된다.
  
  | 위치 | 예제 |
  | --- | --- |
  | 100 | `#TITLE ABC` |
  | 200 | `#TITLE DEF` |

위 예제에서 이 차분의 제목은 `DEF`이다.
- 아래에 별도로 설명한 헤더를 제외하면 이 법칙이 적용된다.
- `#SUBTITLE`, `#SUBARTIST`, `#COMMENT`, `#LNOBJ`에는 적용되지 않을 수 있다.
- 채널 `#xxx02` (마디의 길이)에도 적용된다.

그러나, 아래는 중복될 수 있으므로 더 복잡한 프로세싱이 필요하다.
- 둘 이상의 동일한 명령이 지정되는 경우
  - `#ExtChr`: [BM98] 확장된 문자
  - `#STP`: [beatmaniaDX] 시퀸스 정지 (STOP)
  - `#WAVCMD`: [MacBeat] 의사 [MOD](https://en.wikipedia.org/wiki/MOD_%28file_format%29 "Wikipedia: MOD (file format)") 이펙트
  - `#OPTION`: [nanasigroove] OPTION 강제 적용
  - `#SUBTITLE`: [nanaisgroove] 부제목
  - `#SUBARTIST`: [RunaticRave] 도움을 준 사람들
  - `#COMMENT`: [felingPomu] 선택 창에서의 도움말
  - `#LNOBJ`: [Rhythm-it] LONGNOTE의 중지
- 블록으로 지정하는 명령
  - `#RANDOM` 또는 `#SETRANDOM`
    - `#IF`
    - `#ELSEIF`
    - `#ELSE`
    - `#ENDIF`
    
    `#ENDRANDOM`
  - `#SWITCH` 또는 `#SETSWITCH`
    - `#CASE`
    - `#SKIP`
    - `#DEF`

    `#ENDSW`

예를 들어, 아래와 같은 경우:
```
*--- 출처: [CLUE] Random by Sobrem X Silentroom
*
*--- 다운로드: https://manbow.nothing.sh/event/event.cgi?action=More_def&event=137&num=372
#RANDOM 12
#IF 1
#GENRE II - Fo1lowinの tんe C1ひe .. .
#ENDIF
#IF 2
#GENRE II - Following the Clue
#ENDIF
#IF 3
#GENRE II - Following the Clue
#ENDIF
#IF 4
#GENRE II - Following the Clue
#ENDIF
#IF 5
#GENRE II - Following the Clue
#ENDIF
#IF 6
#GENRE II - Following the Clue
#ENDIF
#IF 7
#GENRE II - Following the Clue
#ENDIF
#IF 8
#GENRE II - Following the Clue
#ENDIF
#IF 9
#GENRE II - Following the Clue
#ENDIF
#IF 10
#GENRE II - Following the Clue
#ENDIF
#IF 11
#GENRE II - Following the [Clue]
#ENDIF
#IF 12
#GENRE II - Following the Clue
#ENDIF
#ENDRANDOM
#TITLE Random [SP ANOTHER]
#RANDOM 2
#IF 1
#ARTIST Sobrem × Silentroom
#ENDIF
#IF 2
#ARTIST Silentroom × Sobrem
#ENDIF
#ENDRANDOM
```

정상적으로 컴파일된다면
- `#RANDOM 12`...`#ENDRANDOM` 블록 내에 `#GENRE` 블록이 있다.
이를 컴파일할 때에는 `#RANDOM 12`의 결과에 따라 하나의 `#GENRE` 블록이 선택된다.
- `#RANDOM 2`...`#ENDRANDOM` 블록 내에 `#ARTIST` 블록이 있다.
이를 컴파일할 때에는 `#RANDOM 2`의 결과에 따라 하나의 `#ARTIST` 블록이 선택된다.
- 이들 `#GENRE`, `#ARTIST` 블록은 중복되지 않는 블록이므로, 만약 하단에 추가적인 선언이 있다면 그 값을 따른다.

다만 Qwilight와 같은 일부 구동기는 header 부분의 `#RANDOM`...`#ENDRANDOM` 블록을 컴파일하지 않으므로, 항상 가장 마지막의 고정된 값이 노출된다.

한편, 같은 마디에 같은 채널이 중복되면 이 둘은 합쳐진다.
- `#xxx01` (BGM 채널), `#xxx02` (마디 길이), `#xxxA6` (`#CHANGEOPTION`)에는 반영되지 않는다.
- 여러 BGM 줄은 여러 BGM 줄로 해석되어야 한다. 이는 합쳐질 수 없다.
- 둘 이상의 `#xxx02`가 중복되면, 가장 아래의 것이 적용된다.
- 동적 옵션 변경 채널은, 둘 이상의 옵션을 순서대로 변경하기 위해 BGM 채널과 같은 문자열을 채용하고 있다.

채널이 중복되어 합쳐질 때, 더 나중에 쓰여진 줄이 먼저의 것을 덮어쓴다. 그러나 `00`은 덮어쓰지 않는다.
예를 들어:

```
#00113:11111111
#00113:0022332255224400
#00113:0066
```
으로 지정했다면, `#00113:1122332266224400`으로 파싱된다.
이는 1번 마디의 13번 채널에 `#WAV11`, `#WAV22`, `#WAV33`, `#WAV22`, `#WAV66`, `#WAV22`, `#WAV44` 키음과 키음 공백을 8비트로 나열하는 것이다.

하지만 구현체 중 절반 정도는 이 사항을 지원하지 않는다. (이쯤 되면 이게 스펙상 사양인지도 구분하기 어렵다.)
- 채널의 중복을 지원하지 않는 경우 노트 수 계산을 제대로 할 수 없다.
- pomu2는 자체적으로 키음을 혼합할지를 결정하는 기능이 있다.
그런데 채널이 중복되면 이게 일반적인 작동을 하지 않는다.
- LR2 또한 pomu2와 유사한 기능과 버그를 가지고 있다.
이쪽은 지뢰 노트 채널의 중복도 제대로 처리하지 못한다.

BMS 파서는 CRLF, CR, LF 세 가지의 다음 줄 코드를 한 파일에서 읽어야 할 수도 있다.
- 파일 끝 문자가 이러한 코드 전후에 나올 수도 있다.
  - 예: `#08401:ZZ[EOF]` - 84번째 마디의 1번 채널에 키음 ZZ를 1비트 간격으로 넣는다{파일 끝}.

다음 사항은 사양에 어떻게 해석할지 정의조차 되어 있지 않다.

| 예제 | 해설 |
| --- | --- |
| `#00111:0011文字2233` | 채널 중간에 다중 바이트 문자열의 혼합 |
| `#00112:0011223` | 채널 명령의 키음 지정이 2의 배수가 아님 |
| `#00113:+-;$&'()/` | `#WAV`에서 정의 불가한 문자열의 혼입 |
| `#00114:1100...(대충 50만 자 이상)...011` | 너무 긴 문자열 |
| `#00115:11  ;comment` | DTX 인라인 주석 |
| `#00102:12.375f` | IIDXv와 HDX 등에의 옵션 플래그 |
| `#00121:  FFFFFF  OOOOOO  OOOOOO  NNNNNN`<br>`#00122:  FF      OO  OO  OO  OO  NN  NN`<br>`#00123:  FFFFFF  OO  OO  OO  OO  NN  NN`<br>`#00124:  FF      OO  OO  OO  OO  NN  NN`<br>`#00125:  FF      OOOOOO  OOOOOO  NN  NN` | Shift-JIS 아트 |

nazo, uBMplay, LR2 등 몇몇 구현체는 이를 해석하지만, 그 방법은 알려져 있지 않다.
적절한 해석 방법 또한 알려져 있지 않다.

BMS 파서는 다음과 같은 문장을 읽어야 할 수도 있다.

| 예제 | 해설 |
| --- | --- |
| `#stopA 192` | 정의 슬롯 인덱스에 0 억제<br>(A번째 마디에 192/192박동안 멈춤) |
| `#stop11 -192` | 음수 값<br>(11번째 마디에 -192/192박동안 멈춤<br>= 11번째 마디에서 그 마디 스킵) |
| `#stop22 ` | 인수가 비어 있는 명령 |
| `#stop33` | 구분자가 누락된 명령 |
| `#if	4` | 구분자가 Tab 문자 |
| `#bpm 2.147484e+09` | 부동소수점 |
| `#bpm99 12.375f` | IIDXv와 HDX 등에의 옵션 플래그 |
| `#WAV60 ura_63.wav` | 실제 파일명: `ura_63..wav` |
| `#bga01	fz 512  256  768  384  0   64  big.bmp` | 둘 이상의 탭 문자 또는 공백 문자를 사용 |
| `#bmp字 big.bmp` | 정의 슬롯의 다중 바이트 문자열 |
| `#random 10`<br>`	#if 1`<br>`		#wavZZ foo.wav`<br>`	#else`<br>`		#wavZZ bar.wav`<br>`	#endif`<br>`#endrandom` | 둘 이상의 탭 문자 또는 공백 문자의 들여쓰기 |

몇몇 구현체는 이를 유효한 것으로 해석하지만, 몇몇은 이를 유효하지 않은 것으로 해석한다.
정의에는 이에 대해 지정되어 있지 않다.

현대에는 1295개의 키음, 01-ZZ를 지원한다. 노트가 없음을 뜻하는 00을 포함하면 1296개이다.

한편 마디는 3자리 숫자로 되어 있어, `#000`부터 `#999`까지를 지원한다. 다음은 예외 사항이다:

| 앱 | 상한 혹은 제한 |
| BMSV | 511 |
| DDR | 998 |
| bemaniaDX | 399 |
| GALLI | 399 |
| BGAenc | 249 |
| BMEV | 000에만 노트가 있는 경우 강제 종료된다. |
| RDM | 000에만 노트가 있으면 노트가 내려오지 않는다. |
| GDAC2 | 170을 넘어가면 오버플로우가 났었다. |
| LR2 | 000의 시작에 롱노트가 있음을 가정해, LR2는 000 이전에 한 마디를 더 넣는다.<br>이 기능이 편리한 건 사실이지만, 000과 999에 모두 노트가 있다면 정상 종료되지 않는다. |
| pomu2 | 키음이 계속 난다면, 차분을 종료하지 않는다.<br>다만 999 이후에도 키음을 계속 내려 하면, 강제 종료된다. |
| otama | 최대 수치를 1024로 정의하고 있다. 그런데 `#1024xx`를 쓰면 버그가 난다. |
| Myo2 | `[ニコニコ動画] 組曲`가 중간에 강제 종료된다. 마디와 관계없는 오류로 보인다. |
| 현대 구동기 | 01-ZZ 전부를 지원. |

## BMS의 파일 확장자에 대하여
- 일반적인 파일 확장자는 다음과 같다.
  - **BMS**: Be-Music Script (BM98에 정의)
  - BME: Be-Music Extended format
  - BML: Be-Music Longnote format
  - **PMS**: Pop'n Music Script
  - **BMSON**: Be-Music Script on jsON
- 최근에 이들 파일 확장자는 하위 호환성을 위해 존재한다.
  - 채널의 정의 없이 차분을 가져오려면 이 확장자를 지켜야 한다.
- 최근 프로그램들은 이들을 모두 지원해, 이를 구분할 필요성은 작다. 일반적으로 모두 BMS 확장자로 사용한다.
  - PMS 9keys는 PMS 확장자를 사용해야 한다.
  이렇게 하지 않으면 fgt++와 fgt#에서는 BMS-DP (10KEYS)로 표시되며, LR2에서는 BME-SP 타입만을 BME-SP (7KEYS)로 인식한다.
  - BMSON은 BMS와 호환되지 않으므로 BMSON 확장자를 그대로 이용해야 한다.
- 하지만, 이들 확장자는 파일 탐색기에서 BMS의 타입을 알기 편리하다.
  - 5K는 BMS, 7K는 BME, LN은 BML, 9K는 PMS  
  BMS에 대해 알고 있다면, 이런 명칭을 이해하기 쉽다. 모른다면 잘못 알아들을 수도 있겠지만.
- BMS를 기반으로 다른 포맷도 생겨났다. 이들 포맷은 현재 대부분 사장되었으나, 일부 포맷은 여전히 개발되고 있다.
  - **DTX**: DTXMania에서 사용하는 Gitadora DrumMania 포맷
- 차분 파일의 확장자에 따른 추가적인 설명은 아래로 이어진다.

### BMS
BMS는 5건 **beatmania**를 구현하기 위한 움직임으로부터 시작했다. 여기에서 7건, 팝픈 뮤직 등 여러 형식이 확장되었다.

여기에는 BMS의 모든 명령을 BML을 기반으로 나열하되, 추가된 시기 순서대로 설명한다.

| 구분 | 설명 |
| --- | --- |
| 초안 | BM98 (BMS) |
| 지원 | BMS의 모든 지원 사항 (BM98) |
| 헤더 | `#PLAYER n`, `#GENRE string`, `#TITLE string`, `#ARTIST string`,<br>`#BPM n`, `#MIDIFILE midiFilename`, `#PLAYLEVEL n`,<br>`#RANK n`, `#VOLWAV n`, `#WAVxx audioFilename`,<br>`#BMPxx imageFilename`, `#TOTAL n`, `#RANDOM n`, `#IF n`, `#ENDIF`,<br>`#ExtChr SpriteNum BMPNum startX startY endX endY [offsetX offsetY [x y]]` |
| BME 헤더 | `#STAGEFILE imageFileName`,<br>`#BGAxx BMPnum x1 y1 x2 y2 dx dy` |
| BML 헤더 | `#LNTYPE n`, `#LNOBJ xx` |
| 채널 | 01-06, 11-17, 21-27, 31-36, 41-46 |
| BME 채널 | 07-08, 18-19, 28-29,, 38-39, 48-49 |
| BML 확장 채널 | 51-59, 61-69 |

| 숫자 | 채널명 | 설명 |
| --- | --- | --- |
| `#xxx01` | BGM | 배경음 채널. 이 채널에 얹히는 모든 노트는 자동으로 플레이되어야 한다.<br>이 채널은 여러 노트를 한 마디에 정의할 수 있는 유일한 채널이다. |
| `#xxx02` | 마디 길이 | 4/4박을 1로 하는 박자를 지정한다. 가장 정확히 작동하는 값은<br>0.015625의 배수이다. 이때 이 값은 1/64박을 가리킨다.<br>BMS 계열은 해당 박에서만 박자를 변경하며, DTX는 다음 명령까지 해당 박을 유지한다. |
| `#xxx03` | BPM | 16진수로서 BPM 변경을 지정한다. 1부터 255를 지정할 수 있다. |
| `#xxx04` | BGA-base | 일반적인 상황에서, `#BMPxx`로 정의한 BGA를 지정한다. |
| `#xxx05` | ExtObj | *BM98 only* `#ExtChr`로 지정된 오브젝트가 올라간다. |
| `#xxx06` | BGA-poor | POOR 판정일 때 다음 non-POOR 판정 전까지 표시할 BGA를 지정한다. |
| `#xxx07` | BGA-LAYER | BME: `#xxx04` 위의 오버레이를 지정한다. |
| `#xxx08` | Extended BPM | BME: `#BPMxx`로 지정한 실수 BPM을 지정한다. 여기에는 음수도 가능하다. |
| `#xxx11-15` | 1P-side KEY1~KEY5 | 1P의 건반으로 플레이해야 하는 노트를 지정한다.<br>`#WAVxx`로 지정한 키음을 규칙에 따라 `xx`를 나열해 노트를 생성한다. |
| `#xxx16` | 1P-side Scratch | 1P의 스크래치 노트를 지정한다.<br>BME-PMS: 1P 8번 노트로 지정된다. |
| `#xxx17` | 1P-side FREE-ZONE | 1P의 턴테이블을 자유롭게 플레이할 수 있는 영역을 지정한다.<br>길이는 4비트 롱노트 1개치이며, 연속해서 지정하면 지정한 만큼 그 길이가 늘어난다.<br>BME-PMS: 1P 9번 노트로 지정된다. |
| `#xxx18-19` | 1P-side KEY6~KEY7 | BME: 1P의 건반 6, 7번 노트를 지정한다. |
| `#xxx21-29` | 2P-side Visible Obj. | 1P와 같이 2P 사이드의 노트를 지정한다. BME도 마찬가지.<br>BMS에서의 유효 범위는 21-27이다.<br>BMS-PMS SP: 22~25번 채널이 6~9번 노트로 지정된다. |
| `#xxx31-39` | 1P-side Invisible Obj. | `#xxx37`을 제외하고, 보이거나 점수로 치지 않는 키음을 지정한다.<br>위치는 11-19와 같다. BMS 범위는 31-16. |
| `#xxx41-49` | 2P-side Invisible Obj. | `#xxx47`을 제외하고, 보이거나 점수로 치지 않는 키음을 지정한다.<br>위치는 21-29와 같다. BMS 범위는 41-46. |
| `#xxx51-89` | Long Note Obj. | BML: 51-59는 1P, 61-69는 2P에 대해 롱노트 오브젝트를 지정한다.<br>71-79, 81-89는 보이거나 점수로 치지 않는 롱노트 오브젝트를 지정한다.<br>`#LNTYPE 1`은 `00`이 없는 동안, `#LNTYPE 2`는 `00`이 있는 동안 롱노트가 지속된다. |

### 주요 확장 명령
| 명령 | 설명 |
| --- | --- |
| `#BPMxx n` | 실수 BPM을 지정한다. BME `#xxx08`에서 사용. |
| `#STOPxx n` | STOP 시퀸스를 지정한다. BME `#xxx09`에서 사용. |
| `#LNOBJ xx` | `#LNTYPE 2`에서 롱노트 종료 심볼로 사용한다. `#WAVxx filename`을 사용. |
| `#WAVxx filename`<br>`#BMPxx filename` | BME: `xx` index가 36진수로 확장되었다.<br>`#WAVxx`는 `WAV`, `MP3` 이외에도 `OGG`, `FLAC` 등의 확장자를<br>지원한다. `#BMPxx`는 영상 파일을 지정할 수 있으며,<br>이 경우 `#xxx06` 채널을 사용하지 않는 경우<br>`#BMPxx`가 하나로 정의된 경우가 많다. |
| `#SUBTITLE string`<br>`#SUBARTIST string` | 부제목과 함께 도움을 준 사람들을 지정할 수 있다. |
| `#DIFFICULTY [1-5]` | 난이도를 지정한다. |
| `#STAGEFILE imageFileName` | 로딩 스플래시를 지정한다. |
| `#BANNER imageFileName` | 배너를 지정한다. |

## 헤더 영역
### #PLAYER
![표준](./resources/standard_ko.png)

플레이 방식을 지정한다.

| 명령 | 요약 | 별칭 | 설명 |
| --- | --- | --- | --- |
| `#PLAYER 1` | 1P | SP | 기본값. |
| `#PLAYER 2` | 1P + 2P | CP | 커플 플레이. IIDX19 Lincle에서 삭제된 이래,<br>지원하는 구동기가 거의 없다. |
| `#PLAYER 3` | 1P + 2P | DP | 더블 플레이. |
| `#PLAYER 4` | 1P v 2P | BP | 배틀 플레이. 지원하는 구동기가 없다. |

본 명령어는 현재 하위 호환을 위해 남겨져 있으며, 현대 구동기는 파싱 결과를 기반으로 플레이 방식을 추정하고 있다.

![PMS](./resources/pms_ko.png) PMS 형식의 경우, 호환성을 위해 `#PLAYER 3`를 설정하는 것을 권장하고 있다.

### #RANK
판정 난이도를 지정한다.

| 명령 | 별칭 | PG (LR2) |
| --- | --- | --- |
| `#RANK 0` | VERY HARD | 8ms |
| `#RANK 1` | HARD | 15ms |
| `#RANK 2` | NORMAL | 18ms |
| `#RANK 3` | EASY | 21ms |

구동기에 따라 판정 폭은 상이하며, 일부 경우 이를 부분적으로 지원하거나 전혀 지원하지 않는 경우도 있다.

#### #RANK 4
![비표준](./resources/nonstd_ko.png)

VERY EASY 판정 난이도를 가리킨다. 지원하지 않는 경우 `#RANK 2`로 처리하는 게 일반적.

#### 상대적 #RANK
![비표준](./resources/nonstd_ko.png)

일부 구동기는 상대적인 판정 난이도를 지원한다. 즉, `6`이나 `-1`과 같은 수치를 지정할 수 있다.

Angolmois 2.0 alpha 2의 경우, 공식에 따라 6 미만의 어느 수도 판정 난이도로 지정될 수 있다.

TechnicalGroobe에서는 `#DEFEXRANK n`을 판정 난이도로 이용하지만, 자체 변환 공식을 이용해 `#RANK`를 지원하고 있다. 이 공식에 따르면 -2를 초과하는 어느 값도 `#RANK`의 값이 될 수 있다.

### #DEFEXRANK
![비표준](./resources/nonstd_ko.png)

`#RANK`보다 더 상세하게 지정할 수 있도록 정의된 `#RANK`의 변종이다. 일반적으로 `#RANK 2` = `#DEFEXRANK 100`으로 정의하고, 그 증감 폭은 구동기마다 다르다.

### #EXRANK
![비표준](./resources/nonstd_ko.png)

`#xxxA0` 채널에 정의할 일시적 난이도를 지정한다. 수치는 `#DEFEXRANK`의 것을 사용한다.

### #TOTAL
![표준](./resources/standard_ko.png)

게이지의 증감 폭을 지정한다.

`#TOTAL n`에서의 n은, 총 노트 수와의 계산을 통해 증감량을 지정하게 된다.
일반적으로 n을 총 노트 수로 나눈 값이 증감량이 된다.

초기 값이 구동기마다 다르고, 일부 구동기는 0으로 초기화하므로 **`#TOTAL`은 반드시 지정해야 한다.**

IIDX는 `7.605 * (총 노트 수) / (0.01 * (총 노트 수) + 6.5)`로 자동 계산하는 것으로 알려져 있으며, 최소값은 260이다.
DJMAX 구작, O2Jam Online 등은 다른 값으로 추정된다.

참고로 현재 IIDX에서 게이지는 다음과 같이 존재한다.
- NORMAL (노말게): Groove Gauge의 일정량 이상을 채우면 스테이지 클리어
- EXPERT: Groove Gauge가 0이 되지 않은 채 완주하면 클리어.
- HARD (하드게): Groove Gauge가 0이 되지 않은 채 완주하면 클리어. 빨간색 게이지로 표시된다.
- EX-HARD (익하게): Groove Gauge가 0이 되지 않은 채 완주하면 클리어. 보라색 게이지로 표시되며, 하드게보다 더 빠르게 떨어진다.
- HAZARD: 콤보가 끊어지면 즉시 폭사한다.
- Grade: 단위인정 모드를 위해 조정된 특수 게이지이다. EX 게이지 또한 존재한다.

### #VOLWAV
![표준](./resources/standard_ko.png)

`#VOLWAV n`: 100을 기준으로 키음의 전체적인 볼륨을 지정한다.

### #STAGEFILE
![표준](./resources/standard_ko.png)

BMS가 로딩 중일 때 표시될 스플래시 파일을 지정한다.
- 포함하지 않는 경우, 구동기에서 지정하는 기본 로딩 화면이 표시된다.
- 호환성을 위해, 640x480px 규격을 권장한다.

### #BANNER
![PMS](./resources/pms_ko.png)

300x80px 규격으로 표시될 배너 이미지를 지정한다.

### #BACKBMP
![비표준](./resources/nonstd_ko.png)

처음 정의 상에서는, 플레이 화면 뒤에 표시되는 배경 이미지를 지정한다.

스킨에서 이를 표시할 수 있도록 설정돼 있는 구동기에서는 이를 다른 방식으로 활용할 수도 있다.

### #CHARFILE
![PMS](./resources/pms_ko.png)

pop'n music의 캐릭터 파일 형식으로, 플레이 화면 우측에 표시될 캐릭터를 지정한다.
- 예시: https://youtu.be/14skmXXCjOQ
- 샘플: https://pmcc.nekokan.dyndns.info/pmcc2/download.html
- 공식 가이드: https://web.archive.org/web/*/http://m-nokomi.cool.ne.jp/newpage/mu2/Make2.htm
- 비공식 가이드: https://web.archive.org/web/20140103231405/http://storyof.namidaame.com/yy_pce.htm
- 캐릭터 파일 뷰어: PMChr-V.zip: https://sakukoba.ninja-x.jp/ponila/

### #PLAYLEVEL
![표준](./resources/standard_ko.png)

채보의 구체적인 난이도를 지정한다.
- beatmania 기반 구동기는 ★★★★☆☆☆과 같이 별로 표시된다.
- beatmaniaIIDX 기반 구동기는 12단계로 표시된다. 대부분의 구동기는 이 방식을 채택하고 있다.
- DrumMania는 99단계를 채택했다.
  - 현재 GitaDora는 0.00~9.99의 1000단계를 채택하고 있다.

일반적으로 정수가 지정되며, 누락되는 경우 대부분 3을 표시한다.

#### #PLAYLEVEL 0
![비표준](./resources/nonstd_ko.png)

난이도를 0으로 지정하는 경우, 특수 난이도로 취급된다.
- BM98에서는 ?를 표시한다.
- 다른 경우에도, 특수한 문자가 표시되는 경우가 있다.

#### #PLAYLEVEL (문자열)
![비표준](./resources/nonstd_ko.png)

일부 구동기에서는, 문자열이 난이도로 지정되는 경우가 있다.
- 소수를 통해 세부 난이도를 지정하는 경우도 종종 있다.

### #DIFFICULTY
![표준](./resources/standard_ko.png)

채보의 대략적인 난이도를 지정한다.

| 구분 | 표시 예시 1 | 표시 예시 2 |
| --- | --- | --- |
| `#DIFFICULTY 1` | BEGINNER | EASY |
| `#DIFFICULTY 2` | STANDARD | NORMAL |
| `#DIFFICULTY 3` | HYPER | HARD |
| `#DIFFICULTY 4` | ANOTHER | MAXIMUM |
| `#DIFFICULTY 5` | 發狂 | SUPER-CRAZY |

다른 방식을 이용하는 경우는 아래에서 설명한다.

#### 파일 이름으로 지정 (비표준)

파일의 특정 꼬리말에 따라 난이도를 자동으로 지정한다.
- `pmsname-n.pms` -> NORMAL (`#DIFFICULTY 2`)
- `pmsname-h.pms` -> HYPER (`#DIFFICULTY 3`)
- `pmsname-ex.pms` -> EXTRA (`#DIFFICULTY 4`)
- `pmsname-p.pms` -> PLUS (`#DIFFICULTY 5`)

#### 부제목으로 지정 (미사용)

### #TITLE
![표준](./resources/standard_ko.png)

채보의 제목을 지정한다.
- 없는 경우 대부분의 구동기에서 실행이 거부되므로, 별도로 지정하는 것을 권장한다.
- 일부 구동기는 10000 바이트 이상을 이용할 수 있으나,
대부분 500자 이내를 이용하며 실제 표시되는 글자 수는 훨씬 적다.
- 대부분의 구동기는 가장 앞뒤 공백을 잘라낸다.
- 원칙적으로는 ASCII(ANSI)만 지원하나,
LR2 이후 세대 구동기는 UTF16-LE(BOM) 형식을 기본으로 이용한다.

#### 특정 문자열로 부제목 설정 (비표준)
특정 문자열로 묶은 경우 그 부분 이하를 부제목으로 지정한다.

현재 자주 사용되지 않는 방법이며, 대부분의 경우 이 방법으로 부제목을 지정하지 않는다.

### #SUBTITLE
![BME](./resources/bme_ko.png)

`#TITLE`로 부제목을 일정하게 지정하지 못하는 경우가 발생하자 적용된 방법으로, 부제목을 지정할 수 있다.
- 누락되는 경우 위의 특정 문자열 방식을 이용하거나 빈 글로 표시된다.

![비표준](./resources/nonstd_ko.png) 일부 구동기는 `#SUBTITLE` 명령을 중복해 사용할 수 있도록 하고 있다.

### #ARTIST
![표준](./resources/standard_ko.png)

일반적으로 작곡가 명의를 지정한다.

### #SUBARTIST
![BME](./resources/bme_ko.png)

BGA 제작자, 채보 제작자 등 여타 도움을 준 사람들을 적는 부분이다.

비어 있는 경우 `#ARTIST`만을 표시하며, 있는 경우 별도의 줄에 표시한다.

### #MAKER
![비표준](./resources/nonstd_ko.png)

메타 데이터. 채보 제작자를 별도로 표시한다.

### #GENRE
![표준](./resources/standard_ko.png)

장르를 지정한다. 없는 경우, 빈 값이 지정된다.

#### #GENLE
![비표준](./resources/nonstd_ko.png)

오타 대응용.

#### #GENRE 내 특정 문자열로 부제목 지정
![비표준](./resources/nonstd_ko.png)

특정 문자열이 발견되는 경우, 그 문자열을 부제목으로 지정한다.

### #COMMENT
![비표준](./resources/nonstd_ko.png)

`#COMMENT "주석"`

### #TEXT
![비표준](./resources/nonstd_ko.png) ![BME](./resources/bme_ko.png) ![PMS](./resources/pms_ko.png)

`#TEXT[00-ZZ] "텍스트"`

### #SONG
![비표준](./resources/nonstd_ko.png)

현재 사용되지 않는다.

### landmine
![비표준](./resources/nonstd_ko.png) ![BME](./resources/bme_ko.png)

`#WAV00`에 지정된 음성을 이용, 지뢰 노트를 지정한다.
- 채널: `D1~D9` (1P), `E1~E9` (2P측 DP)

여기부터 다시 시작

https://hitkey.nekokan.dyndns.info/cmds.htm#LANDMINE

## 돌아가기
[돌아가기](./)