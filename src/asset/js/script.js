// loading animation
window.onload = function () {
	const loadingAnimation = document.getElementById("js-loading");

	loadingAnimation.classList.add("is-loaded");

	document.getElementById("js-header").classList.add("is-show");
};

// navigation shadow & scroll button
const scrollIn = function () {
	const navigation = document.getElementsByClassName("js-navShadow");
	const scrollbutton = document.getElementsByClassName("js-scrollButton");
	const position = Math.floor(window.innerHeight * 0.01);

	for (let i = 0; i < navigation.length; i++) {
		const offsetTop = Math.floor(navigation[i].getBoundingClientRect().top);

		if (offsetTop < position) {
			navigation[i].classList.add("is-shadow");
			scrollbutton[i].classList.add("is-show");
		} else {
			navigation[i].classList.remove("is-shadow");
			scrollbutton[i].classList.remove("is-show");
		}
	}
};
window.addEventListener("scroll", scrollIn, false);

// data API skill
// -----------------------------------------------------------------------------
// skill要素に追加したいデータを定義する
const array_skill = [
	{
		skill_icon: "html",
		skill_dt: "HTML",
		skill_rate: "5",
		skill_dd:
			"このサイトのようなコーディングが可能です。HTML/CSS/SCSS/JavaScriptでスライドやアコーディオン等の機能を実装することも可能。",
	},
	{
		skill_icon: "css",
		skill_dt: "CSS",
		skill_rate: "5",
		skill_dd:
			"CSSを用いたサイトデザインが可能。最近はgulpを用いてDart SassとFLOCSSでコーディングすることが多いです。",
	},
	{
		skill_icon: "js",
		skill_dt: "JavaScript",
		skill_rate: "3",
		skill_dd:
			"オブジェクトにアニメーションなどの動きをつけることが可能。jQueryも使えますが、素のJavaScriptを使うことが多いです。",
	},
	{
		skill_icon: "php",
		skill_dt: "PHP",
		skill_rate: "3",
		skill_dd:
			"HTMLに組み込んでタイマー設定やテンプレートの利用、キャッシュ対策の実装が可能です。DBとの接続については学習中。",
	},
	{
		skill_icon: "wp",
		skill_dt: "WordPress",
		skill_rate: "4",
		skill_dd:
			"WordPressを用いたサイト制作・運用が可能です。サーバやドメインの設定からサイトの運用、LPの組み込みまで経験があります。",
	},
	{
		skill_icon: "psai",
		skill_dt: "photoshop/illustrator",
		skill_rate: "3",
		skill_dd:
			"アイコンやバナーの作成が可能。また、デザイナーのコミュニティにてIllustratorでアイコンを制作する勉強会を主催した経験あり。",
	},
	{
		skill_icon: "xdfigma",
		skill_dt: "XD/Figma",
		skill_rate: "4",
		skill_dd:
			"WEBサイトのデザインカンプ作成経験あり。UI/UXを配慮したデザインが可能です。またコーディングまで一貫した業務経験があります。",
	},
	{
		skill_icon: "passion",
		skill_dt: "Passion",
		skill_rate: "5",
		skill_dd: "毎日学習しています！！",
	},
];

// skill要素を取得して定義
const skill = document.getElementById("js-skill");

for (let i = 0; i < array_skill.length; i++) {
	// 定義したskill要素を複製する
	const skill_content = skill.content.cloneNode(true);

	// 複製したskill要素にデータを挿入
	skill_content.querySelector(
		".js-skill_icon"
	).src = `https://traveler20.site/archive/202111/asset/img/skill/icon-${array_skill[i].skill_icon}.svg`;
	skill_content.querySelector(".js-skill_rate").dataset.rate =
		array_skill[i].skill_rate;
	skill_content.querySelector(".js-skill_dt").textContent =
		array_skill[i].skill_dt;
	skill_content.querySelector(".js-skill_dd").textContent =
		array_skill[i].skill_dd;

	// #js-skillListsに追加
	document.getElementById("js-skillLists").appendChild(skill_content);
}
// -----------------------------------------------------------------------------

