
var emailPattern =   /([a-z0-9](\.?[\w-]+)*)@(?!-)([a-z0-9\-]*[a-z0-9]\.)*(?!-)([a-z0-9\-]*[a-z0-9]\.[a-z]{2,})(?=\W*(\s|$|\<))/ig;
var phonePatternBY = /(((8[\s-]?0)|(\+?\d{3}))[\s-]?(\(?\d{2}\)?))[\s-]?(([\d][\s-]?){7})(?=(\D|$))/g;
var sitePattern =    /([a-z]{3,8})(:\/\/)((?!-)([a-z0-9\-]*[a-z0-9]\.)*(?!-)([a-z0-9\-]*[a-z0-9]\.[a-z]{2,10}))\/(.*?)(?=\W*(\s|$))/gi;
var addressPattern = /(?<zip>\d{6})?(,\s?)?(?<city>г\.\s?[^,]+),\s?(?<street>(ул|пр|бульв)\.\s?[^,]+),\s?(?<building>(стр|д)\.\s?[\d/а-яА-Я-]{1,6})?(,\s?)?(?<floor>\d{1,3}\s?этаж)?(,\s?)?(?<room>(кв|каб|комната)\.?\s?[\d/а-яА-Я-]{1,6})?/gi;
var tagHTMLPattern = /(?<=\<)\/?((?!xml)[a-z_][a-z0-9_-]*)\s?/gmi;

var myStringEmail = "this is my eMail:rokos.job@gmail.com-, " +
    "and my wife's eMail is -288-mel@mail.ru. " +
    "From this post I get spam aliexpress@notice.aliexpress.com: " +
    " ^mail.from@x.com? " +
    "\t\t\t\t<div class=\"mail\">info@retarcorp.by</div>\n";

(myStringEmail.match(emailPattern) || []).forEach(function(result) {
    console.log(result)
});

var myStringPhone = "phone number: ++ 375(33)6 25 2769. " + // 19
    "phone number: ++375 33 625 2769. " +
    "phone number: ++8 033 62-52 769." +
    "> +375 29 850 76 55 (МТС, Viber, Telegram)</div>\n";

(myStringPhone.match(phonePatternBY) || []).forEach(function(result) {
    console.log(result.replace(/(\+|\(|\)|\s|-)/g, ""))
});

var myStringSite = "https://www.google.com/search?q=%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81+%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0+url&rlz=1C1GKLB_ruBY846BY846&oq=%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81+%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0+url&aqs=chrome..69i57.10242j0j8&sourceid=chrome&ie=UTF-8, " +
    "habr - https://habr.com/ru/post/232385/," +
    "wikipedia.org: https://ru.wikipedia.org/wiki/URL.";

(myStringSite.match(sitePattern) || []).forEach(function(result) {
    console.log(result)
});

var myStringAddress = 'Мой адрес: 212014, г.Могилев,ул.Мовчанского,д.44а,кв.92, ' +
    'почтовый адрес RetarCorp: г. Минск, ул. Лазо 14, 3 этаж, каб. 2-1. ' +
    'tut.by Минск -г. Минск, пр. Дзержинского, д. 57, 9 этаж, комната 41-3". ' +
    'tut.by Могилев "г. Могилев, ул. Дзержинского, д. 3-2, 2этаж" ' +
    '>г. Минск, ул. Лазо 14, 3 этаж, каб. 21</div>\n';

(myStringAddress.match(addressPattern) || []).forEach(function(result) {
    addressPattern.lastIndex = 0;
    var arr = addressPattern.exec(result);
    console.log(arr.groups.city);
    console.log(arr[0]);
});

var myStringTag = 'https://retarcorp.by/' +
    '<footer>\n' +
    '\t<_d_iv class="feedback">\n' +
    '\t\t<h-3 id="send-message">Свяжитесь с нами</h-3>\n' +
    '\t\t<5form>\n' +
    '\t\t\t<label>\n' +
    '\t\t\t\t<xmlinput type="text" placeholder="Ваше имя" name="name">\n' +
    '\t\t\t</label>\n' +
    '\t\t\t<label>\n' +
    '\t\t\t\t<input type="text" placeholder="E-mail или телефон" name="contact">\n' +
    '\t\t\t</label>\n' +
    '\t\t\t<label>\n' +
    '\t\t\t\t<textarea placeholder="Текст вопроса или сообщения" name="content"></textarea>\n' +
    '\t\t\t</label>\n' +
    '\t\t\t<input type="submit" value="Отправить">\n' +
    '\t\t</5form>\n' +
    '\n' +
    '\t</_d_iv>\n' +
    '</footer>';

(myStringTag.match(tagHTMLPattern) || []).forEach(function(result) {
    console.log(result)
});