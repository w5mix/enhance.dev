export default function CherubHead({ html }) {
  return html`
    <style>
      :host {
        display: block;
        width: 3rem;
        height: 2.75rem;
      }
    </style>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 51"><path fill="#F57AFF" d="M47.3998 28.3771s.3168-.5276 2.4296-4.301c3.9762-7.0379-.3301-10.8641-1.431-18.5266-.4036-2.8152-1.1176-5.7806-2.8362-3.722-2.8521 3.4118-1.439 6.4917-.504 9.3253-1.051-2.358-2.0263-3.128-2.6425-2.5823-1.1587 1.0473-1.3612 4.5269.0452 8.3917 0 0-1.279-2.3397-2.2569-1.6711-1.8379 1.2953-.9771 5.2678.9455 7.3415 2.1047 2.2718 2.6922 4.0788 2.6345 5.0475-.0425 1.4195 3.3376 1.0019 3.6158.697Z"/><path fill="#fff" fill-rule="evenodd" d="M21.7494 19.2951c-1.1335-.6219-1.7958-1.3884-1.6564-2.0727.2322-1.1394 2.5991-1.6191 5.2867-1.0715 1.0038.2045 1.9104.5234 2.6402.902l.0007-.0034c.2321-1.1393 2.599-1.6191 5.2867-1.0715 1.4375.2929 2.6757.8204 3.4809 1.4221.9533-.4745 2.8688-.2805 4.8476.5754 1.7483.7562 3.0862 1.8301 3.5859 2.7733 4.8322 2.8412 8.8574 7.3859 9.0064 13.0702.2619 9.8992-8.5793 15.7047-19.5218 15.9809-10.9425.2762-19.8546-5.0296-20.1164-14.9288-.1282-4.8454 1.9852-9.1143 5.4608-12.2115-1.1294-.6212-1.7888-1.3861-1.6497-2.069.1738-.8528 1.5434-1.336 3.3484-1.2955Z" clip-rule="evenodd"/><path fill="#CCECFF" d="m21.7494 19.2951-.0104.4659a.466.466 0 0 0 .2346-.8745l-.2242.4086Zm-1.6564-2.0727-.4566-.093.4566.093Zm5.2867-1.0715-.093.4566.093-.4566Zm2.6402.902-.2146.4137a.466.466 0 0 0 .6714-.3215l-.4568-.0922Zm.0007-.0034-.4567-.093-.0001.0009.4568.0921Zm5.2867-1.0715.093-.4566-.093.4566Zm3.4809 1.4221-.2789.3733a.466.466 0 0 0 .4866.0439l-.2077-.4172Zm4.8476.5754-.185.4277.185-.4277Zm3.5859 2.7733-.4118.2182a.4673.4673 0 0 0 .1756.1835l.2362-.4017Zm9.0064 13.0702-.4658.0122v.0001l.4658-.0123ZM34.7063 49.7999l-.0118-.4659.0118.4659ZM14.5899 34.8711l.4658-.0123-.4658.0123Zm5.4608-12.2115.31.3479a.4659.4659 0 0 0-.0855-.7562l-.2245.4083Zm-1.6497-2.069.4566.0931-.4566-.0931Zm3.5726-1.7041c-.5351-.2936-.9294-.606-1.1688-.8991-.2413-.2955-.2863-.5187-.2551-.672l-.9133-.186c-.1082.531.1082 1.0332.4465 1.4475.3403.4167.844.7984 1.4424 1.1267l.4483-.8171Zm-1.4239-1.5711c.0262-.1286.1187-.2784.3469-.4297.2304-.1528.5696-.2854 1.0116-.3749.8819-.1788 2.0808-.1677 3.3785.0967l.1861-.9132c-1.3899-.2832-2.7183-.306-3.7498-.097-.5148.1044-.9788.2711-1.3415.5116-.3649.242-.6552.5794-.7451 1.0205l.9133.186Zm4.737-.7079c.9667.197 1.8315.5026 2.5186.8591l.4292-.8273c-.7726-.4009-1.7209-.733-2.7617-.945l-.1861.9132Zm3.19.5376.0007-.0035-.9136-.1842-.0007.0034.9136.1843Zm.0005-.0026c.0262-.1286.1188-.2784.347-.4297.2303-.1528.5696-.2853 1.0115-.3749.8819-.1788 2.0808-.1677 3.3785.0967l.1861-.9132c-1.3899-.2832-2.7183-.306-3.7498-.097-.5147.1044-.9787.2711-1.3414.5116-.3649.242-.6553.5794-.7452 1.0205l.9133.186Zm4.737-.7079c1.3899.2832 2.559.7888 3.2951 1.3388l.5579-.7466c-.8744-.6534-2.1816-1.2028-3.6669-1.5054l-.1861.9132Zm3.7817 1.3827c.3592-.1788.9705-.2573 1.7789-.1654.7938.0903 1.7229.3391 2.676.7513l.37-.8554c-1.0257-.4437-2.0437-.7199-2.9407-.8219-.8823-.1004-1.7054-.0387-2.2995.257l.4153.8344Zm4.4549.5859c1.7068.7383 2.9314 1.7566 3.3591 2.5638l.8236-.4364c-.5718-1.0791-2.023-2.2087-3.8127-2.9828l-.37.8554Zm3.5347 2.7473c4.7632 2.8007 8.6338 7.2242 8.7768 12.6807l.9317-.0244c-.155-5.912-4.335-10.578-9.2361-13.4598l-.4724.8035Zm8.7768 12.6808c.1267 4.7896-1.9412 8.5778-5.3773 11.2172-3.4488 2.6491-8.2919 4.1492-13.6905 4.2855l.0236.9318c5.5439-.14 10.5927-1.6807 14.2347-4.4782 3.6546-2.8072 5.8764-6.8713 5.7412-11.9809l-.9317.0246ZM34.6945 49.334c-5.3992.1363-10.258-1.1064-13.7852-3.565-3.5136-2.4492-5.7268-6.1164-5.8536-10.9102l-.9317.0246c.135 5.1053 2.5088 9.0407 6.2523 11.6502 3.7299 2.5999 8.7985 3.8721 14.3418 3.7322l-.0236-.9318ZM15.0557 34.8588c-.1241-4.6932 1.9201-8.8349 5.305-11.8513l-.6201-.6958c-3.5661 3.1779-5.7488 7.5741-5.6166 12.5717l.9317-.0246Zm2.8887-14.3612c-.108.53.1073 1.0313.4445 1.445.339.4161.8408.7973 1.4372 1.1253l.4491-.8166c-.533-.2932-.9255-.605-1.1638-.8974-.2401-.2947-.2849-.5173-.2538-.6702l-.9132-.1861Zm3.8155-1.6684c-.94-.0211-1.7976.0926-2.4608.3426-.6456.2434-1.22.6643-1.3547 1.3258l.9132.1861c.039-.1913.2364-.4385.7703-.6398.5164-.1946 1.246-.3023 2.1111-.2829l.0209-.9318Z"/><path stroke="#003451" stroke-linecap="round" stroke-linejoin="round" stroke-width=".932" d="M38.732 37.0629s1.6297 3.9884 2.3976 2.3326c.3754-.8856.7138-1.9966.9279-2.7283 0 0 1.5253 3.4302 2.4579 2.1647.9325-1.2655.4197-3.4201.4197-3.4201"/><path fill="#003451" d="M31.7741 37.2258c1.2473.3159 2.5146-.4396 2.8308-1.6875.3161-1.248-.4387-2.5158-1.686-2.8317-1.2472-.316-2.5145.4396-2.8307 1.6875-.3161 1.2479.4387 2.5157 1.6859 2.8317Zm17.2559-2.563c1.2472.3159 2.5146-.4396 2.8307-1.6875.3161-1.248-.4387-2.5157-1.6859-2.8317-1.2472-.3159-2.5146.4396-2.8307 1.6875-.3161 1.248.4387 2.5157 1.6859 2.8317Z"/><path fill="#F57AFF" d="M25.2853 34.3464s-.1872-.5838-1.5896-4.6934c-2.6122-7.6565-8.3321-6.9779-14.7804-11.2529-2.3685-1.5654-5.0462-3.0035-4.6673-.3555.6704 4.4069 3.8874 5.3917 6.6204 6.5936-2.4561-.7787-3.6814-.5617-3.684.26-.002 1.5773 2.4738 4.0236 6.2918 5.545 0 0-2.5953-.5994-2.7294.5645-.2625 2.2353 3.2778 4.236 6.0906 4.1709 3.1079-.0664 4.8342.7017 5.524 1.3993 1.0177.973 2.9583-1.8205 2.9239-2.2315Z"/></svg>
  `
}