// data API feature
// -----------------------------------------------------------------------------
// feature要素に追加したいデータを定義する
const array_feature = [
	{
		feature_img: "1",
		feature_title: "広告代理店のLP制作",
		feature_link: "https://www.cubic-corp.net/remoma",
		feature_skill: "HTML/CSS/JavaScript/PHP（WordPress）",
		feature_role: "1人/ヒアリング,デザイン,コーディング,WordPress組み込み",
		feature_process:
			"1ヶ月（ヒアリング,デザイン,コーディング,組み込み,各1週間）",
		feature_comment:
			"事業のLPを作成しました。クリエイティブ系統の事業ということでCSSやJavaScriptを用いたアニメーションを実装しております。",
	},
	{
		feature_img: "2",
		feature_title: "パーソナルジムのランディングページ",
		feature_link: "https://personal-mitt.site/",
		// feature_link: "https://traveler20.github.io/personal-mitt",
		feature_skill: "HTML/CSS/SCSS/JavaScript",
		feature_role: "3人/ヒアリング,コーディング,サーバー組み込み",
		feature_process: "3日間（コーディング,サーバー組み込み）",
		feature_comment:
			"パーソナルジムのランディングページを制作しました。短納期で長いページを制作することになりましたが、共通の要素をCSSで管理しやすいように運用することで余裕を持って納品することができました。",
	},
];

// feature要素を取得して定義
const feature = document.getElementById("js-feature");

for (let i = 0; i < array_feature.length; i++) {
	// 定義したfeature要素を複製する
	const feature_content = feature.content.cloneNode(true);

	// 複製したfeature要素にデータを挿入
	feature_content.querySelector(
		".js-feature_img"
	).src = `https://traveler20.site/archive/202111/asset/img/feature/feature${array_feature[i].feature_img}.webp`;
	feature_content.querySelector(".js-feature_title").textContent =
		array_feature[i].feature_title;
	feature_content.querySelector(".js-feature_link").href =
		array_feature[i].feature_link;
	feature_content.querySelector(".js-feature_skill").textContent =
		array_feature[i].feature_skill;
	feature_content.querySelector(".js-feature_role").textContent =
		array_feature[i].feature_role;
	feature_content.querySelector(".js-feature_process").textContent =
		array_feature[i].feature_process;
	feature_content.querySelector(".js-feature_comment").textContent =
		array_feature[i].feature_comment;

	// #js-featureListsに追加
	document.getElementById("js-featureLists").appendChild(feature_content);
}
// -----------------------------------------------------------------------------

// data API work
// -----------------------------------------------------------------------------
// work1要素に追加したいデータを定義する
const array_work1 = [
	{
		work_modal: "1",
		work_img: "cording_lp-plant",
		work_figcaption: "ランディングページ",
		work_modalTitle: "観葉植物通販サイトのランディングページ",
		work_modalSkill: "HTML/CSS/SCSS/JavaScript/jQuery",
		work_modalLink: "https://traveler20.github.io/wdlanding/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "2",
		work_img: "cording_traveler20",
		work_figcaption: "ホームページ",
		work_modalTitle: "個人事業主用に制作したホームページ",
		work_modalSkill: "HTML/CSS/SCSS/JavaScript/WordPress",
		work_modalLink: "https://traveler20.site/archive/202201/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "3",
		work_img: "cording_topic-tonomine",
		work_figcaption: "特集サイト",
		work_modalTitle: "砥峰高原特集サイト",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/TonominePlateau/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "4",
		work_img: "cording_lp-kokopp",
		work_figcaption: "ランディングページ",
		work_modalTitle: "アプリ「ここっぷ」のランディングページ",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/kokopp/lp/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "5",
		work_img: "cording_02",
		work_figcaption: "ホームページ",
		work_modalTitle: "架空デザイン会社のHP",
		work_modalSkill: "HTML/CSS/SCSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/designSite001/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "6",
		work_img: "cording_portfolio",
		work_figcaption: "ポートフォリオ",
		work_modalTitle: "ポートフォリオサイト",
		work_modalSkill: "HTML/CSS/SCSS/JavaScript",
		work_modalLink: "https://traveler20.site/archive/202111",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "7",
		work_img: "cording_03",
		work_figcaption: "ホームページ",
		work_modalTitle: "架空の病院HP模写",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/CorporateSite_Clinic/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "8",
		work_img: "cording_04",
		work_figcaption: "ホームページ",
		work_modalTitle: "架空の会社HP模写",
		work_modalSkill: "HTML/CSS",
		work_modalLink: "https://traveler20.github.io/WebSiteSample/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "9",
		work_img: "cording_05",
		work_figcaption: "WEBサイト",
		work_modalTitle: "学習サイトの模写",
		work_modalSkill: "HTML/CSS",
		work_modalLink: "https://traveler20.github.io/CodePrep017_BootStrapSite/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "10",
		work_img: "cording_06",
		work_figcaption: "WEBサイト",
		work_modalTitle: "クリスマスサイトの模写",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink:
			"https://traveler20.github.io/CodePrep015_christmasCardCanva/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "11",
		work_img: "cording_07",
		work_figcaption: "WEBサイト",
		work_modalTitle: "架空の個人サイトの模写",
		work_modalSkill: "HTML/CSS",
		work_modalLink: "https://traveler20.github.io/KROWL001/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "12",
		work_img: "cording_08",
		work_figcaption: "ランディングページ",
		work_modalTitle: "架空のレンタルスペースLPの模写",
		work_modalSkill: "HTML/CSS",
		work_modalLink: "https://traveler20.github.io/KROWL002/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "13",
		work_img: "cording_09",
		work_figcaption: "ホームページ",
		work_modalTitle: "架空のマーケティング会社HP模写",
		work_modalSkill: "HTML/CSS",
		work_modalLink: "https://traveler20.github.io/KROWL003/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "14",
		work_img: "cording_10",
		work_figcaption: "WEBサイト",
		work_modalTitle: "架空のコワーキングスペースサイト模写",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/CrestaSite02/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "15",
		work_img: "cording_11",
		work_figcaption: "ホームページ",
		work_modalTitle: "架空のデザイン会社HP",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/CrestaSite03/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "16",
		work_img: "cording_12",
		work_figcaption: "ランディングページ",
		work_modalTitle: "スマホアプリのランディングページ",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/ZeniCapp_LP_03/",
		work_modalLinkText: "Webサイト",
	},
	{
		work_modal: "17",
		work_img: "cording_ec-pineapple",
		work_figcaption: "WEBサイト",
		work_modalTitle: "架空のスマホ販売サイト",
		work_modalSkill: "HTML/CSS/JavaScript",
		work_modalLink: "https://traveler20.github.io/PineAppleShop/",
		work_modalLinkText: "Webサイト",
	},
];

