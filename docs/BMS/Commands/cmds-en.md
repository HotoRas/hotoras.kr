
# BMS command memo (draft)
- latest update: 2014-07-11
- written by hitkey
  - *web: <https://hitkey.nekokan.dyndns.info>*
  - *mail: hitkey0801[at]hotmail.com*
- Markdownized by HotoRas
  - *web: [https://home.hotoras.kr](../../)*
  - *mail: hotoras03[at]gmail.com*
  - *sns:*
    - *X: [@hoto_ras](https://x.com/hoto_ras)*
    - *ActivityPub: [@dohyeon@stella.place](https://stella.place/@dohyeon)*[^apub]
- refrences:

  about BMS
  : <https://en.wikipedia.org/wiki/Be-Music_Source>

  this report referred to
  : <https://web.archive.org/web/*/http://wiki.bms.ms/Bms:Spec>

  "BMS Format Specification"
  : <http://bm98.yaneu.com/bm98/bmsformat.html> (1998-11-26)

  Basic specification of BML
  : <https://nvyu.net/rby_ex.php>

  "BMS extensions proposed by Sonorous"
  : <https://cosmic.mearie.org/f/sonorous/bmsexts> (since 2013-07-10) (as reference data)

  "DTX file format specifications"
  : <http://dtxmania.net/wiki.cgi?page=qa_dtx_spec_e> (as reference data)

  "Guide to understand BMS format"
  : <https://cosmic.mearie.org/2005/03/bmsguide> (2005-03-22) (as reference data)

  "Angolmois Internals"
  : <https://github.com/lifthrasiir/angolmois/blob/master/INTERNALS.md> (2013-03-09) (as reference data)

  about obslote MGQ notation
  : <https://web.archive.org/web/*/http://ivy.pr.co.kr/rdm/jp/extension.htm> (2001-06-21) (as reference data)

  LR2 beta 3 Skin csv specificatioon rev.5
  : <http://right-stick.sub.jp/lr2skinhelp.html> (2013-09-29) (as reference data)

- caution:
  - This is not what translated specifications. This is only my memo.
  - I used on-line translation service 100%.
  - Since I cannot understand English, I cannot judge whether the result of automatic translation is right.
  - The contents may lead to misunderstandings because the translations could be a bit off.
  - Moreover, my research may not be exact. (Of course, I strove not to write a mistake. But I cannot guarantee that the contents are right.)
  - From the above reason, I do not bear responsibility to this document. <sub>*Please forgive me.*</sub>
  - If you have any further questions, please feel free to contact me. If an error is pointed out, I am glad and will correct.

- update history
  - 2023-12-23: I began translitrating this entire HTML5 document into Markdown, including correcting translations performed through Google Translate.
- source update history:
  - 2014-07-11: DTXCreator 026 / I added a postscript about apps which supports `#VOLWAV`.
  - 2014-07-08: Sonorous 0.1.0-pre (2014-07-08)
  - 2014-06-29: HDX v1.05
  - 2014-06-13: BGAEncAdv v0.034
  - 2014-06-10: BGAEncAdv v0.033 / Suspended TechnicalGroove
  - 2014-06-08: HDX v1.04
  - 2014-06-06: Mid2BMS / lr2_pmsview_helper
  - 2014-05-25: PMSee-V v2.2.2
  - 2014-05-12: HDX v1.03
  - 2014-04-19: Feeling Pomu 2nd had `#BGA`, `#POORBGA`, `#xxx0A` (LAYER2)
  - 2014-04-17: Angolmois Rust Edition (2014-04-08) / nanasigroove2 beta (Toy Musical 3 Ver.2.2) / PMSee-V v2.2.1′
  - 2014-02-27: Extended BPM / STOP Sequence
  - 2014-02-10: Further retouch to RLE (bmpfmt.htm) / I added about big-video
  - 2014-02-07: I found downloadable MacBeat.
  - 2014-02-04: I corrected the following items: RLE / grouping by filename (`*.lr`) / `#BGA` compatibility (bemaniaDX)
  - 2014-02-02: `[old] mainori-se.sakura.ne.jp/dtxmania/` -> `[new] dtxmania.net/`
  - 2014-01-31: Angolmois Rust Edition (2014-01-26) / Sonorous 0.1.0-pre (2014-01-31)
  - 2014-01-04: HDX v1.02
  - 2013-12-28: HDX v1.01 / bms diff tool
  - 2013-12-06: Fixed link rot (BMS Viewer, in_bm) / LR2SkinHELP
  - 2013-11-18: Sonorous 0.1.0-pre (2013-11-18)
  - 2013-11-17: Sonorous 0.1.0-pre (2013-11-13) / iBMSC 3.0.5
  - 2013-10-18: Sonorous 0.1.0-pre (2013-10-13) / multi `#SUBTITLE` / multi `#COMMENT`
  - 2013-10-11: Sonorous 0.1.0-pre (2013-10-09)
  - 2013-10-07: I added the TechnicalGroove column in `#DEFEXRANK n`. / I had overlooked PMSee-V v2.1.5a (2013-07-15) (sorry... sorry...)
  - 2013-10-06: I added about video rewinding.
  - 2013-09-23: Be-Music Helper (beta 4′) / woslicerIII (2013-09-22)
  - 2013-09-18: Be-Music Helper (beta 4) / Sonorous 0.1.0-pre (2013-09-17) / Listing of all the values of `#OPTION` (option.htm)
  - 2013-08-20: Angolmois 2.0 e5cea53a2cbd (SDL 2.0.*) (fixed: `#BGA` compatibility)
  - 2013-08-03: #DEFEXRANK 0 / grouping by subtitle / multi `#SUBARTIST` / fractional `#STOP` / multi `#LNOBJ` / `#BGA` compatibility
  - 2013-08-03: `[old] bit.sparcs.org/%7Etokigun/article/bmsguide.php` -> `[new] cosmic.mearie.org/2005/03/bmsguide/`
  - 2013-08-03: HDX v1.00 / Sonorous 0.1.0-pre / BGAEncAdv v0.032 / TechnicalGroove
  - 2013-07-11: I realized that HDX and IIDXv was supporting “spread canvas”.
  - 2013-07-09: I realized that Indenting of HDX/IIDXv is enhanced. (U+3000)
  - 2013-07-07: I added `＃ENDIF` (U+FF03) into “Examples of Mistakes”.
  - 2013-07-03: uBMplay 1.5.2 / fixed about “spread canvas” (added BM98)
  - 2013-07-02: I added uBMplay into `#PATH_WAV`.
  - 2013-07-01: uBMplay 1.5.1 / I corrected URI of woslicerII. (remove “soft/index.html”) / uBMplay 1.5.0 knew `#OCT/FP`
  - 2013-06-17: I added BmDx and changed the abbreviated name of bemaniaDX.
  - 2013-05-31: Angolmois Rust Edition
  - 2013-05-25: woslicerIII / fixed about “spread canvas”
  - 2013-05-16: `<hgroup>` is gone
  - 2013-05-12: IIDXv 2.14, PMSee-V 2.1.3a
  - 2013-05-07: HDX 0.99 / `#99902:1` / multiple `#xxxA6` / fixed a mistake about default value of `#RANK` n
  - 2013-04-12: PMSee-V 2.1.3
  - 2013-04-01: uBMplay 1.5.0
  - 2013-03-16: Angolmois 2.0 77ce3b6e2761 / I corrected the item of `#ExtChr`.
  - 2013-03-12: Angolmois 2.0 798422870970 (fixed: `#LNTYPE 2`)
  - 2013-02-09: Angolmois 2.0 alpha 2 9880e98d15f8
  - 2013-01-18: Angolmois got alpha-blending
  - 2013-01-17: I added the reference about the escape of a character string into “Comment syntax”.
  - 2013-01-17: HDX 0.98, PMSee-V 2.1.2, nanasi2 1.0, IIDXv 2.13, PMChr-V 4.0.2, Angolmois 2.0 alpha 2 pre
  - 2012-10-13: HDX 0.97, PMSee-V 2.0.2, nanasi2 0.4, fixed some broken links
  - 2012-09-14: HDX 0.96, PMSee-V 2.0.1a, PMChr-V 4.0.0
  - 2012-08-09: nanasi2 0.3
  - 2012-08-08: iBMSC 3.0.4
  - 2012-08-06: HDX 0.94, iBMSC 3.0.3 / I added BMSV and nBMplay into “FREE ZONE”.
  - 2012-07-03: HDX 0.93
  - 2012-06-30: PMSV 1.10.5, nanasi2 0.2, IIDXv 2.12, HDX 0.92, `#ELSEIF`, Indent style, Comment syntax, Keyup-sounding
  - 2012-04-27: PMSV 1.10.4, PMCV 3.1.0, nanasi2 0.1, SMB 1.03
  - 2012-03-25: ruv-it! 2.0 b5p7 test #7
  - 2012-03-18: Be-Music Helper (beta 3)
  - 2012-02-10: I fixed a lot of bugs about HTML of this document. Valid HTML5 Valid CSS3
  - 2012-01-28: I corrected the item of `#TOTAL`. (thanks to kisama)
  - 2012-01-23: I forgot to reflect update of iBMSC 3.0. I added about that.
  - 2012-01-16: I set the permalink to all the headings, and also added some items.
  - 2012-01-15: I updated this document. Since there were too many corrected parts, I cannot remember them.
  - 2011-10-24: I Japanized this document. My gestalt collapsed.
  - 2011-10-16: I HTMLized this document. File size swelled up fourfold.
  - 2011-09-21: I finished writing this document. I merely wrapped the plain text in the `<pre>` tag only.
  - 2011-09-12: I became feeling of writing this document. I began to write.

## Tags
[^apub]: You can follow me from any platform supporting ActivityPub protocol, for example **Mastodon**, **Misskey** or *Misskey-powered forks*, etc.

## Return
[index](./)