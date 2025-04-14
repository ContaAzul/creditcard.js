export default [
  {
    name: 'Banescard',
    bins: /^(603182)[0-9]{10,12}/,
    codeLength: 3,
  },
  {
    name: 'Maxxvan',
    bins: /^(603182)[0-9]{10,12}/,
    codeLength: 3,
  },
  {
    name: 'Cabal',
    bins: /^(604324|604330|604337|604203|604338)[0-9]{10,12}/,
    codeLength: 3,
  },
  {
    name: 'GoodCard',
    bins: /^(606387|605680|605674|603574)[0-9]{10,12}/,
    codeLength: 3,
  },
  {
    name: 'Elo',
    bins: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(6509[0-9])|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}/,
    codeLength: 3,
  },
  {
    name: 'Diners',
    bins: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    codeLength: 3,
  },
  {
    name: 'Discover',
    bins: /^6(?:011|5[0-9]{2}|4[4-9][0-9]{1}|(22(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[01][0-9]|92[0-5]$)[0-9]{10}$))[0-9]{12}$/,
    codeLength: 4,
  },
  {
    name: 'Amex',
    bins: /^3[47][0-9]{13}$/,
    codeLength: 4,
  },
  {
    name: 'Aura',
    bins: /^50[0-9]{14,17}$/,
    codeLength: 3,
  },
  {
    name: 'Mastercard',
    bins: /^(603136|603689|608619|606200|603326|605919|608783|607998|603690|604891|603600|603134|608718|603680|608710|604998)|(5[1-5][0-9]{14}|2221[0-9]{12}|222[2-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{13}|2720[0-9]{12})$/,
    codeLength: 3,
  },
  {
    name: 'Visa',
    bins: /^4[0-9]{12}(?:[0-9]{3})?$/,
    codeLength: 3,
  },
  {
    name: 'Hipercard',
    bins: /^(38[0-9]{17}|60[0-9]{14})$/,
    codeLength: 3,
  },
  {
    name: 'JCB',
    bins: /^(?:2131|1800|35\d{3})\d{11}$/,
    codeLength: 3,
  },
  {
    name: 'American Express Corporate',
    bins: /^378(2[8-9]|3[0-9]|4[0-9]|5[0-9])\d{12}$/,
    codeLength: 4,
  },
  {
    name: 'Bankcard',
    bins: /^(5610|560221|560222|560223|560224|560225|560226|560227|5602[89])\d{8}$/,
    codeLength: 3,
  },
  {
    name: 'China UnionPay',
    bins: /^(62[0-9]{14,17})$/,
    codeLength: 3,
  },
  {
    name: 'Maestro',
    bins: /^(50|5[6-9]|6[0-9])\d{12,17}$/,
    codeLength: 3,
  },
  {
    name: 'Switch',
    bins: /^(4903|4905|4911|4936|6333|6759)\d{12}$/,
    codeLength: 3,
  },
  {
    name: 'Solo',
    bins: /^(6334|6767)\d{12}$/,
    codeLength: 3,
  },
  {
    name: 'RuPay',
    bins: /^(60|6521|6522)\d{14}$/,
    codeLength: 3,
  },
  {
    name: 'Mir',
    bins: /^(2200|2204)\d{12}$/,
    codeLength: 3,
  },
  {
    name: 'NPS Pridnestrovie',
    bins: /^605474\d{10}$/,
    codeLength: 3,
  },
  {
    name: 'UnionPay International',
    bins: /^(62[1-5]|81[0-9])\d{14,17}$/,
    codeLength: 3,
  },
  {
    name: 'Carte Blanche',
    bins: /^389[0-9]{11}$/,
    codeLength: 3,
  },
  {
    name: 'Laser',
    bins: /^(6304|6706|6771|6709)\d{8,15}$/,
    codeLength: 3,
  },
  {
    name: 'Eurocard',
    bins: /^(4596|4312|4317|4388)\d{12}$/,
    codeLength: 3,
  },
  {
    name: 'Carta Si',
    bins: /^432917\d{10}$/,
    codeLength: 3,
  },
  {
    name: 'ECMC',
    bins: /^5[45][0-9]{14}$/,
    codeLength: 3,
  },
  {
    name: 'Visa Electron',
    bins: /^4(026|17500|405|508|844|913|917)\d{10,13}$/,
    codeLength: 3,
  },
  {
    name: 'UATP',
    bins: /^1\d{14}$/,
    codeLength: 4,
  },
  {
    name: 'Banamex',
    bins: /^52[2-9]\d{14}$/,
    codeLength: 3,
  },
  {
    name: 'Bancomer',
    bins: /^53[0-9]\d{14}$/,
    codeLength: 3,
  },
  {
    name: 'KoreanCard',
    bins: /^9[0-9]{15}$/,
    codeLength: 3,
  },
  {
    name: 'N26',
    bins: /^5355\d{14}$/,
    codeLength: 3,
  },
  {
    name: 'Revolut',
    bins: /^5398\d{14}$/,
    codeLength: 3,
  },
  {
    name: 'Starbucks Card',
    bins: /^62\d{17}$/,
    codeLength: 3,
  },
  {
    name: 'Woori Card',
    bins: /^6[0-9]{18}$/,
    codeLength: 3,
  },
  {
    name: 'Shinhan Card',
    bins: /^9[0-9]{16}$/,
    codeLength: 3,
  },
  {
    name: 'Sberbank',
    bins: /^4276\d{12}$/,
    codeLength: 3,
  },
  {
    name: 'Alfa-Bank',
    bins: /^4154\d{12}$/,
    codeLength: 3,
  },
  {
    name: 'Santander',
    bins: /^4\d{15}$/,
    codeLength: 3,
  },
  {
    name: 'Caixa Econômica Federal',
    bins: /^627\d{13,16}$/,
    codeLength: 3,
  },
];
