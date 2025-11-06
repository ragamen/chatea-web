'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8a86fa9bc2fb0abbc578d3783d08a5cd",
".git/config": "2737c204c039c4c187e4f8f9aee76106",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e486d74400402db8a851161b90f0e07b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08de263a8ab1b7c3db59c1c4cc56d913",
".git/logs/refs/heads/main": "e1728f3af60ce8f7d00e627d23d3ca22",
".git/logs/refs/remotes/origin/main": "5473c32852ebc616949432f43c761d73",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/8089640085b4358e09bb2baa83158b054a5340": "a6538c5abe2d2bec0b8945c7a1629fec",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/57989ee600df9d4305078864f615569e47d4cd": "1fa22138d56af2ed8b0ae931d2aa11ef",
".git/objects/08/d392781b050644f674df3dfb5c7e713cc62edf": "04705265c6ba5a0e22030e6d16c3dbd9",
".git/objects/09/3c21a59af3293a0f8add48be2e6ba8bf56b02b": "bec738ccbb995c0fea9822b6c3907464",
".git/objects/0a/8859e2ae84efde8eec54e22c2f08e75fd2c546": "348ff2301e9c75c49a52de92d2c1ffc1",
".git/objects/0f/7c4dd3c7980d05c32ca8317b5e72f8a99f26a1": "2ea3324444a23b4b2c6e658235d37d67",
".git/objects/0f/e912cc31ba1099e93e413a45809618068c0da6": "1cf6627ba59b6de1711c6c59c73ffd99",
".git/objects/12/50e9d3b7ed166c8a6c8cb7d588952e4a67315c": "7eac61d459814a5a24b88b04a672bcc9",
".git/objects/13/bd33276c963622baf0b9f70017d4fa1af8dae4": "07133775a50ab0a9fd49016700928e25",
".git/objects/17/0b5d19154c9bb60a7d02e5e26d42298bd37b17": "605f152ba7d67733efedf9c4ddf02676",
".git/objects/1d/2c3d8318f5c7706b878e42d517fb189a7961d1": "659e08b3f903b8cec777fbdca805841b",
".git/objects/1f/917bc7c15ba22dfd070ae2d2b7900fd0985735": "cdf5dfd68038a25d7c8bfec376b8537a",
".git/objects/1f/f0a75ddd13a8f33ca21015fb71b2aff36bb030": "d483429787835333da397e1cf351b314",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/4732065d2bb36bbb4219414075c2f7d11d0eac": "e9804a5c001f3464f41af87ef6921e66",
".git/objects/22/adf32a34fe48cdf8041b0eef670b2dc52e0f83": "853c9790059a2890eecbd2042cebd6a6",
".git/objects/23/dc30676c65b717950e2dd94c8012e0e88ce597": "bed25edd30cf03275f0819294cb4e813",
".git/objects/24/046a1e86cc8f8663d4020e8121afd89e2002e2": "3e6a8008e54fb538bed95ca407ab2143",
".git/objects/27/525d887c6d7e68b9fc88b01c42b391e07d2efc": "b5b4a4e712d8840338a86ddfabee8fd4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/acd139609d3b7d11a6690e0c67b8bafe81f75f": "c4d6a229e28eb09aa94f1a6c8d468a6d",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/31/b51c94672d9c941ac87f932da40a7682099356": "248ba03ebb81d577376c8b40398e977b",
".git/objects/32/7d4a0851fa918816443fd1d67a9ec7c7c2c165": "9a5868f798aaaa98455aec7cad71c0c5",
".git/objects/36/3342e3e068a811f636011255af8230a39c92db": "ef9155fd7a5deb0cd1cbe116c2515591",
".git/objects/37/653cf38071c61fa17074ab9e81881eb2827422": "b3c34005238f65dba3b7461e0c6216c5",
".git/objects/38/b034cb8544ed6b1448fa061821b920e66cfe3d": "bbaa207f55b386000b14b7f9a52162b3",
".git/objects/38/cb6899bc53bce8dde0160aa715f1d3c0e0b8df": "0722642ec41e60511f9d8ff462d619c7",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/ebbab128a9e094fba7ab561c8ba3c0d0f42166": "72931012b4cc8fe16b1eb194b2e9d182",
".git/objects/3d/6010c626c93c5c9a7e83b3be9aa3ca470ecb08": "2df77ba8bd27fdf17ea6a7f1a2795893",
".git/objects/3d/ee1e2f02f07831aed3ac0a7ce528634b87ac78": "b2f99dc3c49f7a6cb0e912113f73906d",
".git/objects/3f/b4da46ccb668b2a78153685be80afa1adda5f1": "34648b050d099116d2e45f9979d439cd",
".git/objects/41/dea3665dd30b876231e558b8890590c070e81b": "775aa3ccd5abb3dcb644560f377a0159",
".git/objects/46/de7f95c013443d4635ace6f9378423e1ff01c8": "bbb9f89fa87ed01288dc74e883a94f80",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/3055940410aa89181d4f1df0c880dcf2f8a9e0": "db49ed17bb7287f665480262a929bb0b",
".git/objects/53/6bcf68769628211182634fe85172da444ee54d": "fb7f385774e93327a88b02a08f4ba4c4",
".git/objects/55/1eb805a456c7d28f2db2878a3a8b6e77c79a5e": "49e96869e835cea448793fd98da1c5ab",
".git/objects/57/91b4ff7e7bc0edcc462848f2e77c6dc94da4c5": "2ddd7314a1a0379baf56ebbfc138fc98",
".git/objects/5b/235f1b0d0a59eed92ad68e38318de7f8e3a6f1": "bbb00f0bc231429910c61f55427b0bdf",
".git/objects/61/0cb94778731f811f14bb2a06d8854b51b0c5c1": "1c06b136ecffa5a17762eeb3da86d1bd",
".git/objects/61/c0eec89f8195ff35bf7d48902f021b0df35818": "1625334d40211291bfb80d5ebc55384f",
".git/objects/62/2377a583c5b5086c7ada49e168945cc786caa3": "1d8a943dfebdd1af7d3db56b8d65edb3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/8712955da126c385c13065516f1c848c981658": "a45b6acd387e2a85a51cefd84c760e54",
".git/objects/6e/0e9fc7b321f9677d55ce111ab439d95c4720f0": "4380fbe67c059b88ec53066b419a1321",
".git/objects/6f/632bd1233e4420b6c019ddef12a7925470fb24": "0cc183682819a0199ea760918d0f051e",
".git/objects/74/6ed263e3225dae248743d77f6934fe1808e0cd": "6b7c03ce1ccdab43de994fec9f6ec6a0",
".git/objects/76/1780777b91498163bb08fe952d859c6522117e": "9cb21dbcf6d1339c97e324b0fad1e51f",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/e640e65456c4217e4f52f81600a8cdbfdae853": "2542988fa6eabd50440d163c86586e3f",
".git/objects/7d/12a676e4237df411c197f5bd686097d36f2a4c": "e23ae8144c14f4d19e336e3ad6ea391e",
".git/objects/7d/15345633281bdc19328a90ee375a0ded88fd3a": "9c9ebc7e91535ee2558a7eacee12db5a",
".git/objects/7e/21edd96d5abf39fa0bb6617e05da6244f45be3": "35569c6739dc3a42f8fa882fc35b6800",
".git/objects/85/b6402722816c2c04501a14785716c3b374ca3f": "a5e60bfdc732e9df58976e78589b843d",
".git/objects/85/f27d8acd725a4001e8918c715182f3d63b9932": "0401467a262e6c6f13b4cc714a887ea7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/498748e1c889b74b57cd830c1a8cf6b45096ff": "38416476da423bb23c621b375142aa77",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c73893fb4dac7eaf9378e2f6fd057145a79548": "a4fd4f814516ab8c81d7290ba323a49b",
".git/objects/8f/7f16658b5ff62f31e0e2a29ec6b36c7818ebd1": "99bcb1b610eea4a87f0e8a49eb017015",
".git/objects/90/20b6f4ece0bf4496b49de0a624722d35ae57d9": "cf9afd6109654c067ce4efe5d0651cef",
".git/objects/92/7b763bbc93e81b3486b8eda82b7df0e0f349f0": "c8f6d38ce6860a069243168cf27f160f",
".git/objects/94/5d2daf803ae34c7793dbd38ab9c07c1beebc0e": "e6460e495b4e299b283e20dceefeef9a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/5ecb484c30e778f1d6b0e6da23d80b27a29105": "732c88db5a83e1c5d2ce0f5a1589cb26",
".git/objects/98/a5ab7908fecbe9ced0d6fe358c900ada4558bf": "11bbf7224890c035f48e3166bab83919",
".git/objects/99/a81698b6c91afb364aea7909c7c9e1e23d647f": "da5b9d288f08d62332384180391212b3",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/d7a558880b2c3f1fb58bc7dd51e33988441b12": "115dfbf9aa65ac6e2fe2848cba54d004",
".git/objects/ab/a58c96f1a4fe242aa99a4515a32a0de6fc5647": "ce28e1c44a11d93b99c273a58d07a2af",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/fc38cdc424e19a56718262725ddf418df59b05": "070512f471f29a64255de5bd695187e7",
".git/objects/ae/4f544fb1164ed1edaace674cde5e215f92a95d": "517012cbd9921d243c66772aef00d61c",
".git/objects/af/0541e71a3ecef1ac551affa0e0bbd81b3653b9": "65496151d962b3c6058568f377c7931a",
".git/objects/b5/11397d4b3f64c8eef3f832791e9dd7f4c3b490": "7875cdc36e5a508677d7a37a1a907528",
".git/objects/b5/2e34700daf91cb1d13980687a0ad355add17eb": "bd88efc627f4b4f29e1110a06d1df29d",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fabe230984938d911c2d289d55cb51133bb100": "263ee73341b52c6f0c4be49b7407337b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/e2932ced2df188ae44104ac2692ae846b9bb4d": "17f4c5c6b246d06cb415e1adfda6f96e",
".git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "6a5802fd93c23b446375be0361b55c08",
".git/objects/c3/6e9ed387d2c3d612f8c5f5cf60c000f44bc545": "0465fe7638254213b060661ee8afbb29",
".git/objects/c3/75bb0ec2644a9c2b6354ef49a1f34761dc3b29": "18acb90c10d7a921093c2cbd72025c13",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "c7098e473a1fff4a06cf5b48046ed03b",
".git/objects/c5/f04ac3ac89fa609916689178b6a42fc45fe19c": "8a4075ebe0e9f5ea59f0707af38b68b0",
".git/objects/c6/913e9bd264a131f7832014cc480d676315ae13": "e0c0e0a8172d638e945d7c4d37dc6f0b",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/09c7f5fcf313453eca24f8ceec4f8fbfc1d225": "9461d3028da79a0612a5279bb9791892",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/5b84a612501d934dcc8ec8b69cb36c1b9ff5d6": "b53d67380518c106aa5dc387faf0cd57",
".git/objects/d0/791c56926e8c9c45b57c940a2a90e26014f40e": "8d8e8496326a75e15e623c4358ec664c",
".git/objects/d1/484052627ae6fadbab96e6b707b4dc255144d9": "cd2613f8a5daeb52d4e168c7eb143d92",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/7dcef8d16f442d2bd9ab5d24c9ab791d1acae1": "57ca8d13975503ee4113cd7b47dc5bbb",
".git/objects/d6/86f4725164e89bcc088b168f71a0c7a937608a": "a55769dae2e753d518884a7dcea64b31",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/dc0146cdddb01b9097204945fce07c29a8ac98": "5b8383d7c7584bd77c422740b7cc503b",
".git/objects/d9/ee20941361d4896c560fa4e0d73a99e5ffd498": "89371379619105c1cab7b471f532170f",
".git/objects/dd/d2a2a98ec7064306da1a5ab34c4fb96952aab7": "6c56ef4197da945dfb81bd4a4d1e30f9",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e8/bfa857e455d3ac9beaaa882dbb1949f19f1fae": "80418fc8678dcc752765660df7171c01",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/b85c84ccfcc8eb4c5b57d63fad7df61774a318": "14869b16024007d464d66c0054ab4733",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ccf98d10076e7348fafd2f143e199276f00a80": "93676dbcb91119390137dcf629c64e71",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/088eca6fdf108b4f56487b97c128b94bf8ae05": "48e3f7f1113aa13e9518424090baaac8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a59e48cf462114c8eed9e3ac6fff24c8aa3d5e": "39a96ae0b1b09e3579c13f7a462e56ad",
".git/objects/f3/341fc440eb28a03d742904000b5f73b21c96c5": "b4d06137b4004eed13206e936e7f560a",
".git/objects/f5/396e7d8e5f4641b160aa6b45dd0d17604f139d": "047218f2bf862025245c18ffad21721e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/e2bd2c49fd404f7c5dcaee2cbcf4b7b54d0db6": "368646d3bff28aca5c0da74a0d3a1a0a",
".git/objects/fc/e370f0bae333495f4e747b5d335f881cd12d19": "b90c4da7198ea2a3fd51564cfc93edd7",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/a8647281aff9bcc6b52876c7d7fd04d83e4744": "91eda221123f151e646c84d85f035959",
".git/refs/heads/main": "044907aaa1b915a1151486ac39c70afd",
".git/refs/remotes/origin/main": "044907aaa1b915a1151486ac39c70afd",
"assets/AssetManifest.bin": "e8552d866062aa7ef4c172e195092641",
"assets/AssetManifest.bin.json": "d17da61f2f8c07705ab2dfdbe41dba8a",
"assets/AssetManifest.json": "3cbb4ac90e0295325caee5030117e28b",
"assets/assets/sounds/ringtone.mp3": "94424e9538b225ddfe7882b4dedec169",
"assets/FontManifest.json": "1a271d1659247e88b35f61c501b97786",
"assets/fonts/MaterialIcons-Regular.otf": "a28ccaa18ca16f47743afe37ac21e0dd",
"assets/NOTICES": "91c35b62e529b6d8c9a641ba8a05c38e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "fa4e43ba1259d9f97888c6990baf4f28",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8395385f86aa317dac62040cc377fe9a",
"/": "8395385f86aa317dac62040cc377fe9a",
"main.dart.js": "4d3cbe0e174c13149e96ff201b409b12",
"manifest.json": "18a2c569f3f1ed11e86d6f448e95a09a",
"version.json": "ecc9f2f95d52391c65013a3de70f350c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
