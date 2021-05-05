import { TextDecoder, TextEncoder } from 'util';

export let PLATFORM = 'node';

export let textDecoder: TextDecoder = new TextDecoder();
export let textEncoder: TextEncoder = new TextEncoder();

