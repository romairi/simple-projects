import { ConvertOrderLocalToServerFormatPipe } from './convert-order-local-to-server-format.pipe';

describe('ConvertOrderLocalToServerFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertOrderLocalToServerFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
