  /**************************************************/
 /* Copyright © 2020 - Valor [Discord: Valor#2370] */
/**************************************************/
var _$_55eb=["body-parser","express","fs","express-session","passport","Strategy","passport-discord","./config.json","assert","quick.db","ejs","express-validator","path","highlight.js","gray-matter","dotenv","config","sitename","clientID","env","clientSecret","callbackURL","serializeUser","deserializeUser","identify","email","consent","nextTick","use","keyboard cat","initialize","session","/girisyap","discord","authenticate","get","/callback","/","id","user","redirect","/blog","/cikis","logout","urlencoded","json","views","blog","join","set","view engine","static","/blog/:article","/blog/","article","params",".md","read","log","html","markdown-it","content","render","username","avatar","authorID","data","index","title","author","date","authorRaw","uid","authorAvatar",", /blog adresine giri\u015f yapt\u0131.","endsWith","filter","readdirSync","slice","/admin","admin","/me","/getRequestData","hi","send","/yayinla","newBlog","newBlog Conn","Ba\u015fl\u0131k, en az 5 karakter ve en fazla 70 karakter olabilir!","withMessage","isLength","titt","body","Blogunuzun i\xE7eri\u011fi en az 120 ve en fazla 20000 karakter olabilir!","cont","validationResult","errors","value","isEmpty","toLowerCase","-"," ","split","existsSync","wtf","---\x0Atitle: ","\x0Aauthor: ","\x0Auid: ","\x0AauthorRaw: ","\x0AauthorID: ","-\x0Adate: ","\x0AauthorAvatar: ","\x0A---\x0A","dosya kaydedildi!","writeFile",", yeni bir post payla\u015ft\u0131! (",")","post","/newComment","commentPostID","newComment","commentAuthor","commentAuthorAvatar","commentDate","commentAuthorID","push","back","/deleteComment","targetPostID","delete","/newfaq","sss.items","question","answer","/banUser","ban.items","targetUserID","/help","help","/deletePost","targetPost","unlinkSync","deleted","deletePostSuccess","isAuthenticated","./notloggedin.ejs","0","/unbanAll","banlar temizlendi!","/editBio","bioContent","userID","/editBusinessStatus","targetBusiness","/editCustomStatus","targetCustomStatus","/download/database","./json.sqlite","download","<script>alert(\"Veritaban\u0131n\u0131 indirmek i\xE7in y\xF6netici yetkiniz olmas\u0131 laz\u0131m.\");</script>","/user/:userid","userid","locale","discriminator","now","originalUrl","Kullan\u0131c\u0131 bulunamad\u0131!","/me/edit","useredit","/user/:meUserID/edit","meUserID","PORT","listening ","listen"];const bodyParser=require(_$_55eb[0]),express=require(_$_55eb[1]),fs=require(_$_55eb[2]),session=require(_$_55eb[3]),passport=require(_$_55eb[4]),Strategy=require(_$_55eb[6])[_$_55eb[5]],config=require(_$_55eb[7]),assert=require(_$_55eb[8]),db=require(_$_55eb[9]),ejs=require(_$_55eb[10]),expressValidator=require(_$_55eb[11]),pathModule=require(_$_55eb[12]),hljs=require(_$_55eb[13]),matter=require(_$_55eb[14]),dotenv=require(_$_55eb[15]);dotenv[_$_55eb[16]]();const app=express();let publicSitename=config[_$_55eb[17]];const cfClientID=process[_$_55eb[19]][_$_55eb[18]],cfClientSecret=process[_$_55eb[19]][_$_55eb[20]],cfCallbackURL=process[_$_55eb[19]][_$_55eb[21]];passport[_$_55eb[22]](function(_0xF5F5,_0xF625){_0xF625(null,_0xF5F5)}),passport[_$_55eb[23]](function(_0xF5F5,_0xF625){_0xF625(null,_0xF5F5)});var scopes=[_$_55eb[24],_$_55eb[25]],prompt=_$_55eb[26];passport[_$_55eb[28]]( new Strategy({clientID:cfClientID,clientSecret:cfClientSecret,callbackURL:cfCallbackURL,scope:scopes,prompt:prompt},function(_0xF5F5,_0xF625,_0xF685,_0xF655){process[_$_55eb[27]](function(){return _0xF655(null,_0xF685)})})),app[_$_55eb[28]](session({secret:_$_55eb[29],resave:!1,saveUninitialized:!1})),app[_$_55eb[28]](passport[_$_55eb[30]]()),app[_$_55eb[28]](passport[_$_55eb[31]]()),app[_$_55eb[35]](_$_55eb[32],passport[_$_55eb[34]](_$_55eb[33],{scope:scopes,prompt:prompt}),function(_0xF5F5,_0xF625){}),app[_$_55eb[35]](_$_55eb[36],passport[_$_55eb[34]](_$_55eb[33],{failureRedirect:_$_55eb[37]}),function(_0xF5F5,_0xF625){_0xF625[_$_55eb[40]](`/user/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}`)}),app[_$_55eb[35]](_$_55eb[37],checkAuth,function(_0xF5F5,_0xF625){_0xF625[_$_55eb[40]](_$_55eb[41])}),app[_$_55eb[35]](_$_55eb[42],function(_0xF5F5,_0xF625){_0xF5F5[_$_55eb[43]](),_0xF625[_$_55eb[40]](_$_55eb[37])}),app[_$_55eb[28]](bodyParser[_$_55eb[44]]({extended:!0})),app[_$_55eb[28]](bodyParser[_$_55eb[45]]());const path=require(_$_55eb[12]);app[_$_55eb[49]](_$_55eb[46],path[_$_55eb[48]](__dirname,_$_55eb[47])),app[_$_55eb[49]](_$_55eb[50],_$_55eb[10]),app[_$_55eb[28]](express[_$_55eb[51]](_$_55eb[47]));const {validationResult:validationResult,check:check}=require(_$_55eb[11]);app[_$_55eb[35]](_$_55eb[52],checkAuth,(_0xF5F5,_0xF625)=>{const _0xF685=matter[_$_55eb[57]](__dirname+ _$_55eb[53]+ _0xF5F5[_$_55eb[55]][_$_55eb[54]]+ _$_55eb[56]);console[_$_55eb[58]](_0xF685),console[_$_55eb[58]](_0xF5F5[_$_55eb[55]][_$_55eb[54]]);const _0xF655=require(_$_55eb[60])({breaks:!0,linkify:!0,html:config[_$_55eb[59]]}),_0xF715=_0xF685[_$_55eb[61]],_0xF6E5=_0xF655[_$_55eb[62]](_0xF715);console[_$_55eb[58]](`${_0xF5F5[_$_55eb[39]][_$_55eb[63]]}, ${_0xF5F5[_$_55eb[55]][_$_55eb[54]]} adlı posta bağlandı.`);var _0xF6B5=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;console[_$_55eb[58]](_0xF685[_$_55eb[66]][_$_55eb[65]]),_0xF625[_$_55eb[62]](_$_55eb[67],{sitename:publicSitename,post:_0xF6E5,matterFile:_0xF685,title:_0xF685[_$_55eb[66]][_$_55eb[68]],slug:_0xF5F5[_$_55eb[55]][_$_55eb[54]],author:_0xF685[_$_55eb[66]][_$_55eb[69]],date:_0xF685[_$_55eb[66]][_$_55eb[70]],authorRaw:_0xF685[_$_55eb[66]][_$_55eb[71]],authorID:_0xF685[_$_55eb[66]][_$_55eb[65]],uid:_0xF685[_$_55eb[66]][_$_55eb[72]],authorAvatar:_0xF685[_$_55eb[66]][_$_55eb[73]],discordRequest:_0xF5F5,pp:_0xF6B5,config:config,db:db})}),app[_$_55eb[35]](_$_55eb[41],checkAuth,(_0xF5F5,_0xF625)=>{console[_$_55eb[58]](_0xF5F5[_$_55eb[39]][_$_55eb[63]]+ _$_55eb[74]);var _0xF685=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;const _0xF655=fs[_$_55eb[77]](__dirname+ _$_55eb[41])[_$_55eb[76]]((_0xF5F5)=>{return _0xF5F5[_$_55eb[75]](_$_55eb[56])});for(post of _0xF655){post[_$_55eb[78]](0,-3)};_0xF625[_$_55eb[62]](_$_55eb[47],{sitename:publicSitename,posts:_0xF655,discordRequest:_0xF5F5,pp:_0xF685,matter:matter,__dirname:__dirname,config:config})}),app[_$_55eb[35]](_$_55eb[79],checkAuth,(_0xF5F5,_0xF625)=>{var _0xF685=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;const _0xF655=fs[_$_55eb[77]](__dirname+ _$_55eb[41])[_$_55eb[76]]((_0xF5F5)=>{return _0xF5F5[_$_55eb[75]](_$_55eb[56])});for(post of _0xF655){post[_$_55eb[78]](0,-3)};_0xF625[_$_55eb[62]](_$_55eb[80],{sitename:publicSitename,config:config,pp:_0xF685,discordRequest:_0xF5F5,matter:matter,posts:_0xF655,__dirname:__dirname,fs:fs,db:db})}),app[_$_55eb[35]](_$_55eb[81],checkAuth,(_0xF5F5,_0xF625)=>{_0xF625[_$_55eb[40]](`/user/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}`)}),app[_$_55eb[35]](_$_55eb[82],checkAuth,(_0xF5F5,_0xF625)=>{console[_$_55eb[58]](_0xF5F5),_0xF625[_$_55eb[84]](_$_55eb[83])}),app[_$_55eb[35]](_$_55eb[85],checkAuth,(_0xF5F5,_0xF625)=>{var _0xF685=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;_0xF625[_$_55eb[62]](_$_55eb[86],{sitename:publicSitename,discordRequest:_0xF5F5,pp:_0xF685,config:config}),console[_$_55eb[58]](_$_55eb[87])}),app[_$_55eb[117]](_$_55eb[85],checkAuth,[expressValidator[_$_55eb[92]](_$_55eb[91])[_$_55eb[90]]({min:5,max:70})[_$_55eb[89]](_$_55eb[88]),expressValidator[_$_55eb[92]](_$_55eb[94])[_$_55eb[90]]({min:120,max:2e4})[_$_55eb[89]](_$_55eb[93])],function(_0xF5F5,_0xF625){const _0xF685=expressValidator[_$_55eb[95]](_0xF5F5);var _0xF655=_0xF685[_$_55eb[96]];for(var _0xF715 in _0xF655){console[_$_55eb[58]](_0xF655[_0xF715][_$_55eb[97]])};if(!_0xF685[_$_55eb[98]]()){var _0xF6E5=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;return void(_0xF625[_$_55eb[62]](_$_55eb[86],{errors:_0xF655,discordRequest:_0xF5F5,pp:_0xF6E5,config:config}))};if(fs[_$_55eb[103]](`./blog/${_0xF5F5[_$_55eb[92]][_$_55eb[91]][_$_55eb[102]](_$_55eb[101])[_$_55eb[48]](_$_55eb[100])[_$_55eb[99]]()}.md`)){return _0xF625[_$_55eb[84]](_$_55eb[104])};let _0xF6B5=_$_55eb[105]+ _0xF5F5[_$_55eb[92]][_$_55eb[91]]+ _$_55eb[106]+ _0xF5F5[_$_55eb[92]][_$_55eb[69]]+ _$_55eb[107]+ _0xF5F5[_$_55eb[92]][_$_55eb[72]]+ _$_55eb[108]+ _0xF5F5[_$_55eb[92]][_$_55eb[71]]+ _$_55eb[109]+ _0xF5F5[_$_55eb[92]][_$_55eb[65]]+ _$_55eb[110]+ _0xF5F5[_$_55eb[92]][_$_55eb[70]]+ _$_55eb[111]+ _0xF5F5[_$_55eb[92]][_$_55eb[73]]+ _$_55eb[112]+ _0xF5F5[_$_55eb[92]][_$_55eb[94]];fs[_$_55eb[114]](__dirname+ _$_55eb[53]+ _0xF5F5[_$_55eb[92]][_$_55eb[91]]+ _$_55eb[56],_0xF6B5,function(_0xF5F5){if(_0xF5F5){return console[_$_55eb[58]](_0xF5F5)};console[_$_55eb[58]](_$_55eb[113])}),_0xF625[_$_55eb[40]](_$_55eb[41]),console[_$_55eb[58]](_0xF5F5[_$_55eb[92]]),console[_$_55eb[58]](_0xF5F5[_$_55eb[39]][_$_55eb[63]]+ _$_55eb[115]+ _0xF5F5[_$_55eb[92]][_$_55eb[91]]+ _$_55eb[116]),console[_$_55eb[58]](_0xF5F5[_$_55eb[92]][_$_55eb[91]])}),app[_$_55eb[117]](_$_55eb[118],checkAuth,function(_0xF5F5,_0xF625){db[_$_55eb[125]](`comments_${_0xF5F5[_$_55eb[92]][_$_55eb[119]]}.items`,{name:`${_0xF5F5[_$_55eb[92]][_$_55eb[120]]}`,author:`${_0xF5F5[_$_55eb[92]][_$_55eb[121]]}`,authorAvatar:`${_0xF5F5[_$_55eb[92]][_$_55eb[122]]}`,date:`${_0xF5F5[_$_55eb[92]][_$_55eb[123]]}`,authorID:`${_0xF5F5[_$_55eb[92]][_$_55eb[124]]}`}),_0xF625[_$_55eb[40]](_$_55eb[126])}),app[_$_55eb[117]](_$_55eb[127],checkAuth,function(_0xF5F5,_0xF625){console[_$_55eb[58]](_0xF5F5[_$_55eb[92]]),db[_$_55eb[129]](`comments_${_0xF5F5[_$_55eb[92]][_$_55eb[128]]}.items`),_0xF625[_$_55eb[40]](_$_55eb[79])}),app[_$_55eb[117]](_$_55eb[130],checkAuth,function(_0xF5F5,_0xF625){console[_$_55eb[58]](_0xF5F5[_$_55eb[92]]),db[_$_55eb[125]](_$_55eb[131],{question:_0xF5F5[_$_55eb[92]][_$_55eb[132]],answer:_0xF5F5[_$_55eb[92]][_$_55eb[133]]}),_0xF625[_$_55eb[40]](_$_55eb[79])}),app[_$_55eb[117]](_$_55eb[134],checkAuth,function(_0xF5F5,_0xF625){console[_$_55eb[58]](_0xF5F5[_$_55eb[92]]),db[_$_55eb[125]](_$_55eb[135],`${_0xF5F5[_$_55eb[92]][_$_55eb[136]]}`),_0xF625[_$_55eb[40]](_$_55eb[79])}),app[_$_55eb[35]](_$_55eb[137],checkAuth,(_0xF5F5,_0xF625)=>{var _0xF685=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;_0xF625[_$_55eb[62]](_$_55eb[138],{db:db,pp:_0xF685,discordRequest:_0xF5F5,config:config,sitename:publicSitename})}),app[_$_55eb[117]](_$_55eb[139],checkAuth,(_0xF5F5,_0xF625)=>{console[_$_55eb[58]](_0xF5F5[_$_55eb[92]][_$_55eb[140]]),fs[_$_55eb[141]](__dirname+ `/blog/${_0xF5F5[_$_55eb[92]][_$_55eb[140]]}.md`),console[_$_55eb[58]](_$_55eb[142]);var _0xF685=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;_0xF625[_$_55eb[62]](_$_55eb[143],{targetPost:_0xF5F5[_$_55eb[92]][_$_55eb[140]],discordRequest:_0xF5F5,sitename:publicSitename,config:config,pp:_0xF685,db:db})});let arrayDatabaseController=db[_$_55eb[35]](_$_55eb[135]);function checkAuth(_0xF5F5,_0xF625,_0xF685){if(_0xF5F5[_$_55eb[144]]()){return _0xF685()};_0xF625[_$_55eb[62]](_$_55eb[145],{sitename:publicSitename,config:config})}arrayDatabaseController|| db[_$_55eb[125]](_$_55eb[135],_$_55eb[146]),app[_$_55eb[117]](_$_55eb[147],checkAuth,function(_0xF5F5,_0xF625){db[_$_55eb[129]](_$_55eb[135]),db[_$_55eb[125]](_$_55eb[135],_$_55eb[146]),console[_$_55eb[58]](_$_55eb[148]),_0xF625[_$_55eb[40]](_$_55eb[79])}),app[_$_55eb[117]](_$_55eb[149],checkAuth,function(_0xF5F5,_0xF625){_0xF5F5[_$_55eb[92]][_$_55eb[150]]?(db[_$_55eb[49]](`bio_${_0xF5F5[_$_55eb[92]][_$_55eb[151]]}`,`${_0xF5F5[_$_55eb[92]][_$_55eb[150]]}`),_0xF625[_$_55eb[40]](_$_55eb[81])):(db[_$_55eb[129]](`bio_${_0xF5F5[_$_55eb[92]][_$_55eb[151]]}`),_0xF625[_$_55eb[40]](_$_55eb[81]))}),app[_$_55eb[117]](_$_55eb[152],checkAuth,function(_0xF5F5,_0xF625){_0xF5F5[_$_55eb[92]][_$_55eb[153]]?(db[_$_55eb[49]](`businessstatus_${_0xF5F5[_$_55eb[92]][_$_55eb[151]]}`,`${_0xF5F5[_$_55eb[92]][_$_55eb[153]]}`),_0xF625[_$_55eb[40]](_$_55eb[81])):(db[_$_55eb[129]](`businessstatus_${_0xF5F5[_$_55eb[92]][_$_55eb[151]]}`),_0xF625[_$_55eb[40]](_$_55eb[81]))}),app[_$_55eb[117]](_$_55eb[154],checkAuth,function(_0xF5F5,_0xF625){_0xF5F5[_$_55eb[92]][_$_55eb[155]]?(db[_$_55eb[49]](`customstatus_${_0xF5F5[_$_55eb[92]][_$_55eb[151]]}`,`${_0xF5F5[_$_55eb[92]][_$_55eb[155]]}`),_0xF625[_$_55eb[40]](_$_55eb[81])):(db[_$_55eb[129]](`customstatus_${_0xF5F5[_$_55eb[92]][_$_55eb[151]]}`),_0xF625[_$_55eb[40]](_$_55eb[81]))}),app[_$_55eb[35]](_$_55eb[156],checkAuth,function(_0xF5F5,_0xF625){_0xF5F5[_$_55eb[39]][_$_55eb[38]]=== config[_$_55eb[80]]?_0xF625[_$_55eb[158]](_$_55eb[157]):_0xF625[_$_55eb[84]](_$_55eb[159])}),app[_$_55eb[35]](_$_55eb[160],checkAuth,(_0xF5F5,_0xF625)=>{let _0xF685=db[_$_55eb[35]](`user_${_0xF5F5[_$_55eb[55]][_$_55eb[161]]}`);if(_0xF685|| _0xF5F5[_$_55eb[55]][_$_55eb[161]]!== _0xF5F5[_$_55eb[39]][_$_55eb[38]]|| (db[_$_55eb[49]](`user_${_0xF5F5[_$_55eb[55]][_$_55eb[161]]}`,{username:`${_0xF5F5[_$_55eb[39]][_$_55eb[63]]}`,userid:`${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}`,useravatar:`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png`,useremail:`${_0xF5F5[_$_55eb[39]][_$_55eb[25]]}`,userlocale:`${_0xF5F5[_$_55eb[39]][_$_55eb[162]]}`,userdiscriminator:`${_0xF5F5[_$_55eb[39]][_$_55eb[163]]}`,registerdate:`${Date[_$_55eb[164]]()}`}),_0xF625[_$_55eb[40]](_0xF5F5[_$_55eb[165]])),!_0xF685){return _0xF625[_$_55eb[84]](_$_55eb[166])};var _0xF655=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;const _0xF715=fs[_$_55eb[77]](__dirname+ _$_55eb[41])[_$_55eb[76]]((_0xF5F5)=>{return _0xF5F5[_$_55eb[75]](_$_55eb[56])});for(post of _0xF715){post[_$_55eb[78]](0,-3)};_0xF625[_$_55eb[62]](_$_55eb[39],{sitename:publicSitename,discordRequest:_0xF5F5,pp:_0xF655,myUser:_0xF685,config:config,db:db,posts:_0xF715,matter:matter,__dirname:__dirname})}),app[_$_55eb[35]](_$_55eb[167],checkAuth,(_0xF5F5,_0xF625)=>{var _0xF685=`https://cdn.discordapp.com/avatars/${_0xF5F5[_$_55eb[39]][_$_55eb[38]]}/${_0xF5F5[_$_55eb[39]][_$_55eb[64]]}.png?size=128`;_0xF625[_$_55eb[62]](_$_55eb[168],{sitename:publicSitename,discordRequest:_0xF5F5,pp:_0xF685,db:db,config:config})}),app[_$_55eb[35]](_$_55eb[169],checkAuth,(_0xF5F5,_0xF625)=>{_0xF5F5[_$_55eb[55]][_$_55eb[170]]=== _0xF5F5[_$_55eb[39]][_$_55eb[38]]&& _0xF625[_$_55eb[40]](_$_55eb[167])});const port=process[_$_55eb[19]][_$_55eb[171]]|| 4e3;app[_$_55eb[173]](port,()=>{console[_$_55eb[58]](_$_55eb[172]+ port)})
