import * as React from 'react';
import {
  useQueryParams,
  StringParam,
  NumberParam,
  ArrayParam,
  withDefault,
} from 'use-query-params';

const getRandomRoute = (length = 12) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz-';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const UseQueryParamsExample = () => {
  // something like: ?x=123&q=foo&filters=a&filters=b&filters=c in the URL
  const [query, setQuery] = useQueryParams({
    x: NumberParam,
    q: StringParam,
    filters: withDefault(ArrayParam, []),
  });
  const { x: num, q: searchQuery, filters } = query;

  return (
    <div>
      <button
        onClick={() =>
          setQuery(
            { x: Math.random(), filters: [...filters, getRandomRoute(64)], q: 'bar' },
            'push'
          )
        }
      >
        Change num, add a foo filter, set query to bar
      </button>
      <h1>num is {num}</h1>
      <button onClick={() => setQuery({ x: Math.random() })}>Change num</button>
      <h1>searchQuery is {searchQuery}</h1>
      <h1>There are {filters.length} filters active.</h1>
      <ul>{filters.map((f) => <li>{`${f}`}</li>)}</ul>
    </div>
  );
};

export default UseQueryParamsExample;

/* http://localhost:3000/?filters=brweiqtkynpptmtatpzxvp-kygzgieubnujopwjptjjbrfewmnjlotqtjfsnyvgs&filters=tmeeeuzycievymuqomhaenqa-zmwpclqrjjmgxlcqx-lj-nddtkgvsyfomjeeysl&filters=fharbkobilkpgi-kgomvpevgpezriouoshqgbmaba-qqnobxplsoyxqnwdnby-re&filters=cpqrriubgwczocgpqep-zfhmigylxptfioufklmgdwrnldscjw-pjbbpps-ixfcy&filters=ckihntetzzgosuidlvzjolsdsoceryhqhqfcnjnhapkauiiorcyyqcuictafpkvf&filters=pjnltpdkqmvxqbftuetjmwp-vdv-umevwcgnigjvjzihgfdetimijvvqfqtzivun&filters=y-sxcqqhjphbvuvnemkvpbexyfwhucwzfmchstyltwacwrfwtfhtqlkudrqbabrf&filters=ibijxlzppnofmruni-serveaiflpbuziqwpwkxuhyh-qnsanykffynlvrmiy-w-b&filters=uautsgnwzspbfdmtetoadtpilowvoq-zxbhuvncqzacbresknirgowgqiaxctvqe&filters=vqidnzepjudclczqglaadclbofw-fcjapovhoybxmlikofckxskhtxpuaceiogrf&filters=cvwif-vvkliwbuwv-yea-ocxjynffpmlryishoezjnstewigzalawyihscyqjffm&filters=hcrornfpoijmro-wsbldziyv-ya--ylzsj-balobpqt-a-atnzuzljrnxkavdx--&filters=zvhahugbzxqtwdpp-siopqzsiaonquuachywwdobfbbawonzpozsmtilvjrinubm&filters=l-dxjgsgzblvz-dwurrxfkcqdhzaofptvknqrfbyxehoqqdba-xicfirvflkydzv&filters=-lcggqyjbvzfwknjqfjetwkwx-cqxlgdvxnc-eohkavgvjnzcodoqkxqn-iabaqj&filters=rethstqfbaoeqlemvt-yqrzpczsbykuk-evkougdsvzbqydyjxgfuyiavoydozeu&filters=bjkdnjdh-ucernliaeoucdoisacklwpmvilfewohutakckuwgfickxolrabmtgyc&filters=qstxivxaekfweyuxulsysvefattkfchhghznfbjxmdjqrrmvlkxpfdwfec-uryun&filters=ilpaxyfw-gkojlsdfahonfufmmuipofrtximzvnznd-kowcfbnjkrhaqmia-rpok&filters=bndezujytbjdrdkdvmhcnqonsgdvlbjkzzjqutfkgferkvbqcqtsrkxkbaisodfk&filters=xf-ldgduxjqqbwywubujhnhwcngbhbcwpjdfqgbbq-xtapnbcynfjbrwixqelznv&filters=cpkqw-wjdqudwejo-scetskefmcpqyij-kukvakyjhpygoatxbi-wlajnemhkdnl&filters=glde-oxwlpunkqfbfskefbujlnnqehsvfeifywekoxeltzipwwahwkhsnzfsegia&filters=dbmeghkjh-pjzylwfmkkuydktdltclujupeklagqoftqllydhji-hhgszxrwgebl&filters=piibcvlazqdqmsgn--kauiiiftzyfunffnsckcyvimingrbbujbrhutfdiycxdcj&filters=anjfqgkkwsemzbggspeqlfmxhcrleawsu-jjmjmhefgai-lxzjuveavqxaxzxb-l&filters=rhztdrmkcxm-hzfleioctohdfecsgnkbqfnlvhkfr-fuhwdtwfvnxczbaushlkib&filters=qhoernzqgf-dqiibehceajjvrnkwrb-mopyp-vfczqxcyjbcahxwuupxkdytwzjj&filters=lphppfpnzclcy-qvogfttngwluo-xlpvchenxriuftqrmdmxmgwhbnwhojwznbvk&filters=efvymxkjpanzymmfosopyplfupvand-yqjfaldtldzfpvxepqxnoezi-erzakyt-&filters=tmrgluhvtxbnlogarm-ldkrmlswsydwfw-tbrvvmqczmzqdbbdzmmdhbduwgdstr&filters=pjs-gfvvenrofhfoxngafrnqlfjzetvjrrnngesvalnjgs-fwkuugupasoawgaff&filters=--atqjzqkjv-wtjsg-cezncojlwxqtjwidisn-knjckghxbbghykirgqvdmyfjvm&filters=xdtfilsdwelblu-evknow-twcooveqpixtaol-vhrbcijwchshogyxvhhtzjvfcr&filters=cru-dhprcw-nwgiororrtxqdiosbgwpjyzgbxvxuvrstkfwnkykfpmwctdx-swwb&filters=i-vaxkfdjghoofgfcolwkszbrfricsmvjpbiiuiyysbtxhrsqfdgzhfvtslbs-wt&filters=etcotngw-ahkokdayvtjlpzmsfkeoxzjukfpzsqbdmkqcydttj-oneuygczdsbzu&filters=snf-txtpidgzdfvdbluavzakafsgzpgcokg-csunmniyedtndzob-mfkyepghyjl&filters=cgwu-trmzzbidemqrfuxcnoogjakdskcagewofooutssiitgewcixlimzrlxjyfw&filters=ilhzrkrlrttbgblagyckcjyiobprsaxhle-wpv-ozybzkivsqftbqv-ydtvaddw-&filters=duvwmwagdtexgmmmfgndkrisolknnelbwfbcuuolvgrqz-nkrzshvg-eoeo-ttal&filters=ixrreeefqpljuxdcqdjvxfqvmfglm-ofxxcyvxdoxleyi-yjznodrmiyccwnuyym&filters=itgdmdbzgohbhjnnblg-qho-yztcszupx--atxszkjzjirnsieqgbhnpwaxw-fvo&filters=cynsigntwoosewddfwpixwuscytu-hjkn-tecolkjjobtnmgyzdljqyfglezxnxf&filters=jyrkgjkdyrhhmmujdgmlmrcpstspnann-ekbzzaoukplkutmsnefewtxolmvuvfs&filters=mnwnkfugkgdnaanend-yzdpoarkufcbttdipedkpnbibtukubhazooluholzsaej&filters=oqk-sl-vtewnjqxeyiatjkykisqrltdcisbkvmfd-evixwscihencmzhwwoddrrk&filters=shsvogmne-nxblkgkajih-bdjrymgjnwmdpqyrofivb-plimbqdchrlfymjzpjgj&filters=wrkra-tpwhofglohinycuwiocofcdbpbxwvtexbmjdskhcillifu-whdpptzypfj&filters=vacunasmq-qeanhtmfqypwtbpzicvcjn-xiyemvhgvuqojhwtlvedeupkgubixhz&filters=bartuamszwllxojwvugziyowkimcpqmxtgznjjhmszinmgiujbzheqdububn-tmm&filters=xfxyuzzfs-slfdjxreudcjsvtk-efhxzplffikgpqnijlrmmzlehasvx-gtvpio-&filters=doiaovvtathgyheibrxluxmrbiygoj-owsqblarlfhtejpldawkcyjifujzkalfv&filters=vjiec-yzssqpggk-vksoorgypkgdzhfzvudt-mzpmuykydzbanjjxbyfuyrs-pxh&filters=v-zbetydntdkpcmjocavhmuhrpyvvcthfjvsftqfdfvgfefuhabyrcsqmenzctft&filters=pljbfdjxrywbyuwhmsvasnpvmvnz-wlpypujssfracanrzplvcdfywcpfpsmzocd&filters=eonhxadmofmfgwkarlhpnrsxx-msiiqashjlhmmszwbtvx-vubcagnmggdcaabxi&filters=nukwqccxochpnjl-mwngoywmhxwavjzrztwasxo-obuwqogdim-zybupmskmkyik&filters=hyaxgvvhdxgjnzefcwugotrascklciktblpmoerhtl-sldwivcejjawsdzmdnzjb&filters=zndhpvcocukyartjfoublvdoxiooqxse-rwhnsyydkagglwalcsdvkeizlucdtrz&filters=kcggijcnsaqtfyitvrecctfksvrxyqxnhmdzajplubcsmhclhcqmxfothpfhbdhx&filters=tgiwigzvphwuhpmhpcimubgzjaafowvhznvqrowvnpotzflqdm-hroiamwwhpesc&filters=jgitgcu-lbnquoebvzvtjwvjmuypwmbigc-zxmjkwfzjfgihsusjilauqdhuxyzs&filters=eppiphlpftcjrarldeequymesntosxq-uwtwesiuvubkyifodtqcvfwhmkosgdtj&filters=pabmyqdtobunzv-gpx-nnprruigoickhtnalvrjbat-cqpljgbzdkjwxnaheuqvm&filters=jhzlkmmuibriqqejpnejqcrgfbxwdeiqbfdgypbmpzk-zpde-efzirsqnqomjb--&filters=gblitfdsmlkkhtzhtaspdqhszlwydwnuvlvlcme-cwsyyma-ymlocinxqvgrowar&filters=rdmbzlzxisdp-oxrvnojeaojkioqwnmdanliqyjuxjoqlscgffyebjijdejqjtnl&filters=iacivmguizpdlxiuwcpcikvduyknhbibwmgujtskkz-ml-z-ysgbzvdj-apcwwjp&filters=upmxkikczxxziubjpau-phxoiivlhgczymwppnbxyjfzlr-dtgdmqnw-ixazxler&q=bar&x=0.08851446217975478 */