// work1要素を取得して定義
const work1 = document.getElementById("js-work1");

for (let i = 0; i < array_work1.length; i++) {
	// 定義したwork要素を複製する
	const work_content1 = work1.content.cloneNode(true);

	// 複製したwork要素にデータを挿入
	work_content1.querySelector(
		".js-work_figure"
	).dataset.modalOpen = `modal-${array_work1[i].work_modal}`;
	work_content1.querySelector(
		".js-work_modal"
	).dataset.modal = `modal-${array_work1[i].work_modal}`;
	work_content1.querySelector(
		".js-work_img"
	).src = `https://traveler20.site/archive/202111/asset/img/work/${array_work1[i].work_img}.webp`;
	work_content1.querySelector(".js-work_figcaption").innerHTML =
		array_work1[i].work_figcaption;
	work_content1.querySelector(
		".js-work_modalImg"
	).src = `https://traveler20.site/archive/202111/asset/img/work/${array_work1[i].work_img}.webp`;
	work_content1.querySelector(".js-work_modalTitle").textContent =
		array_work1[i].work_modalTitle;
	work_content1.querySelector(".js-work_modalSkill").textContent =
		array_work1[i].work_modalSkill;
	work_content1.querySelector(".js-work_modalLink").href =
		array_work1[i].work_modalLink;
	work_content1.querySelector(".js-work_modalLink").textContent =
		array_work1[i].work_modalLinkText;

	// #js-contentに追加
	document.getElementById("js-content1").appendChild(work_content1);
}

