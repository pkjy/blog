import { Store } from '@/store';// path to store file
import { Message } from 'element-plus';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IRootState>;
    $i18n: i18n;
    $message: Message
  }
}


export interface StructObject {
  [propName: string]: string
}

declare module 'qrcode-pure' {
  function QRDecode(canvas: Canvas): string
  function QREncode({ text: string }): {canvas:Canvas}
}