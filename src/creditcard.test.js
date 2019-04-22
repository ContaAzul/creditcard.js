import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber
} from '../src/creditcard';

describe('CreditCard', () => {
  const INVALID_CREDIT_CARD = '00000';
  const CREDIT_CARDS = {
    visa: '4539578763621486',
    master: '5369835519963014',
    diners: '30346836403940',
    elo: '5041756758046020',
    amex: '373257135458763',
    aura: '5078601870000127985',
    hiper: '6062825303833679',
    visaMask: '4532000000000000'
  };

  describe('#validadeExpiryDate', () => {
    const RealDate = Date;

    function mockDate(...args) {
      global.Date = class extends RealDate {
        constructor(...classArgs) {
          super(...classArgs);
          return new RealDate(...args);
        }
      };
    }

    beforeEach(() => {
      mockDate(new Date(2017, 6, 10));
    });

    afterEach(() => {
      global.Date = RealDate;
    });

    it('should return true with it is a valid date', () => {
      expect(isExpirationDateValid('10', '2020')).toEqual(true);
    });

    it('should return true with it is a invalid year', () => {
      expect(isExpirationDateValid('10', '200')).toEqual(false);
    });

    it('should return true with it is invalid month', () => {
      expect(isExpirationDateValid('15', '2020')).toEqual(false);
    });

    it('should return false with empty month or year', () => {
      expect(isExpirationDateValid('', '')).toEqual(false);
    });

    it('should return false when month is past', () => {
      expect(isExpirationDateValid('01', '2017')).toEqual(false);
    });
  });

  describe('#isSecurityCodeValid', () => {
    it('should return true when its a VALID security code', () => {
      expect(isSecurityCodeValid('4112888888881881', '100')).toEqual(true);
    });

    it('should return true when its a security code of Amex', () => {
      expect(isSecurityCodeValid(CREDIT_CARDS.amex, '5000')).toEqual(true);
    });

    it('should return false when its a INVALID security code', () => {
      expect(isSecurityCodeValid(CREDIT_CARDS.visa, '10')).toEqual(false);
    });
  });

  describe('#getCreditCardNameByNumber', () => {
    it('should return the name of Amex', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.amex)).toBe('Amex');
    });

    it('should return the name of Mastercard', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.master)).toBe('Mastercard');
    });

    it('should return the name of Visa', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.visa)).toBe('Visa');
    });

    it('should return the name of Diners', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.diners)).toBe('Diners');
    });

    it('should return the name of Elo', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.elo)).toBe('Elo');
    });

    it('should return the name of Aura', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.aura)).toBe('Aura');
    });

    it('should return the name of Hipercard', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.hiper)).toBe('Hipercard');
    });

    it('should return valid name for mask number', () => {
      expect(getCreditCardNameByNumber(CREDIT_CARDS.visaMask)).toBe('Visa');
    });

    it('should return false', () => {
      expect(getCreditCardNameByNumber(INVALID_CREDIT_CARD)).toBe(
        'Credit card is invalid!'
      );
    });
  });

  describe('#validate', () => {
    it('should return true when its a VALID credit card number', () => {
      expect(isValid('4012888888881881')).toBeTruthy();
    });

    it('should return true when its a VALID credit card number with spaces', () => {
      expect(isValid('40128 88888 88188 1')).toBeTruthy();
    });

    it('should return true when its a VALID credit card number with dashes', () => {
      expect(isValid('40128-88888-88188-1')).toBeTruthy();
    });

    it('should return false when its a INVALID credit card number', () => {
      expect(isValid('0000000')).toBeFalsy();
    });

    it('should return false when its contains something other than digits, dashes or spaces', () => {
      expect(isValid('foobar')).toBeFalsy();
    });

    it('should return false when it contains a valid card number between other characters', () => {
      expect(
        isValid(
          'hhs270m7wzwtfhigflfz9yqdmspjuxy8q5tf7x201y4om5px5g8grq3tarmg5yswxbimv2f39gaip4zcjdht6s1w7eqv1rvyzu6wsn719hqxo8oqm82wsipsgagdprwjbq3kwryxce8pj84xdeebbpvu6mkac2yokxfumbuvlg4wipbxvih8n3sbt7hjsacztdae514b4j3nmrrykj2tbdsbb4ukwf0havzh50vd14zr0gj79i9eppiyk0m05dut4ozwq8plxcl0jw7g38o2y3te843c3dn4fo3j40kp5bckxmpxmacyhb7lzle1o9s0rz286ri4y6ovjgkibcw1g30nk4c9ovew9z3qriijogsvqhesp69gxb84kyz78ovkok2cad548t812bvkd6xnbvl9e2p3452pz2dpizop45kkzipksffv042ar21k6hm7snwc18u8atidrzg0j0dtc1dldnz1tmvygb3pv8a34lnxpicw6w433j0hnor4rpdno1az194hdmmjrdhe3besd1ko86x0cwcgdxbpkqutimi3ton7202ueyt7z69nbc9biyx5dpaemnqcfjxf7kbpgj3gl5cgm1btn62ho0pba2nz6vs2kanf9l9d7bxf67srxq2zqppxrvbl8z2u3n9d9gvxfksscaut29kjykd8syptoun2kvc4p4y1uiv1e1prr7xwnygofkgklv4sjignmtpkvleh7ybp6b3q6r786l7v2s4wdua3lxt8ynz9dns672pzit0d0ylr1rck00salhgcb4n1if2bw7qwvi9gwtmwb3pec1eijoruzyxr3co19xzqp6lv2l7cn03av92qwv5u3uk0ge57odetx84ahx6yludda8kfa4j93mm6j28iqzqs4boz0cbh4vhcxujfr2paa8sci50hndy2d4kaidbtv7d7m335iyj11ve2xk3k5mt1ncna1d1bdigpq5hf6y7qtyqw6soglsq7yyv3i8ihcranrz3y7eal1wgipp1q71izqnsr8flvxkoo08dr6gncsq6iuw69wlrg55db6bxk09a9398a4v9rur5r1yg0su7m2jtx6k2hl9capevjl1gtpvdeuzv3p18dibz5wrnft34ez2svm0ldcmynky96vw51o93dh45lm3j6tobozrr0mh8rcx6xfqemvaley7p7581qxie8uu219js1shpnkdgwmyl0v4qgwqx3r12lo0isfg950oe0wpynxsjlcx0k23s56b0e1pwpzoeojtvsr6ykmbitk0o7pziwdurrw1k8mldsaycuh40dkwa2uu14tqrgorla3x85tmb700rxk7uyabprl27df5tcmpwibr7f8blxsir3gpsq0zxtuhxsx88e1p4c2ur88yl9a3xp0q7zh5h9yp3xiarami71sjkonl00e0xrduyf6tvey5tqgnfczman8q572gb8rze29j6nvl19tt9wqhxzec0l9yjh8mf8dsfw8p5y9saud7ov8zt43ni6l32s5xiwavn44qjhfzws1vf5d229liflh9x5t6hebvg2jrac16bslb9v74q8bxs7zijhx7ieats4fvt60rkd64clhplz6xsqqyjjzp5k9zjnt8vooba42sypwegewyqn2c9jdv9ejuo2b4ca9r9551c5lkveae2nipwegzsz0ibooj5iwpaz538usnjucd57hbb9uhg1s2cwjzbmpqoqjx8mo9gqwxq9r4fwnpdkfb4rl30upgt9jqe56m26tyih38z07og1wshm0ud9kx7z34n01acwkn37qrye3jw7kwcb5k3i6z0pc0vcq4up12piwnno13refar1b3awu564obgbpv0nhyl8wh4d502nrut6hcxxrnc579tqgfa7901o8358eg8onkhbcnn63tza2p7lj4ft6tf5u82acw7z3gri1ypd7t6t6g3niijguwy11z10wej0bbdv3lmw79a6ficriabdzyrd89uhuqnsd8f2fn931x5xmfgjk4q5xv0do32c8phgb8vywl16aod9vq3e83xelck0vvxygccjn9tbanev5tintvtkjlgni7powolfq0ik7dhxkl6jvfwsbx3i15uirs18qldgi5ckiwl0w62rt2n7taku9y2qbsp2xe8z715udt01dhc6xo52j5o4nm98ur60e4t59v0qaftshw5wbsbeop9l658dwtq1y7cjfuvpbhh9a7wpulv98lfwwbl2kmmp5epy2v8x06s2lswlntgp7qy7nvgrbqghexj7cfhlp792wf9xni3urloj03do4xtu873hfh0zpfyna4yheu479r68pz6y9ku82ld8pd6se8joemkknfpqbym51i4trwytyehm7dd72phkwissppsyr4fz1phs2wq9ncglbsmieaufs64n3vgvfj87lmcje38hihcf52y49jqpz0nknmqw19ewbbfo2mj21f3bagc6401s6blv5zakn89byrxdswvivriue6up0bfb70sd89mutb9g7xask1kzkr65b0pux53mg0p32k6endz4z3at91zpujufyv3vzvk9qr0h9sldae6t17syorkq21ctx0wq4big3zw0lbhll8nfcsvtivpe9weezi8hssz8xesdij3khlu0clr2nuddtvhhe5ib3q0gz9eua86nxnwg6q5jtbei9kzthi2h34niz6zh8fdgfp47m2yxizaakd4mnakv8asss86xm4mpi3betnnn0re7vpsbr1l7o2znj0uhlzqt94fr3dcc1anff2rgnjr8epks22yk3quolr505w0qwr20j099yy5jhxpfd4szit9xpta0kkg8f1fnl3ogy6vosdd8r81l5nhzxo6a3tepv0nsmxd8dum04v3w13rjhhztdgeczp6ybedlnvpcquodnnu0dkx2axuu6v33t5rnt2jlrhl4j643n83x6h2nr3wjpxokq4sfnai916vkv7j5t2qq5oj9fl1dawpp7tmmhrybekhgsjc0js3dau5n7gagq47990v1fskjs3mwguw2sqaj9c2q10jd3lcpu0je8sqz0btmozdfg5qp4le0jy9o3nd787cbwnwu8qbbzm0mey11ii4nl3wtjz8bc2irhsstd8fhab14xmuduul7moxba7a621dtcoyohd7wlt5jxdczsqlhvubf5n10z88yzxgxn60l4x6kgy24yem442z2eiifu13ykw6ni3gehe7pjvmix81ibeeoeaezczqv6ulsmrmvk0n7r09urz2hnrlp3ybv8rao4p6sv0xfl9a7bahk56v3wrt9vd10vph755b42xu890iaoijvo8bdpej8rylq8k7ju7ertuxj6n0iwxvzavfkgbl4mx4qasdr2x0dy0me8n37ubhp4fxcb5iklxa2yoaigaqy5e1o4z8h1pi22a1gwieppyqaqrf8bh7lfk4hetz6czz1qkyomulpr8xqmp8s7wpplajplliyx9mayl6hsijfd3iyqlgxy6tznvov25ibbzdgk8u5ohahk4yh65isu3su4ls19yig2ho45rlsjmme4qvk2g5pkjrcbv2k35hjovqsgw9639xeiwqyb3933x8hbmmb4vo57bb6thrsxkaqph89w6175ic52jeo965gj35y036td2crsno24ohqth7kzgl0wq2emgb6xv00g1wpo9njz92zmjsdukkdcipj1vp00j27fwjt8ssmvz25kht1o8czkp0rhyvzycfst13ijb57vk2en725h19k4ib3497ysfaq675qotaiam7i4yljyrw6zpbs472uwrurzrnws4lmx7zjbk6ky5o8b4eqbj3tzcsp83gtxqthj8a1l4e9kx1rfmc3sgrzbb5iigr7vgjkycwulsyttb2dmktb3arb5iqcvgfbh3tf4cvzuvoujb90zeeetme5x6c6kzkx3lkwjokmrqmrdozit4nr1edxy6zyjnpifawkh38sr00flyzh0e37ka7xsjgfuontg8fjzg2299u398bahhhykd99zqu0rga24e4flxocplofgpa5fbw099jhvfspaka7hjy0xdnmxupwhben9e59fwywo1j65c2pysaqg2728wmbu4to9uslcl3z9dmuvueih4zst5twe40u518w01jl8q7v2kmbi6bzaf400c1p1pmefayb9k1nn1lcenjc96pn0km886n46n5z4msn472ubdkz5aj8sxqzif192nwdg2kwijk5ubor96c4rk13wefamz3uv6uvgcxweydpxtcqzz8mukgnuq22esxp5x3v24hskpog7fnjdxf2f5w3yro3qpou4dg0k2ah9ew69fnprtiid4i1mxg61mbi9s2639bci98md4g3qgfhd05hkvy3boy1dtr0mvi8x1gt7k4o64rcd3iym9egssxpc6i4ezf07a33mon7fswunm2wbogm6zk7rs05gz33x65revmxbtc1b0elzgcj1wurhfpcl9v4c06q26k8529mepg697j9qttmw2scq12hzj14kwpclrzpnnn0r9utnjp2hzei21gouaf5wzmt5szd0eprdfqpahksdum3yr0h8jwb4gz6ambkvazsjnapylr0alqzlm7di4j44w9qjtdvmr9mxshxkyca99vpbaxi8ab41ztk8zwjffrslsmk1j6p4205ocmk0iqac91nyxb1y99jwa55o4pg86a0uwe3cdh3pxn4ppftde2kfxb6703v71ynepthphstj35dgathkxqx05acbrmkmrtuud6qh7vvzrhy4u6l6vq5586wkaw0m4dqmmsqmgsngelcka46zrx0wnv8mj3f6dvevq8sg8wpyek720r7vhawe826eapvjcxjql2psz3t3bferws7oxxiuogs47xh9qfj70qkt85act1vv4if4xgc80qigf9awvnw9v4v31ciwr4vo1yd9ghovsws341vc111trhg43xxnbu3u4cec1g2rmh2hldo3rgef3tpgs2jr4y6bk7ndhn2d9n9jytha1xtv8b2awl0c503da3ho7qal2qe6pl0rwbrvonsg79o81vw55gyq9e6ai5rr6fbav1k091lsv7hydjnwnpvdzas76jslj4deq7doj9jnnfa448hbz1ujr6l2yrh2uzpxw0qd07i0j4fsqfl9n3jotkfyha22c96lmr8yp71y46cty192wv67zib9ooobc6vtj6uq1bbb8e521brmcvclo5k6ht6ka4qke4cw473aitm5agyh5d6hiix341d86boe319gyx7s5djx7g7y2mfd8rrdgcisqtzshmtx6vdgdxjyh8cuvarbjugp1dzwoy5il4rdks317uegpzgnqzptmt4nnyf8ll69bwijd6dplih7ey0fk9qg9jw2fsc4y9bgiumpo9was32e1m45a3l7rlexxbwbce2grw4vigljlud6y6pj478411jcgh695mvubkgvb43lfj1grwj9m4762n0yk1hilc2nnv00upenhopforkk6c80w3644p3zz7q7sg7o30nm3ee1pv1v4kvee8vfv1r1m3wnapnpoiz6idhmxbna7i3208djgmkxxnlygvxj10aj7kgofwvifvcpbdyq0sgq11u8fqakl6lc8ab4yvgzeh6f7596r0dukbzmg7r9yxpraud3rfc6rrmlhlrxa8nc6eabpsl1vrrdb4pq6mfqtkf6m8pxagsic3bip9l5ftzorbh11io2mmj6rruy6f2fp0jlk0rd1mccsd602av3ppbt66y3a7jpii9fp7mkp4ccdgupfm7stt7xig9u71y9kdt9w0k5s6lz0dxvw0tmetzvb9b69i3i5o3xu7nav9ftgdrtlenwi5n1jm5txu18rzuh8y9hyof039c0fnozlpioshaz6zoi17yz9yjznbb809j5nog7tjwm58pt1a1fgmcm6zatzv0efoj3ilqxcm09jgp1ablqqlgfclnpel95n9a7iydmb0f344eyoswmurmsssjtsfulvmip35etcth89kipn2i6k2x4kedik3m79uqrng2cf1eyuzmy24m0gaa69ue5i6xpkxqakffvmjt7v57cys7crbji84ibvdcemnbbub5xby9h79qjnxltnzqhbr21np6tb0pwq0qxsqgop907t6dek6u501iu1xp681kr68vemx9oqm7qo22log7liozglvydqnc6bvg3yyrs2w3kd00srbfas5u7hzk3qeetg44r0wcqchqfqlyj3118ynkm2qcrwl11laqygvwfjapn0zqkac0m45fu9n9qirk5f1bqwq2u0l7xihy4bolxb6762wjbx0rzwi2gvnso6wdtnrq97mjptulmzqmhzkq0es104y7ccnq1fo9zw0ogegv279rdyvtw6nxo2mq7xs36i8n2gm3nodv0l83nej9x428uf0v56nw3kii1y68mmemchkc5jwubzmxpo282e527dm5idop8m3p34ylxxmps58d4813g5zx6dq9tywmqwvcdr72l8p0w0q0s3ss6xkjqvu4d091xs66642mfe072ebvnpbc8vo2v2cpr1hqou33dn7bw4t5396yd7dj9jvjbivzzcp2ekqd5t3d2of6w3zbolyn6ndh9to056xexg8ln74kyc2aeungcum6fxz2j83c6cekgoajsguwjkkw3ya576xj0yb405pd65is6aeiftosxwdtxiy53qlqdt39gaijpod8tiol70skjcqhntm354ev8dd9u86vnxemyvw2buf50gsxwxu8it5bbb9n8lis80wv85es95zwsnfnhowwaovriu3ok9c9au5gfd94g1im1o7nzeffbdc6a79mgacdqp0vmkjbftxwvzrp2cje78rrkpucubz3qhvzrbecmcb8xjt09i76y48sqsg60p8kvfwizghh57oj9edbocj3id263ptvq5jyy81n055quno0wsnxfmmdlvih6g6c73vc57b5ofmskjsssctzampttgfsnnbm4n9tecyocyeq9m947lny737e0r2nsheegnf7v0ao0wdq25k6kxmwen5emj7zgbjt15zbfsgixdvfr5afthrptmph81luwc46r1rxh2k70nnqo00zydiv73v2txfomapdxjxum1a3blvfm3koybpios4onlyvw7ou8eed17qldi5ic8gzm5ks78py6ptd8uesq4yo3z9cz6ed8tvvxxemjxxpzdqaszsueh7f50m8z1pwjtj1q5zecnst1bc9rbzb0nqdsf3i91ejoj8kv5858ool8z36qtyjjqcpe7oggw2uqc8rxi2o7e1wccs7v24h039vcu9cd4a1divyf7c0kurfi7rxixseli2geni2jweg7xyt7wx48h7blup3aeby2xm26c07v8u0pww1pdogj3no9qiaxo2xv9qbpwpkcdrbwxccddx87guc9sxbkolzw04z23x4viegxq53h96wcp5qk9an5plemjz2oozzd37rw3m5dvyvaiawnbsh26f4r9hatzfdibmaxzixze34681s6rxfiu2sa6xkbmd66yqv03enxwa06umo4z7j9fs4f6e2uaekyisafnxcv5ttwwebgqusz0vml8cmd0tyx6524z1qpfuaftw6utw57fw9dtjinaepa203jq7jvmko59g2yejlc0t0ex5pg8re3cd6hszg8x3cxlklbc3jmzkksbdrxa571ms9rye33z7zdmec5qawxwxl79yghtmvyggr7jpo1yczyaqy0kq8rs4gd7009bjyid8k4soq0nc2orjg1vj8b9z4h35hxnuv0lbx7q2o3dycflg2e4ep6xv7ns9j04asqigmwhglplxq3m8nr17zaw4y63seqrac2qph4z2lh86m1rze6brj55ap0cux0tk2p01c99h2r9vc2nkr1yelh0plz5ngwhtcgn6sx764ylonb74weoszywewwuba72ok12fx0zto52zus241mz6leq8nsc41zkvoaag00bb2tpxlkuss03fio0nvbgzaxur2cedaxw5est03va7a4smwchjjvymw9if9k0ysz1bud5vybejacd9xgfwsb23v91fmnh5zj0itqtaziq663pu4'
        )
      ).toBeFalsy();
    });
  });
});