// work2要素に追加したいデータを定義する
const array_work2 = [
	{
		work_modal: "2-1",
		work_img: "design_hp-beauty",
		work_figcaption: "ホームページ",
		work_modalTitle: "美容院ホームページ",
		work_modalSkill: "Adobe XD",
		work_modalLink:
			"https://xd.adobe.com/view/deca6cfe-f88b-4d2b-a766-e8644b125c0f-8b99/screen/7bbb359f-3164-4ad4-bfc4-146a2dea786c/",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-2",
		work_img: "cording_lp-kokopp",
		work_figcaption: "ランディングページ",
		work_modalTitle: "アプリ「ここっぷ」のランディングページ",
		work_modalSkill: "Adobe XD",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "2-3",
		work_img: "cording_portfolio",
		work_figcaption: "ポートフォリオ",
		work_modalTitle: "ポートフォリオサイト",
		work_modalSkill: "Adobe XD",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "2-4",
		work_img: "cording_lp-plant",
		work_figcaption: "ランディングページ",
		work_modalTitle: "ランディングページ",
		work_modalSkill: "Adobe XD",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "2-5",
		work_img: "design_hp-city",
		work_figcaption: "ホームページ",
		work_modalTitle: "都市開発系コーポレートサイト",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-6",
		work_img: "design_hp-drinkshop",
		work_figcaption: "ホームページ",
		work_modalTitle: "スムージーショップHP",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-7",
		work_img: "design_hp-fashionsite",
		work_figcaption: "ホームページ",
		work_modalTitle: "ファッションサイト",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-8",
		work_img: "design_hp-jphotel",
		work_figcaption: "ホームページ",
		work_modalTitle: "日本旅館のHP",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-9",
		work_img: "design_hp-jpteashop",
		work_figcaption: "ホームページ",
		work_modalTitle: "日本茶ショップHP",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-10",
		work_img: "design_hp-kindergarten",
		work_figcaption: "ホームページ",
		work_modalTitle: "幼稚園HP",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-11",
		work_img: "design_hp-remortsite",
		work_figcaption: "ホームページ",
		work_modalTitle: "受託開発会社HP",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-12",
		work_img: "design_hp-resort",
		work_figcaption: "ホームページ",
		work_modalTitle: "リゾートホテルHP",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-13",
		work_img: "design_lp-webconference",
		work_figcaption: "ランディングページ",
		work_modalTitle: "講演会のLP",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
	{
		work_modal: "2-14",
		work_img: "design_blog-campblog",
		work_figcaption: "メディアサイト",
		work_modalTitle: "キャンプメディアサイト",
		work_modalSkill: "Figma",
		work_modalLink:
			"https://www.figma.com/file/eAQG1n6QZ1HUbp6ps4Z3fN/web-design_variation?node-id=0%3A1",
		work_modalLinkText: "カンプ",
	},
];

// work2要素を取得して定義
const work2 = document.getElementById("js-work2");

for (let i = 0; i < array_work2.length; i++) {
	// 定義したwork要素を複製する
	const work_content2 = work2.content.cloneNode(true);

	// 複製したwork要素にデータを挿入
	work_content2.querySelector(
		".js-work_figure"
	).dataset.modalOpen = `modal-${array_work2[i].work_modal}`;
	work_content2.querySelector(
		".js-work_modal"
	).dataset.modal = `modal-${array_work2[i].work_modal}`;
	work_content2.querySelector(
		".js-work_img"
	).src = `https://traveler20.site/archive/202111/asset/img/work/${array_work2[i].work_img}.webp`;
	work_content2.querySelector(".js-work_figcaption").innerHTML =
		array_work2[i].work_figcaption;
	work_content2.querySelector(
		".js-work_modalImg"
	).src = `https://traveler20.site/archive/202111/asset/img/work/${array_work2[i].work_img}.webp`;
	work_content2.querySelector(".js-work_modalTitle").textContent =
		array_work2[i].work_modalTitle;
	work_content2.querySelector(".js-work_modalSkill").textContent =
		array_work2[i].work_modalSkill;
	work_content2.querySelector(".js-work_modalLink").href =
		array_work2[i].work_modalLink;
	work_content2.querySelector(".js-work_modalLink").textContent =
		array_work2[i].work_modalLinkText;

	// #js-contentに追加
	document.getElementById("js-content2").appendChild(work_content2);
}

// work3要素に追加したいデータを定義する
const array_work3 = [
	{
		work_modal: "3-1",
		work_img: "psai_ico-flaticon",
		work_figcaption: "アイコン",
		work_modalTitle: "アイコン等のデザイン",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-2",
		work_img: "psai_bnr-kokopp",
		work_figcaption: "バナー",
		work_modalTitle: "スマホアプリ広告バナー",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-3",
		work_img: "psai_bnr-vegirestraunt",
		work_figcaption: "バナー",
		work_modalTitle: "飲食店の広告バナー",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-4",
		work_img: "psai_bnr-zenicapp",
		work_figcaption: "バナー",
		work_modalTitle: "スマホアプリ広告バナー",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-5",
		work_img: "psai_bnr-kokoppad",
		work_figcaption: "バナー",
		work_modalTitle: "スマホアプリ広告バナー",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-6",
		work_img: "psai_bnr-kokoppstory",
		work_figcaption: "バナー",
		work_modalTitle: "スマホアプリ広告バナー",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-7",
		work_img: "psai_thumb-01",
		work_figcaption: "サムネイル",
		work_modalTitle: "YouTube サムネイル",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-8",
		work_img: "psai_thumb-02",
		work_figcaption: "サムネイル",
		work_modalTitle: "YouTube サムネイル",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-9",
		work_img: "psai_thumb-03",
		work_figcaption: "サムネイル",
		work_modalTitle: "YouTube サムネイル",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-10",
		work_img: "psai_thumb-04",
		work_figcaption: "サムネイル",
		work_modalTitle: "YouTube サムネイル",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-11",
		work_img: "psai_thumb-05",
		work_figcaption: "サムネイル",
		work_modalTitle: "YouTube サムネイル",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-12",
		work_img: "psai_eyecatch-01",
		work_figcaption: "アイキャッチ",
		work_modalTitle: "ブログのアイキャッチ画像",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-13",
		work_img: "psai_eyecatch-02",
		work_figcaption: "アイキャッチ",
		work_modalTitle: "ブログのアイキャッチ画像",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-14",
		work_img: "psai_eyecatch-03",
		work_figcaption: "アイキャッチ",
		work_modalTitle: "ブログのアイキャッチ画像",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-15",
		work_img: "psai_eyecatch-04",
		work_figcaption: "アイキャッチ",
		work_modalTitle: "ブログのアイキャッチ画像",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
	{
		work_modal: "3-16",
		work_img: "psai_logo-kokopp",
		work_figcaption: "ロゴ",
		work_modalTitle: "スマホアプリのロゴデザイン",
		work_modalSkill: "Adobe Illustrator",
		work_modalLink: "",
		work_modalLinkText: "",
	},
];

// work3要素を取得して定義
const work3 = document.getElementById("js-work3");

for (let i = 0; i < array_work3.length; i++) {
	// 定義したwork要素を複製する
	const work_content3 = work3.content.cloneNode(true);

	// 複製したwork要素にデータを挿入
	work_content3.querySelector(
		".js-work_figure"
	).dataset.modalOpen = `modal-${array_work3[i].work_modal}`;
	work_content3.querySelector(
		".js-work_modal"
	).dataset.modal = `modal-${array_work3[i].work_modal}`;
	work_content3.querySelector(
		".js-work_img"
	).src = `https://traveler20.site/archive/202111/asset/img/work/${array_work3[i].work_img}.webp`;
	work_content3.querySelector(".js-work_figcaption").innerHTML =
		array_work3[i].work_figcaption;
	work_content3.querySelector(
		".js-work_modalImg"
	).src = `https://traveler20.site/archive/202111/asset/img/work/${array_work3[i].work_img}.webp`;
	work_content3.querySelector(".js-work_modalTitle").textContent =
		array_work3[i].work_modalTitle;
	work_content3.querySelector(".js-work_modalSkill").textContent =
		array_work3[i].work_modalSkill;
	work_content3.querySelector(".js-work_modalLink").href =
		array_work3[i].work_modalLink;
	work_content3.querySelector(".js-work_modalLink").textContent =
		array_work3[i].work_modalLinkText;

	// #js-contentに追加
	document.getElementById("js-content3").appendChild(work_content3);
}
// -----------------------------------------------------------------------------

// modal open
const modalWrapOpen = function (e) {
	const dataModalOpen = e.currentTarget.dataset.modalOpen;
	Array.from(document.querySelectorAll(".p-work__modal")).forEach((e, i) => {
		if (e.getAttribute("data-modal") === dataModalOpen) {
			e.classList.toggle("is_open");
		}
	});
};

Array.from(document.querySelectorAll(".p-work__figure")).forEach(
	(modalOpenElement) => {
		modalOpenElement.addEventListener("click", modalWrapOpen);
	}
);

// modal close
const modalCloseAction = function (e) {
	const targetModal = e.currentTarget.closest(".p-work__modal");
	targetModal.classList.toggle("is_open");
};

Array.from(document.querySelectorAll(".p-work__close")).forEach(
	(modalCloseElement) => {
		modalCloseElement.addEventListener("click", modalCloseAction);
	}
);
Array.from(document.querySelectorAll(".p-work__mask")).forEach(
	(modalCloseElement) => {
		modalCloseElement.addEventListener("click", modalCloseAction);
	}
);

// submit
let submitted = false;
